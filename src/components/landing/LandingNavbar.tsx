import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center animate-float">
              {/* <img src="/logo.svg" alt="Easy Bidder" className="h-8 w-auto" /> */}
              <span className="ml-2 text-xl font-bold text-white animate-gradient">Easy Bidder</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/#features"
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                How it works
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 btn-hover-glow animate-pulse-glow"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-green-400 p-2 transition-all duration-300"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              <Link
                to="/#features"
                className="text-gray-300 hover:text-green-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-900 rounded"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                to="/how-it-works"
                className="text-gray-300 hover:text-green-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-900 rounded"
                onClick={toggleMenu}
              >
                How it works
              </Link>
              <Link
                to="/pricing"
                className="text-gray-300 hover:text-green-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-900 rounded"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-green-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-900 rounded"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-800">
                <div className="flex items-center px-3 space-x-3">
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-green-400 block px-3 py-2 text-base font-medium transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-full text-base font-medium transition-all duration-300 btn-hover-glow"
                    onClick={toggleMenu}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;
