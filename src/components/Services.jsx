import React from 'react';
import { Globe, Smartphone, Rocket, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Aplicaciones Web',
      description:
        'Desarrollo de plataformas y sistemas web robustos, escalables y seguros, con paneles de administración personalizados y arquitecturas modernas listas para crecer.',
      icon: <Globe className="w-6 h-6" strokeWidth={2} />,
      tags: ['React & Node.js', 'Arquitectura Escalable', 'Sistemas a Medida'],
    },
    {
      title: 'Aplicaciones Móviles',
      description:
        'Creación de aplicaciones para iOS y Android con experiencias de usuario cuidadas, diseño intuitivo, alto rendimiento e integración de servicios en tiempo real.',
      icon: <Smartphone className="w-6 h-6" strokeWidth={2} />,
      tags: ['iOS & Android', 'Experiencia UI/UX', 'Rendimiento Fluido'],
    },
    {
      title: 'Landing Pages',
      description:
        'Páginas de aterrizaje de alto impacto visual y máxima velocidad de carga, diseñadas y estructuradas estratégicamente para captar clientes y maximizar conversiones.',
      icon: <Rocket className="w-6 h-6" strokeWidth={2} />,
      tags: ['Alta Conversión', 'Ultra Rápidas', '100% Responsivas'],
    },
    {
      title: 'Consultoría Tech',
      description:
        'Asesoría técnica integral para definir arquitecturas de software, optimizar flujos de trabajo con automatizaciones y seleccionar el stack tecnológico ideal para tu empresa.',
      icon: <Lightbulb className="w-6 h-6" strokeWidth={2} />,
      tags: ['Estrategia Digital', 'Automatización', 'Decisiones Técnicas'],
    },
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#2563eb] block mb-2">
            QUÉ HACEMOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1b3d] tracking-tight">
            Nuestros Servicios
          </h2>
        </div>

        {/* Cuadrícula 2x2 de tarjetas anchas redondeadas como en tu referencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl border border-slate-100 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
            >
              <div>
                {/* Contenedor del Icono */}
                <div className="w-13 h-13 rounded-2xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 shadow-xs">
                  {service.icon}
                </div>

                {/* Título del Servicio */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0e1b3d] mb-3 group-hover:text-[#2563eb] transition-colors">
                  {service.title}
                </h3>

                {/* Descripción Detallada */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags de Características / Tecnologías */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
