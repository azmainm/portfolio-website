import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaKaggle, FaDribbble } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData1 from '../assets/animations/Animation-1.json';
import animationData2 from '../assets/animations/Animation-2.json';
import animationData3 from '../assets/animations/Animation-3.json';

export default function Contact() {
  return (
    <section id="contact" className="py-8 bg-gray-50 px-8 md:px-16 lg:px-32 text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-5 font-orbitron ">Find Me</h2>
      <div className="flex justify-center space-x-8 text-violet-600 mb-8">
        <a href="mailto:azmainmorshed03@gmail.com" className="hover:text-violet-800 transition">
          <FaEnvelope size={40} />
        </a>
        <a href="https://linkedin.com/in/azmain-morshed/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800 transition">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/azmainm" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800 transition">
          <FaGithub size={40} />
        </a>
        <a href="http://kaggle.com/azmainmorshed" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800 transition">
          <FaKaggle size={40} />
        </a>
        <a href="https://dribbble.com/azmainm" target="_blank" rel="noopener noreferrer" className="hover:text-violet-800 transition">
          <FaDribbble size={40} />
        </a>
      </div>
      <footer className="text-gray-700 font-orbitron">Developed by Azmain Morshed</footer>
    </section>
    
  );
}
