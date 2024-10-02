import React from 'react';
import Lottie from 'lottie-react';
import animationData2 from '../assets/animations/Animation-2.json';

const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 bg-gray-50 px-8 md:px-16 lg:px-32">
      {/* Animation */}
      <div className="w-full md:w-1/3 lg:w-1/3 mb-8 md:mb-0 flex justify-center items-center">
        <Lottie animationData={animationData2} loop={true} />
      </div>

      {/* Experience Content */}
      <div className="w-full md:w-2/3 lg:w-2/3 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800">Nagad Ltd.</h2>
          <p className="text-gray-600">
            Solution Engineer (Design & Solutions) | MARCH 2024 - PRESENT
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Designed and prototyped UX journeys for the digital bank.</li>
            <li>Prepared functional flows and PRDs with user stories.</li>
            <li>Developed an app automating acknowledgement forms, boosting efficiency by 20x.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800">Eve Industries LLC, USA</h2>
          <p className="text-gray-600">
            Lead Machine Learning Engineer | FEBRUARY 2024 (Project-based)
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Developed a facial recognition attendance system using OpenCV and Flask.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800">Genetica Industries Ltd</h2>
          <p className="text-gray-600">
            Business Development Executive | JUNE 2023 - FEB 2024
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Established communications with international clients (USA, AUS, IND).</li>
            <li>Conducted in-depth market research to generate business reports.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800">Future Track Bangladesh</h2>
          <p className="text-gray-600">
            Project Developer | SEPT 2021 - APRIL 2023
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Led a team of web scrapers collecting data from over 300 sites.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
