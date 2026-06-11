import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const LOGIN_PATH = '/login';

function hardRedirectToLogin() {
  // Forzar redirección por bypass de posibles estados intermedios
  // y por comportamiento consistente cuando hay cookies cruzadas.
  try {
    window.localStorage.removeItem('token');
  } catch {
    // ignore
  }
  window.location.href = LOGIN_PATH;
}

async function checkSession(): Promise<boolean> {
  // TEMPORAL: bypass mientras se resuelve el error del backend.
  // IMPORTANTE: revertir este cambio cuando el endpoint de sesión funcione.
  return true;
}


export function ProtectedRoute({ children }: { children: ReactNode }) {
  const [isAllowed, setIsAllowed] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const ok = await checkSession();
        if (cancelled) return;

        if (!ok) {
          // Blindaje: si falla la verificación, fuerza a login inmediato.
          hardRedirectToLogin();
          return;
        }

        setIsAllowed(true);
        setIsChecking(false);
      } catch {
        if (cancelled) return;
        hardRedirectToLogin();
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Nunca renderizar AppShell si no pasó verificación.
  if (isChecking) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  if (!isAllowed) {
    // Fallback por si el redirect inmediato no ocurre aún.
    return <Navigate to={LOGIN_PATH} replace />;
  }

  return <>{children}</>;
}


