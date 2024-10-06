import React from 'react';
import Lottie from 'lottie-react';
import { FaGithub, FaKaggle, FaDribbble } from 'react-icons/fa';
import animationData from '../assets/animations/Animation-3.json'; // Use your Animation-3.json file path

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 bg-gray-50 px-8 md:px-16 lg:px-32 font-sans">
      {/* Animation on the Left */}
      <div className="w-full md:w-1/3 lg:w-1/3 mb-8 md:mb-0 flex justify-center items-center flex-col">
        <h1 className="text-black text-4xl font-bold font-orbitron mb-4">Projects</h1>
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Projects Section */}
      <div className="w-full md:w-2/3 lg:w-2/3 space-y-12">
        {/* Web Development Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-cyan-700 font-orbitron">Web Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="WebMint"
              description="Developed a fully functional front-end web financial services app using Vue.js, Tailwind, AOS, Chart.js, and REST API."
              link="https://webmint-money.vercel.app/"
            />
            <ProjectCard
              title="Maximus"
              description="Developed a full stack fitness blogging site using Next.js, Tailwind, Framer, FastAPI, and SQLite."
              link="https://maximus-phi.vercel.app/"
            />
            <ProjectCard
              title="Jackpt"
              description="Developed the front end of a bartering platform using React.js & Tailwind
CSS."
              link="https://jackptbd.com/"
            />
          </div>
          <a href="https://github.com/azmainm" target="_blank" rel="noopener noreferrer" className="text-lg flex items-center mt-4 text-cyan-600 hover:underline">
            <FaGithub className="mr-2" /> View More on GitHub
          </a>
        </div>

        {/* Design Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-cyan-700 font-orbitron">Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Augmented Reality Interior Design App Case Study"
              description="Case study and wireframe design for an interior design AR app."
              link="https://dribbble.com/"
            />
            <ProjectCard
              title="Jackpt Mobile App"
              description="Wireframed, Designed and Prototyped the entire app's UX and UI."
              link="https://dribbble.com/"
            />
          </div>
          <a href="https://dribbble.com/azmainm" target="_blank" rel="noopener noreferrer" className="text-lg flex items-center mt-4 text-cyan-600 hover:underline">
            <FaDribbble className="mr-2" /> View More on Dribbble
          </a>
        </div>

        {/* Machine Learning Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-cyan-700 font-orbitron">Machine Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
              title="IBM Employee Churn Analysis & Prediction"
              description="Data Preprocessing, Feature
Engineering, Exploratory Data Analysis, Model Building, and Documentation using
Pandas, Matplotlib, Seaborn & Scikit-Learn"
              link="https://www.kaggle.com/code/azmainmorshed/ibm-employee-churn-prediction-eda."
            />
            <ProjectCard
              title="Facial Recognition Attendance System"
              description="Developed facial recognition registration and attendance system using OpenCV, FaceNet, Flask, and React."
              link="https://kaggle.com/"
            />
            <ProjectCard
              title="AirBnb Home Listings Analysis & Visualization"
              description="Tableau Analysis & Visualization."
              link="https://shorturl.at/CFJVX"
            />
          </div>
          <a href="http://kaggle.com/azmainmorshed" target="_blank" rel="noopener noreferrer" className="text-lg flex items-center mt-4 text-cyan-600 hover:underline">
            <FaKaggle className="mr-2" /> View More on Kaggle
          </a>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, description, link }) => (
  <div className="border border-gray-300 shadow-md p-6 rounded-md hover:shadow-lg transition flex flex-col bg-white">
    <h3 className="text-lg font-bold text-gray-800 mb-2 font-orbitron tracking-wider">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto text-cyan-600 hover:underline"
    >
      View Project
    </a>
  </div>
);
