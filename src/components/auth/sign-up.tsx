import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSignupMutation } from "../../apis/auth";
import LandingNavbar from "../landing/LandingNavbar";

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      const res = await signup(data);
      console.log(res);
      
      if (res?.data?.status === 201) navigate("/verify-email-sent");
      // @ts-ignore
      else toast.error(res?.error?.data?.message ?? "Signup failed");
    } catch (error) {
      toast.error("An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <LandingNavbar />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-600 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex items-center justify-center px-4 py-12 relative">
        <div className="max-w-md w-full relative">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 animate-slide-up animate-delay-100">
                Sign up for Easy Bidder
              </h2>
              <p className="text-gray-300 animate-slide-up animate-delay-200">
                Create your account and start bidding today.
              </p>
            </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="animate-slide-up animate-delay-300">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Enter your full name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-400 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="animate-slide-up animate-delay-400">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="animate-slide-up animate-delay-500">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                placeholder="Enter your password (8+ characters)"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-3.5 text-gray-400 hover:text-green-400 transition-colors"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-50 font-medium btn-hover-glow animate-float animate-slide-up animate-delay-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </div>
            ) : (
              "Create my account"
            )}
          </button>

          <div className="text-center mt-6 animate-slide-up animate-delay-700">
            <p className="text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="text-green-400 hover:text-green-300 font-medium transition-colors">
                Log In
              </Link>
            </p>
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;