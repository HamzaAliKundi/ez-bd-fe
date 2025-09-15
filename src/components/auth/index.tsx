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
    <div className="min-h-screen bg-black">
      <LandingNavbar />
      <div className="flex items-center justify-center px-4 py-12 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-md w-full relative animate-slide-up">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-800 hover:border-green-600 transition-all duration-300">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 animate-gradient">
              Log in to Easy Bidder
            </h2>
            <p className="text-gray-300">
              Welcome back! Please enter your details.
            </p>
          </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="hamza.alee83@gmail.com"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 transition-all duration-300"
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
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                defaultValue="qwerty123"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 transition-all duration-300"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <button 
                type="button"
                className="absolute right-3 top-3.5 text-gray-400 hover:text-green-400 transition-colors"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            <div className="mt-2">
              <Link to="/forgot-password" className="text-sm text-green-400 hover:text-green-300 transition-colors">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-all duration-300 disabled:opacity-50 font-medium btn-hover-glow animate-pulse-glow"
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

          <div className="text-center mt-6">
            <p className="text-gray-300">
              Don't have an Easy Bidder account?{" "}
              <Link to="/signup" className="text-green-400 hover:text-green-300 font-medium transition-colors">
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