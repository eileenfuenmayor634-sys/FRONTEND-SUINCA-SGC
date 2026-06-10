import { Package, Wrench, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { MetricCard } from '../MetricCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const maintenanceData = [
  { month: 'Ene', preventivo: 45, correctivo: 12 },
  { month: 'Feb', preventivo: 52, correctivo: 8 },
  { month: 'Mar', preventivo: 48, correctivo: 15 },
  { month: 'Abr', preventivo: 61, correctivo: 10 },
  { month: 'May', preventivo: 55, correctivo: 7 },
];

const containerStatusData = [
  { name: 'Operativo', value: 342, color: '#10b981' },
  { name: 'Mantenimiento', value: 45, color: '#f59e0b' },
  { name: 'Fuera de Servicio', value: 13, color: '#ef4444' },
];

const upcomingMaintenance = [
  { id: 1, container: 'CONT-1234', type: 'Preventivo', date: '2026-05-22', priority: 'alta' },
  { id: 2, container: 'CONT-5678', type: 'Inspección', date: '2026-05-23', priority: 'media' },
  { id: 3, container: 'CONT-9012', type: 'Correctivo', date: '2026-05-24', priority: 'alta' },
  { id: 4, container: 'CONT-3456', type: 'Preventivo', date: '2026-05-25', priority: 'baja' },
];

export function Dashboard() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta':
        return 'bg-red-100 text-red-800';
      case 'media':
        return 'bg-yellow-100 text-yellow-800';
      case 'baja':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-2">Dashboard</h2>
        <p className="text-gray-600">Resumen general del sistema de mantenimiento</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Contenedores"
          value="400"
          change={5.2}
          icon={<Package className="w-5 h-5" />}
        />
        <MetricCard
          title="En Operación"
          value="342"
          change={2.3}
          icon={<CheckCircle className="w-5 h-5" />}
        />
        <MetricCard
          title="En Mantenimiento"
          value="45"
          change={-12.5}
          icon={<Wrench className="w-5 h-5" />}
        />
        <MetricCard
          title="Alertas Activas"
          value="13"
          change={-8.1}
          icon={<AlertTriangle className="w-5 h-5" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="mb-6">Mantenimiento Mensual</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={maintenanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="preventivo" stroke="#3b82f6" strokeWidth={2} name="Preventivo" />
              <Line type="monotone" dataKey="correctivo" stroke="#ef4444" strokeWidth={2} name="Correctivo" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="mb-6">Estado de Contenedores</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={containerStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {containerStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Maintenance */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="mb-6">Próximos Mantenimientos</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm text-gray-600">Contenedor</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Tipo</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Fecha Programada</th>
                <th className="text-left py-3 px-4 text-sm text-gray-600">Prioridad</th>
              </tr>
            </thead>
            <tbody>
              {upcomingMaintenance.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{item.container}</td>
                  <td className="py-3 px-4 text-gray-600">{item.type}</td>
                  <td className="py-3 px-4 text-gray-500">{item.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs capitalize ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
