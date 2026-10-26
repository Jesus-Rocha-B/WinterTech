import React from 'react';
import { Target, Compass, Users } from 'lucide-react';
import photoPark from '../assets/fabian-ramirez.jpg'; // Foto con lentes aviador en parque (Jesús Rocha)
import photoSuit from '../assets/jesus-rocha.jpg';   // Foto con terno y corbata (Fabián Ramírez)

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Fabián Ramírez',
      role: 'Co-fundador y Desarrollador de Software',
      image: photoSuit,
      objectPosition: 'object-top',
      description:
        'Especialista en arquitectura backend, lógica de negocio y administración de bases de datos relacionales con PHP, Laravel y MySQL. Enfocado en construir soluciones robustas, sistemas de inventario y plataformas e-commerce escalables.',
    },
    {
      name: 'Jesús Rocha',
      role: 'Co-fundador y Desarrollador de Software',
      image: photoPark,
      objectPosition: 'object-center',
      description:
        'Especialista en desarrollo frontend con React y aplicaciones web modernas con Python y Django. Apasionado por diseñar interfaces intuitivas, rendimiento optimizado y experiencias de usuario de alto impacto.',
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

        {/* ================= FILA SUPERIOR: MISIÓN (IZQUIERDA) Y VISIÓN (DERECHA) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Tarjeta Misión (Izquierda) */}
          <div className="bg-white rounded-3xl border border-slate-100 border-l-4 border-l-[#8bc3e8] shadow-xs p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#11245e] mb-3 flex items-center gap-2.5">
                <Target className="w-6 h-6 text-[#11245e]" />
                <span>Misión</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                En <strong>WinterTech</strong>, nuestra misión es diseñar, desarrollar e implementar software a la medida con estándares de ingeniería de primer nivel. Nos dedicamos a comprender a fondo las metas de cada negocio para crear plataformas web, aplicaciones móviles y automatizaciones que optimicen procesos operativos, reduzcan costos y aceleren el crecimiento digital sostenible de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Tarjeta Visión (Derecha) */}
          <div className="bg-white rounded-3xl border border-slate-100 border-l-4 border-l-[#f59e0b] shadow-xs p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#11245e] mb-3 flex items-center gap-2.5">
                <Compass className="w-6 h-6 text-[#f59e0b]" />
                <span>Visión</span>
              </h3>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Aspiramos a consolidarnos como la agencia referente de desarrollo tecnológico y software personalizado, reconocida por nuestra excelencia técnica, arquitecturas modernas y capacidad de resolver desafíos de alta complejidad. Buscamos ser el socio estratégico de confianza que impulse a empresas y startups a liderar sus industrias en la era digital.
              </p>
            </div>
          </div>

        </div>

        {/* ================= FILA INFERIOR: TARJETA NUESTRO EQUIPO (CON SUBTÍTULO E INFO DENTRO) ================= */}
        <div className="mt-6 lg:mt-8 bg-white rounded-3xl border border-slate-100 border-l-4 border-l-[#11245e] shadow-xs p-6 sm:p-8">
          
          {/* Encabezado dentro de la tarjeta */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#11245e] flex items-center gap-2.5">
              <Users className="w-6 h-6 text-[#11245e]" />
              <span>Nuestro Equipo</span>
            </h3>
          </div>

          {/* Contenido / Info de los miembros: Ramírez a la izquierda y Rocha a la derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#f8fafc] rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col sm:flex-row items-stretch hover:border-[#8bc3e8] hover:bg-[#f0f7fc]/40 hover:shadow-md transition-all duration-300 group"
              >
                {/* Foto de perfil ocupando TODO el espacio izquierdo de borde a borde */}
                <div className="w-full sm:w-40 md:w-44 lg:w-40 xl:w-48 h-60 sm:h-auto shrink-0 relative overflow-hidden bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.objectPosition} transition-transform duration-500 ease-out group-hover:scale-105`}
                  />
                </div>

                {/* Datos y descripción breve */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center">
                  <h4 className="text-lg sm:text-xl font-bold text-[#11245e] tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#11245e] bg-[#eef7fc] border border-[#d6ebf7] px-2.5 py-0.5 rounded-md inline-block w-fit mt-1.5">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-[13px] mt-2.5 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
