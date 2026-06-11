import { Settings, Lock, Mail, Building2 } from 'lucide-react';
import { useState } from 'react';
import { ForgotPassword } from './auth/ForgotPassword';
import { RequestAccess } from './auth/RequestAccess';
import { Register } from './auth/Register';
import api from "../../Axios";

interface LoginProps {
  onLogin: () => void;
}

type ViewMode = 'login' | 'forgot' | 'request' | 'register';

function Field({
  icon,
  label,
  type,
  value,
  onChange,
  placeholder
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label className="block text-cyan-400 text-[10px] font-semibold mb-1 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        {icon}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={type !== 'text'}
          className="w-full pl-10 pr-3 py-1.5 bg-[#0f1419]/50 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
        />
      </div>
    </div>
  );
}

export function Login({ onLogin }: LoginProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Eliminar este bypass antes de subir a producción
  const TEMP_PASSWORD = "1234";

  if (viewMode === 'forgot') return <ForgotPassword onBack={() => setViewMode('login')} />;
  if (viewMode === 'request') return <RequestAccess onBack={() => setViewMode('login')} />;
  if (viewMode === 'register') return <Register onBack={() => setViewMode('login')} />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // --- BYPASS TEMPORAL (solo contraseña hardcodeada) ---
    if (password === TEMP_PASSWORD) {
      console.log('Acceso temporal concedido');
      onLogin();
      return;
    }
    // -------------------------------------------------------

    // Login real (desactivado SOLO para el bypass; si no coincide el password, intenta backend).
    setIsLoading(true);
    try {
      await api.post('/auth/login', { email, contrasena: password });
      onLogin();
    } catch (err: any) {
      const mensajeError = err.response?.data?.error || 'No se pudo conectar con el servidor de mantenimiento.';
      setError(mensajeError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2332] via-[#1e2836] to-[#0f1419] flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-[#1e2836]/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-3 border border-white/10">
            <Settings className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-lg font-bold text-white">SGM Industrial</h2>
        </div>

        {error && (
          <div className="mb-4 p-2 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-red-400 text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <Field
            icon={<Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />}
            label="Correo"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="ejemplo@empresa.com"
          />
          <Field
            icon={<Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />}
            label="Contraseña"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="••••"
          />
          <Field
            icon={<Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />}
            label="Empresa"
            type="text"
            value={company}
            onChange={setCompany}
            placeholder="Su Empresa"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold text-sm mt-4"
          >
            {isLoading ? 'Verificando...' : 'INICIAR SESIÓN'}
          </button>
        </form>

        <div className="flex items-center justify-between mt-5 text-[11px]">
          <button onClick={() => setViewMode('forgot')} className="text-cyan-400 hover:text-cyan-300">¿OLVIDÓ SU CONTRASEÑA?</button>
          <button onClick={() => setViewMode('request')} className="text-cyan-400 hover:text-cyan-300">SOLICITAR ACCESO</button>
        </div>
      </div>
    </div>
  );
}