import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="w-full mt-[100px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-14 py-16 font-Montserrat">
      {/* Header */}
      <div className="text-left mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Contact Us
          <span className="block w-16 h-1 bg-green-600 mt-1"></span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-3">
          Any Question or Remarks? Just write us a message!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
        {/* Left - Image */}
        <div className="w-full">
          <img
            src="./Images/man3.png"
            alt="Solar worker installing panels"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right - Form */}
        <form className="w-full space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="mt-1 block w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-y"
            />

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-3 bg-[#1CD228] hover:bg-[#18b91f] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto"
          >
            Submit <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
