import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';

import cookieParser from 'cookie-parser';
import helmet from 'helmet';


import containerRoutes from './containers/containers.routes.js';
import authRoutes from './auth/auth.routes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

const isProd = process.env.NODE_ENV === 'production';

const corsOriginsEnv = process.env.CORS_ORIGIN;
const devFallbackOrigin = 'http://localhost:5173';

const allowedOrigins = (corsOriginsEnv || '')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.length > 0) {
      return allowedOrigins.includes(origin)
        ? callback(null, true)
        : callback(null, false);
    }

    if (!isProd) {
      return origin === devFallbackOrigin
        ? callback(null, true)
        : callback(null, false);
    }

    return callback(null, false);
  },
  credentials: true,
};

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  }),
);

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Servidor SUINCA activo' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/containers', containerRoutes);

// Global error handler (blindaje backend)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Servidor SUINCA corriendo en http://localhost:${PORT}`);
});

