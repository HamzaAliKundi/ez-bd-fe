import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "../../apis/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import LandingNavbar from "../landing/LandingNavbar";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => setPasswordVisible(prev => !prev);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const res: any = await login(data);
      console.log(res);
      
      if (res?.data?.status === 200) {
        localStorage.setItem("token", res?.data?.token);
        toast.success(res?.data?.message);
        navigate("/home");
      } else toast.error(res?.error?.data?.message ?? "Invalid credentials");
    } catch (error) {
      toast.error("An error occurred during login");
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
                Login to Ez-BD
              </h2>
              <p className="text-gray-600 animate-slide-up animate-delay-200">
                Welcome back! Please enter your details.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
              <div className="animate-slide-up animate-delay-300">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="hamza.alee83@gmail.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-500 transition-all duration-200"
                  placeholder="Enter your email"
                  {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                  })}
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-1">Valid email is required</span>
                )}
              </div>

              {/* Password Input */}
              <div className="animate-slide-up animate-delay-400">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    defaultValue="qwerty123"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-500 transition-all duration-200"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-teal-500 transition-colors"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </button>
                </div>
                <div className="mt-2">
                  <Link to="/forgot-password" className="text-sm text-teal-600 hover:text-teal-500 transition-colors">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-500 transition-all duration-300 disabled:opacity-50 font-medium btn-hover-glow animate-float animate-slide-up animate-delay-500"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging In...
                  </div>
                ) : (
                  "Continue with Email"
                )}
              </button>

              <div className="text-center mt-6 animate-slide-up animate-delay-600">
                <p className="text-gray-600">
                  Don't have an Ez-BD account?{" "}
                  <Link to="/signup" className="text-teal-600 hover:text-teal-500 font-medium transition-colors">
                    Sign Up
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

export default Login;