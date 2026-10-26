import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="winter-background min-h-screen text-slate-800 font-sans">
      <div className="winter-snow" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
