import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50 bg-white shadow-xl w-full h-[97px] px-4 sm:px-8 py-4 flex items-center justify-between font-Montserrat">
      {/* Logo Section */}
      <div className="w-[120px] md:w-[180px] h-auto">
        <img src="./Images/logo.png" alt="Logo" className="w-full" />
      </div>

      {/* Desktop Navigation Links - Hidden on mobile */}
      <div className="hidden md:flex gap-4 lg:gap-8 text-gray-700">
        <Link to="/" className="cursor-pointer hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/services" className="cursor-pointer hover:text-blue-600 transition-colors">Service</Link>
        <Link to="/about" className="cursor-pointer hover:text-blue-600 transition-colors">About Us</Link>
        <Link to="/contact" className="cursor-pointer hover:text-blue-600 transition-colors">Contact Us</Link>
      </div>

      {/* Mobile Menu Button - Visible only on mobile */}
      <button 
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu - Shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              to="/" 
              className="cursor-pointer hover:text-blue-600 transition-colors border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="cursor-pointer hover:text-blue-600 transition-colors border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              Service
            </Link>
            <Link 
              to="/about" 
              className="cursor-pointer hover:text-blue-600 transition-colors border-b border-gray-100 pb-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
