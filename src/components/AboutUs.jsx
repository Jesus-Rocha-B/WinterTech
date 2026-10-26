import React from 'react';
import { Target, Compass } from 'lucide-react';
import photoPark from '../assets/fabian-ramirez.jpg'; // Foto con lentes aviador en parque
import photoSuit from '../assets/jesus-rocha.jpg';   // Foto con terno y corbata

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Fabian Ramirez',
      role: 'Co-fundador y Desarrollador de Software',
      image: photoSuit,
      objectPosition: 'object-top',
    },
    {
      name: 'Jesus Rocha',
      role: 'Co-fundador y Desarrollador de Software',
      image: photoPark,
      objectPosition: 'object-center',
    },
  ];

  return (
    <section id="nosotros" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de sección */}
        <div className="mb-12 sm:mb-16 px-2 sm:px-4">
          <h2 className="section-title text-4xl sm:text-5xl font-extrabold text-[#11245e] tracking-tight">
            Nosotros
          </h2>
        </div>

        {/* Estructura de 2 Columnas perfectamente equilibradas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ================= COLUMNA IZQUIERDA: NUESTRO EQUIPO ================= */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-100 shadow-xs p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#11245e] mb-6">
                Nuestro Equipo
              </h3>

              {/* 2 Tarjetas de perfil compactas con fotos asignadas correctamente */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 my-auto pt-2 pb-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex flex-col items-center text-center group">
                    {/* Contenedor compacto con proporción elegante */}
                    <div className="w-32 h-40 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover ${member.objectPosition} transition-transform duration-300 group-hover:scale-105`}
                      />
                    </div>

                    {/* Nombre y Cargo */}
                    <h4 className="font-bold text-[#11245e] text-sm sm:text-base mt-3">
                      {member.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= COLUMNA DERECHA: MISIÓN Y VISIÓN ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Tarjeta Misión */}
            <div className="bg-white rounded-3xl border border-slate-100 border-l-4 border-l-[#8bc3e8] shadow-xs p-6 sm:p-7 flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-[#11245e] mb-2.5 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#11245e]" />
                <span>Misión</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                En <strong>WinterTech</strong>, nuestra misión es diseñar, desarrollar e implementar software a la medida con estándares de ingeniería de primer nivel. Nos dedicamos a comprender a fondo las metas de cada negocio para crear plataformas web, aplicaciones móviles y automatizaciones que optimicen procesos operativos, reduzcan costos y aceleren el crecimiento digital sostenible de nuestros clientes.
              </p>
            </div>

            {/* Tarjeta Visión */}
            <div className="bg-white rounded-3xl border border-slate-100 border-l-4 border-l-[#f59e0b] shadow-xs p-6 sm:p-7 flex-1 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-[#11245e] mb-2.5 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#f59e0b]" />
                <span>Visión</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Aspiramos a consolidarnos como la agencia referente de desarrollo tecnológico y software personalizado, reconocida por nuestra excelencia técnica, arquitecturas modernas y capacidad de resolver desafíos de alta complejidad. Buscamos ser el socio estratégico de confianza que impulse a empresas y startups a liderar sus industrias en la era digital.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
