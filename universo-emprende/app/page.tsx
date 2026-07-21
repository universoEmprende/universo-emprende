import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950">
            UE
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Universo Emprende
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
          <a href="#nosotros" className="hover:text-cyan-400 transition-colors">Agencia</a>
          <a href="#casos" className="hover:text-cyan-400 transition-colors">Casos de Éxito</a>
        </div>
        <a 
          href="#contacto" 
          className="px-4 py-2 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all shadow-lg shadow-cyan-500/20"
        >
          Cotizar Proyecto
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto text-center flex flex-col items-center justify-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 rounded-full mb-6">
          Agencia Digital & Desarrollo Web
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
          Diseño, Video y Marketing que <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">multiplican tus conversiones</span>
        </h1>
        
        <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
          Eliminamos la fricción cognitiva de tu marca. Creamos experiencias digitales y estrategias de crecimiento enfocadas en generar ventas reales, no solo visitas.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="#contacto" 
            className="px-8 py-3 text-base font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all shadow-xl shadow-cyan-500/25 text-center"
          >
            Solicitar Cotización Gratuita
          </a>
          <a 
            href="#servicios" 
            className="px-8 py-3 text-base font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white rounded-full transition-all text-center"
          >
            Ver Servicios
          </a>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">Soluciones Integrales</h2>
          <p className="mt-2 text-slate-400">Todo lo que tu marca necesita para escalar en el ecosistema digital</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              🚀
            </div>
            <h3 className="text-xl font-bold text-white mb-3">UX/UI & CRO</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Diseño de sitios web e interfaces optimizados para la máxima conversión. Páginas rápidas, intuitivas y enfocadas en ventas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              🎬
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Edición de Video</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Contenido audiovisual dinámico y anuncios de alto impacto diseñados para captar la atención en los primeros 3 segundos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              📈
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Marketing Digital</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estrategias de pauta publicitaria, posicionamiento SEO y embudos de venta creados para maximizar el retorno de inversión (ROAS).
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Universo Emprende. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}