import React from 'react';
import Lottie from 'lottie-react';
import { FaCode, FaRobot, FaChartBar, FaSearch, FaProjectDiagram, FaFileAlt, FaSyncAlt, FaBolt } from 'react-icons/fa';
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
          <ul className="list-none pl-0 space-y-1">
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> React JS
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Next.js
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Vue.js
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Tailwind CSS
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> REST APIs
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Framer
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> AOS
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> JWT Authentication
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> HTML
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> CSS
            </li>
          </ul>
        </div>

        {/* Programming Skills Card */}
        <div className="border border-gray-300 shadow-md p-6 rounded-md hover:shadow-lg transition bg-white">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Programming</h2>
          <ul className="list-none pl-0 space-y-1">
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Python
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> SQL
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Fast API
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> YOLO Object Detection
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Tensorflow
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Pandas
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Matplotlib
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Scikit-Learn
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> FaceNet
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> OpenCV
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> MySQL
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> SQLite
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Beautiful Soup
            </li>
          </ul>
        </div>

        {/* Tools Skills Card */}
        <div className="border border-gray-300 shadow-md p-6 rounded-md hover:shadow-lg transition bg-white">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Tools</h2>
          <ul className="list-none pl-0 space-y-1">
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Figma
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Canva
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Postman
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Tableau
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Microsoft Office Suite
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Google Firebase
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> Latex
            </li>
            <li className="flex items-center">
              <FaBolt className="text-gray-700 mr-2" /> JIRA
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
