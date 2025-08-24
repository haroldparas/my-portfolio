import React from "react";
import { FiMail, FiUsers, FiLink, FiUser } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b0a14] to-[#1a172d] py-16 px-[8vw] md:px-[6vw] lg:px-[12vw]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10 text-center md:text-left">

        {/* Left Side - Let's Connect */}
        <div className="space-y-4 md:w-1/3">
          <h3 className="flex items-center justify-center md:justify-start gap-2 text-xl font-semibold text-white">
            <FiUsers className="text-2xl text-gray-300" />
            Let's Connect
          </h3>

          {/* Email */}
          <a
            href="mailto:haroldparas29@gmail.com"
            className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-white hover:underline transition"
          >
            <FiMail className="text-2xl" />
            haroldparas29@gmail.com
          </a>

          {/* Friendly Message */}
          <p className="text-gray-400 text-sm leading-relaxed">
            Let’s turn ideas into reality—connect with me and let’s build something meaningful together.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div className="space-y-4 md:w-1/3 md:border-x md:border-gray-700 md:px-6">
          <h3 className="flex items-center justify-center md:justify-start gap-2 text-xl font-semibold text-white">
            <FiLink className="text-2xl text-gray-300" />
            Quick Links
          </h3>
          <nav className="flex flex-col gap-3 text-sm text-gray-400">
            <a href="#about" className="hover:text-white hover:translate-x-1 transition-transform duration-200">About</a>
            <a href="#skills" className="hover:text-white hover:translate-x-1 transition-transform duration-200">Skills</a>
            <a href="#work" className="hover:text-white hover:translate-x-1 transition-transform duration-200">Projects</a>
            <a href="#contact" className="hover:text-white hover:translate-x-1 transition-transform duration-200">Contact</a>
          </nav>
        </div>

        {/* Right - Name + Portfolio Message */}
        <div className="space-y-4 md:w-1/3">
          <h3 className="flex items-center justify-center md:justify-start gap-2 text-xl font-semibold text-white">
            <FiUser className="text-2xl text-gray-300" />
            Harold Paras
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            A glimpse into my path as a full stack developer, driven by creativity and code.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10">
        <p className="text-xs text-gray-500 tracking-wide">© 2025 Paras. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
