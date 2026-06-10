import { Plus, Search, CheckCircle, XCircle, AlertTriangle, Download, Eye } from 'lucide-react';
import { useState } from 'react';

interface Inspection {
  id: string;
  inspectionNumber: string;
  containerCode: string;
  inspectionType: 'seguridad' | 'calidad' | 'operacional' | 'regulatoria';
  date: string;
  inspector: string;
  result: 'aprobado' | 'aprobado_condiciones' | 'rechazado';
  score: number;
  findings: number;
  criticalIssues: number;
  nextInspection: string;
}

const inspections: Inspection[] = [
  {
    id: '1',
    inspectionNumber: 'INS-2026-045',
    containerCode: 'CONT-1234',
    inspectionType: 'seguridad',
    date: '2026-05-18',
    inspector: 'Ana García',
    result: 'aprobado',
    score: 95,
    findings: 2,
    criticalIssues: 0,
    nextInspection: '2026-08-18'
  },
  {
    id: '2',
    inspectionNumber: 'INS-2026-046',
    containerCode: 'CONT-9012',
    inspectionType: 'operacional',
    date: '2026-05-17',
    inspector: 'Carlos Méndez',
    result: 'aprobado_condiciones',
    score: 78,
    findings: 5,
    criticalIssues: 1,
    nextInspection: '2026-06-17'
  },
  {
    id: '3',
    inspectionNumber: 'INS-2026-047',
    containerCode: 'CONT-7890',
    inspectionType: 'seguridad',
    date: '2026-05-16',
    inspector: 'Luis Rodríguez',
    result: 'rechazado',
    score: 52,
    findings: 8,
    criticalIssues: 3,
    nextInspection: 'Pendiente'
  },
  {
    id: '4',
    inspectionNumber: 'INS-2026-048',
    containerCode: 'CONT-5678',
    inspectionType: 'calidad',
    date: '2026-05-15',
    inspector: 'María López',
    result: 'aprobado',
    score: 92,
    findings: 1,
    criticalIssues: 0,
    nextInspection: '2026-08-15'
  },
  {
    id: '5',
    inspectionNumber: 'INS-2026-049',
    containerCode: 'CONT-2468',
    inspectionType: 'regulatoria',
    date: '2026-05-19',
    inspector: 'Ana García',
    result: 'aprobado',
    score: 98,
    findings: 0,
    criticalIssues: 0,
    nextInspection: '2026-11-19'
  },
  {
    id: '6',
    inspectionNumber: 'INS-2026-050',
    containerCode: 'CONT-1357',
    inspectionType: 'operacional',
    date: '2026-05-14',
    inspector: 'Pedro Sánchez',
    result: 'aprobado_condiciones',
    score: 82,
    findings: 4,
    criticalIssues: 1,
    nextInspection: '2026-06-14'
  }
];

export function Inspections() {
  const [searchTerm, setSearchTerm] = useState('');
  const [resultFilter, setResultFilter] = useState('todos');

  const getResultColor = (result: Inspection['result']) => {
    switch (result) {
      case 'aprobado':
        return 'bg-green-100 text-green-800';
      case 'aprobado_condiciones':
        return 'bg-yellow-100 text-yellow-800';
      case 'rechazado':
        return 'bg-red-100 text-red-800';
    }
  };

  const getResultLabel = (result: Inspection['result']) => {
    switch (result) {
      case 'aprobado':
        return 'Aprobado';
      case 'aprobado_condiciones':
        return 'Aprobado con Condiciones';
      case 'rechazado':
        return 'Rechazado';
    }
  };

  const getResultIcon = (result: Inspection['result']) => {
    switch (result) {
      case 'aprobado':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'aprobado_condiciones':
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'rechazado':
        return <XCircle className="w-5 h-5 text-red-600" />;
    }
  };

  const getTypeLabel = (type: Inspection['inspectionType']) => {
    switch (type) {
      case 'seguridad':
        return 'Seguridad';
      case 'calidad':
        return 'Calidad';
      case 'operacional':
        return 'Operacional';
      case 'regulatoria':
        return 'Regulatoria';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredInspections = inspections.filter(inspection => {
    const matchesSearch = inspection.inspectionNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inspection.containerCode.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesResult = resultFilter === 'todos' || inspection.result === resultFilter;
    return matchesSearch && matchesResult;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl mb-2">Inspecciones</h2>
          <p className="text-gray-600">Registro y seguimiento de inspecciones de contenedores</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Nueva Inspección
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por número de inspección o contenedor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={resultFilter}
              onChange={(e) => setResultFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="todos">Todos los resultados</option>
              <option value="aprobado">Aprobado</option>
              <option value="aprobado_condiciones">Aprobado con Condiciones</option>
              <option value="rechazado">Rechazado</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Todos los tipos</option>
              <option>Seguridad</option>
              <option>Calidad</option>
              <option>Operacional</option>
              <option>Regulatoria</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Total Inspecciones</div>
          <div className="text-2xl">{inspections.length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Aprobadas</div>
          <div className="text-2xl text-green-600">{inspections.filter(i => i.result === 'aprobado').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Con Condiciones</div>
          <div className="text-2xl text-yellow-600">{inspections.filter(i => i.result === 'aprobado_condiciones').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Rechazadas</div>
          <div className="text-2xl text-red-600">{inspections.filter(i => i.result === 'rechazado').length}</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Puntuación Promedio</div>
          <div className="text-2xl">{Math.round(inspections.reduce((acc, i) => acc + i.score, 0) / inspections.length)}%</div>
        </div>
      </div>

      {/* Inspections List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredInspections.map((inspection) => (
          <div key={inspection.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {getResultIcon(inspection.result)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{inspection.inspectionNumber}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${getResultColor(inspection.result)}`}>
                        {getResultLabel(inspection.result)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Contenedor: <span className="font-medium text-gray-900">{inspection.containerCode}</span>
                      {' • '}
                      Inspector: {inspection.inspector}
                      {' • '}
                      Fecha: {inspection.date}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Tipo</div>
                    <div className="text-sm font-medium">{getTypeLabel(inspection.inspectionType)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Puntuación</div>
                    <div className={`text-sm font-bold ${getScoreColor(inspection.score)}`}>{inspection.score}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Hallazgos</div>
                    <div className="text-sm font-medium">{inspection.findings}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Problemas Críticos</div>
                    <div className="text-sm font-medium text-red-600">{inspection.criticalIssues}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Próxima Inspección</div>
                    <div className="text-sm font-medium">{inspection.nextInspection}</div>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Ver Detalles
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Descargar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
