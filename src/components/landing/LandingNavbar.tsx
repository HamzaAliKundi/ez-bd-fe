import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Also update hash when location changes
    setCurrentHash(window.location.hash);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollToSection = (sectionId: string) => {
    // Small delay to ensure navigation completes first
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 animate-slide-up shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              {/* <img src="/logo.svg" alt="Easy Bidder" className="h-8 w-auto" /> */}
              <span className="ml-2 text-xl font-bold text-gray-900">Ez-BD</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === '/' 
                    ? 'text-teal-600 border-b-2 border-teal-600' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === '/how-it-works' 
                    ? 'text-teal-600 border-b-2 border-teal-600' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                How it works
              </Link>
              <Link
                to="/pricing"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === '/pricing'
                    ? 'text-teal-600 border-b-2 border-teal-600' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  location.pathname === '/contact' 
                    ? 'text-teal-600 border-b-2 border-teal-600' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              onClick={() => window.scrollTo(0, 0)}
              className="text-gray-600 hover:text-teal-600 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 btn-hover-glow animate-pulse-glow"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-teal-600 p-2 transition-all duration-300"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded ${
                  location.pathname === '/' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
                onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}
              >
                Home
              </Link>
              <Link
                to="/how-it-works"
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded ${
                  location.pathname === '/how-it-works' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
                onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}
              >
                How it works
              </Link>
              <Link
                to="/pricing"
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded ${
                  location.pathname === '/pricing'
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
                onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-gray-50 rounded ${
                  location.pathname === '/contact' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-gray-600 hover:text-teal-600'
                }`}
                onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}
              >
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-x-3">
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-teal-600 block px-3 py-2 text-base font-medium transition-all duration-300"
                    onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full text-base font-medium transition-all duration-300 btn-hover-glow"
                    onClick={() => { toggleMenu(); window.scrollTo(0, 0); }}
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
