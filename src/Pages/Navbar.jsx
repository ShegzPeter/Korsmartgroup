import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close the mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Determine if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 z-50 bg-white shadow-lg w-full h-[90px] px-4 sm:px-8 lg:px-10 xl:px-14 flex items-center justify-between font-Montserrat transition-all duration-300">
      {/* Logo Section */}
      <Link to="/" className="w-[120px] md:w-[160px] h-auto">
        <img src="./Images/logo.png" alt="Logo" className="w-full" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-10 text-gray-700">
        {[
          { path: "/", label: "Home" },
          { path: "/services", label: "Services" },
          { path: "/about", label: "About Us" },
          { path: "/contact", label: "Contact Us" },
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`relative font-medium text-[15px] transition-all duration-300 group ${
              isActive(link.path)
                ? "text-[#1CD228]" // active link color
                : "text-gray-700"
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-[2px] bg-[#1CD228] transition-all duration-300 ${
                isActive(link.path)
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden border-t">
          <div className="flex flex-col space-y-3 p-4">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`py-3 px-2 rounded-md transition-colors ${
                  isActive(link.path)
                    ? "text-[#1CD228] font-semibold bg-[#1CD228]/10 border-l-4 border-[#1CD228]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
