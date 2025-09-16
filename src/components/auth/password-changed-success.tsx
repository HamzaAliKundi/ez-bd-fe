import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LandingNavbar from "../landing/LandingNavbar";

const PasswordChangedSuccess = () => {
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
        <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 animate-slide-up">
          <div className="space-y-4">
            <div className="flex justify-center animate-slide-up animate-delay-100">
              <div className="rounded-full bg-teal-600 p-3 animate-pulse-glow">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-center text-2xl font-semibold text-gray-900 animate-slide-up animate-delay-200">
              Password Changed Successfully
            </h2>
            <p className="text-center text-gray-600 text-sm animate-slide-up animate-delay-300">
              Your password has been changed successfully. You can now login with your new password.
            </p>
          </div>

          <div className="space-y-4 animate-slide-up animate-delay-400">
            <Link to="/login">
              <button className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-all duration-300 font-medium btn-hover-glow animate-float">
                Go to Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChangedSuccess;
