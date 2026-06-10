import React from 'react';

export function NotificationsDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000]">
      {/* Overlay */}
      <div
          className="absolute inset-0 bg-black/40 pointer-events-auto"
          onClick={() => onOpenChange(false)}
        />


      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white shadow-xl border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <button
            className="px-3 py-1 rounded-lg border border-gray-200 hover:bg-gray-50"
            onClick={() => onOpenChange(false)}
          >
            Cerrar
          </button>
        </div>

        <div className="p-4 overflow-y-auto">
          <div className="text-sm text-gray-600">
            (Pendiente: cargar notificaciones desde backend)
          </div>
        </div>
      </div>
    </div>
  );
}

