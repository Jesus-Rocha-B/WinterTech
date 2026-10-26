import React from 'react';

// Librería oficial Devicon - Únicamente las tecnologías que usa WinterTech
import pythonIcon from 'devicon/icons/python/python-original.svg';
import phpIcon from 'devicon/icons/php/php-original.svg';
import javaIcon from 'devicon/icons/java/java-original.svg';
import javascriptIcon from 'devicon/icons/javascript/javascript-original.svg';
import kotlinIcon from 'devicon/icons/kotlin/kotlin-original.svg';
import html5Icon from 'devicon/icons/html5/html5-original-wordmark.svg';
import css3Icon from 'devicon/icons/css3/css3-original-wordmark.svg';
import reactIcon from 'devicon/icons/react/react-original.svg';
import laravelIcon from 'devicon/icons/laravel/laravel-original.svg';
import djangoIcon from 'devicon/icons/django/django-plain.svg';
import springIcon from 'devicon/icons/spring/spring-original.svg';
import mysqlIcon from 'devicon/icons/mysql/mysql-original-wordmark.svg';
import sqliteIcon from 'devicon/icons/sqlite/sqlite-original.svg';
import mongodbIcon from 'devicon/icons/mongodb/mongodb-original.svg';
import gitIcon from 'devicon/icons/git/git-original.svg';
import githubIcon from 'devicon/icons/github/github-original.svg';
import linuxIcon from 'devicon/icons/linux/linux-original.svg';

export default function TechCarousel() {
  // Tecnologías de WinterTech
  const technologies = [
    { name: 'Python', icon: pythonIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'Kotlin', icon: kotlinIcon },
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'React', icon: reactIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'Django', icon: djangoIcon },
    { name: 'Spring Boot', icon: springIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'SQLite', icon: sqliteIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Linux', icon: linuxIcon },
  ];

  // Duplicamos 4 veces para loop continuo seamless
  const marqueeItems = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="mt-20 sm:mt-28 pt-14 border-t border-slate-200/60 w-full">
      
      {/* Encabezado limpio: solo STACK TECNOLÓGICO y Tecnologías que usamos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#11245e] block mb-2">
          STACK TECNOLÓGICO
        </span>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11245e] tracking-tight">
          Tecnologías que usamos
        </h3>
      </div>

      {/* Tira continua a ancho completo de pantalla con iconos grandes */}
      <div className="relative w-full overflow-hidden py-6 sm:py-8 lg:py-10">
        
        {/* Degradados laterales suaves para desvanecimiento */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#fcfbf8] via-[#fcfbf8]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#fcfbf8] via-[#fcfbf8]/80 to-transparent z-10 pointer-events-none" />

        {/* Pista animada tipo marquee con mayor escala y espaciado proporcional */}
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 lg:gap-16">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-120 cursor-pointer"
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-[60px] sm:h-[76px] lg:h-[88px] w-auto max-w-[110px] sm:max-w-[140px] lg:max-w-[160px] object-contain select-none"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
