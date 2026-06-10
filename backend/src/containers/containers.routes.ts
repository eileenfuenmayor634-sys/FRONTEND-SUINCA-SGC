import { Router } from 'express';
import { ContainersController } from './containers.controller.js';
import { verificarSesion } from '../middlewares/auth.middleware.js';

const router = Router();
const controller = new ContainersController();

// Linked endpoints to controller actions
router.get('/', verificarSesion, controller.getAll);
router.post('/', verificarSesion, controller.create);

// MVP: Hydrostatic tests, maintenance records and unified history
router.post('/hydrostatic-tests', verificarSesion, controller.createHydrostaticTest);
router.post('/maintenance-records', verificarSesion, controller.createMaintenanceRecord);
router.get('/:id/history', verificarSesion, controller.getContainerHistory);

export default router;


