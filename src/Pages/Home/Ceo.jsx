import React from "react";

const Ceo = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-14 py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx- auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Image Section */}
          <div className="w-full order-2 lg:order-1">
            <img
              src="../Images/face.png"
              alt="CEO of Korsmart Solar"
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <h4 className="text-[#1CD228] text-sm sm:text-base font-semibold uppercase tracking-wide">
              About Us
            </h4>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-gray-900">
              Korsmart Solar
            </h2>

            <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed">
              Korsmart Solar LTD is a renewable energy solutions provider with a
              strong emphasis on solar innovation and sustainability.
            </p>

            <div className="my-6 border-t border-gray-300 w-20"></div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At Korsmart, we're committed to powering a sustainable future through
              smart, reliable solar energy solutions. With a passion for innovation
              and a focus on quality, we deliver solar installations, maintenance,
              and energy storage systems tailored for homes and businesses.
            </p>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
              Our mission is to make clean energy accessible, affordable, and
              efficient for everyone.
            </p>

            <button className="mt-8 bg-[#1CD228] hover:bg-[#18b91f] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceo;