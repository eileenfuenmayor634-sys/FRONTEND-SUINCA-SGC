import { Plus, Search, FileText, User, Calendar, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface WorkOrder {
  id: string;
  orderNumber: string;
  containerCode: string;
  title: string;
  description: string;
  priority: 'alta' | 'media' | 'baja';
  status: 'abierta' | 'asignada' | 'en_progreso' | 'completada' | 'cerrada';
  assignedTo: string;
  createdDate: string;
  dueDate: string;
  category: string;
}

const workOrders: WorkOrder[] = [
  {
    id: '1',
    orderNumber: 'WO-2026-001',
    containerCode: 'CONT-9012',
    title: 'Reparación de sistema de refrigeración',
    description: 'El sistema de refrigeración no mantiene temperatura constante',
    priority: 'alta',
    status: 'en_progreso',
    assignedTo: 'Luis Rodríguez',
    createdDate: '2026-05-18',
    dueDate: '2026-05-22',
    category: 'Refrigeración'
  },
  {
    id: '2',
    orderNumber: 'WO-2026-002',
    containerCode: 'CONT-7890',
    title: 'Reemplazo de puerta principal',
    description: 'Puerta dañada con bisagras rotas',
    priority: 'alta',
    status: 'asignada',
    assignedTo: 'Pedro Sánchez',
    createdDate: '2026-05-19',
    dueDate: '2026-05-25',
    category: 'Estructura'
  },
  {
    id: '3',
    orderNumber: 'WO-2026-003',
    containerCode: 'CONT-1234',
    title: 'Inspección de rutina trimestral',
    description: 'Inspección programada de seguridad',
    priority: 'media',
    status: 'asignada',
    assignedTo: 'Carlos Méndez',
    createdDate: '2026-05-17',
    dueDate: '2026-05-23',
    category: 'Inspección'
  },
  {
    id: '4',
    orderNumber: 'WO-2026-004',
    containerCode: 'CONT-5678',
    title: 'Pintura exterior',
    description: 'Repintar exterior por óxido superficial',
    priority: 'baja',
    status: 'abierta',
    assignedTo: 'Sin asignar',
    createdDate: '2026-05-16',
    dueDate: '2026-06-01',
    category: 'Mantenimiento'
  },
  {
    id: '5',
    orderNumber: 'WO-2026-005',
    containerCode: 'CONT-1357',
    title: 'Reparación de válvula',
    description: 'Válvula de presión presenta fuga',
    priority: 'alta',
    status: 'en_progreso',
    assignedTo: 'María López',
    createdDate: '2026-05-19',
    dueDate: '2026-05-21',
    category: 'Sistemas'
  },
  {
    id: '6',
    orderNumber: 'WO-2026-006',
    containerCode: 'CONT-2468',
    title: 'Mantenimiento preventivo',
    description: 'Revisión general programada',
    priority: 'media',
    status: 'completada',
    assignedTo: 'Ana García',
    createdDate: '2026-05-15',
    dueDate: '2026-05-19',
    category: 'Preventivo'
  }
];

export function WorkOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todas');

  const getPriorityColor = (priority: WorkOrder['priority']) => {
    switch (priority) {
      case 'alta':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'media':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'baja':
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const getStatusColor = (status: WorkOrder['status']) => {
    switch (status) {
      case 'abierta':
        return 'bg-gray-100 text-gray-800';
      case 'asignada':
        return 'bg-blue-100 text-blue-800';
      case 'en_progreso':
        return 'bg-yellow-100 text-yellow-800';
      case 'completada':
        return 'bg-green-100 text-green-800';
      case 'cerrada':
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusLabel = (status: WorkOrder['status']) => {
    switch (status) {
      case 'abierta':
        return 'Abierta';
      case 'asignada':
        return 'Asignada';
      case 'en_progreso':
        return 'En Progreso';
      case 'completada':
        return 'Completada';
      case 'cerrada':
        return 'Cerrada';
    }
  };

  const filteredOrders = workOrders.filter(order => {
    const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.containerCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todas' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl mb-2">Órdenes de Trabajo</h2>
          <p className="text-gray-600">Gestión de órdenes de mantenimiento y reparación</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Nueva Orden
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por número de orden, contenedor o título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="todas">Todos los estados</option>
            <option value="abierta">Abiertas</option>
            <option value="asignada">Asignadas</option>
            <option value="en_progreso">En Progreso</option>
            <option value="completada">Completadas</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Total</div>
          <div className="text-2xl">{workOrders.length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Abiertas</div>
          <div className="text-2xl text-gray-700">{workOrders.filter(o => o.status === 'abierta').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Asignadas</div>
          <div className="text-2xl text-blue-600">{workOrders.filter(o => o.status === 'asignada').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">En Progreso</div>
          <div className="text-2xl text-yellow-600">{workOrders.filter(o => o.status === 'en_progreso').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Completadas</div>
          <div className="text-2xl text-green-600">{workOrders.filter(o => o.status === 'completada').length}</div>
        </div>
      </div>

      {/* Work Orders List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg border ${getPriorityColor(order.priority)}`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{order.orderNumber}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {getStatusLabel(order.status)}
                      </span>
                    </div>
                    <p className="text-gray-900 mb-2">{order.title}</p>
                    <p className="text-sm text-gray-600 mb-3">{order.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <FileText className="w-4 h-4" />
                        <span className="font-medium">{order.containerCode}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <User className="w-4 h-4" />
                        {order.assignedTo}
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        Vence: {order.dueDate}
                      </div>
                      <div className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {order.category}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Ver Detalles
                </button>
                {order.status === 'abierta' && (
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    Asignar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
