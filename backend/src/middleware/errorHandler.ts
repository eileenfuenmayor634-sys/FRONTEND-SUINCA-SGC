import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
// Nota: Prisma también puede fallar por varias clases internas según versión.
// Para blindaje MVP, manejamos por código/shape sin depender de clases internas.

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Invalid request',
      issues: err.issues.map((i) => ({
        path: i.path,
        message: i.message,
        code: i.code,
      })),
    });
  }

  if (err && typeof err === 'object' && 'code' in err && typeof (err as any).code === 'string') {
    const code = (err as any).code as string;
    const meta = (err as any).meta as unknown;

    if (code === 'P2002') {
      return res.status(409).json({
        error: 'Duplicate',
        message: 'Registro duplicado.',
        meta,
      });
    }

    if (code === 'P2025') {
      return res.status(404).json({
        error: 'Not found',
        message: 'Registro no encontrado.',
      });
    }

    return res.status(400).json({
      error: 'Database error',
      message: 'No se pudo completar la operación.',
    });
  }

  // eslint-disable-next-line no-console
  console.error('Unhandled error:', err);

  return res.status(500).json({
    error: 'Internal server error',
    message: 'Hubo un error interno. Intenta nuevamente más tarde.',
  });
}

