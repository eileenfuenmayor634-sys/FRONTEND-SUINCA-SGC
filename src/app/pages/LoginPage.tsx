import { useState } from 'react';
import { Login } from '../components/Login';

// En tu repo actual, Login funciona con onLogin(): void.
// Este wrapper se encarga de navegar a "/" cuando el backend valida sesión.
export function LoginPage() {
  const [subView, setSubView] = useState<'login' | 'forgot' | 'register' | 'request'>('login');

  // Mientras migra a Router real, reutilizamos el componente existente.
  // LoginPage: si tu componente Login no soporta subViews por props,
  // lo ajustaremos luego. Por ahora, usamos onLogin para navegar.

  return (
    <Login
onLogin={() => {
        window.location.href = '/dashboard';
      }}
    />
  );
}

