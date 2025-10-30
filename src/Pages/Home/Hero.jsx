import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full font-Montserrat overflow-x-hidden ">
      <section
        className="relative w-full min-h-[400px] sm:min-h-[450px] md:h-[600px] mt-[90px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 lg:px-10 2xl:px-14 "
        style={{
          backgroundImage: "url('../Images/Hero.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full py-8 text-white text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] font-bold leading-tight">
            Turn Sunlight Into
            <br />
            Savings
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-4 sm:mt-6 md:mt-8 max-w-2xl">
            Convert sunlight into substantial savings on your electricity bills
            with our efficient solar systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
            <button className="bg-[#1CD228] px-6 md:px-8 py-3 md:py-4 text-white rounded-lg hover:bg-[#18b824] transition-all flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
              Contact Us
              <FaArrowRight className="text-sm" />
            </button>

            <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base font-semibold">
              Learn More
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Hero;
