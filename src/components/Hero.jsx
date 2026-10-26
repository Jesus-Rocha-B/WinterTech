import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroAnimation from './HeroAnimation';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] font-black text-[#11245e] leading-[1.02] tracking-tight">
              Software a la<br />
              medida para<br />
              <span className="relative inline-block px-2">
                <span className="relative z-10">hacer crecer</span>
                <span className="absolute inset-x-0 top-[8%] bottom-[4%] -rotate-1 rounded-xl bg-[#cfe8ff]"></span>
              </span>{' '}
              tu<br />
              negocio
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet: desarrollamos pÃ¡ginas web, aplicaciones y automatizaciones pensadas para tu empresa.
            </p>

            {/* Action Buttons con efectos interactivos de hover */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              
              {/* BotÃ³n Principal: Empezar proyecto */}
              <a
                href="#contacto"
                className="group relative inline-flex items-center gap-3 bg-[#11245e] border border-[#11245e] text-white font-semibold text-sm sm:text-base px-7 py-3 rounded-xl shadow-sm hover:bg-[#1b3678] hover:border-[#1b3678] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Empezar proyecto</span>
                <ArrowRight className="w-4 h-4 text-[#8bc3e8] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* BotÃ³n Secundario: Ver proyectos */}
              <a
                href="#proyectos"
                className="group relative inline-flex items-center gap-3 bg-[#fcfbf8] border border-[#cfe3f0] hover:border-[#8bc3e8] text-[#11245e] font-semibold text-sm sm:text-base px-7 py-3 rounded-xl hover:bg-[#eef7fc] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Ver proyectos</span>
                <ArrowRight className="w-4 h-4 text-[#11245e] transition-transform duration-200 group-hover:translate-x-1" />
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
