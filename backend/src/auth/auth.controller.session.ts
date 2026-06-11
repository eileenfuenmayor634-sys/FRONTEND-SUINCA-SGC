import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../prisma.js';

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('Critical env var missing: JWT_SECRET');
}

const COOKIE_NAME = process.env.JWT_COOKIE_NAME || 'suinca_jwt';

export const session = async (req: Request, res: Response) => {
  const token = req.cookies?.[COOKIE_NAME];

  if (!token || typeof token !== 'string') {
    return res.status(401).json({ error: 'No autenticado.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;

    const usuarioId = decoded?.idUsuario as string | undefined;
    if (!usuarioId || typeof usuarioId !== 'string' || usuarioId.trim().length === 0) {
      return res.status(401).json({ error: 'No autenticado.' });
    }

    const usuario = await prisma.usuarios.findUnique({ where: { id: usuarioId } });

    if (!usuario || usuario.estado !== 1) {
      return res.status(401).json({ error: 'No autenticado.' });
    }

    return res.status(200).json({
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    });
  } catch {
    return res.status(401).json({ error: 'No autenticado.' });
  }
};
