import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left side - Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={assets.logoo} alt="ParkIt Logo" className="w-15 h-10" />
         </div>

        {/* Center - Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="/contact" className="hover:text-primary">Contact</a>
          <a href="/privacy" className="hover:text-primary">Privacy & Terms</a>
        </div>

        {/* Right side - Copyright */}
        <div className="text-sm text-gray-500">
          Copyright &copy; ParkIt 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
