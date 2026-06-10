import { User, Bell, Shield, Database, Mail } from 'lucide-react';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-2">Configuración</h2>
        <p className="text-gray-600">Administra la configuración del sistema</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Settings */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold">Perfil de Usuario</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Nombre</label>
              <input
                type="text"
                defaultValue="Administrador"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                defaultValue="admin@containerpro.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">Rol</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Administrador</option>
                <option>Supervisor</option>
                <option>Técnico</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Bell className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold">Notificaciones</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">Mantenimientos Pendientes</div>
                <div className="text-xs text-gray-600">Alertas de mantenimientos próximos</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">Órdenes de Trabajo</div>
                <div className="text-xs text-gray-600">Actualizaciones de órdenes</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-sm">Inspecciones Fallidas</div>
                <div className="text-xs text-gray-600">Alertas de inspecciones rechazadas</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold">Seguridad</h3>
          </div>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors">
              Cambiar Contraseña
            </button>
            <button className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors">
              Configurar Autenticación de Dos Factores
            </button>
            <button className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors">
              Ver Sesiones Activas
            </button>
          </div>
        </div>

        {/* System */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-lg">
              <Database className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold">Sistema</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Versión</span>
              <span className="text-sm font-medium">v1.2.3</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Última Actualización</span>
              <span className="text-sm font-medium">2026-05-15</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Base de Datos</span>
              <span className="text-sm font-medium text-green-600">Conectada</span>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4">
              Exportar Datos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
