import React from 'react';
import Lottie from 'lottie-react';
import animationData2 from '../assets/animations/Animation-2.json';

const Education = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 bg-gray-50 px-8 md:px-16 lg:px-32">
      {/* Animation */}
      <div className="w-full md:w-1/3 lg:w-1/3 mb-8 md:mb-0 flex justify-center items-center">
        <Lottie animationData={animationData2} loop={true} />
      </div>

      {/* Education Content */}
      <div className="w-full md:w-2/3 lg:w-2/3 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800">Academic Education</h2>
          <p className="text-gray-600">
            **Brac University, Dhaka, Bangladesh** - *Bachelor of Science in Computer Science* | OCTOBER 2020 - JANUARY 2024
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li><strong>Graduated Cum Laude</strong> with a GPA of 3.67/4.0</li>
            <li>Maintained 50% Merit Scholarship throughout the program</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800">Professional Education</h2>
          <ul className="list-disc pl-5">
            <li>IBM AI Engineering Professional Certificate</li>
            <li>University of Alberta Software Product Management Professional Certificate</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
