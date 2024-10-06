import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6">
      {visible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 focus:outline-none transition duration-300 ease-in-out"
          title="Back to Top"
        >
          <FaChevronUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
