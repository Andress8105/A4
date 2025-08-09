import React from 'react';
import { Play, Clock, Users, Star, ExternalLink } from 'lucide-react';

const Videos: React.FC = () => {
  const videoCategories = [
    {
      title: "Fundamentos de HTML",
      description: "Aprende desde cero con estos tutoriales esenciales",
      videos: [
        {
          id: "UB1O30fR-EE",
          title: "HTML Crash Course For Absolute Beginners",
          channel: "Traversy Media",
          duration: "1:00:41",
          views: "2.1M",
          rating: 4.9,
          description: "Curso completo de HTML desde cero hasta nivel avanzado",
          thumbnail: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-orange-500 to-red-500"
        },
        {
          id: "MJkdaVf_7JM",
          title: "CSS Crash Course For Absolute Beginners",
          channel: "Traversy Media", 
          duration: "1:25:06",
          views: "1.8M",
          rating: 4.8,
          description: "CSS completo con ejemplos prácticos y ejercicios",
          thumbnail: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-blue-500 to-cyan-500"
        },
        {
          id: "G3e-cpL7ofc",
          title: "HTML & CSS Full Course - Beginner to Pro",
          channel: "SuperSimpleDev",
          duration: "6:31:04", 
          views: "1.2M",
          rating: 4.9,
          description: "Curso completo desde principiante hasta profesional",
          thumbnail: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-yellow-500 to-orange-500"
        }
      ]
    },
    {
      title: "CSS Avanzado",
      description: "Domina el diseño web con CSS moderno",
      videos: [
        {
          id: "jx5jmI0UlXU",
          title: "CSS Flexbox Course",
          channel: "freeCodeCamp",
          duration: "1:15:33",
          views: "800K",
          rating: 4.9,
          description: "Aprende CSS Flexbox desde lo básico hasta layouts complejos",
          thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-purple-500 to-pink-500"
        },
        {
          id: "t6CBKf8K_Ac",
          title: "Learn CSS Grid - A 13 Minute Deep Dive",
          channel: "Web Dev Simplified",
          duration: "13:26",
          views: "650K",
          rating: 4.7,
          description: "Domina CSS Grid para crear layouts responsivos",
          thumbnail: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-green-500 to-teal-500"
        },
        {
          id: "fYq5PXgSsbE",
          title: "Build a Responsive Website | HTML, CSS Grid, Flexbox & More",
          channel: "Traversy Media",
          duration: "1:17:26",
          views: "900K",
          rating: 4.8,
          description: "Construye un sitio web responsivo completo",
          thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-indigo-500 to-purple-500"
        }
      ]
    },
    {
      title: "Proyectos Prácticos",
      description: "Construye sitios web reales paso a paso",
      videos: [
        {
          id: "serqNIswPKg",
          title: "Cómo crear una página web completa con HTML y CSS",
          channel: "EDteam",
          duration: "2:15:30",
          views: "450K",
          rating: 4.8,
          description: "Proyecto completo: landing page moderna y responsiva",
          thumbnail: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-cyan-500 to-blue-500"
        },
        {
          id: "D-h8L5hgW-w",
          title: "Portfolio Web con HTML CSS y JavaScript",
          channel: "MoureDev",
          duration: "1:35:20",
          views: "200K",
          rating: 4.9,
          description: "Crea tu portafolio profesional desde cero",
          thumbnail: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-rose-500 to-pink-500"
        },
        {
          id: "P7t13SGytRk",
          title: "Responsive Landing Page Website",
          channel: "Online Tutorials",
          duration: "45:12",
          views: "320K",
          rating: 4.7,
          description: "Landing page moderna con animaciones CSS",
          thumbnail: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
          color: "from-emerald-500 to-green-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-red-100 rounded-full mb-6">
            <Play className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Videos Educativos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aprende HTML y CSS con los mejores tutoriales de YouTube seleccionados especialmente para ti
          </p>
        </div>

        {/* Video Categories */}
        {videoCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <p className="text-gray-600 text-lg">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-90`}></div>
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-6 h-6 text-gray-800 ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </div>

                    {/* Course Type Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {categoryIndex === 0 ? 'HTML Crash Course' : categoryIndex === 1 ? 'CSS Crash Course' : 'Proyecto Práctico'}
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="font-medium text-blue-600">{video.channel}</span>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span>{video.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={`https://youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Ver en YouTube</span>
                      </a>
                      
                      <div className="text-xs text-gray-400">
                        Absolute Beginners
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Learning Path */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Ruta de Aprendizaje Recomendada</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center backdrop-blur-sm">
                <div className="text-4xl font-bold mb-3">1</div>
                <h3 className="text-xl font-semibold mb-3">Fundamentos HTML</h3>
                <p className="text-sm opacity-90">Comienza con la estructura básica y las etiquetas esenciales</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center backdrop-blur-sm">
                <div className="text-4xl font-bold mb-3">2</div>
                <h3 className="text-xl font-semibold mb-3">Estilos con CSS</h3>
                <p className="text-sm opacity-90">Aprende a dar vida a tus páginas con colores y diseños</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl text-center backdrop-blur-sm">
                <div className="text-4xl font-bold mb-3">3</div>
                <h3 className="text-xl font-semibold mb-3">Proyectos Reales</h3>
                <p className="text-sm opacity-90">Construye sitios web completos aplicando todo lo aprendido</p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Tips */}
        <section>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Consejos para Aprender con Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Mejores Prácticas
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Pausa el video y practica cada concepto</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Toma notas de los puntos importantes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Repite las secciones difíciles</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Construye proyectos mientras aprendes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Herramientas Útiles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">CodePen para practicar en línea</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">VS Code como editor de código</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Chrome DevTools para depurar</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">MDN Web Docs como referencia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Videos;