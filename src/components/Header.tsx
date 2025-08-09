import React from 'react';
import { User, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'videos', label: 'Videos' },
    ...(user ? [{ id: 'dashboard', label: 'Mi Perfil' }] : [])
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">&lt;/&gt;</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">HTML & CSS Academy</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:text-blue-500 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-700">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Salir</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setActiveSection('auth')}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Iniciar Sesión</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;