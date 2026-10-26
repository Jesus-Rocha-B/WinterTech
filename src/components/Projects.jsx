import React from 'react';
import TechCarousel from './TechCarousel';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

import axislabImg from '../assets/project-axislab.png';
import pokenexImg from '../assets/project-pokenex.png';
import coyllorImg from '../assets/project-coyllor.png';

export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'AxisLab',
      category: 'E-commerce',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      description:
        'Plataforma de comercio electrÃ³nico con arquitectura moderna, catÃ¡logo dinÃ¡mico de productos, gestiÃ³n de Ã³rdenes y pasarela de pagos integrada.',
      image: axislabImg,
      technologies: ['PHP', 'Laravel', 'MySQL'],
      accentColor: 'from-emerald-500/10 to-transparent',
    },
    {
      id: '02',
      title: 'PokeNex',
      category: 'Landing Page Â· TCG',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/60',
      description:
        'Landing page y plataforma web temÃ¡tica para coleccionistas de cartas PokÃ©mon TCG, con interfaz fluida, renderizado dinÃ¡mico y alto rendimiento.',
      image: pokenexImg,
      technologies: ['React', 'Python', 'Django'],
      accentColor: 'from-amber-500/10 to-transparent',
    },
    {
      id: '03',
      title: 'Coyllor',
      category: 'GestiÃ³n de AlmacÃ©n / Productos',
      badgeColor: 'bg-[#eef7fc] text-[#11245e] border-[#d6ebf7]',
      description:
        'Software integral para la administraciÃ³n de inventario, control de entradas y salidas de almacÃ©n, trazabilidad de productos y reporterÃ­a en tiempo real.',
      image: coyllorImg,
      technologies: ['Laravel', 'PHP', 'MySQL'],
      accentColor: 'from-sky-500/10 to-transparent',
    },
  ];

  return (
    <section id="proyectos" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Elemento de fondo sutil */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de secciÃ³n */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 px-2 sm:px-4">
          <div className="w-full md:flex-1">
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#11245e] tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
              Soluciones digitales a medida construidas con ingenierÃ­a de software sÃ³lida, alto rendimiento y diseÃ±o centrado en el usuario.
            </p>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#11245e] bg-white border border-slate-200 shadow-xs hover:bg-[#eef7fc] hover:border-[#8bc3e8] transition-all duration-200 group self-start md:self-auto"
          >
            <span>Iniciar mi proyecto</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Grid de 3 Tarjetas de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#8bc3e8] transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Imagen / Preview del Proyecto */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden border-b border-slate-100">
                <img
                  src={project.image}
                  alt={`Proyecto ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay degradado sutil al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-4">
                  <span className="text-white text-xs font-medium tracking-wide flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-sky-300" />
                    Vista del proyecto
                  </span>
                </div>

                {/* Badge de categorÃ­a flotante */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${project.badgeColor} bg-white/95 shadow-xs`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* InformaciÃ³n y detalles de la tarjeta */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#11245e] tracking-tight group-hover:text-[#11245e] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stack de TecnologÃ­as */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2.5">
                    TecnologÃ­as utilizadas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apartado inferior: TecnologÃ­as que usamos (Carrusel) */}
        <TechCarousel />

      </div>
    </section>
  );
}
