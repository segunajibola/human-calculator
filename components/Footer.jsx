import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="my-10 mx-2 flex justify-between items-center">
        <div>
          <p className="font-bold">Quick Links:</p>
          <ul className="flex flex-col space-x-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          {/* Add social media icons and links */}
          <p className="font-bold mb-2">Connect with me:</p>
          <div className="flex space-x-4">
            {/* Add social media icons and links */}
            <a href="#" className="text-white hover:text-gray-300">
              {/* Example social media icon (replace with your own) */}
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              {/* Example social media icon (replace with your own) */}
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              {/* Example social media icon (replace with your own) */}
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
