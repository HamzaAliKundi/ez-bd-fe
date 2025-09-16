import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiChrome, FiEdit3, FiUpload, FiZap, FiClock, FiTarget } from "react-icons/fi";
import { useEffect, useRef } from "react";
import LandingNavbar from "../landing/LandingNavbar";

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Steps animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && stepsRef.current) {
          const steps = stepsRef.current.querySelectorAll('.step-card') as NodeListOf<HTMLElement>;
          steps.forEach((step, index) => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(50px)';
            step.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
              step.style.opacity = '1';
              step.style.transform = 'translateY(0)';
            }, index * 200);
          });
        }
      });
    });

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-56 h-56 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-10 w-56 h-56 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
              How Ez-BD
              <span className="text-teal-600 block animate-delay-200">
                Works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-300">
              Transform your Upwork bidding with our smart Chrome extension in just a few simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Steps Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Simple Process, Big Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              From installation to winning more projects, we've made every step intuitive and efficient
            </p>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="step-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-500 group animate-slide-up animate-delay-200 min-h-[480px] flex flex-col">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 text-white rounded-full flex items-center justify-center text-xl font-bold animate-pulse-glow animate-float">
                    1
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiChrome className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Install Chrome Extension
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                Add Ez-BD to your browser in one click. The extension integrates seamlessly with Upwork's proposal section and appears right where you need it.
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">One-click installation</span>
                </div>
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Integrates with Upwork</span>
                </div>
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Secure and private</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-500 group animate-slide-up animate-delay-300 min-h-[480px] flex flex-col">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 text-white rounded-full flex items-center justify-center text-xl font-bold animate-pulse-glow animate-float animation-delay-2000">
                    2
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiEdit3 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Create Your Portfolio
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                Set up your portfolio once with your skills, past projects, and experience. Ez-BD will use this information to create perfectly tailored proposals.
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Quick portfolio setup</span>
                </div>
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Project descriptions & links</span>
                </div>
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Skills and rate settings</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-500 group animate-slide-up animate-delay-400 min-h-[480px] flex flex-col">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 text-white rounded-full flex items-center justify-center text-xl font-bold animate-pulse-glow animate-float animation-delay-4000">
                    3
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiUpload className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Generate & Submit
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                Click the Ez-BD button on any Upwork job post. We'll generate a tailored proposal instantly that you can review, edit, and submit with confidence.
              </p>
              <div className="bg-gray-50 rounded-2xl p-4 space-y-3">
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Instant proposal generation</span>
                </div>
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Edit before submitting</span>
                </div>
                <div className="flex items-center">
                  <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Save as templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Why Choose Ez-BD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              We've built features that make Upwork bidding easier and more profitable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-left animate-delay-200">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <FiClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Save Hours Daily</h3>
                  <p className="text-gray-600">Stop spending 2-3 hours writing proposals. Generate professional proposals in seconds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-left animate-delay-300">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiTarget className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Perfectly Tailored</h3>
                  <p className="text-gray-600">Each proposal matches your portfolio with the client's specific requirements automatically.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-left animate-delay-400">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiZap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Results</h3>
                  <p className="text-gray-600">Click, generate, edit, and submit. Your proposal is ready in under 30 seconds.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-right animate-delay-200">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Higher Win Rate</h3>
                  <p className="text-gray-600">Professional, relevant proposals help you stand out and win more projects on Upwork.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-right animate-delay-300">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy First</h3>
                  <p className="text-gray-600">Your data stays secure. Only job descriptions are read when you click generate.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-right animate-delay-400">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Template Library</h3>
                  <p className="text-gray-600">Save successful proposals as templates for even faster bidding in the future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-screen filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Ready to Win More Projects?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Join thousands of successful freelancers who are saving time and winning more with Ez-BD
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-100 text-teal-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-float"
            >
              Get Started Free
            </Link>
            <Link
              to="/#pricing"
              className="text-white hover:text-teal-100 px-10 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-teal-100 transition-all duration-300 hover:shadow-md card-hover-lift"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                {/* <img src="/logo.svg" alt="Ez-BD" className="h-10 w-auto" /> */}
                <span className="ml-3 text-2xl font-bold">Ez-BD</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Smart Chrome extension that generates tailored proposals in seconds. 
                Win more Upwork projects faster.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How it Works</Link></li>
                <li><Link to="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Account</h3>
              <ul className="space-y-3">
                <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
                <li><Link to="/signup" className="text-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><p className="text-gray-400">support@ez-bd.com</p></li>
                <li><p className="text-gray-400">We'll reply within 24 hours</p></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Ez-BD. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;
