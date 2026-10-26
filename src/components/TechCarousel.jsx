import React from 'react';

// Librería oficial Devicon - Logos exactos de la referencia
import cppIcon from 'devicon/icons/cplusplus/cplusplus-original.svg';
import css3Icon from 'devicon/icons/css3/css3-original-wordmark.svg';
import figmaIcon from 'devicon/icons/figma/figma-original.svg';
import flutterIcon from 'devicon/icons/flutter/flutter-original.svg';
import githubIcon from 'devicon/icons/github/github-original.svg';
import goIcon from 'devicon/icons/go/go-original-wordmark.svg';
import html5Icon from 'devicon/icons/html5/html5-original-wordmark.svg';
import javaIcon from 'devicon/icons/java/java-original.svg';
import javascriptIcon from 'devicon/icons/javascript/javascript-original.svg';
import postgresqlIcon from 'devicon/icons/postgresql/postgresql-original.svg';
import postmanIcon from 'devicon/icons/postman/postman-original.svg';
import pythonIcon from 'devicon/icons/python/python-original.svg';
import reactIcon from 'devicon/icons/react/react-original.svg';
import rubyIcon from 'devicon/icons/ruby/ruby-original.svg';
import mysqlIcon from 'devicon/icons/mysql/mysql-original-wordmark.svg';
import tailwindIcon from 'devicon/icons/tailwindcss/tailwindcss-original.svg';
import ubuntuIcon from 'devicon/icons/ubuntu/ubuntu-original.svg';
import vscodeIcon from 'devicon/icons/vscode/vscode-original.svg';
import vueIcon from 'devicon/icons/vuejs/vuejs-original.svg';
import angularIcon from 'devicon/icons/angularjs/angularjs-original.svg';

// Tecnologías adicionales del stack
import phpIcon from 'devicon/icons/php/php-original.svg';
import laravelIcon from 'devicon/icons/laravel/laravel-original.svg';
import djangoIcon from 'devicon/icons/django/django-plain.svg';
import springIcon from 'devicon/icons/spring/spring-original.svg';
import kotlinIcon from 'devicon/icons/kotlin/kotlin-original.svg';
import sqliteIcon from 'devicon/icons/sqlite/sqlite-original.svg';
import mongodbIcon from 'devicon/icons/mongodb/mongodb-original.svg';
import gitIcon from 'devicon/icons/git/git-original.svg';
import linuxIcon from 'devicon/icons/linux/linux-original.svg';

export default function TechCarousel() {
  const technologies = [
    // Secuencia exacta del banner de referencia
    { name: 'C++', icon: cppIcon },
    { name: 'CSS3', icon: css3Icon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Flutter', icon: flutterIcon },
    { name: 'GitHub', icon: githubIcon },
    { name: 'Go', icon: goIcon },
    { name: 'HTML5', icon: html5Icon },
    { name: 'Java', icon: javaIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Ruby', icon: rubyIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Ubuntu', icon: ubuntuIcon },
    { name: 'VS Code', icon: vscodeIcon },
    { name: 'Vue.js', icon: vueIcon },
    { name: 'Angular', icon: angularIcon },
    // Tecnologías del stack WinterTech
    { name: 'PHP', icon: phpIcon },
    { name: 'Laravel', icon: laravelIcon },
    { name: 'Django', icon: djangoIcon },
    { name: 'Spring Boot', icon: springIcon },
    { name: 'Kotlin', icon: kotlinIcon },
    { name: 'SQLite', icon: sqliteIcon },
    { name: 'MongoDB', icon: mongodbIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Linux', icon: linuxIcon },
  ];

  // Duplicamos para loop continuo seamless
  const marqueeItems = [
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="mt-20 pt-14 border-t border-slate-200/60">
      
      {/* Encabezado limpio: solo STACK TECNOLÓGICO y Tecnologías que usamos */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#11245e] block mb-2">
          STACK TECNOLÓGICO
        </span>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#11245e] tracking-tight">
          Tecnologías que usamos
        </h3>
      </div>

      {/* Tira continua de iconos exactamente como la imagen de referencia */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Degradados laterales para desvanecimiento suave */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fcfbf8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fcfbf8] to-transparent z-10 pointer-events-none" />

        {/* Pista animada continua */}
        <div className="animate-marquee flex items-center gap-7 sm:gap-9 lg:gap-11">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-115 cursor-pointer"
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-11 sm:h-13 lg:h-14 w-auto max-w-[95px] object-contain select-none"
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
