import React from "react";
import { FaWhatsapp, FaX, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="my-10 mx-2 flex flex-col justify-between gap-3">
        <div>
          <p className="font-bold mb-3">Quick Links:</p>
          <ul className="flex flex-col space-y-2">
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
          <p className="font-bold mb-2">Connect with me:</p>
          <div className="flex gap-2">
            <a href="https://wa.me/2348105729893" className="">
              <FaWhatsapp size={30}/>
            </a>
            <a href="https://wa.me/2348105729893" className="">
              <FaInstagram size={30}/>
            </a>
            <a href="https://wa.me/2348105729893" className="">
              <FaYoutube size={30}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
