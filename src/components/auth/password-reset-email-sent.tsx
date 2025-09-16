import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import LandingNavbar from "../landing/LandingNavbar";

const PasswordResetEmailSent = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <LandingNavbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-56 h-56 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4 relative">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 animate-slide-up">
          <div className="text-center space-y-6">
            <div className="flex justify-center animate-slide-up animate-delay-100">
              <div className="rounded-full bg-teal-600 p-4 animate-pulse-glow">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="animate-slide-up animate-delay-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-600">
                We have sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
              </p>
            </div>

            <div className="space-y-4 animate-slide-up animate-delay-300">
              <p className="text-sm text-gray-500">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              
              <div className="flex flex-col gap-3">
                <Link to="/forgot-password">
                  <button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-lg transition-all duration-300 font-medium btn-hover-glow animate-float">
                    Try Again
                  </button>
                </Link>
                
                <Link to="/login">
                  <button className="w-full flex items-center justify-center gap-2 text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium">
                    <FiArrowLeft />
                    Back to Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetEmailSent;
