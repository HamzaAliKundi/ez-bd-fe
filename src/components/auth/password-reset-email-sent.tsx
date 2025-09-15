import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import LandingNavbar from "../landing/LandingNavbar";

const PasswordResetEmailSent = () => {
  return (
    <div className="min-h-screen bg-black">
      <LandingNavbar />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-600 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4 relative">
        <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-800 animate-slide-up">
          <div className="text-center space-y-6">
            <div className="flex justify-center animate-slide-up animate-delay-100">
              <div className="rounded-full bg-green-600 p-4 animate-pulse-glow">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="animate-slide-up animate-delay-200">
              <h2 className="text-2xl font-semibold text-white mb-2">
                Check Your Email
              </h2>
              <p className="text-gray-300">
                We have sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
              </p>
            </div>

            <div className="space-y-4 animate-slide-up animate-delay-300">
              <p className="text-sm text-gray-400">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              
              <div className="flex flex-col gap-3">
                <Link to="/forgot-password">
                  <button className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg transition-all duration-300 font-medium btn-hover-glow animate-float">
                    Try Again
                  </button>
                </Link>
                
                <Link to="/login">
                  <button className="w-full flex items-center justify-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-medium">
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