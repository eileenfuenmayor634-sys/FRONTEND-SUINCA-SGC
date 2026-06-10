import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = process.env.JWT_COOKIE_NAME || 'suinca_jwt';

// Extiende el Request para permitir inyección de usuario
declare global {
  namespace Express {
    interface Request {
      user?: { idUsuario?: string; rol?: string };
    }
  }
}

/**
 * Middleware de autenticación.
 * - Lee cookie HttpOnly de sesión.
 * - Verifica JWT.
 * - Inyecta el payload decodificado en req.user.
 */
export function verificarSesion(req: Request, res: Response, next: NextFunction) {
  if (!JWT_SECRET) {
    // Falla en runtime si falta configuración crítica.
    return res.status(500).json({ error: 'Server misconfigured: JWT_SECRET missing.' });
  }

  const token = req.cookies?.[COOKIE_NAME];
  if (!token || typeof token !== 'string') {
    return res.status(401).json({ error: 'No autenticado.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    const idUsuario = decoded?.idUsuario as string | undefined;

    if (typeof idUsuario !== 'string' || idUsuario.trim().length === 0) {
      return res.status(401).json({ error: 'No autenticado.' });
    }

    req.user = {
      idUsuario: idUsuario.trim(),
      rol: typeof decoded?.rol === 'string' ? decoded.rol : undefined,
    };

    return next();
  } catch {
    return res.status(401).json({ error: 'No autenticado.' });
  }
}

