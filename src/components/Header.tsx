import { Calendar, ChevronDown, Zap, Moon, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [dateRange, setDateRange] = useState('Últimos 30 días');

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg p-2">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Electro C & B</h1>
              <nav className="flex items-center gap-6 mt-1">
                <a href="#" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">
                  Dashboard
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Pedidos
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Productos
                </a>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  Clientes
                </a>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>{dateRange}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Moon className="w-5 h-5 text-gray-600" />
            </button>

            <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Admin</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
