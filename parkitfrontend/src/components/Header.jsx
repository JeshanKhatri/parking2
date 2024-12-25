import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center gap-6 py-10 md:py-[5vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-black font-semibold leading-tight">
          Welcome to the <br /> Parking Management System
        </p>
        <p className="text-black text-sm font-light">
          Our parking management system provides a seamless solution <br className="hidden sm:block" />
          for tracking and managing your vehicle’s parking time. <br />
          We ensure transparent and accurate fee calculations, <br />
          making parking hassle-free.
        </p>
        <a
          className="flex items-center gap-2 bg-primary px-8 py-3 rounded-full text-white text-sm"
          href=""
        >
          Get Started <img src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex items-center justify-center py-10 md:py-[5vw]">
        <img
          className="w-full max-w-md md:max-w-full h-auto object-contain rounded-lg"
          src={assets.home_img}
          alt="Home"
        />
      </div>
    </div>
  );
};

export default Header;
