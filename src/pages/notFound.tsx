import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-56 h-56 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="mb-8 animate-slide-up">
          <div className="w-32 h-32 bg-gradient-to-br from-teal-600 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <FiSearch className="w-16 h-16 text-white" />
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-bold text-gray-200 mb-4 animate-slide-up animate-delay-100">
          404
        </h1>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up animate-delay-200">
          Page Not Found
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up animate-delay-300">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="flex justify-center animate-slide-up animate-delay-400">
          <button
            onClick={() => window.history.back()}
            className="group bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 hover:border-teal-500 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            <FiArrowLeft />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
