import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import LandingNavbar from "../landing/LandingNavbar";

const PasswordChangedSuccess = () => {
  return (
    <div className="min-h-screen bg-black">
      <LandingNavbar />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-600 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 relative">
        <div className="max-w-md w-full space-y-8 bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-800 animate-slide-up">
          <div className="space-y-4">
            <div className="flex justify-center animate-slide-up animate-delay-100">
              <div className="rounded-full bg-green-600 p-3 animate-pulse-glow">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-center text-2xl font-semibold text-white animate-slide-up animate-delay-200">
              Password Changed Successfully
            </h2>
            <p className="text-center text-gray-300 text-sm animate-slide-up animate-delay-300">
              Your password has been changed successfully. You can now login with your new password.
            </p>
          </div>

          <div className="space-y-4 animate-slide-up animate-delay-400">
            <Link to="/login">
              <button className="w-full py-3 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-all duration-300 font-medium btn-hover-glow animate-float">
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