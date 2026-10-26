import React, { useState, useEffect } from 'react';
import TechCarousel from './TechCarousel';
import { ExternalLink, ArrowUpRight, X, Check, Eye } from 'lucide-react';

import axislab1 from '../assets/axislab-1.png';
import axislab2 from '../assets/axislab-2.png';
import axislab4 from '../assets/axislab-4.png';

import pokenex1 from '../assets/pokenex-1.png';
import pokenex2 from '../assets/pokenex-2.png';
import pokenex3 from '../assets/pokenex-3.png';

import coyllor1 from '../assets/coyllor-1.png';
import coyllor2 from '../assets/coyllor-2.png';
import coyllor3 from '../assets/coyllor-3.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Maneja el bloqueo de scroll y reseteo de imagen activa al abrir el modal
  useEffect(() => {
    if (selectedProject) {
      setActiveImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Cerrar modal al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projects = [
    {
      id: '01',
      title: 'AxisLab',
      category: 'E-commerce · Impresión 3D',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      description:
        'Plataforma de comercio electrónico para modelos y diseños 3D en resina, con catálogo interactivo, seguimiento de producción en tiempo real y pasarela de pedidos.',
      fullDescription:
        'Plataforma de comercio electrónico para manufactura e impresión 3D en resina. Incluye catálogo interactivo con fichas técnicas, carrito de compras, seguimiento de pedidos con línea de tiempo en tiempo real y panel de administración.',
      features: [
        'Catálogo con modal de especificaciones técnicas',
        'Seguimiento de pedidos en tiempo real con línea de producción',
        'Panel administrativo para control de órdenes y clientes',
      ],
      image: axislab1,
      gallery: [axislab1, axislab2, axislab4],
      technologies: ['PHP', 'Laravel', 'MySQL'],
      projectUrl: 'https://github.com/fabian-raam/AxisLab',
      urlLabel: 'Ver en GitHub',
    },
    {
      id: '02',
      title: 'PokeNex',
      category: 'Landing Page · TCG',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/60',
      description:
        'Landing page y plataforma web temática para coleccionistas de cartas Pokémon TCG, con interfaz fluida, renderizado dinámico y alto rendimiento.',
      fullDescription:
        'Landing page temática de alto impacto para coleccionistas de cartas Pokémon TCG. Desarrollada en React para una experiencia fluida e inmersiva, conectada a una API en Python (Django) para el consumo ágil y optimizado de datos.',
      features: [
        'Frontend interactivo en React con diseño temático inmersivo',
        'Backend en Python (Django) para despacho eficiente de datos',
        'Rendimiento ultra rápido optimizado para dispositivos móviles',
      ],
      image: pokenex1,
      gallery: [pokenex1, pokenex2, pokenex3],
      technologies: ['React', 'Python', 'Django'],
      projectUrl: 'https://pokenex-demo.vercel.app/',
      urlLabel: 'Ver demo en vivo',
    },
    {
      id: '03',
      title: 'Coyllor',
      category: 'Gestión de Almacén y Personal',
      badgeColor: 'bg-[#eef7fc] text-[#11245e] border-[#d6ebf7]',
      description:
        'Software integral para la administración de inventario, logística física y control de asistencia de los trabajadores, con reportería y trazabilidad.',
      fullDescription:
        'Sistema web para la administración física de almacenes, control de herramientas y gestión de asistencia de los trabajadores. Permite registrar movimientos de stock, supervisar asistencias por fecha con exportación a Excel y administrar cuentas de usuario y permisos.',
      features: [
        'Control y trazabilidad de almacenes, zonas y herramientas',
        'Gestión y supervisión de asistencia del personal con exportación a Excel',
        'Panel administrativo con roles de usuarios y control de accesos',
      ],
      image: coyllor1,
      gallery: [coyllor1, coyllor2, coyllor3],
      technologies: ['PHP', 'Laravel', 'MySQL'],
      projectUrl: 'https://github.com/fabian-raam/coyllor-project',
      urlLabel: 'Ver en GitHub',
    },
  ];

  return (
    <section id="proyectos" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Elemento de fondo sutil */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 px-2 sm:px-4">
          <div className="w-full md:flex-1">
            <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#11245e] tracking-tight">
              Proyectos Destacados
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
              Soluciones digitales a medida construidas con ingeniería de software sólida, alto rendimiento y diseño centrado en el usuario.
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
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#8bc3e8] transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Imagen / Preview del Proyecto */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                <img
                  src={project.image}
                  alt={`Proyecto ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay al hacer hover con invitación a abrir modal */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-between p-4">
                  <span className="text-white text-xs font-semibold tracking-wide flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-sky-300" />
                    Ver detalles e imágenes
                  </span>
                  <span className="text-xs bg-white/20 text-white backdrop-blur-md px-2 py-0.5 rounded-md">
                    Abrir
                  </span>
                </div>

                {/* Badge de categoría flotante */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${project.badgeColor} bg-white/95 shadow-xs`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Información y detalles de la tarjeta */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#11245e] tracking-tight group-hover:text-[#1b3678] transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#11245e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stack de Tecnologías */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2.5">
                    Tecnologías utilizadas
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
      </div>

      {/* Apartado inferior: Tecnologías que usamos (Carrusel a ancho completo) */}
      <TechCarousel />

      {/* ======================================================== */}
      {/* VENTANA FLOTANTE: ARMONÍA VISUAL (MISMA ALTURA EN AMBOS LADOS) */}
      {/* ======================================================== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm transition-all"
          onClick={() => setSelectedProject(null)}
        >
          {/* Tarjeta del Modal con proporción equilibrada */}
          <div
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-5xl w-full max-h-[92vh] overflow-y-auto lg:overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar flotante */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-slate-100 text-slate-600 hover:text-slate-900 shadow-md border border-slate-200 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch flex-1">
              
              {/* COLUMNA IZQUIERDA: Exactamente 3 Imágenes (1 grande arriba y 3 miniaturas abajo) */}
              <div className="lg:col-span-7 p-6 sm:p-7 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between">
                <div>
                  {/* Imagen Principal Grande Arriba (Ocupa el espacio por completo, sin fondo negro) */}
                  <div className="relative aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm">
                    <img
                      src={selectedProject.gallery[activeImageIndex]}
                      alt={`${selectedProject.title} vista ${activeImageIndex + 1}`}
                      className="w-full h-full object-cover object-top transition-all duration-300"
                    />
                  </div>

                  {/* Imágenes Abajo que se van turnando al hacer clic (Ocupan el espacio por completo) */}
                  <div
                    className={`grid gap-3 sm:gap-4 mt-3.5 ${
                      selectedProject.gallery.length === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-3'
                    }`}
                  >
                    {selectedProject.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer bg-slate-100 ${
                          activeImageIndex === idx
                            ? 'border-[#11245e] shadow-md scale-[1.03] ring-2 ring-[#8bc3e8]/70'
                            : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Miniatura ${idx + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA: Armonía visual perfecta (Misma altura exacta que la galería) */}
              <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  {/* Badge de Categoría */}
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${selectedProject.badgeColor} mb-2.5`}
                  >
                    {selectedProject.category}
                  </span>

                  {/* Título del Proyecto */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#11245e] tracking-tight">
                    {selectedProject.title}
                  </h3>

                  {/* Descripción concisa y proporcionada */}
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Puntos Clave */}
                  <div className="mt-4 space-y-2">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                      Puntos Clave
                    </span>
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-[#eef7fc] text-[#11245e] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack de Tecnologías */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                      Tecnologías
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón Ver con Redirección a la Página / Repositorio */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#11245e] hover:bg-[#1b3678] text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group text-sm sm:text-base"
                  >
                    <span>{selectedProject.urlLabel}</span>
                    <ExternalLink className="w-4 h-4 text-[#8bc3e8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
