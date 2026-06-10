import { z } from 'zod';

// Single source of truth for container-related MVP schemas.
// Prisma models involved (MySQL via Prisma):
// - contenedores
// - hydrostatic_tests
// - mantenimiento_registros

const allowedContainerStates = [
  'OPERATIVO',
  'MANTENIMIENTO',
  'FUERA_DE_SERVICIO',
] as const;

type AllowedContainerState = (typeof allowedContainerStates)[number];

function normalizeContainerState(input: string): AllowedContainerState {
  const upper = input.trim().toUpperCase();

  if (upper === 'OPERATIVE') return 'OPERATIVO';
  if (upper === 'MAINTENANCE') return 'MANTENIMIENTO';
  if (
    upper === 'OUT_OF_SERVICE' ||
    upper === 'OUTOF_SERVICE' ||
    upper === 'OUT OF SERVICE' ||
    upper === 'OUT_OF_SERVICE ' ||
    upper === 'OUT OF SERVICE '
  ) {
    return 'FUERA_DE_SERVICIO';
  }

  if (upper === 'FUERA DE SERVICIO') return 'FUERA_DE_SERVICIO';

  if (allowedContainerStates.includes(upper as AllowedContainerState)) {
    return upper as AllowedContainerState;
  }

  // Will be rejected by superRefine.
  return upper as AllowedContainerState;
}

function stateSchema(label: string) {
  return z
    .string()
    .min(1, `${label} es requerido`)
    .transform((v) => normalizeContainerState(v));
}

export const createContainerSchema = z.object({
  numeroSerie: z.string().min(1).max(100),
  tipo: z.string().min(1).max(50),
  capacidad: z.number().int().nonnegative(),
  estadoInicial: stateSchema('estadoInicial'),
  ubicacion: z.string().min(1).optional(),
  observaciones: z.string().optional(),
  clientId: z.string().optional(),
  propietario: z.string().optional(),
});

export const updateMaintenanceSchema = z.object({
  contenedorId: z.string().min(1),
  descripcion: z.string().min(1).max(10000),
  costo: z.number().nonnegative().optional(),
  estadoActual: stateSchema('estadoActual'),
  fechaRealizacion: z.coerce.date().optional(),
});

export const exitContainerSchema = z.object({
  contenedorId: z.string().min(1),
  fechaSalida: z.coerce.date(),
  destino: z.string().min(1).max(255),
  estadoFinal: stateSchema('estadoFinal'),
});

// --- MVP NEW: Hydrostatic test ---
export const createHydrostaticTestSchema = z.object({
  containerId: z.string().min(1),

  // In DB: test_date (DateTime(0))
  testDate: z.coerce.date(),

  humidityMeasurement: z.coerce.number().min(0).max(100).optional(),
  pressure: z.coerce.number().optional(),
  volume: z.coerce.number().optional(),

  // In DB: test_result (String? @db.VarChar(100))
  testResult: z.string().min(1).max(100).optional(),
});

// --- MVP NEW: Maintenance record ---
export const createMaintenanceRecordSchema = z.object({
  // In DB: contenedor_id
  containerId: z.string().min(1),

  // In DB: tipo (String?)
  tipo: z.string().min(1).max(100).optional(),

  // In DB: descripcion (String?)
  descripcion: z.string().min(1).max(10000),

  // In DB: fecha_realizacion
  fechaRealizacion: z.coerce.date(),

  // In DB: costo (Decimal?)
  costo: z.coerce.number().nonnegative().optional(),

  // MVP convenience (front can send estadoActual) — backend may update contenedores.estado
  estadoActual: stateSchema('estadoActual').optional(),
});

// Optional unified schema helper for exit/more rules later.
// For MVP, we keep validation lightweight and consistent.

export type CreateContainerInput = z.infer<typeof createContainerSchema>;
export type UpdateMaintenanceInput = z.infer<typeof updateMaintenanceSchema>;
export type ExitContainerInput = z.infer<typeof exitContainerSchema>;

export type CreateHydrostaticTestInput = z.infer<typeof createHydrostaticTestSchema>;
export type CreateMaintenanceRecordInput = z.infer<typeof createMaintenanceRecordSchema>;

