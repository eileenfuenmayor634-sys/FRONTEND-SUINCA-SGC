import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prisma.js';

export const resetPassword = async (req: Request, res: Response) => {
  const { token, newPassword } = req.body;

  if (!token || typeof token !== 'string' || token.trim().length === 0) {
    return res.status(400).json({ error: 'El campo token es obligatorio.' });
  }

  if (!newPassword || typeof newPassword !== 'string') {
    return res.status(400).json({ error: 'El campo newPassword es obligatorio.' });
  }

  try {
    const usuario = await prisma.usuarios.findFirst({
      where: {
        reset_token: token,
        reset_token_expires: {
          gt: new Date(),
        },
      },
    });

    if (!usuario) {
      return res.status(400).json({
        error: 'Token inválido o expirado.',
      });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    await prisma.usuarios.update({
      where: { id: usuario.id },
      data: {
        password_hash: passwordHash,
        reset_token: null,
        reset_token_expires: null,
      },
    });

    return res.status(200).json({
      mensaje: 'Contraseña restablecida con éxito.',
    });
  } catch (error) {
    console.error('Error en restablecerContrasena:', error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
};

