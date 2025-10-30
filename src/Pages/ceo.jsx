import React from "react";
import Team from "./Teams"

const Ceo = () => {
  return (
    <div className="mx-4 md:mx-12 lg:mx-[72px]">
      <div className="flex flex-col md:flex-row items-start  md:items-start gap-20 mt-[90px]">
        {/* Image Section */}
        <div className="w-full md:w-[648px] h-auto md:h-[661px] flex-shrink-0">
          <img
            src="../Images/face.png"
            alt="CEO"
            className="w-full h-full object-cover"
          />
        </div>


        {/* Text Section */}
        <div className="flex-1">
          <p className="text-[22px] sm:text-[24px] md:text-[28px] text-[#1CD228]">
            About us
          </p>

          <p className="text-[24px] sm:text-[26px] md:text-[30px] mt-[20px] font-medium">
            Korsmart Solar
          </p>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-3 text-[#5C5A5A] leading-relaxed">
            Korsmart Solar LTD is a renewable Energy Solution <br className="hidden sm:block" />
            Provider with emphasis on Solar Energy
          </p>

          <hr className="my-4 w-[600px] mt-[20px] color-[#5C5A5A]" />

          <p className="text-[16px] sm:text-[18px] mt-[30px] md:text-[20px] text-[#5C5A5A] leading-relaxed">
            At Korsmart, we're committed to powering <br />
             a sustainable future through smart, reliable solar energy <br />
              solutions. With a passion for innovation and a focus on  <br />
               quality, we provide  solar installations, maintenance, and <br /> 
               energy storage tailored to both homes and businesses. <br /> 
               Our mission is to make clean energy accessible, <br /> 
                affordable, and efficient for everyone.
          </p>


        <button className="bg-[#1CD228] mt-[40px] text-white px-4 sm:px-6 py-1 sm:py-2 rounded hover:bg-gray-5 transition text-sm sm:text-base">
        Contact us
       </button>


        </div>
       

      </div>
      
 


   

    </div>
  );
};

export default Ceo;
