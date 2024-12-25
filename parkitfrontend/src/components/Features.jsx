import React from 'react';
import { assets } from '../assets/assets';

const Feature = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col gap-16">

        {/* Parking Image and Description */}
        <div className="flex flex-col md:flex-row items-center gap-60 md:text-left text-center">
          <img
            className="w-60 h-60 lg:w-72 lg:h-72 object-contain rounded-lg"
            src={assets.parking}
            alt="Parking"
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl md:text-2xl font-semibold">Discover</p>
            <p className="text-xl md:text-2xl font-semibold">Amazing</p>
            <p className="text-xl md:text-2xl font-semibold">Spaces</p>
            <p>Find parking anywhere, for now or for later.</p>
          </div>
        </div>

        {/* Car Image and Description */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-60 md:text-left text-center">
          <img
            className="w-60 h-60 lg:w-72 lg:h-72 object-contain rounded-lg"
            src={assets.car_img}
            alt="Car"
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl md:text-2xl font-semibold">Drive</p>
            <p className="text-xl md:text-2xl font-semibold">Park</p>
            <p className="text-xl md:text-2xl font-semibold">Arrive</p>
            <p>Find parking anywhere, for now or for later.</p>
          </div>
        </div>

        {/* Scan Image and Description */}
        <div className="flex flex-col md:flex-row items-center gap-60 md:text-left text-center">
          <img
            className="w-60 h-60 lg:w-72 lg:h-72 object-contain rounded-lg"
            src={assets.scan}
            alt="Scan"
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-xl md:text-2xl font-semibold">Hassle-Free</p>
            <p className="text-xl md:text-2xl font-semibold">Booking</p>
            <p>Compare prices, see your total cost up-front, with a few taps for payments.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feature;
