import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar({ logo }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle for the side navbar
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-center bg-white text-gray-700 z-50 w-full font-orbitron text-sm">
        <div className="container flex items-center justify-center space-x-8 py-4">
          {/* Navigation Links */}
          <a href="#home" className="hover:text-violet-600 text-gray-800">Home</a>
          <a href="#projects" className="hover:text-violet-600 text-gray-800">Projects</a>
          <a href="#skills" className="hover:text-violet-600 text-gray-800">Skills</a>
          <a href="#experience" className="hover:text-violet-600 text-gray-800">Experience</a>
          <a href="#education" className="hover:text-violet-600 text-gray-800">Education</a>
          <a href="#certificationsandachievements" className="hover:text-violet-600 text-gray-800">Certifications</a>
          <a href="#certificationsandachievements" className="hover:text-violet-600 text-gray-800">Achievements</a>
          <a href="#contact" className="hover:text-violet-600 text-gray-800">Contact</a>
        </div>
      </nav>

      {/* Mobile Navbar with Hamburger Menu */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 bg-white shadow-sm w-full">
        {/* Mobile Logo */}
        <img src={logo} alt="Logo" className="w-52 h-24 object-contain" />
        {/* Hamburger Menu */}
        <button onClick={toggleNavbar} className="text-3xl focus:outline-none">
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Side Navbar (Mobile) */}
      <div
        className={`bg-gradient-to-r from-white to-violet-100 fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white border shadow-lg z-50 transform transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end px-4 pt-4 pb-0">
          <button onClick={toggleNavbar} className="text-3xl">
            <AiOutlineClose />
          </button>
        </div>

        {/* Navigation Links (Vertical) */}
        <div className="flex flex-col text-left space-y-6 mt-10 ml-10 mb-10 font-orbitron">
          <a href="#home" onClick={toggleNavbar} className="text-gray-800 text-lg font-light">Home</a>
          <a href="#projects" onClick={toggleNavbar} className="text-gray-800 text-lg font-light">Projects</a>
          <a href="#skills" onClick={toggleNavbar} className="text-gray-800 text-lg font-light">Skills</a>
          <a href="#experience" onClick={toggleNavbar} className="text-gray-800 text-lg font-light">Experience</a>
          <a href="#education" onClick={toggleNavbar} className="text-gray-800 text-lg font-light">Education</a>
          <a href="#certificationsandachievements" onClick={toggleNavbar} className="text-gray-800 text-lg font-light">Certifications</a>
          <a href="#certificationsandachievements" onClick={toggleNavbar} className="text-gray-800 text-lg font-light">Achievements</a>
          <a href="#contact" onClick={toggleNavbar} className="text-gray-800 text-lg font-light pb-10">Contact</a>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-10 ml-2">
            <a href="https://github.com/azmainm" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-violet-800 text-3xl hover:text-violet-600 transition-colors duration-200" />
            </a>
            <a href="https://linkedin.com/in/azmain-morshed/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-violet-800 text-3xl hover:text-violet-600 transition-colors duration-200" />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-gray-600 text-sm mt-6">
            Copyright © All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
