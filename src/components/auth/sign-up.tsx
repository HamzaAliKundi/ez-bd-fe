import { useState, useEffect } from "react";
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
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  // Prevent horizontal scroll during initial render
  useEffect(() => {
    // Hide horizontal scrollbar immediately
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Add a small delay to ensure all elements are properly positioned
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
      // Don't reset overflow as other pages might need it
    };
  }, []);

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
    <div className="min-h-screen w-full bg-gray-50 relative" style={{ overflowX: 'hidden', overflowY: 'auto' }}>
      <LandingNavbar />
      
      {/* Animated Background - Completely contained */}
      <div className="fixed inset-0 w-full h-full pointer-events-none" 
           style={{ 
             overflow: 'hidden',
             zIndex: 0
           }}>
        <div 
          className="absolute w-56 h-56 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob"
          style={{
            top: '8rem',
            left: '50%',
            marginLeft: '-7rem', // Half of width (14rem / 2)
            transform: 'translateY(-50%)'
          }}
        ></div>
        <div 
          className="absolute w-56 h-56 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-blob"
          style={{
            top: '50%',
            right: '2.5rem',
            transform: 'translateY(-50%)',
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute w-56 h-56 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"
          style={{
            bottom: '8rem',
            left: '2.5rem',
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div 
        className={`flex items-center justify-center px-4 py-12 relative w-full transition-opacity duration-300 ${
          isPageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          minHeight: 'calc(100vh - 5rem)',
          zIndex: 10
        }}
      >
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 w-full animate-slide-up" 
               style={{ minHeight: '600px' }}>
            <div className="flex flex-col justify-center h-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 animate-slide-up animate-delay-100">
                  Sign up for Ez-BD
                </h2>
                <p className="text-gray-600 animate-slide-up animate-delay-200">
                  Create your account and start winning more projects today.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
                {/* Name */}
                <div className="animate-slide-up animate-delay-300">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-200 box-border"
                    placeholder="Enter your full name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="animate-slide-up animate-delay-400">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-200 box-border"
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
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="animate-slide-up animate-delay-500">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative w-full">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="w-full px-4 py-3 pr-12 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-200 box-border"
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
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-500 transition-colors p-1"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-400 text-sm mt-1 block">
                      {errors.password.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-lg transition-all duration-300 disabled:opacity-50 font-medium btn-hover-glow animate-float animate-slide-up animate-delay-600 box-border"
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
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-teal-600 hover:text-teal-500 font-medium transition-colors">
                      Log In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;