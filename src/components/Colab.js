import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane, FaDownload } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Colab = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ message: '', type: '' });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ message: '', type: '' });

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: 'Azmain',
      message: formData.message,
      reply_to: formData.email
    };

    emailjs
      .send(
        'service_ae7rafs', // Replace with your EmailJS service ID
        'template_n5fa70d', // Replace with your EmailJS template ID
        templateParams,
        'PHwu2lCye6Xwre5tD' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage({ message: 'Message sent successfully!', type: 'success' });
          setFormData({ name: '', email: '', message: '' }); // Reset the form
        },
        (error) => {
          console.error('FAILED...', error);
          setStatusMessage({ message: 'Failed to send the message, please try again later.', type: 'error' });
        }
      )
      .finally(() => {
        setLoading(false); // End the loading state
      });
  };

  return (
    <section id='colab' className="bg-gradient-to-r from-gray-700 to-teal-700 flex flex-col md:flex-row items-center justify-center md:p-8 pb-12 min-h-1/2 space-y-2 md:space-y-0 md:space-x-8">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start p-2 text-center">
        <h1 className="text-gray-50 text-6xl font-bold font-orbitron md:mb-6 pt-8">Let's Colab</h1>
        <p className="text-lg text-gray-100 mt-4 mb-2">
          Download my Resume{' '}
          <span>
            <a
              href="https://drive.google.com/uc?export=download&id=1EC07NmQCBoFmmAoGrRAoDYM_iNI93GsS"
              target="_blank"
              rel="noopener noreferrer"
              download="Azmain_Morshed_CV.pdf"
              className="text-3xl inline-block text-gray-100 font-medium leading-tight uppercase hover:transition duration-150 ease-in-out"
            >
              <FaDownload className="mr-0 ml-2 hover:text-teal-400 hover:scale-105 transition ease-in-out duration-300" />
            </a>
          </span>{' '}
          {/* <span className="text-4xl font-semibold font-orbitron text-gray-50 ml-14">OR</span> */}
        </p>
      </div>

      {/* Right Section: Form */}
      <div className="sm:p-8 md:w-1/2 border-sm border-teal-700 px-10 py-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-light mb-4 text-teal-600 font-orbitron">Reach me out directly:</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 mb-4 border border-gray-300 rounded"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 mb-4 border border-gray-300 rounded"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 mb-4 border border-gray-300 rounded"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`inline-flex items-center justify-center p-3 ${
              loading ? 'bg-gray-500' : 'bg-teal-600'
            } text-white font-orbitron font-medium text-lg rounded shadow-md ${
              loading ? '' : 'hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg active:bg-teal-800'
            } hover:scale-105 transition ease-in-out duration-300`}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin mr-2" />
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Send
              </>
            )}
          </button>
        </form>

        {/* Status message */}
        {statusMessage.message && (
          <div
            className={`mt-4 p-3 rounded ${
              statusMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {statusMessage.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Colab;
