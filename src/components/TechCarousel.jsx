import React from 'react';

// Librería oficial Devicon
import pythonIcon from 'devicon/icons/python/python-original.svg';
import phpIcon from 'devicon/icons/php/php-original.svg';
import javaIcon from 'devicon/icons/java/java-original.svg';
import javascriptIcon from 'devicon/icons/javascript/javascript-original.svg';
import kotlinIcon from 'devicon/icons/kotlin/kotlin-original.svg';
import html5Icon from 'devicon/icons/html5/html5-original-wordmark.svg';
import css3Icon from 'devicon/icons/css3/css3-original-wordmark.svg';
import laravelIcon from 'devicon/icons/laravel/laravel-original.svg';
import djangoIcon from 'devicon/icons/django/django-plain.svg';
import springIcon from 'devicon/icons/spring/spring-original.svg';
import mysqlIcon from 'devicon/icons/mysql/mysql-original-wordmark.svg';
import sqliteIcon from 'devicon/icons/sqlite/sqlite-original.svg';
import mongodbIcon from 'devicon/icons/mongodb/mongodb-original.svg';
import reactIcon from 'devicon/icons/react/react-original.svg';
import gitIcon from 'devicon/icons/git/git-original.svg';
import githubIcon from 'devicon/icons/github/github-original.svg';
import linuxIcon from 'devicon/icons/linux/linux-original.svg';

export default function TechCarousel() {
  const technologies = [
    { name: 'Python', icon: pythonIcon },
    { name: 'PHP', icon: phpIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'Kotlin', icon: kotlinIcon },
    { name: 'HTML5', icon: html5Icon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'Django', icon: djangoIcon },
    { name: 'Spring Boot', icon: springIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'SQLite', icon: sqliteIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Linux', icon: linuxIcon },
  ];

  // Duplicamos 4 veces para garantizar un desplazamiento infinito y continuo sin cortes en cualquier resolución
  const marqueeItems = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="mt-20 pt-16 border-t border-slate-200/70">
      
      {/* Encabezado de tecnologías */}
      <div className="mb-12 sm:mb-16 px-2 sm:px-4">
        <h3 className="section-title text-4xl sm:text-5xl font-extrabold text-[#11245e] tracking-tight">
          Tecnologías que usamos
        </h3>
      </div>

      {/* Carrusel continuo con logos en tamaño grande y nítido */}
      <div className="relative w-full overflow-hidden py-6 sm:py-8">
        
        {/* Degradados laterales para desvanecimiento suave */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#fcfbf8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#fcfbf8] to-transparent z-10 pointer-events-none" />

        {/* Pista animada tipo marquee */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 lg:gap-20">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-125 cursor-pointer"
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-16 sm:h-20 lg:h-22 w-auto max-w-[90px] sm:max-w-[120px] lg:max-w-[130px] object-contain select-none"
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
