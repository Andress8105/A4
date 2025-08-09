import React from 'react';
import { Code, Palette, Globe, Users, BookOpen, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "HTML Fundamental",
      description: "Aprende la estructura básica de las páginas web con HTML5"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "CSS Avanzado",
      description: "Domina los estilos, animaciones y diseño responsivo"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Proyectos Reales",
      description: "Construye sitios web completos y funcionales"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidad Activa",
      description: "Únete a miles de desarrolladores aprendiendo juntos"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Recursos Completos",
      description: "Documentación detallada y ejemplos prácticos"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Aprendizaje Rápido",
      description: "Metodología optimizada para resultados inmediatos"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block p-3 bg-white bg-opacity-20 rounded-full mb-8">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">&lt;/&gt;</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Domina <span className="text-yellow-300">HTML</span> y <span className="text-pink-300">CSS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Aprende a crear páginas web increíbles desde cero. Desde los fundamentos hasta técnicas avanzadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Comenzar Ahora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Ver Videos
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Estudiantes</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Lecciones</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <div className="text-gray-600">Ejercicios</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Soporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir nuestra plataforma?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos la mejor experiencia de aprendizaje con herramientas modernas y contenido actualizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para comenzar tu viaje?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Únete a miles de estudiantes que ya están creando increíbles sitios web
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Registrarse Gratis
          </button>
        </div>
      </section>

      {/* Technology Used Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tecnologías utilizadas en esta página
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esta plataforma está construida con las últimas tecnologías web para ofrecerte la mejor experiencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">HTML5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HTML5</h3>
              <p className="text-gray-600">Estructura semántica moderna con las últimas etiquetas y características</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">CSS3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">CSS3 + Tailwind</h3>
              <p className="text-gray-600">Estilos avanzados con Flexbox, Grid, animaciones y diseño responsivo</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border border-cyan-200">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">React</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">React + TypeScript</h3>
              <p className="text-gray-600">Componentes reutilizables y gestión de estado para una experiencia dinámica</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">MongoDB</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MongoDB</h3>
              <p className="text-gray-600">Base de datos NoSQL para gestión eficiente de usuarios y contenido</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">Vite</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vite</h3>
              <p className="text-gray-600">Herramientas de desarrollo rápidas para una experiencia de desarrollo óptima</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl border border-yellow-200">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">Auth</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Autenticación</h3>
              <p className="text-gray-600">Sistema seguro de login y registro para proteger el contenido de usuarios</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;