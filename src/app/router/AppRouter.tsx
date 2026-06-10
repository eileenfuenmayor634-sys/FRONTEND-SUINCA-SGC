import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useMemo } from 'react';

import { LoginPage } from '../pages/LoginPage';
import { AppShell } from '../pages/AppShell';
import { ProtectedRoute } from './ProtectedRoute';
import { ForgotPassword } from '../components/auth/ForgotPassword';
import { Register } from '../components/auth/Register';
import { RequestAccess } from '../components/auth/RequestAccess';

export function AppRouter() {
  const basename = useMemo(() => undefined, []);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        {/* Rutas de autenticación (siempre accesibles, sin guard) */}
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword onBack={() => (window.location.href = '/login')} />}
        />
        <Route
          path="/register"
          element={<Register onBack={() => (window.location.href = '/login')} />}
        />
        <Route
          path="/request-access"
          element={<RequestAccess onBack={() => (window.location.href = '/login')} />}
        />

        {/* Redirección raíz -> Login (nunca mostrar dashboard en /) */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* App protegida */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AppShell />
            </ProtectedRoute>
          }
        />

        {/* Alias protegido para compatibilidad */}
        <Route
          path="/containers"
          element={
            <ProtectedRoute>
              <AppShell />
            </ProtectedRoute>
          }
        />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

