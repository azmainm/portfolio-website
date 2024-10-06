// src/Portfolio.js
import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import logo from './assets/logo.png'; // Import the logo
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import CertificationsAndAchievements from './components/CertificationsAndAchievements';
import Colab from './components/Colab'

export default function Portfolio() {
  return (
    <div className="bg-white">
      {/* Header with Logo and Navbar */}
      <header className="w-full bg-white sticky top-0 z-50 shadow-lg">
        <div className="flex flex-col items-center">
          {/* Logo (Centered on desktop/tablet) */}
          <img
            src={logo}
            alt="Logo"
            className="w-1/3 h-20 object-contain mt-4 mb-0 hidden md:block" // Hidden on mobile screens
          />
          <Navbar logo={logo} />
        </div>
      </header>

      {/* Main Sections */}
      <Landing />
      <Projects />
      <Skills />
      <Colab />
      <Experience />
      <Education />
      <CertificationsAndAchievements />
      <Contact />
    </div>
  );
}
