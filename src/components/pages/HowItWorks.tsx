import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiUsers, FiSearch, FiDollarSign } from "react-icons/fi";
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
    <div className="min-h-screen bg-black">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-green-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-600 rounded-full mix-blend-screen filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              How Easy Bidder
              <span className="animate-gradient block animate-delay-200">
                Works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-300">
              Discover how our platform connects freelancers with clients in just a few simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Steps Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Simple Process, Big Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              From creating your profile to getting paid, we've made every step intuitive and efficient
            </p>
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="step-card text-center animate-slide-up animate-delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float">
                1
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Create Your Profile
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Sign up and showcase your skills, experience, and portfolio. Add your expertise, set your rates, and let clients know what makes you unique.
              </p>
              <ul className="text-left space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Professional portfolio showcase</span>
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Skills and expertise tags</span>
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Custom rate setting</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="step-card text-center animate-slide-up animate-delay-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float animation-delay-2000">
                2
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiSearch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Browse & Bid
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Explore thousands of projects that match your skills. Use our smart filters to find the perfect opportunities and submit competitive proposals.
              </p>
              <ul className="text-left space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Smart project matching</span>
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Advanced filtering options</span>
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Proposal templates</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="step-card text-center animate-slide-up animate-delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float animation-delay-4000">
                3
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiDollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Hired & Paid
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Once selected, work directly with clients through our platform. Track your progress, communicate seamlessly, and get paid securely.
              </p>
              <ul className="text-left space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Built-in communication tools</span>
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Milestone tracking</span>
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Secure payment processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Why Choose Easy Bidder?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              We've built features that make freelancing easier and more profitable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-left animate-delay-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart Matching</h3>
                  <p className="text-gray-300">Our AI-powered system matches you with projects that perfectly fit your skills and experience.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-left animate-delay-300">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Secure Payments</h3>
                  <p className="text-gray-300">Get paid on time, every time, with our escrow system and multiple payment options.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-left animate-delay-400">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-300">Our dedicated support team is always ready to help you succeed on the platform.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-slide-right animate-delay-200">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300">Connect with clients from around the world and expand your business internationally.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-right animate-delay-300">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Professional Growth</h3>
                  <p className="text-gray-300">Build your reputation, gain reviews, and unlock higher-paying opportunities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-slide-right animate-delay-400">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Easy Communication</h3>
                  <p className="text-gray-300">Built-in messaging, video calls, and file sharing keep projects moving smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-screen filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Join thousands of successful freelancers who are building their careers with Easy Bidder
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-float"
            >
              Get Started Free
            </Link>
            <Link
              to="/pricing"
              className="text-white hover:text-green-100 px-10 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-green-100 transition-all duration-300 hover:shadow-md card-hover-lift"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img src="/logo.svg" alt="Easy Bidder" className="h-10 w-auto" />
                <span className="ml-3 text-2xl font-bold">Easy Bidder</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                The platform that makes bidding simple, transparent, and profitable. 
                Join thousands of freelancers growing their business with us.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How it Works</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Easy Bidder. All rights reserved.
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
