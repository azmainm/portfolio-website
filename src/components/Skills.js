import React from 'react';
import Lottie from 'lottie-react';
import { FaCode, FaRobot, FaChartBar, FaSearch, FaProjectDiagram, FaFileAlt, FaSyncAlt } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { SiVisualstudiocode, SiAirtable } from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';
import animationData from '../assets/animations/Animation-2.json'; // Use your Animation-2.json file path

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-8 bg-gray-50 font-orbitron">
        <h1 className='text-black text-4xl font-bold font-orbitron mb-4'>Skills</h1>
      {/* Animation on the Left */}
      <div className="w-full md:w-1/3 lg:w-1/3 mb-8 md:mb-0">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Skills Cards */}
      <div className="w-full md:w-2/3 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Core Skills Card */}
        <div className="border border-gray-300 shadow-md p-6 rounded-md hover:shadow-lg transition bg-white">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Core</h2>
          <ul className="list-none pl-0 space-y-3">
            <li className="flex items-center">
              <FaCode className="text-blue-500 mr-2" /> Frontend Development
            </li>
            <li className="flex items-center">
              <MdOutlineDesignServices className="text-green-500 mr-2" /> UX Design
            </li>
            <li className="flex items-center">
              <FaSyncAlt className="text-yellow-500 mr-2" /> Automation
            </li>
            <li className="flex items-center">
              <FaSearch className="text-red-500 mr-2" /> Web Scraping
            </li>
            <li className="flex items-center">
              <FaChartBar className="text-purple-500 mr-2" /> Data Analytics
            </li>
            <li className="flex items-center">
              <FaProjectDiagram className="text-teal-500 mr-2" /> Data Cleaning
            </li>
            <li className="flex items-center">
              <SiVisualstudiocode className="text-indigo-500 mr-2" /> Data Visualization
            </li>
            <li className="flex items-center">
              <FaFileAlt className="text-orange-500 mr-2" /> Documentation
            </li>
            <li className="flex items-center">
              <SiAirtable className="text-pink-500 mr-2" /> Agile Methodologies
            </li>
            <li className="flex items-center">
              <TbBrain className="text-gray-500 mr-2" /> Prompt Engineering
            </li>
            <li className="flex items-center">
              <FaRobot className="text-blue-600 mr-2" /> AI Model Training
            </li>
          </ul>
        </div>

        {/* Web Development Skills Card */}
        <div className="border border-gray-300 shadow-md p-6 rounded-md hover:shadow-lg transition bg-white">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Web Development</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>React JS</li>
            <li>Next.js</li>
            <li>Vue.js</li>
            <li>Tailwind CSS</li>
            <li>REST APIs</li>
            <li>Framer</li>
            <li>AOS</li>
            <li>JWT Authentication</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>

        {/* Programming Skills Card */}
        <div className="border border-gray-300 shadow-md p-6 rounded-md hover:shadow-lg transition bg-white">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Programming</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Python</li>
            <li>SQL</li>
            <li>Fast API</li>
            <li>YOLO Object Detection</li>
            <li>Tensorflow</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Scikit-Learn</li>
            <li>FaceNet</li>
            <li>OpenCV</li>
            <li>MySQL</li>
            <li>SQLite</li>
            <li>Beautiful Soup</li>
          </ul>
        </div>

        {/* Tools Skills Card */}
        <div className="border border-gray-300 shadow-md p-6 rounded-md hover:shadow-lg transition bg-white">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Tools</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Figma</li>
            <li>Canva</li>
            <li>Postman</li>
            <li>Tableau</li>
            <li>Microsoft Office Suite</li>
            <li>Google Firebase</li>
            <li>Latex</li>
            <li>Excel</li>
            <li>JIRA</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
