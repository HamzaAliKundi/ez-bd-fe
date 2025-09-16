import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LandingNavbar from "../landing/LandingNavbar";

const VerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <LandingNavbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-56 h-56 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 relative">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 animate-slide-up">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-600 flex items-center justify-center animate-pulse-glow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 animate-slide-up animate-delay-100">
              Email Verified!
            </h2>

            <p className="text-gray-600 mb-6 animate-slide-up animate-delay-200">
              Your email has been successfully verified. Click the button below to login.
            </p>

            <button
              onClick={() => navigate('/login')}
              className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-lg transition-all duration-300 font-medium btn-hover-glow animate-float animate-slide-up animate-delay-300"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationSuccess;
