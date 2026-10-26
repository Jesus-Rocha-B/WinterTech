import React, { useState, useEffect } from 'react';
import characterIdea from '../assets/character-idea.png';
import characterCoding from '../assets/character-coding.png';

export default function HeroAnimation() {
  const [phase, setPhase] = useState('thinking'); // 'thinking' | 'coding'
  const [isHovered, setIsHovered] = useState(false);

  // Alterna automáticamente: Pensando (3.8s) -> Programando (4.2s) -> bucle
  useEffect(() => {
    const duration = phase === 'thinking' ? 3800 : 4200;
    const timer = setTimeout(() => {
      setPhase((prev) => (prev === 'thinking' ? 'coding' : 'thinking'));
    }, duration);

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div
      className="relative w-full flex items-center justify-center select-none py-4 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ================================================================ */}
      {/* RESPLANDOR Y SOMBRA TRASERA INTENSA (AMARILLO / AZUL)            */}
      {/* Al pasar el ratón (hover) se expande, brilla e intensifica mucho más */}
      {/* ================================================================ */}
      
      {/* Capa 1: Aura amplia de luz ambiental */}
      <div
        className={`absolute rounded-full transition-all duration-500 ease-out pointer-events-none -z-10 ${
          isHovered
            ? 'w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] blur-[80px] opacity-100 scale-125'
            : 'w-72 h-72 sm:w-[380px] sm:h-[380px] blur-[60px] opacity-70 scale-100'
        } ${
          phase === 'thinking'
            ? 'bg-amber-400'
            : 'bg-blue-500'
        }`}
      ></div>

      {/* Capa 2: Foco central intenso con gradiente radial */}
      <div
        className={`absolute rounded-full transition-all duration-500 ease-out pointer-events-none -z-10 ${
          isHovered
            ? 'w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] blur-[50px] opacity-90 scale-120'
            : 'w-64 h-64 sm:w-[320px] sm:h-[320px] blur-[40px] opacity-60 scale-100'
        } ${
          phase === 'thinking'
            ? 'bg-gradient-to-tr from-amber-500 via-yellow-400 to-orange-400'
            : 'bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600'
        }`}
      ></div>

      {/* ================================================================ */}
      {/* CONTENEDOR DEL PERSONAJE (EN ALTA DEFINICIÓN HD)                 */}
      {/* ================================================================ */}
      <div className="relative w-full max-w-[290px] sm:max-w-[340px] lg:max-w-[380px] aspect-[1/1] flex items-center justify-center">

        {/* 1. PERSONAJE PENSANDO (con la bombilla) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            phase === 'thinking'
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Foco de luz concentrado en la bombilla (amarillo intenso) */}
          <div
            className={`absolute top-2 left-6 sm:left-10 rounded-full transition-all duration-500 pointer-events-none animate-bulb-glow ${
              isHovered
                ? 'w-40 h-40 bg-amber-300/90 blur-2xl scale-130'
                : 'w-28 h-28 bg-amber-400/70 blur-xl scale-100'
            }`}
          ></div>

          {/* Imagen de alta definición sin compresión */}
          <div
            className={`relative z-10 animate-float-slow w-full h-full flex items-center justify-center transition-transform duration-500 will-change-transform ${
              isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'
            }`}
          >
            <img
              src={characterIdea}
              alt="Personaje pensando solución WinterTech"
              className={`w-full h-full object-contain transition-all duration-500 ${
                isHovered
                  ? 'drop-shadow-[0_20px_40px_rgba(245,158,11,0.85)]'
                  : 'drop-shadow-[0_8px_20px_rgba(245,158,11,0.45)]'
              }`}
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </div>

        {/* 2. PERSONAJE PROGRAMANDO (en la laptop) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
            phase === 'coding'
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Foco de luz azul concentrado en la pantalla de la laptop */}
          <div
            className={`absolute bottom-6 left-6 sm:left-10 rounded-full transition-all duration-500 pointer-events-none animate-pulse ${
              isHovered
                ? 'w-40 h-40 bg-blue-400/90 blur-2xl scale-130'
                : 'w-28 h-28 bg-blue-500/65 blur-xl scale-100'
            }`}
          ></div>

          {/* Imagen de alta definición sin compresión */}
          <div
            className={`relative z-10 animate-typing-vibe w-full h-full flex items-center justify-center transition-transform duration-500 will-change-transform ${
              isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'
            }`}
          >
            <img
              src={characterCoding}
              alt="Personaje programando en laptop WinterTech"
              className={`w-full h-full object-contain transition-all duration-500 ${
                isHovered
                  ? 'drop-shadow-[0_20px_40px_rgba(37,99,235,0.85)]'
                  : 'drop-shadow-[0_8px_20px_rgba(37,99,235,0.45)]'
              }`}
              style={{ imageRendering: 'auto' }}
            />
          </div>
        </div>

      </div>

    </div>
  );
}
