import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Sitio web',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectType: 'Sitio web',
        message: '',
      });
    }, 4000);
  };

  const contactItems = [
    {
      title: 'Email',
      value: 'contacto@tuagencia.com',
      href: 'mailto:contacto@tuagencia.com',
      icon: <Mail className="w-6 h-6 text-[#2563eb]" strokeWidth={1.8} />,
    },
    {
      title: 'WhatsApp',
      value: '+51 999 999 999',
      href: 'https://wa.me/51999999999',
      icon: <MessageCircle className="w-6 h-6 text-[#2563eb]" strokeWidth={1.8} />,
    },
    {
      title: 'Ubicación',
      value: 'Lima, Perú',
      href: '#',
      icon: <MapPin className="w-6 h-6 text-[#2563eb]" strokeWidth={1.8} />,
    },
  ];

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#2563eb] block mb-2">
            ESCRÍBENOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1b3d] tracking-tight">
            ¿Listo para digitalizar tu negocio?
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 shadow-xs p-6 sm:p-8">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-[#0e1b3d] mb-2">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Gracias por contactarnos. Nuestro equipo revisará tu solicitud y te responderemos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Nombre completo & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Tu nombre"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="tu@correo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Row 2: Empresa & Tipo de proyecto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Empresa / Negocio
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Tipo de proyecto
                    </label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition appearance-none cursor-pointer pr-10"
                      >
                        <option value="Sitio web">Sitio web</option>
                        <option value="Apps móviles">Apps móviles</option>
                        <option value="Automatización">Automatización</option>
                        <option value="Diseño UI/UX">Diseño UI/UX</option>
                        <option value="Consultoría / Otro">Consultoría / Otro</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Mensaje */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    ¿Qué te gustaría discutir con el equipo?
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Cuéntanos sobre tu proyecto"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#2563eb] hover:bg-blue-700 text-white font-medium text-sm sm:text-base py-3.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
                >
                  Solicitar cotización
                </button>
              </form>
            )}
          </div>

          {/* Right Column: 3 Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0e1b3d]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
