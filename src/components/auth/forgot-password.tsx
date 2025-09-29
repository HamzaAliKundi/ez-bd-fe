import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForgotPasswordMutation } from "../../apis/auth";
import { FiArrowLeft } from "react-icons/fi";
import LandingNavbar from "../landing/LandingNavbar";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [forgotPassword] = useForgotPasswordMutation();
  const { register, handleSubmit, formState: { errors } } = useForm<{ email: string }>();
  const navigate = useNavigate();

  const onSubmit = async (data: { email: string }) => {
    try {
      setIsLoading(true);
      const response = await forgotPassword({ email: data.email });
      console.log(response);
      
      if (response?.data?.status === 200) {
        toast.success("Password reset link has been sent to your email");
        navigate("/password-reset-email-sent");
      } else {
        // @ts-ignore
        toast.error(response?.error?.data?.message || "Failed to send reset password email");
      }
    } catch (error) {
      console.error("Failed to send reset password email:", error);
      toast.error("Failed to send reset password email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingNavbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-56 h-56 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex items-center justify-center px-4 py-12 relative">
        <div className="max-w-md w-full relative">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 animate-slide-up animate-delay-100">
                Forgot your password?
              </h2>
              <p className="text-gray-600 animate-slide-up animate-delay-200">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="animate-slide-up animate-delay-300">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-200"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-50 font-medium btn-hover-glow animate-float animate-slide-up animate-delay-400"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Reset Link...
              </div>
            ) : (
              "Send Reset Link"
            )}
          </button>

          <div className="text-center mt-6 animate-slide-up animate-delay-500">
            <Link
              to="/login"
              className="inline-flex items-center text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
            >
              <FiArrowLeft className="mr-2" />
              Back to login
            </Link>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;