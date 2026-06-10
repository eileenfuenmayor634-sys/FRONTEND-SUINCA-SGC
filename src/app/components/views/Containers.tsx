import { Search, Filter, Plus, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';

interface Container {
  id: string;
  code: string;
  type: string;
  location: string;
  status: 'operativo' | 'mantenimiento' | 'fuera_servicio';
  lastMaintenance: string;
  nextMaintenance: string;
  condition: number;
}

const containers: Container[] = [
  { id: '1', code: 'CONT-1234', type: '20ft Standard', location: 'Almacén A-1', status: 'operativo', lastMaintenance: '2026-04-15', nextMaintenance: '2026-07-15', condition: 95 },
  { id: '2', code: 'CONT-5678', type: '40ft High Cube', location: 'Almacén B-3', status: 'operativo', lastMaintenance: '2026-03-20', nextMaintenance: '2026-06-20', condition: 88 },
  { id: '3', code: 'CONT-9012', type: '20ft Refrigerado', location: 'Zona Fría 1', status: 'mantenimiento', lastMaintenance: '2026-05-01', nextMaintenance: '2026-05-20', condition: 72 },
  { id: '4', code: 'CONT-3456', type: '40ft Standard', location: 'Almacén A-5', status: 'operativo', lastMaintenance: '2026-05-10', nextMaintenance: '2026-08-10', condition: 92 },
  { id: '5', code: 'CONT-7890', type: '20ft Open Top', location: 'Patio Exterior', status: 'fuera_servicio', lastMaintenance: '2026-02-28', nextMaintenance: 'Pendiente', condition: 45 },
  { id: '6', code: 'CONT-2468', type: '40ft Refrigerado', location: 'Zona Fría 2', status: 'operativo', lastMaintenance: '2026-04-25', nextMaintenance: '2026-07-25', condition: 90 },
  { id: '7', code: 'CONT-1357', type: '20ft Tank', location: 'Almacén C-2', status: 'mantenimiento', lastMaintenance: '2026-05-05', nextMaintenance: '2026-05-22', condition: 78 },
  { id: '8', code: 'CONT-9753', type: '40ft High Cube', location: 'Almacén B-1', status: 'operativo', lastMaintenance: '2026-04-18', nextMaintenance: '2026-07-18', condition: 94 },
];

export function Containers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');

  const getStatusColor = (status: Container['status']) => {
    switch (status) {
      case 'operativo':
        return 'bg-green-100 text-green-800';
      case 'mantenimiento':
        return 'bg-yellow-100 text-yellow-800';
      case 'fuera_servicio':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusLabel = (status: Container['status']) => {
    switch (status) {
      case 'operativo':
        return 'Operativo';
      case 'mantenimiento':
        return 'Mantenimiento';
      case 'fuera_servicio':
        return 'Fuera de Servicio';
    }
  };

  const getConditionColor = (condition: number) => {
    if (condition >= 80) return 'text-green-600';
    if (condition >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredContainers = containers.filter(container => {
    const matchesSearch = container.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         container.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         container.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || container.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl mb-2">Inventario de Contenedores</h2>
          <p className="text-gray-600">Gestión completa de contenedores</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Nuevo Contenedor
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por código, tipo o ubicación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="todos">Todos los estados</option>
              <option value="operativo">Operativo</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="fuera_servicio">Fuera de Servicio</option>
            </select>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Más filtros
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Total</div>
          <div className="text-2xl">{containers.length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Operativos</div>
          <div className="text-2xl text-green-600">{containers.filter(c => c.status === 'operativo').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">En Mantenimiento</div>
          <div className="text-2xl text-yellow-600">{containers.filter(c => c.status === 'mantenimiento').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Fuera de Servicio</div>
          <div className="text-2xl text-red-600">{containers.filter(c => c.status === 'fuera_servicio').length}</div>
        </div>
      </div>

      {/* Container Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContainers.map((container) => (
          <div key={container.id} className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg">{container.code}</h3>
                <p className="text-sm text-gray-600">{container.type}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(container.status)}`}>
                {getStatusLabel(container.status)}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                {container.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                Próximo: {container.nextMaintenance}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Condición</span>
                <span className={`font-semibold ${getConditionColor(container.condition)}`}>{container.condition}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    container.condition >= 80 ? 'bg-green-500' :
                    container.condition >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${container.condition}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
