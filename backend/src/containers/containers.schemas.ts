import { z } from 'zod';

// Payload para crear un contenedor. Debe coincidir con el modelo Prisma `contenedores`.
// Modelo Prisma requerido:
// - id
// - numero_serie (unique)
// - tipo
// - capacidad
// - estado
// - ubicacion
//
// Reglas de negocio:
// - `status` del payload mapea a `estado` en Prisma.
export const CreateContainerSchema = z.object({
  // Mapeo: containerId -> id (String)
  containerId: z.string().min(1, 'Container ID is required'),

  // Prisma: numero_serie (unique)
  numeroSerie: z.string().min(1, 'Numero de serie is required'),

  // Prisma: tipo
  tipo: z.string().min(1, 'Tipo is required'),

  // Prisma: capacidad
  capacidad: z.number().int().nonnegative(),

  // Prisma: estado (String)
  // Mantiene tu esquema anterior de status, pero ya no aplicamos defaults.
  // NOTA: `estado` en Prisma tiene @default("OPERATIVO"); aquí requerimos el valor.
  status: z.enum(['operative', 'maintenance', 'out_of_service']),

  // Prisma: ubicacion
  ubicacion: z.string().min(1, 'Ubicacion is required'),

  // Prisma: created_at/fecha_ultimo_mantenimiento/observaciones/etc.
  // Se dejan fuera por ahora porque no existen en el esquema actual del frontend.
});

export type CreateContainerInput = z.infer<typeof CreateContainerSchema>;

