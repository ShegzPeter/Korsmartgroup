import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Service = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-[72px]">
      {/* Header */}
      <div className="text-[28px] font-Montserrat">
        <button>Services</button>
      </div>

      {/* Intro Text + Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 md:mt-[30px] gap-6">
        <div className="max-w-full md:max-w-[500px]">
          <p className="text-[#434242] text-base">
            From residential installations to commercial systems, Korsmart delivers tailored solar services designed to maximize energy efficiency and long-term saving.
          </p>
        </div>

        <div>
          <button className="bg-[#1CD228] px-6 md:px-[30px] text-white py-3 md:py-[15px] rounded whitespace-nowrap">
            <div className="flex items-center gap-3">
              <p>Contact Us</p>
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-8 space-y-4 md:space-y-2">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2">
          {/* Card 1 */}
          <div className="w-full md:w-[calc(50%-4px)] h-[300px] sm:h-[400px] md:h-[538px] relative group overflow-hidden rounded-lg">
            <img 
              src="./Images/man1.png" 
              alt="Man" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold">Install Solar Panels</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-md">Premium quality Installations done by modern professionals</p>
              <div className="mt-4 sm:mt-6 flex gap-3">
                <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">Contact us</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-[calc(50%-4px)] h-[300px] sm:h-[400px] md:h-[538px] relative group overflow-hidden rounded-lg">
            <img 
              src="./Images/fan.png" 
              alt="Fan" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold">Cooling Solutions</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-md">Energy-efficient fans with whisper-quiet operation</p>
              <div className="mt-4 sm:mt-6 flex gap-3">
                <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">Shop Fans</button>
                <button className="border border-white text-white px-6 py-2 rounded hover:bg-white/10 text-sm sm:text-base">Compare Models</button>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2">
          {/* Card 3 */}
          <div className="w-full md:w-[calc(50%-4px)] h-[300px] sm:h-[400px] md:h-[538px] relative group overflow-hidden rounded-lg">
            <img 
              src="./Images/sol.png" 
              alt="Solar Panel" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold">Solar Panel</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-md">Eco-friendly solar solution with high energy conversion rate.</p>
              <div className="mt-4 sm:mt-6 flex gap-3">
                <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">Buy Now</button>
                <button className="border border-white text-white px-6 py-2 rounded hover:bg-white/10 text-sm sm:text-base">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full md:w-[calc(50%-4px)] h-[300px] sm:h-[400px] md:h-[538px] relative group overflow-hidden rounded-lg">
            <img 
              src="./Images/work.png" 
              alt="Workspace" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold">Workspace Essentials</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base max-w-md">Everything you need for a productive work environment</p>
              <div className="mt-4 sm:mt-6 flex gap-3">
                <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 text-sm sm:text-base">Shop Now</button>
                <button className="border border-white text-white px-6 py-2 rounded hover:bg-white/10 text-sm sm:text-base">Office Solutions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;