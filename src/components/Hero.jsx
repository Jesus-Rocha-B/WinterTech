import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white"
    >
      {/* Sutil halo ambiental en la parte superior para realzar la transparencia del navbar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-gradient-to-r from-blue-100/50 via-indigo-100/40 to-amber-100/40 blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0e1b3d] leading-[1.15] tracking-tight">
              Software a la<br />
              medida para{' '}
              <span className="relative inline-block text-[#2563eb]">
                <span className="relative z-10">hacer</span>
                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#fde047] -z-0 rounded-xs"></span>
              </span>
              <br />
              <span className="relative inline-block text-[#2563eb]">
                <span className="relative z-10">crecer</span>
                <span className="absolute left-0 bottom-1 w-full h-3 bg-[#fde047] -z-0 rounded-xs"></span>
              </span>{' '}
              tu negocio
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet: desarrollamos páginas web, aplicaciones y automatizaciones pensadas para tu empresa.
            </p>

            {/* Action Buttons con efectos interactivos de hover */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              
              {/* Botón Principal: Empezar proyecto */}
              <a
                href="#contacto"
                className="group relative inline-flex items-center gap-2.5 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <span>Empezar proyecto</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Botón Secundario: Ver proyectos */}
              <a
                href="#proyectos"
                className="group relative inline-flex items-center gap-2 bg-white border-2 border-slate-200/90 hover:border-[#2563eb] text-slate-800 hover:text-[#2563eb] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xs hover:shadow-md hover:shadow-blue-500/10 hover:bg-blue-50/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Ver proyectos</span>
              </a>

            </div>

          </div>

          {/* Right Column: Dynamic Animation (Thinking -> Coding) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <HeroAnimation />
          </div>

        </div>
      </div>
    </section>
  );
}
