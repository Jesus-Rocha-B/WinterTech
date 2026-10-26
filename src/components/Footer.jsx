import React from 'react';
import logoImg from '../assets/wintertech-logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoImg}
            alt="WinterTech"
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} WinterTech. Todos los derechos reservados.
        </p>

        {/* Quick Links */}
        <div className="flex items-center gap-6">
          <a href="#nosotros" className="text-xs text-slate-500 hover:text-blue-600 transition">
            Nosotros
          </a>
          <a href="#servicios" className="text-xs text-slate-500 hover:text-blue-600 transition">
            Servicios
          </a>
          <a href="#proyectos" className="text-xs text-slate-500 hover:text-blue-600 transition">
            Proyectos
          </a>
          <a href="#contacto" className="text-xs text-slate-500 hover:text-blue-600 transition">
            Contacto
          </a>
        </div>

      </div>
    </footer>
  );
}
