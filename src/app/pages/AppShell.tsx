
import { useState } from 'react';
import { Menu, Bell, Search, X } from 'lucide-react';

import { Sidebar } from '../components/Sidebar';
import { Dashboard } from '../components/views/Dashboard';
import { Containers } from '../components/views/Containers';
import { Maintenance } from '../components/views/Maintenance';
import { WorkOrders } from '../components/views/WorkOrders';
import { Inspections } from '../components/views/Inspections';
import { Settings } from '../components/views/Settings';
import { Help } from '../components/views/Help';

import { NotificationsDrawer } from '../components/notifications/NotificationsDrawer';

export function AppShell() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'containers':
        return <Containers />;
      case 'maintenance':
        return <Maintenance />;
      case 'workorders':
        return <WorkOrders />;
      case 'inspections':
        return <Inspections />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div
            className="w-64 bg-white h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Menu className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">ContainerPro</span>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar
                currentView={currentView}
                onViewChange={(view) => {
                  setCurrentView(view);
                  setSidebarOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => {
                  console.log('notifOpen click');
                  setNotifOpen(true);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg relative"
              >
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                AD
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">{renderView()}</main>
      </div>

      <NotificationsDrawer
        key={notifOpen ? 'open' : 'closed'}
        open={notifOpen}
        onOpenChange={setNotifOpen}
      />

    </div>
  );
}

