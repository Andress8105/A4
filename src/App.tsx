import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './components/Home';
import Auth from './components/Auth';
import HtmlSection from './components/HtmlSection';
import CssSection from './components/CssSection';
import Videos from './components/Videos';
import Dashboard from './components/Dashboard';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'html':
        return <HtmlSection />;
      case 'css':
        return <CssSection />;
      case 'videos':
        return <Videos />;
      case 'dashboard':
        return <Dashboard />;
      case 'auth':
        return <Auth setActiveSection={setActiveSection} />;
      default:
        return <Home />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {renderSection()}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">&lt;/&gt;</span>
                  </div>
                  <h3 className="text-lg font-bold">HTML & CSS Academy</h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Aprende desarrollo web desde cero con los mejores recursos y tutoriales.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Cursos</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><button onClick={() => setActiveSection('html')} className="hover:text-white transition-colors">HTML Básico</button></li>
                  <li><button onClick={() => setActiveSection('css')} className="hover:text-white transition-colors">CSS Avanzado</button></li>
                  <li><button onClick={() => setActiveSection('videos')} className="hover:text-white transition-colors">Videos Tutoriales</button></li>
                  <li><a href="#" className="hover:text-white transition-colors">JavaScript</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Recursos</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Ejercicios</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Proyectos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Comunidad</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Soporte</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 HTML & CSS Academy. Desarrollado con React, TypeScript y Tailwind CSS.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Conectado a MongoDB: {process.env.NODE_ENV === 'development' ? 'Local' : 'Atlas'}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;