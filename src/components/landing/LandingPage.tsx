import { Link } from "react-router-dom";
import { FiArrowRight, FiClock, FiTarget, FiZap, FiCheck, FiStar, FiChrome, FiEdit3, FiUpload } from "react-icons/fi";
import { useEffect, useRef } from "react";
import LandingNavbar from "./LandingNavbar";

const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    if (heroRef.current) {
      const children = Array.from(heroRef.current.children) as HTMLElement[];
      children.forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(50px)';
        child.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, index * 200);
      });
    }

    // Features animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && featuresRef.current) {
          const cards = featuresRef.current.querySelectorAll('.feature-card') as NodeListOf<HTMLElement>;
          cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            card.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, index * 100);
          });
        }
      });
    });

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
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
          <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-12 animate-blob animation-delay-4000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div ref={heroRef} className="text-center">
            <div className="mb-6 animate-slide-up animate-delay-100">
              <span className="bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-full animate-pulse-glow">
                 Join 10,000+ successful bidders
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up animate-delay-200">
              Win More Upwork Projects with
              <span className="text-teal-600 block animate-delay-300">
                Ez-BD
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-400">
              Smart Chrome extension that generates tailored proposals in seconds. 
              Save time, increase your success rate, and focus on delivering great work.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up animate-delay-500">
              <Link
                to="/signup"
                className="group bg-teal-600 hover:bg-teal-500 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-hover-glow animate-float"
              >
                Get Started only for 7$
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 animate-slide-up animate-delay-600">
              <div className="flex items-center gap-2 animate-scale-in animate-delay-700">
                <FiCheck className="text-teal-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-800">
                <FiCheck className="text-teal-500" />
                <span>Chrome extension</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-800">
                <FiCheck className="text-teal-500" />
                <span>Works with Upwork</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Why choose Ez-BD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Everything you need to win more Upwork projects faster
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-500 group card-hover-lift animate-float min-h-[320px] flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <FiClock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Save Time
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Generate professional proposals in just 1 click instead of spending hours writing them from scratch. Focus on what matters most - delivering great work.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-teal-600 font-semibold text-sm">Save 2+ hours daily</span>
              </div>
            </div>

            <div className="feature-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-500 group card-hover-lift animate-float animation-delay-2000 min-h-[320px] flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiTarget className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tailored to You
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Every proposal is perfectly matched to your portfolio and the client's specific needs. No more generic templates - just relevant, professional content.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-teal-600 font-semibold text-sm">100% personalized</span>
              </div>
            </div>

            <div className="feature-card bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-500 group card-hover-lift animate-float animation-delay-4000 min-h-[320px] flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FiZap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Boost Success Rate
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Stand out from the competition with relevant, professional proposals that showcase your expertise and win more projects on Upwork.
              </p>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <span className="text-teal-600 font-semibold text-sm">40% higher win rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              How Ez-BD Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Get started in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-slide-up animate-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float">
                1
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <FiChrome className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Install Extension
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Add Ez-BD to your browser in one click and connect to your dashboard
              </p>
            </div>

            <div className="text-center animate-slide-up animate-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float animation-delay-2000">
                2
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiEdit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Add Portfolio
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Describe your skills & projects once. Ez-BD will reuse them for all proposals
              </p>
            </div>

            <div className="text-center animate-slide-up animate-delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float animation-delay-4000">
                3
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FiUpload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Generate Proposal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Click the button on Upwork, and your tailored proposal appears instantly
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              Learn more about how it works
              <FiArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Trusted by Freelancers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Join thousands of successful bidders who trust Ez-BD
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-slide-up animate-delay-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-teal-500 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "Ez-BD saved me 2 hours a day on proposal writing. I've won 3x more projects since I started using it!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-4 animate-pulse-glow">
                  SM
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Mitchell</h4>
                  <p className="text-gray-500 text-sm">Web Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-scale-in animate-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-teal-500 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The proposals are so well-tailored that clients think I spent hours on them. Ez-BD is a game-changer!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  DJ
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">David Johnson</h4>
                  <p className="text-gray-500 text-sm">Graphic Designer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-slide-up animate-delay-400">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-teal-500 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "I can focus on delivering great work instead of writing proposals. My win rate increased by 40%!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EC
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Chen</h4>
                  <p className="text-gray-500 text-sm">Marketing Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Simplified */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Start free and upgrade as you grow your freelance business.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Single Pro Plan */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl border-2 border-teal-500 p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in animate-delay-300 max-w-md w-full">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ez-BD Pro</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$7</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-8">Everything you need to win more projects</p>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Unlimited proposals</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Chrome extension</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Portfolio management</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Proposal templates</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-teal-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-slide-up animate-delay-500">
            <p className="text-gray-600 mb-4">7-day free trial • Cancel anytime • No setup fees</p>
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
            Stop Wasting Time Writing Proposals
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Let Ez-BD create them for you — so you can focus on delivering great work
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-100 text-teal-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-float"
            >
              Start Free Today
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-teal-100 px-10 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-teal-100 transition-all duration-300 hover:shadow-md card-hover-lift"
            >
              Already have an account?
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
                {/* <img src="/ezbd.png" alt="Ez-BD" className="h-10 w-auto" /> */}
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
                <li><Link to="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
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

export default LandingPage;
