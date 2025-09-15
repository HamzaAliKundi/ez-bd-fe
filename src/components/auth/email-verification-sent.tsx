import { useNavigate } from "react-router-dom";
import LandingNavbar from "../landing/LandingNavbar";

const EmailVerificationSent = () => {
  const navigate = useNavigate();

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
        <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-800 animate-slide-up">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-600 flex items-center justify-center animate-pulse-glow">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4 animate-slide-up animate-delay-100">
              Check Your Email
            </h2>

            <p className="text-gray-300 mb-6 animate-slide-up animate-delay-200">
              We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
            </p>

            <div className="space-y-4 animate-slide-up animate-delay-300">
              <button
                onClick={() => navigate('/login')}
                className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg transition-all duration-300 font-medium btn-hover-glow animate-float"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationSent;