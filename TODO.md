# TODO - Backend producción (prioridades)

- [ ] ARCHIVO 1: backend/src/auth/auth.controller.session.ts
  - [ ] Eliminar fallback/strings hardcodeados para JWT_SECRET
  - [ ] Throw inmediato si falta JWT_SECRET
  - [ ] Sesión robusta leyendo cookie HttpOnly

- [ ] ARCHIVO 2: backend/src/app.ts
  - [ ] Helmet
  - [ ] CORS dinámico desde CORS_ORIGIN (lista por comas)
  - [ ] Fallback a localhost solo en desarrollo
  - [ ] credentials: true

- [ ] ARCHIVO 3: backend/src/middleware/rateLimiter.ts (nuevo)
  - [ ] express-rate-limit
  - [ ] authRateLimiter (5/15m) para login/forgot/reset
  - [ ] generalRateLimiter (100/min) global

- [ ] ARCHIVO 4: backend/src/middleware/errorHandler.ts (nuevo)
  - [ ] Middleware errorHandler con ZodError + Prisma conocidos
  - [ ] Respuesta 400 para Zod
  - [ ] Respuesta 500 genérica para desconocidos (log interno)

- [ ] ARCHIVO 5: backend/src/schemas/container.schema.ts (nuevo)
  - [ ] createContainerSchema
  - [ ] updateMaintenanceSchema
  - [ ] exitContainerSchema

- [ ] Integración (después de crear/editar archivos)
  - [ ] Conectar rateLimiter a rutas sensibles en routes
  - [ ] Conectar errorHandler al final de la cadena de middleware
  - [ ] Reemplazar containers.schemas.ts por el nuevo schema si aplica
  - [ ] Ejecutar build/lint/TypeScript check

