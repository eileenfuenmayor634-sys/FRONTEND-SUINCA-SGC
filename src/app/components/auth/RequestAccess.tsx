import { Settings, User, Mail, Building2, Phone, ArrowLeft, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface RequestAccessProps {
  onBack: () => void;
}

export function RequestAccess({ onBack }: RequestAccessProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    reason: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2332] via-[#1e2836] to-[#0f1419] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
            <Settings className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <div className="text-white text-sm font-semibold">SOLUCIONES DE GESTIÓN</div>
            <div className="text-cyan-400 text-xs">MANTENIMIENTO</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-2xl relative z-10 my-20">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 tracking-wide">
            SISTEMA DE MANTENIMIENTO INDUSTRIAL
          </h1>
        </div>

        {/* Card */}
        <div className="bg-[#1e2836]/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 border border-white/10 shadow-lg">
              <Settings className="w-12 h-12 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">SGM</h2>
            <p className="text-cyan-400 text-sm">Industrial</p>
          </div>

          <h3 className="text-white text-center mb-6 font-semibold">SOLICITUD DE ACCESO</h3>

          {!isSubmitted ? (
            <>
              <p className="text-gray-400 text-sm text-center mb-6">
                Complete el formulario a continuación y nuestro equipo revisará su solicitud.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nombre Completo */}
                  <div>
                    <label className="block text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                      Nombre Completo *
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#0f1419]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                      Correo Electrónico *
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="correo@empresa.com"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#0f1419]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#0f1419]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                      Empresa *
                    </label>
                    <div className="relative">
                      <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de la Empresa"
                        required
                        className="w-full pl-11 pr-4 py-3 bg-[#0f1419]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Cargo */}
                <div>
                  <label className="block text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                    Cargo / Posición *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Gerente de Mantenimiento"
                      required
                      className="w-full pl-11 pr-4 py-3 bg-[#0f1419]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {/* Motivo */}
                <div>
                  <label className="block text-cyan-400 text-xs font-semibold mb-2 uppercase tracking-wider">
                    Motivo de la Solicitud *
                  </label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder="Describa brevemente por qué necesita acceso al sistema..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0f1419]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'ENVIAR SOLICITUD'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-lg">¡Solicitud Enviada!</h4>
              <p className="text-gray-400 text-sm">
                Su solicitud de acceso ha sido recibida correctamente.
              </p>
              <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-4 mt-4">
                <p className="text-cyan-400 text-sm font-semibold mb-2">¿Qué sigue?</p>
                <p className="text-gray-400 text-xs">
                  Nuestro equipo revisará su solicitud en las próximas 24-48 horas. Recibirá un correo electrónico a <span className="text-cyan-400">{formData.email}</span> con las credenciales de acceso una vez aprobada.
                </p>
              </div>
            </div>
          )}

          {/* Back Button */}
          <button
            onClick={onBack}
            className="w-full mt-6 flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">VOLVER AL INICIO DE SESIÓN</span>
          </button>
        </div>
      </div>
    </div>
  );
}
