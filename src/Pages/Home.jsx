import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Service from "./Service";
import Ceo from "./ceo";
import Team from "./Team"

const Home = () => {
  return (
    <div className="w-full relative font-Montserrat overflow-x-hidden">
      {/* Background Image Container */}
      <div className="relative w-full min-h-[400px] sm:min-h-[450px] md:h-[600px] mt-[100px]">
      <img 
      src="../Images/Hero.png" 
      alt="Hero" 
     className="absolute inset-0 w-full h-full object-cover object-center"
     />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content Overlay - Responsive positioning */}
        <div className="absolute inset-0 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-6xl text-left md:text-left">
            <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold leading-tight">
              <p>Turn Sunlight Into</p>
              <p>Savings</p>
            </div>

            <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-4 sm:mt-6 md:mt-8 max-w-2xl mx-auto md:mx-0">
              <p>
                Convert Sunlight into substantial savings on your <br className="hidden sm:block" />
                Electricity Bills With our Efficient Solar Systems
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
              <button className="bg-[#1CD228] px-5 sm:px-6 md:px-[30px] py-3 sm:py-3 md:py-[15px] text-white rounded-lg hover:bg-[#18b824] transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>Contact Us</span>
                <FaArrowRight className="text-sm" />
              </button>

              <button className="px-5 sm:px-6 md:px-[30px] py-3 sm:py-3 md:py-[15px] border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>Learn More</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed spacing container for Service component */}
      <div className="mt-8 sm:mt-12 md:mt-[80px]">
        <Service />
      </div>

      <div>
      <Ceo/> 
      </div>
     
     
     
     



    </div>
  );
};

export default Home;