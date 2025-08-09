import React from 'react';
import { Palette, Layers, Zap, Smartphone } from 'lucide-react';

const CssSection: React.FC = () => {
  const cssFeatures = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Estilos Visuales",
      description: "Colores, fuentes, espaciado y efectos visuales",
      code: `.button {
  background: linear-gradient(45deg, #3B82F6, #8B5CF6);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}`
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Layout y Positioning",
      description: "Flexbox, Grid, y posicionamiento avanzado",
      code: `.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}`
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Animaciones y Transiciones",
      description: "Efectos dinámicos y interacciones fluidas",
      code: `@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.loading-spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3B82F6;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}`
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Adaptación perfecta a todos los dispositivos",
      code: `/* Mobile First Approach */
.header {
  padding: 1rem;
  font-size: 1.5rem;
}

/* Tablet */
@media (min-width: 768px) {
  .header {
    padding: 1.5rem;
    font-size: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .header {
    padding: 2rem;
    font-size: 2.5rem;
  }
}

/* Large screens */
@media (min-width: 1280px) {
  .header {
    padding: 3rem;
    font-size: 3rem;
  }
}`
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
            <Palette className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CSS: Cascading Style Sheets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CSS es el lenguaje que describe la presentación de documentos HTML. Controla el diseño, colores, 
            fuentes, espaciado, animaciones y cómo se ven los elementos en diferentes dispositivos.
          </p>
        </div>

        {/* What is CSS */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold mb-6">¿Qué es CSS?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para describir 
                  la presentación de un documento escrito en HTML o XML.
                </p>
                <p className="text-lg mb-4">
                  Separa el contenido de la presentación, permitiendo un control preciso sobre el diseño, 
                  la tipografía, los colores y el comportamiento visual de los elementos.
                </p>
                <p className="text-lg">
                  Con CSS3, se introdujeron características avanzadas como animaciones, transformaciones, 
                  gradientes y efectos 3D.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Sintaxis básica:</h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`selector {
  property: value;
  another-property: value;
}

/* Ejemplo */
.mi-clase {
  color: #3B82F6;
  font-size: 1.2rem;
  margin: 1rem 0;
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Características Principales de CSS</h2>
          <div className="grid grid-cols-1 gap-8">
            {cssFeatures.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-blue-600">{feature.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{feature.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CSS in this page */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CSS en esta página</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tailwind CSS</h3>
                <p className="text-gray-700 mb-4">
                  Esta página utiliza Tailwind CSS, un framework de utilidades que permite crear diseños 
                  personalizados rapidamente usando clases predefinidas directamente en el HTML.
                </p>
                <h4 className="font-semibold text-gray-900 mb-2">Ventajas de Tailwind:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Desarrollo más rápido con clases utilitarias</li>
                  <li>• Diseño consistente y escalable</li>
                  <li>• Responsive design incorporado</li>
                  <li>• Personalización completa del sistema de diseño</li>
                  <li>• Optimización automática de CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ejemplo de Tailwind usado aquí:</h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<div className="
  bg-gradient-to-r 
  from-blue-500 
  to-purple-500 
  text-white 
  p-8 
  rounded-xl 
  shadow-lg 
  hover:shadow-xl 
  transition-shadow 
  duration-300
">
  <h2 className="text-3xl font-bold mb-4">
    Título con estilos
  </h2>
</div>`}</code>
                </pre>
                <p className="text-gray-600 mt-4 text-sm">
                  Cada clase de Tailwind corresponde a una propiedad CSS específica, 
                  permitiendo un control granular del diseño.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Methodologies */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Metodologías CSS Modernas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">BEM</h3>
                <p className="mb-4">Block Element Modifier - Nomenclatura clara y mantenible</p>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm">
                  <code>{`.block__element--modifier`}</code>
                </pre>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">CSS Modules</h3>
                <p className="mb-4">Estilos encapsulados por componente</p>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm">
                  <code>{`import styles from './Button.module.css'`}</code>
                </pre>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Utility-First</h3>
                <p className="mb-4">Clases utilitarias como Tailwind CSS</p>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-sm">
                  <code>{`className="bg-blue-500 text-white"`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Tips */}
        <section>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Optimización y Rendimiento CSS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mejores Prácticas</h3>
                <ul className="space-y-2">
                  <li>✓ Minimizar reflows y repaints</li>
                  <li>✓ Usar transformaciones CSS para animaciones</li>
                  <li>✓ Optimizar selectores CSS</li>
                  <li>✓ Comprimir y minificar CSS</li>
                  <li>✓ Usar CSS crítico inline</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Herramientas Modernas</h3>
                <ul className="space-y-2">
                  <li>✓ PostCSS para procesamiento automático</li>
                  <li>✓ Autoprefixer para compatibilidad</li>
                  <li>✓ PurgeCSS para eliminar CSS no utilizado</li>
                  <li>✓ CSS Grid y Flexbox para layouts</li>
                  <li>✓ Custom Properties (CSS Variables)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CssSection;