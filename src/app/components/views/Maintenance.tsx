import { Calendar, Clock, Plus, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface MaintenanceEvent {
  id: string;
  containerCode: string;
  type: 'preventivo' | 'correctivo' | 'inspeccion';
  date: string;
  technician: string;
  status: 'programado' | 'en_progreso' | 'completado' | 'cancelado';
  priority: 'alta' | 'media' | 'baja';
  estimatedDuration: string;
}

const maintenanceEvents: MaintenanceEvent[] = [
  { id: '1', containerCode: 'CONT-1234', type: 'preventivo', date: '2026-05-22', technician: 'Carlos Méndez', status: 'programado', priority: 'alta', estimatedDuration: '3 horas' },
  { id: '2', containerCode: 'CONT-5678', type: 'inspeccion', date: '2026-05-23', technician: 'Ana García', status: 'programado', priority: 'media', estimatedDuration: '1 hora' },
  { id: '3', containerCode: 'CONT-9012', type: 'correctivo', date: '2026-05-20', technician: 'Luis Rodríguez', status: 'en_progreso', priority: 'alta', estimatedDuration: '5 horas' },
  { id: '4', containerCode: 'CONT-3456', type: 'preventivo', date: '2026-05-25', technician: 'María López', status: 'programado', priority: 'baja', estimatedDuration: '2 horas' },
  { id: '5', containerCode: 'CONT-7890', type: 'correctivo', date: '2026-05-21', technician: 'Pedro Sánchez', status: 'en_progreso', priority: 'alta', estimatedDuration: '8 horas' },
  { id: '6', containerCode: 'CONT-2468', type: 'preventivo', date: '2026-05-19', technician: 'Carlos Méndez', status: 'completado', priority: 'media', estimatedDuration: '3 horas' },
  { id: '7', containerCode: 'CONT-1357', type: 'inspeccion', date: '2026-05-24', technician: 'Ana García', status: 'programado', priority: 'media', estimatedDuration: '1.5 horas' },
  { id: '8', containerCode: 'CONT-9753', type: 'preventivo', date: '2026-05-26', technician: 'Luis Rodríguez', status: 'programado', priority: 'baja', estimatedDuration: '2.5 horas' },
];

export function Maintenance() {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [currentWeek, setCurrentWeek] = useState(new Date('2026-05-19'));

  const getTypeColor = (type: MaintenanceEvent['type']) => {
    switch (type) {
      case 'preventivo':
        return 'bg-blue-100 text-blue-800';
      case 'correctivo':
        return 'bg-red-100 text-red-800';
      case 'inspeccion':
        return 'bg-purple-100 text-purple-800';
    }
  };

  const getTypeLabel = (type: MaintenanceEvent['type']) => {
    switch (type) {
      case 'preventivo':
        return 'Preventivo';
      case 'correctivo':
        return 'Correctivo';
      case 'inspeccion':
        return 'Inspección';
    }
  };

  const getStatusColor = (status: MaintenanceEvent['status']) => {
    switch (status) {
      case 'programado':
        return 'bg-gray-100 text-gray-800';
      case 'en_progreso':
        return 'bg-yellow-100 text-yellow-800';
      case 'completado':
        return 'bg-green-100 text-green-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusLabel = (status: MaintenanceEvent['status']) => {
    switch (status) {
      case 'programado':
        return 'Programado';
      case 'en_progreso':
        return 'En Progreso';
      case 'completado':
        return 'Completado';
      case 'cancelado':
        return 'Cancelado';
    }
  };

  const getPriorityColor = (priority: MaintenanceEvent['priority']) => {
    switch (priority) {
      case 'alta':
        return 'text-red-600';
      case 'media':
        return 'text-yellow-600';
      case 'baja':
        return 'text-green-600';
    }
  };

  const sortedEvents = [...maintenanceEvents].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl mb-2">Programación de Mantenimiento</h2>
          <p className="text-gray-600">Gestión de actividades de mantenimiento</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Programar Mantenimiento
        </button>
      </div>

      {/* View Toggle and Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Lista
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                viewMode === 'calendar' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Calendario
            </button>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todos los tipos</option>
              <option>Preventivo</option>
              <option>Correctivo</option>
              <option>Inspección</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todos los estados</option>
              <option>Programado</option>
              <option>En Progreso</option>
              <option>Completado</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Total Programados</div>
          <div className="text-2xl">{maintenanceEvents.filter(e => e.status === 'programado').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">En Progreso</div>
          <div className="text-2xl text-yellow-600">{maintenanceEvents.filter(e => e.status === 'en_progreso').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Completados (mes)</div>
          <div className="text-2xl text-green-600">{maintenanceEvents.filter(e => e.status === 'completado').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Prioridad Alta</div>
          <div className="text-2xl text-red-600">{maintenanceEvents.filter(e => e.priority === 'alta').length}</div>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'list' ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-4 px-6 text-sm text-gray-600">Contenedor</th>
                  <th className="text-left py-4 px-6 text-sm text-gray-600">Tipo</th>
                  <th className="text-left py-4 px-6 text-sm text-gray-600">Fecha</th>
                  <th className="text-left py-4 px-6 text-sm text-gray-600">Técnico</th>
                  <th className="text-left py-4 px-6 text-sm text-gray-600">Duración</th>
                  <th className="text-left py-4 px-6 text-sm text-gray-600">Prioridad</th>
                  <th className="text-left py-4 px-6 text-sm text-gray-600">Estado</th>
                </tr>
              </thead>
              <tbody>
                {sortedEvents.map((event) => (
                  <tr key={event.id} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                    <td className="py-4 px-6 font-medium">{event.containerCode}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(event.type)}`}>
                        {getTypeLabel(event.type)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{event.date}</td>
                    <td className="py-4 px-6 text-gray-600">{event.technician}</td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.estimatedDuration}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`capitalize font-medium ${getPriorityColor(event.priority)}`}>
                        {event.priority}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(event.status)}`}>
                        {getStatusLabel(event.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h3 className="font-medium">Semana del 19 - 25 Mayo 2026</h3>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, index) => (
              <div key={day} className="text-center text-sm text-gray-600 py-2">
                {day}
              </div>
            ))}
            {[19, 20, 21, 22, 23, 24, 25].map((day) => {
              const dayEvents = sortedEvents.filter(e => new Date(e.date).getDate() === day);
              return (
                <div key={day} className="border border-gray-200 rounded-lg p-2 min-h-32">
                  <div className="text-sm font-medium mb-2">{day}</div>
                  <div className="space-y-1">
                    {dayEvents.map((event) => (
                      <div
                        key={event.id}
                        className={`text-xs p-1 rounded ${getTypeColor(event.type)} cursor-pointer`}
                      >
                        {event.containerCode}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
