import { Request, Response } from 'express';
import prisma from '../prisma.js';
import {
  CreateContainerSchema
} from './containers.schemas.js';

import crypto from 'crypto';
import {
  createHydrostaticTestSchema,
  createMaintenanceRecordSchema,
} from '../schemas/container.schema.js';

export class ContainersController {
  // GET /containers
  getAll = async (req: Request, res: Response) => {
    const page = Math.max(1, Number(req.query.page ?? 1));
    const limit = Math.max(1, Math.min(100, Number(req.query.limit ?? 20)));
    const skip = (page - 1) * limit;

    const [total, data] = await Promise.all([
      prisma.contenedores.count(),
      prisma.contenedores.findMany({ skip, take: limit, orderBy: { created_at: 'desc' } }),
    ]);

    return res.status(200).json({
      data,
      meta: { page, limit, total },
    });
  };

  // POST /containers
  create = async (req: Request, res: Response) => {
    const parsed = CreateContainerSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: 'Invalid request payload',
        issues: parsed.error.issues,
      });
    }

    // Map payload -> Prisma model `contenedores`
    const created = await prisma.contenedores.create({
      data: {
        id: parsed.data.containerId,
        numero_serie: parsed.data.numeroSerie,
        tipo: parsed.data.tipo,
        capacidad: parsed.data.capacidad,
        estado: parsed.data.status.toUpperCase(),
        ubicacion: parsed.data.ubicacion,
      },
    });

    return res.status(201).json(created);
  };

  // POST /hydrostatic-tests
  createHydrostaticTest = async (req: Request, res: Response) => {
    const userId = req.user?.idUsuario;

    if (!userId) {
      return res.status(401).json({ error: 'No autenticado.' });
    }

    const parsed = createHydrostaticTestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: 'Invalid request payload',
        issues: parsed.error.issues,
      });
    }

    const created = await prisma.hydrostatic_tests.create({
      data: {
        id: crypto.randomUUID(),
        user_id: userId,
        container_id: parsed.data.containerId,
        test_date: parsed.data.testDate,
        humidity_measurement: parsed.data.humidityMeasurement,
        pressure: parsed.data.pressure,
        volume: parsed.data.volume,
        test_result: parsed.data.testResult,
      },
    });

    return res.status(201).json(created);
  };

  // POST /maintenance-records
  createMaintenanceRecord = async (req: Request, res: Response) => {
    const userId = req.user?.idUsuario;
    if (!userId) {
      return res.status(401).json({ error: 'No autenticado.' });
    }

    const parsed = createMaintenanceRecordSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: 'Invalid request payload',
        issues: parsed.error.issues,
      });
    }

    // Regla MVP: al crear un mantenimiento, el contenedor debe pasar a estado 'MANTENIMIENTO'
    // de forma atómica con el registro.
    const estadoNuevo = parsed.data.estadoActual?.toUpperCase() ?? 'MANTENIMIENTO';

    const result = await prisma.$transaction(async (tx) => {
      const created = await tx.mantenimiento_registros.create({
        data: {
          id: crypto.randomUUID(),
          contenedor_id: parsed.data.containerId,
          tipo: parsed.data.tipo,
          descripcion: parsed.data.descripcion,
          fecha_realizacion: parsed.data.fechaRealizacion,
          costo: parsed.data.costo,
        },
      });

      await tx.contenedores.update({
        where: { id: parsed.data.containerId },
        data: {
          estado: estadoNuevo,
        },
      });

      return created;
    });

    return res.status(201).json(result);
  };


  // GET /containers/:id/history (unified)
  getContainerHistory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const page = Math.max(1, Number(req.query.page ?? 1));
    const limit = Math.max(1, Math.min(100, Number(req.query.limit ?? 20)));
    const skip = (page - 1) * limit;

    // MVP paginado: pedimos más datos que el limit para mantener mezcla
    // ordenada sin tener que hacer un UNION complejo.
    const fetchSize = skip + limit;

    const [hydro, maint, totalHydro, totalMaint] = await Promise.all([
      prisma.hydrostatic_tests.findMany({
        where: { container_id: id as string },
        orderBy: { test_date: 'desc' },
        take: fetchSize,
      }),
      prisma.mantenimiento_registros.findMany({
        where: { contenedor_id: id as string },
        orderBy: { fecha_realizacion: 'desc' },
        take: fetchSize,
      }),
      prisma.hydrostatic_tests.count({ where: { container_id: id as string } }),
      prisma.mantenimiento_registros.count({ where: { contenedor_id: id as string } }),
    ]);

    const unifiedAll = [
      ...hydro.map((h) => ({
        kind: 'hydrostatic_test' as const,
        date: h.test_date,
        data: h,
      })),
      ...maint.map((m) => ({
        kind: 'maintenance_record' as const,
        date: m.fecha_realizacion,
        data: m,
      })),
    ].sort((a, b) => b.date.getTime() - a.date.getTime());

    const unified = unifiedAll.slice(skip, skip + limit);
    const total = totalHydro + totalMaint;

    return res.status(200).json({
      containerId: id,
      data: unified,
      meta: { page, limit, total },
    });
  };
}



