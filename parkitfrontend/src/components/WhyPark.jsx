
import React from 'react';
import { assets } from '../assets/assets';

const WhyPark = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Why park with Park IT?</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
        {/* Image 1 */}
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
            src={assets.user_interface}
            alt="User-Friendly Interface"
          />
          <p className="text-base font-medium">User-Friendly Interface</p>
          <p className="text-sm text-gray-600">
            Reserve a space with a few taps and skip the parking hunt.
          </p>
        </div>

        {/* Image 2 */}
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
            src={assets.shield}
            alt="Secure & Reliable"
          />
          <p className="text-base font-medium">Secure & Reliable</p>
          <p className="text-sm text-gray-600">
            Pay securely and receive a prepaid parking pass instantly in the app.
          </p>
        </div>

        {/* Image 3 */}
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
            src={assets.timer}
            alt="Time Efficiency"
          />
          <p className="text-base font-medium">Time Efficiency</p>
          <p className="text-sm text-gray-600">
            Park your car in seconds and go do your thing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPark;
