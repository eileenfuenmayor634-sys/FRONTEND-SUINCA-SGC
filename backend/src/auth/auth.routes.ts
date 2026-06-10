import { Router } from 'express';
import {
  registrarUsuario,
  loginUsuario,
  logout,
  recuperarContrasena,
} from './auth.controller.js';
import { resetPassword } from './auth.controller.reset-password.js';
import { authRateLimiter } from '../middleware/rateLimiter.js';
import { session } from './auth.controller.session.js';


const router = Router();

router.post('/register', registrarUsuario);
router.post('/login', authRateLimiter, loginUsuario);
router.post('/logout', logout);
router.get('/session', session);
router.post('/forgot-password', authRateLimiter, recuperarContrasena);
router.post('/reset-password', authRateLimiter, resetPassword);

export default router;


