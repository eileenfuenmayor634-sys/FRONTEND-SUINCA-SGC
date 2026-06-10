import { Book, Video, MessageCircle, Mail, FileText, ExternalLink } from 'lucide-react';

export function Help() {
  const helpResources = [
    {
      icon: Book,
      title: 'Documentación',
      description: 'Guías completas y referencias del sistema',
      link: 'Ver documentación',
      color: 'blue'
    },
    {
      icon: Video,
      title: 'Video Tutoriales',
      description: 'Aprende a usar el sistema con videos paso a paso',
      link: 'Ver tutoriales',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'Chat en Vivo',
      description: 'Habla con nuestro equipo de soporte',
      link: 'Iniciar chat',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email de Soporte',
      description: 'Envíanos un correo y te responderemos pronto',
      link: 'support@containerpro.com',
      color: 'orange'
    }
  ];

  const faqs = [
    {
      question: '¿Cómo programar un mantenimiento preventivo?',
      answer: 'Ve a la sección de Mantenimiento, haz clic en "Programar Mantenimiento", selecciona el contenedor, tipo de mantenimiento, fecha y técnico asignado.'
    },
    {
      question: '¿Cómo crear una orden de trabajo?',
      answer: 'En la sección de Órdenes de Trabajo, haz clic en "Nueva Orden", completa los detalles del problema y asigna un técnico.'
    },
    {
      question: '¿Cómo interpretar el estado de un contenedor?',
      answer: 'Verde (Operativo): funcionando normalmente. Amarillo (Mantenimiento): en proceso de reparación. Rojo (Fuera de Servicio): no disponible para uso.'
    },
    {
      question: '¿Puedo exportar los reportes?',
      answer: 'Sí, en cada sección encontrarás botones de "Descargar" o "Exportar" para generar reportes en PDF o Excel.'
    },
    {
      question: '¿Cómo cambio mi contraseña?',
      answer: 'Ve a Configuración > Seguridad > Cambiar Contraseña. Necesitarás tu contraseña actual para confirmar el cambio.'
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-blue-600';
      case 'purple':
        return 'bg-purple-50 text-purple-600';
      case 'green':
        return 'bg-green-50 text-green-600';
      case 'orange':
        return 'bg-orange-50 text-orange-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl mb-2">Centro de Ayuda</h2>
        <p className="text-gray-600">Encuentra respuestas y recursos útiles</p>
      </div>

      {/* Help Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {helpResources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${getIconColor(resource.color)}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    {resource.link}
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Start Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Guía de Inicio Rápido</h3>
            <p className="text-sm text-gray-700 mb-3">
              Aprende los conceptos básicos del sistema en 5 minutos
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Comenzar Tutorial
            </button>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="font-semibold mb-4">Preguntas Frecuentes</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="mt-2 px-4 py-3 text-sm text-gray-600 bg-gray-50 rounded-lg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="font-semibold mb-4">¿Aún necesitas ayuda?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 AM a 6:00 PM
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Contactar Soporte
          </button>
          <button className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Enviar Email
          </button>
        </div>
      </div>

      {/* System Info */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-gray-600 mb-1">Versión</div>
            <div className="font-medium">v1.2.3</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Última Actualización</div>
            <div className="font-medium">2026-05-15</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Estado del Sistema</div>
            <div className="font-medium text-green-600">Operativo</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Uptime</div>
            <div className="font-medium">99.9%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
