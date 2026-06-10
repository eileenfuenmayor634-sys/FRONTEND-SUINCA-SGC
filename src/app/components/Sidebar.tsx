import { LayoutDashboard, Package, Wrench, ClipboardList, FileText, Settings, ChevronRight, TrendingUp, AlertCircle, CheckCircle, LogOut, HelpCircle } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
    } catch {
      // ignore
    }

    try {
      await fetch('http://localhost:3001/api/v1/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      // ignore: igual forzamos redirect
    }

    window.location.href = '/login';
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      badge: null,
      color: 'blue'
    },
    {
      id: 'containers',
      label: 'Contenedores',
      icon: Package,
      badge: '400',
      color: 'blue'
    },
    {
      id: 'maintenance',
      label: 'Mantenimiento',
      icon: Wrench,
      badge: '45',
      color: 'yellow'
    },
    {
      id: 'workorders',
      label: 'Órdenes de Trabajo',
      icon: ClipboardList,
      badge: '6',
      color: 'purple'
    },
    {
      id: 'inspections',
      label: 'Inspecciones',
      icon: FileText,
      badge: null,
      color: 'green'
    },
  ];

  const bottomMenuItems = [
    { id: 'settings', label: 'Configuración', icon: Settings },
    { id: 'help', label: 'Ayuda', icon: HelpCircle },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen hidden lg:flex lg:flex-col">
      {/* Logo and Brand */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">ContainerPro</h2>
            <p className="text-xs text-gray-500">Sistema de Gestión</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600">Estado General</span>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-3">85.5%</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-green-600" />
              <span className="text-gray-700">342 OK</span>
            </div>
            <div className="flex items-center gap-1">
              <AlertCircle className="w-3 h-3 text-red-600" />
              <span className="text-gray-700">13 Alertas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-4">
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
            Menú Principal
          </p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    isActive
                      ? 'bg-white text-blue-600'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <ChevronRight className="w-4 h-4 text-white" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="border-t border-gray-200 p-4">
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
            Sistema
          </p>
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* User Profile */}
        <div className="pt-3 border-t border-gray-200">
          <div
            onClick={handleLogout}
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              AD
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">Admin</div>
              <div className="text-xs text-gray-500">Administrador</div>
            </div>
            <LogOut className="w-4 h-4 text-gray-400" />
          </div>
        </div>

      </div>
    </aside>
  );
}
