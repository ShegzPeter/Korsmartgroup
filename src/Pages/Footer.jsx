import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12 lg:gap-20">
        {/* Logo and Subscribe */}
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Korsmart Energy</h2>
          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Enter Your Email."
              className="flex-1 px-4 py-3 rounded-l-md text-gray-900 focus:outline-none border border-amber-50 bg-white"
            />
            <button className="bg-[rgba(40,40,40,1)] text-white px-5 py-3 font-semibold rounded-r-md hover:bg-gray-600 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-5 text-2xl">
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Utility</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Style guide</a></li>
            <li><a href="#" className="hover:text-white">License</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-300 break-words">KorsmartEnergy@gmail.com</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Korsmart Energy. All rights reserved.
      </div>
    </footer>
  );
}