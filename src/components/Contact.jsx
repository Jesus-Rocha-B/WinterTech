import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, CheckCircle2, Loader2, Check } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

export default function Contact() {
  const AGENCY_EMAIL = 'wintertech.contacto@correo.com';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Sitio web',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const projectDropdownRef = useRef(null);

  const projectOptions = [
    'Sitio web',
    'Apps móviles',
    'Automatización',
    'Diseño UI/UX',
    'Consultoría / Otro',
  ];

  // Cerrar dropdown al hacer click fuera o al presionar Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        projectDropdownRef.current &&
        !projectDropdownRef.current.contains(event.target)
      ) {
        setIsProjectDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsProjectDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelectProjectType = (option) => {
    setFormData((prev) => ({ ...prev, projectType: option }));
    setIsProjectDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Envío automático al correo oficial mediante FormSubmit AJAX
      const response = await fetch(`https://formsubmit.co/ajax/${AGENCY_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nombre: formData.fullName,
          Email: formData.email,
          Empresa: formData.company || 'No especificada',
          'Tipo de Proyecto': formData.projectType,
          Mensaje: formData.message,
          _subject: `Nuevo contacto desde WinterTech Web: ${formData.fullName}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback mediante mailto si hay bloqueo de red o adblocker
        window.location.href = `mailto:${AGENCY_EMAIL}?subject=Consulta%20desde%20WinterTech:%20${encodeURIComponent(
          formData.fullName
        )}&body=${encodeURIComponent(
          `Nombre: ${formData.fullName}\nEmail: ${formData.email}\nEmpresa: ${formData.company}\nTipo de Proyecto: ${formData.projectType}\n\nMensaje:\n${formData.message}`
        )}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback seguro en caso de error
      window.location.href = `mailto:${AGENCY_EMAIL}?subject=Consulta%20desde%20WinterTech:%20${encodeURIComponent(
        formData.fullName
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.fullName}\nEmail: ${formData.email}\nEmpresa: ${formData.company}\nTipo de Proyecto: ${formData.projectType}\n\nMensaje:\n${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          projectType: 'Sitio web',
          message: '',
        });
      }, 5000);
    }
  };

  const contactItems = [
    {
      title: 'Email',
      value: AGENCY_EMAIL,
      href: `mailto:${AGENCY_EMAIL}`,
      icon: <FaEnvelope className="w-5 h-5 text-[#11245e]" />,
      target: '_self',
    },
    {
      title: 'WhatsApp',
      value: '+51 999 999 999',
      href: 'https://wa.me/51999999999',
      icon: <FaWhatsapp className="w-6 h-6 text-[#11245e]" />,
      target: '_blank',
    },
    {
      title: 'Ubicación',
      value: 'Lima, Perú',
      href: 'https://maps.google.com/?q=Lima,Peru',
      icon: <FaLocationDot className="w-5 h-5 text-[#11245e]" />,
      target: '_blank',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/winter__tech/',
      icon: <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#11245e]" />,
      hoverClass: 'hover:border-[#11245e] hover:text-[#11245e] hover:bg-[#eef7fc]',
      tooltip: 'Instagram: @winter__tech',
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@wintertech_',
      icon: <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 text-[#11245e]" />,
      hoverClass: 'hover:border-[#11245e] hover:text-[#11245e] hover:bg-[#eef7fc]',
      tooltip: 'TikTok: @wintertech_',
    },
  ];

  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 px-2 sm:px-4">
          <h2 className="section-title text-4xl sm:text-5xl font-extrabold text-[#11245e] tracking-tight">
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
                <h3 className="text-2xl font-bold text-[#11245e] mb-2">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Gracias por contactarnos. Tu consulta fue enviada a <strong>{AGENCY_EMAIL}</strong> y te responderemos a la brevedad.
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
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8bc3e8] focus:bg-white transition"
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
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8bc3e8] focus:bg-white transition"
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
                      className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8bc3e8] focus:bg-white transition"
                    />
                  </div>
                  <div className="relative" ref={projectDropdownRef}>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Tipo de proyecto
                    </label>
                    <input
                      type="hidden"
                      name="projectType"
                      value={formData.projectType}
                    />
                    <button
                      type="button"
                      onClick={() => setIsProjectDropdownOpen((prev) => !prev)}
                      aria-haspopup="listbox"
                      aria-expanded={isProjectDropdownOpen}
                      className={`w-full bg-[#f8fafc] border rounded-xl px-4 py-3 text-sm text-left flex items-center justify-between transition cursor-pointer ${
                        isProjectDropdownOpen
                          ? 'border-[#8bc3e8] ring-2 ring-[#8bc3e8] bg-white text-[#11245e] shadow-xs'
                          : 'border-slate-200 text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <span className="font-medium truncate">{formData.projectType}</span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isProjectDropdownOpen
                            ? 'rotate-180 text-[#11245e]'
                            : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Desplegable personalizado con diseño redondeado y armónico */}
                    {isProjectDropdownOpen && (
                      <div
                        role="listbox"
                        className="absolute z-30 left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl p-1.5 space-y-0.5 overflow-hidden"
                      >
                        {projectOptions.map((option) => {
                          const isSelected = formData.projectType === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => handleSelectProjectType(option)}
                              className={`w-full text-left px-3.5 py-2 rounded-xl text-xs sm:text-[13px] transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? 'bg-[#eef7fc] text-[#11245e] font-semibold'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                              }`}
                            >
                              <span>{option}</span>
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 text-[#11245e] stroke-[2.5]" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
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
                    className="w-full bg-[#f8fafc] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8bc3e8] focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#11245e] hover:bg-[#0b1948] disabled:opacity-75 text-white font-medium text-sm sm:text-base py-3.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando mensaje a {AGENCY_EMAIL}...</span>
                    </>
                  ) : (
                    <span>Solicitar cotización</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info Cards + Social Media Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.target}
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eef7fc] border border-[#d6ebf7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#11245e]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5 font-medium">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Redes Sociales exactamente como la referencia (Instagram, TikTok, WhatsApp, GitHub) */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-5 sm:p-6 mt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3.5">
                Redes Sociales Oficiales
              </span>
              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border border-slate-200/90 bg-white shadow-xs flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md text-slate-700 ${social.hoverClass} group`}
                    title={social.tooltip}
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
