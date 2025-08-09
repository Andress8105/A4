import React from 'react';
import { Code2, FileText, Tag, Layout } from 'lucide-react';

const HtmlSection: React.FC = () => {
  const htmlConcepts = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Estructura Básica",
      description: "DOCTYPE, html, head, body",
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Página</title>
</head>
<body>
    <h1>¡Hola Mundo!</h1>
</body>
</html>`
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Etiquetas Semánticas",
      description: "header, nav, main, section, article, footer",
      code: `<header>
    <nav>
        <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#acerca">Acerca</a></li>
        </ul>
    </nav>
</header>
<main>
    <section>
        <h2>Contenido Principal</h2>
        <article>
            <h3>Artículo</h3>
            <p>Contenido del artículo...</p>
        </article>
    </section>
</main>
<footer>
    <p>&copy; 2025 Mi Sitio Web</p>
</footer>`
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Formularios",
      description: "input, textarea, select, button",
      code: `<form>
    <div>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje"></textarea>
    </div>
    <button type="submit">Enviar</button>
</form>`
    }
  ];

  const htmlFeatures = [
    "Estructura semántica del contenido",
    "Accesibilidad web incorporada",
    "SEO friendly por defecto",
    "Compatible con todos los navegadores",
    "Fácil de aprender y usar",
    "Base sólida para aplicaciones web"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-orange-100 rounded-full mb-6">
            <Code2 className="w-12 h-12 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HTML: HyperText Markup Language
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HTML es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido 
            de las páginas mediante elementos y etiquetas que los navegadores interpretan para mostrar el contenido.
          </p>
        </div>

        {/* What is HTML */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold mb-4">¿Qué es HTML?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  HTML (HyperText Markup Language) es el código que se utiliza para estructurar y desplegar 
                  una página web y sus contenidos. No es un lenguaje de programación, sino un lenguaje de marcado.
                </p>
                <p className="text-lg">
                  Utiliza elementos que consisten en etiquetas de apertura y cierre que rodean el contenido 
                  para darle significado y estructura.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Características principales:</h3>
                <ul className="space-y-2">
                  {htmlFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* HTML Concepts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Conceptos Fundamentales</h2>
          <div className="grid grid-cols-1 gap-8">
            {htmlConcepts.map((concept, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-orange-600">{concept.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{concept.title}</h3>
                      <p className="text-gray-600">{concept.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{concept.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works in this page */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cómo se utiliza HTML en esta página?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Estructura React/JSX</h3>
                <p className="text-gray-700 mb-4">
                  Esta página utiliza JSX (JavaScript XML), una extensión de sintaxis de JavaScript que permite 
                  escribir HTML dentro de JavaScript. JSX se compila a HTML estándar.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Componentes reutilizables con JSX</li>
                  <li>• Estructura semántica con HTML5</li>
                  <li>• Formularios interactivos</li>
                  <li>• Navegación accesible</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ejemplo de JSX usado aquí:</h3>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`<header className="bg-white shadow-lg">
  <nav>
    <div className="max-w-6xl mx-auto">
      <h1>HTML & CSS Academy</h1>
      <button onClick={handleClick}>
        Iniciar Sesión
      </button>
    </div>
  </nav>
</header>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Mejores Prácticas de HTML</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Estructura y Semántica</h3>
                <ul className="space-y-2">
                  <li>✓ Usa HTML5 semántico (header, nav, main, footer)</li>
                  <li>✓ Estructura jerárquica correcta de encabezados</li>
                  <li>✓ Atributos alt en imágenes</li>
                  <li>✓ Labels asociados a formularios</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Rendimiento y SEO</h3>
                <ul className="space-y-2">
                  <li>✓ Meta tags apropiados</li>
                  <li>✓ Código limpio y validado</li>
                  <li>✓ Optimización para motores de búsqueda</li>
                  <li>✓ Accesibilidad web (ARIA labels)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HtmlSection;