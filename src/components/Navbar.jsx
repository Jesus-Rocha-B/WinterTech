import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/wintertech-logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('nosotros');
  const [scrolled, setScrolled] = useState(false);

  // Referencias para control preciso de la animación líquida
  const tabsRef = useRef({});
  const prevActiveRef = useRef('nosotros');
  const animTimerRef = useRef(null);
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    transition: 'all 250ms ease-out',
  });

  const navLinks = [
    { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
    { id: 'servicios', label: 'Servicios', href: '#servicios' },
    { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
    { id: 'contacto', label: 'Contáctanos', href: '#contacto' },
  ];

  // Función de transición líquida y elástica sin saltos ni tirones
  const updatePillPosition = (targetId, isInstant = false) => {
    if (!targetId || !tabsRef.current[targetId]) {
      setPillStyle((prev) => ({ ...prev, opacity: 0, transition: 'opacity 200ms ease' }));
      return;
    }

    // Cancelar cualquier animación anterior pendiente para evitar conflictos
    if (animTimerRef.current) {
      clearTimeout(animTimerRef.current);
    }

    const targetEl = tabsRef.current[targetId];
    const targetLeft = targetEl.offsetLeft;
    const targetWidth = targetEl.offsetWidth;

    const prevId = prevActiveRef.current;
    const prevEl = prevId && tabsRef.current[prevId] ? tabsRef.current[prevId] : null;

    if (!isInstant && prevEl && prevId !== targetId) {
      const prevLeft = prevEl.offsetLeft;
      const prevWidth = prevEl.offsetWidth;

      // 1. Estiramiento líquido fluido: la píldora se expande abarcando ambas secciones
      const stretchLeft = Math.min(prevLeft, targetLeft);
      const stretchWidth = Math.max(prevLeft + prevWidth, targetLeft + targetWidth) - stretchLeft;

      setPillStyle({
        left: stretchLeft,
        width: stretchWidth,
        opacity: 1,
        transition: 'left 140ms cubic-bezier(0.2, 0.8, 0.25, 1), width 140ms cubic-bezier(0.2, 0.8, 0.25, 1), opacity 150ms ease',
      });

      // 2. Acomodación elástica: el extremo opuesto se contrae suavemente a la forma exacta de la palabra
      animTimerRef.current = setTimeout(() => {
        setPillStyle({
          left: targetLeft,
          width: targetWidth,
          opacity: 1,
          transition: 'left 220ms cubic-bezier(0.22, 1, 0.36, 1), width 220ms cubic-bezier(0.22, 1, 0.36, 1)',
        });
      }, 120);
    } else {
      // Posicionamiento directo sin salto
      setPillStyle({
        left: targetLeft,
        width: targetWidth,
        opacity: 1,
        transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
      });
    }

    prevActiveRef.current = targetId;
  };

  // Actualiza la posición de la píldora cuando cambia la sección activa
  useEffect(() => {
    updatePillPosition(activeSection);
  }, [activeSection]);

  // Recalcula la posición inicial de forma segura
  useEffect(() => {
    const timer = setTimeout(() => {
      updatePillPosition(activeSection || 'nosotros', true);
    }, 120);

    const handleResize = () => updatePillPosition(activeSection || 'nosotros', true);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Detecta el scroll continuo sin interferir con los clics manuales
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      // Si el usuario acaba de hacer clic, evitamos que el scroll interfiera en la animación
      if (isClickScrollingRef.current) return;

      const scrollPosition = window.scrollY + 250;

      // Si está en el Hero arriba del todo, se mantiene invisible o suave
      if (window.scrollY < 300) {
        setActiveSection('');
        return;
      }

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manejador de clic con bloqueo de interferencias durante el scroll suave
  const handleLinkClick = (e, id) => {
    e.preventDefault();

    // Bloqueamos interferencias del scroll por 750ms para que la animación sea 100% fluida
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 750);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 750);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'ios-glass-bar-scrolled' : 'ios-glass-bar'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo WinterTech: actúa como botón de Inicio con transparencia 100% nativa */}
          <a
            href="#inicio"
            onClick={handleLogoClick}
            className="flex items-center group py-1.5 focus:outline-none"
            title="Ir al inicio"
          >
            <img
              src={logoImg}
              alt="WinterTech"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation en cápsula con píldora elástica líquida */}
          <nav className="hidden md:flex items-center relative ios-glass-pill p-1.5 rounded-full shadow-xs">
            
            {/* Píldora deslizante elástica con contorno oscuro y sombra exacta a tu referencia */}
            <span
              className="absolute top-1.5 bottom-1.5 bg-[#2563eb] border-2 border-slate-900 rounded-full shadow-md shadow-blue-500/35 pointer-events-none will-change-[left,width] z-0"
              style={{
                left: `${pillStyle.left}px`,
                width: `${pillStyle.width}px`,
                opacity: pillStyle.opacity,
                transition: pillStyle.transition,
              }}
            />

            {/* Enlaces de texto sobre la píldora */}
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  ref={(el) => (tabsRef.current[link.id] = el)}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`relative z-10 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-700 hover:text-[#0e1b3d]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Botón de acción: Cotizar */}
          <div className="hidden md:flex items-center">
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, 'contacto')}
              className="group relative inline-flex items-center gap-1.5 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-sm shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
            >
              <span>Cotizar</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown con efecto glass */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 ios-glass-bar-scrolled px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`block px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  isActive
                    ? 'bg-[#2563eb] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, 'contacto')}
              className="block w-full text-center bg-[#2563eb] hover:bg-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-sm transition-all"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
