import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useVerifyEmailMutation } from '../../apis/auth';
import toast from 'react-hot-toast';
import LandingNavbar from '../landing/LandingNavbar';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const token = searchParams.get('token');

  const handleVerifyEmail = async () => {
    if (!token) {
      toast.error('Invalid verification link');
      return;
    }

    try {
      const res = await verifyEmail({ token }).unwrap();
      if (res?.status === 200) {
        navigate('/verification-success');
      }
    } catch (error) {
      toast.error('Failed to verify email. Please try again.');
    }
  };

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 animate-slide-up animate-delay-100">
              Verify Your Email
            </h2>

            <p className="text-gray-600 mb-6 animate-slide-up animate-delay-200">
              Please click the button below to verify your email address. This will help us ensure the security of your account.
            </p>

            <div className="space-y-4 animate-slide-up animate-delay-300">
              <button
                onClick={handleVerifyEmail}
                disabled={isLoading}
                className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-50 font-medium btn-hover-glow animate-float"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </div>
                ) : (
                  "Verify Email"
                )}
              </button>

              <button
                onClick={() => navigate('/login')}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg transition-all duration-300 font-medium"
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

export default EmailVerification;
