import React from 'react';
import Lottie from 'lottie-react';
import animationData3 from '../assets/animations/Animation-3.json';

const CertificationsAndAchievements = () => {
  return (
    <section id="certificationsandachievements" className="flex flex-col md:flex-row-reverse items-center justify-center min-h-screen py-16 bg-gray-50 px-8 md:px-16 lg:px-32 font-sans">
      
      {/* Animation */}
      <div className="w-full md:w-1/3 lg:w-1/3 mb-8 md:mb-0 flex justify-center items-center">
        <Lottie animationData={animationData3} loop={true} />
      </div>

      {/* Certifications and Achievements Content */}
      <div className="w-full md:w-2/3 lg:w-2/3 space-y-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-violet-800 font-orbitron">Certifications</h2>
          <ul className="list-disc pl-5 mb-6">
            <li>IBM AI Engineering Professional Certificate</li>
            <li>University of Alberta Software Product Management Professional Certificate</li>
            <li>Generative AI - Google Cloud Skills Boost</li>
            <li>Kaggle Data Analysis and Machine Learning Microcourses</li>
            <li>Business Analysis & Process Management and IBM Data Science Courses - Coursera</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-violet-800 font-orbitron">Achievements</h2>
          <ul className="list-disc pl-5">
            <li>Kaggle Notebooks Master and Discussions Expert</li>
            <li>Hackerrank 5-star gold badge for problem-solving with Python</li>
            <li>3-time EDEXCEL High Achievers Award and Daily Star Award</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAndAchievements;
