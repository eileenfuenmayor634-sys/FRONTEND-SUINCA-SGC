import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import prisma from '../prisma.js';

// Acceso dinámico para evitar error de inicialización
const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('Missing required env var: JWT_SECRET');
  }
  return secret;
};

const getCookieConfig = () => {
  const COOKIE_NAME = process.env.JWT_COOKIE_NAME || 'suinca_jwt';
  const COOKIE_MAX_AGE_SECONDS = Number(process.env.JWT_COOKIE_MAX_AGE_SECONDS || 8 * 60 * 60);
  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: COOKIE_NAME,
    maxAge: COOKIE_MAX_AGE_SECONDS * 1000,
    options: {
      httpOnly: true,
      secure: isProd,
      sameSite: (isProd ? 'lax' : 'none') as 'lax' | 'none',
      path: '/',
    }
  };
};

export const registrarUsuario = async (req: Request, res: Response) => {
  const { nombre, email, contrasena, rol } = req.body;

  if (!nombre || !email || !contrasena) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  try {
    const usuarioExiste = await prisma.usuarios.findUnique({ where: { email } });
    if (usuarioExiste) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado.' });
    }

    const contrasenaEncriptada = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = await prisma.usuarios.create({
      data: {
        id: crypto.randomUUID(),
        nombre,
        email,
        password_hash: contrasenaEncriptada,
        rol: rol || 'OPERADOR',
        estado: 1,
      },
    });

    return res.status(201).json({
      mensaje: 'Usuario registrado con éxito.',
      usuarioId: nuevoUsuario.id,
    });
  } catch (error) {
    console.error('Error en registro:', error);
    return res.status(500).json({ error: 'Hubo un error interno en el servidor.' });
  }
};

export const loginUsuario = async (req: Request, res: Response) => {
  const { email, contrasena } = req.body;

  if (!email || !contrasena) {
    return res.status(400).json({ error: 'Email y contraseña son obligatorios.' });
  }

  try {
    const usuario = await prisma.usuarios.findUnique({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    if (usuario.estado !== 1) {
      return res.status(403).json({ error: 'Tu cuenta se encuentra desactivada.' });
    }

    const passwordValido = await bcrypt.compare(contrasena, usuario.password_hash);
    if (!passwordValido) {
      return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    const token = jwt.sign(
      { idUsuario: usuario.id, rol: usuario.rol }, 
      getJwtSecret(), 
      { expiresIn: '8h' }
    );

    const { name, maxAge, options } = getCookieConfig();
    res.cookie(name, token, { ...options, maxAge });

    return res.status(200).json({
      mensaje: 'Login exitoso!',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    return res.status(500).json({ error: 'Hubo un error interno en el servidor.' });
  }
};

export const logout = async (req: Request, res: Response) => {
  const { name, options } = getCookieConfig();
  res.clearCookie(name, options);
  return res.status(200).json({ mensaje: 'Sesión cerrada.' });
};

export const recuperarContrasena = async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'El campo email es obligatorio.' });
  }

  try {
    const usuario = await prisma.usuarios.findUnique({ where: { email } });

    if (!usuario) {
      return res.status(200).json({
        mensaje: 'Si el correo existe, se ha enviado un enlace de recuperación.',
      });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const tokenExpiracion = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.usuarios.update({
      where: { email },
      data: {
        reset_token: resetToken,
        reset_token_expires: tokenExpiracion,
      },
    });

    const isProd = process.env.NODE_ENV === 'production';

    return res.status(200).json({
      mensaje: 'Recuperación iniciada con éxito.',
      token: isProd ? undefined : resetToken,
    });
  } catch (error) {
    console.error('Error en recuperarContrasena:', error);
    return res.status(500).json({ error: 'Hubo un error interno en el servidor.' });
  }
};