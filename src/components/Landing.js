// src/components/Landing.js
import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Animation-4.json';

export default function Landing() {
  const [animateText, setAnimateText] = useState({
    lueprint: false,
    esign: false,
    evelop: false,
  });

  useEffect(() => {
    const startAnimationLoop = () => {
      // Sequentially animate each part of the text and loop indefinitely
      let counter = 0;
      const interval = setInterval(() => {
        setAnimateText((prev) => ({
          lueprint: counter === 0,
          esign: counter === 1,
          evelop: counter === 2,
        }));
        counter = (counter + 1) % 3; // Loop counter between 0 and 2
      }, 1500); // 1.5-second delay for each part
      return () => clearInterval(interval); // Clean up on component unmount
    };
    
    startAnimationLoop();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 p-8 md:p-16 lg:px-32 lg:py-16 font-orbitron"
    >
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        
        {/* Left: Animation */}
        <div className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
        
          <Lottie animationData={animationData} loop={true} />
        </div>

        {/* Right: Animated Text */}
        <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-right ml-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 flex items-center mr-2">
            <span className="text-7xl md:text-9xl text-cyan-700">B</span>
            <span
              className={`transition-opacity duration-500 ease-out transform ${
                animateText.lueprint ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
            >
              lueprint
            </span>
          </h1>
          <h1 className="text-4xl mr-2 md:text-6xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="text-7xl md:text-9xl text-cyan-700">D</span>
            <span
              className={`transition-opacity duration-500 ease-out transform ${
                animateText.esign ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
            >
              esign
            </span>
          </h1>
          <h1 className="text-4xl mr-2 md:text-6xl font-bold text-gray-800 flex items-center">
            <span className="text-7xl md:text-9xl text-cyan-700">D</span>
            <span
              className={`transition-opacity duration-500 ease-out transform ${
                animateText.evelop ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
            >
              evelop
            </span>
          </h1>
          <h4
              className= "transition-opacity text-sm mt-10 duration-500 ease-out transform"
            >
              Frontend & UX Engineer
            </h4>
        </div>
      </div>
    </section>
  );
}
