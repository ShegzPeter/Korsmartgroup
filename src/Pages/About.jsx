import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  const services = [
    {
      title: "Install Solar Panels",
      image: "./Images/man1.png",
    },
    {
      title: "Solar Panel",
      image: "./Images/sol.png",
    },
  ];

  return (
    <div className="w-full mx-auto mt-[150px] pb-28 px-4 md:px-14 lg:px-10 xl:px-14 font-Montserrat">
      {/* Header */}
      <div className="text-left mb-10">
        <h2 className="text-3xl font-semibold mb-2">
          About us 
          <span className="block w-16 h-1 bg-green-600 mt-1"></span>
        </h2>
      </div>

      {/* Intro Text + CTA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-6">
        <p className="max-w-full md:max-w-[500px] text-[#434242] text-base">
          From residential installations to commercial systems, Korsmart
          delivers tailored solar services designed to maximize energy
          efficiency and long-term savings.
        </p>

        <button className="bg-[#1CD228] px-6 md:px-[30px] text-white py-3 md:py-[15px] rounded whitespace-nowrap">
          <div className="flex items-center gap-3">
            <p>Contact Us</p>
            <FaArrowRight />
          </div>
        </button>
      </div>

      <div className="my-20">
        <img src="/Images/man1.png" alt="solar installation" className="h-full max-h-[30rem] w-full"/>
      </div>

      {/* Grid of Images */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[538px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full order-2 lg:order-1">
            <img
              src="./Images/work.png"
              alt="CEO of Korsmart Solar"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-xl"
            />
          </div>

          <div className="order-1 lg:order-2">

            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-medium font-Montserrat text-gray-900">
              Empower your Home with Solar Solutions
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mt-10 leading-relaxed">
              Make the switch to clean, renewable energy 
              with our customized solar services. Whether 
              you're powering a home or business, we deliver 
              reliable, affordable, and future-ready solar solutions
              tailored to your needs.
            </p>

            <button className="mt-8 bg-[#1CD228] hover:bg-[#18b91f] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
