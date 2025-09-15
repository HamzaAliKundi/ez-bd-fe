import { Link } from "react-router-dom";
import { FiArrowRight, FiUsers, FiDollarSign, FiShield, FiTrendingUp, FiCheck, FiStar } from "react-icons/fi";
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
          <div ref={heroRef} className="text-center">
            <div className="mb-6 animate-slide-up animate-delay-100">
              <span className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full animate-pulse-glow">
                🚀 Join 10,000+ successful bidders
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up animate-delay-200">
              Find the perfect
              <span className="animate-gradient block animate-delay-300">
                bidding opportunities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-400">
              Connect with top clients and grow your business with Easy Bidder. 
              The platform that makes bidding simple, transparent, and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up animate-delay-500">
              <Link
                to="/signup"
                className="group bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 btn-hover-glow animate-float"
              >
                Get Started Free
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#how-it-works"
                className="text-white hover:text-green-400 px-10 py-5 rounded-full text-lg font-semibold border-2 border-gray-600 hover:border-green-600 transition-all duration-300 hover:shadow-md card-hover-lift"
              >
                Watch Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400 animate-slide-up animate-delay-600">
              <div className="flex items-center gap-2 animate-scale-in animate-delay-700">
                <FiCheck className="text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-800">
                <FiCheck className="text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-800">
                <FiCheck className="text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Why choose Easy Bidder?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Everything you need to succeed in the competitive bidding landscape
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-black border border-gray-800 hover:border-green-500 group card-hover-lift animate-float">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <FiUsers className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Connect with Clients
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Access thousands of verified clients looking for your expertise
              </p>
            </div>

            <div className="feature-card text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-black border border-gray-800 hover:border-green-500 group card-hover-lift animate-float animation-delay-2000">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FiDollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Competitive Pricing
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Set your rates and bid on projects that match your budget
              </p>
            </div>

            <div className="feature-card text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-black border border-gray-800 hover:border-green-500 group card-hover-lift animate-float animation-delay-4000">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FiShield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Secure Platform
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Your data and payments are protected with enterprise-grade security
              </p>
            </div>

            <div className="feature-card text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-black border border-gray-800 hover:border-green-500 group card-hover-lift animate-float">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FiTrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Grow Your Business
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Build your reputation and scale your business with every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              How it works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Get started in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-slide-up animate-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Create Your Profile
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sign up and showcase your skills, experience, and portfolio to attract clients
              </p>
            </div>

            <div className="text-center animate-slide-up animate-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float animation-delay-2000">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Browse & Bid
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Find projects that match your expertise and submit competitive proposals
              </p>
            </div>

            <div className="text-center animate-slide-up animate-delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-pulse-glow animate-float animation-delay-4000">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Get Hired & Paid
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Work with clients, deliver great results, and get paid securely through our platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Choose the perfect plan for your business. Start free and upgrade as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-black rounded-3xl border-2 border-gray-800 p-8 hover:border-green-500 transition-all duration-300 hover:shadow-2xl card-hover-lift animate-slide-up animate-delay-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-8">Perfect for getting started</p>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">5 bids per month</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Basic profile</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Standard processing</span>
                  </li>
                </ul>
                
                <Link
                  to="/signup"
                  className="block w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-green-900 to-black rounded-3xl border-2 border-green-500 p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in animate-delay-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold animate-pulse-glow">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$29</span>
                  <span className="text-gray-300">/month</span>
                </div>
                <p className="text-gray-300 mb-8">Best for growing businesses</p>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">50 bids per month</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Enhanced profile</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Fast processing</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Analytics dashboard</span>
                  </li>
                </ul>
                
                <Link
                  to="/signup"
                  className="block w-full bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 btn-hover-glow text-center"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-black rounded-3xl border-2 border-gray-800 p-8 hover:border-green-500 transition-all duration-300 hover:shadow-2xl card-hover-lift animate-slide-up animate-delay-400">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$99</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-8">For established businesses</p>
                
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited bids</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Premium profile</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Instant processing</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                </ul>
                
                <Link
                  to="/signup"
                  className="block w-full bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 btn-hover-glow text-center"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-slide-up animate-delay-500">
            <p className="text-gray-300 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2 animate-scale-in animate-delay-600">
                <FiCheck className="text-green-400" />
                <span>Secure payments</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-700">
                <FiCheck className="text-green-400" />
                <span>Mobile app access</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-800">
                <FiCheck className="text-green-400" />
                <span>Data export</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-800">
                <FiCheck className="text-green-400" />
                <span>API access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              What our users say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Join thousands of successful bidders who trust Easy Bidder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-slide-up animate-delay-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-green-400 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Easy Bidder transformed my freelance business. I've won 3x more projects since joining!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold mr-4 animate-pulse-glow">
                  SM
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Mitchell</h4>
                  <p className="text-gray-400 text-sm">Web Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-scale-in animate-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-green-400 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The platform is incredibly user-friendly. I found my dream clients within the first week!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  DJ
                </div>
                <div>
                  <h4 className="font-semibold text-white">David Johnson</h4>
                  <p className="text-gray-400 text-sm">Graphic Designer</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-slide-up animate-delay-400">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-green-400 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Outstanding support and features. Easy Bidder is a game-changer for my consulting business."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EC
                </div>
                <div>
                  <h4 className="font-semibold text-white">Emily Chen</h4>
                  <p className="text-gray-400 text-sm">Marketing Consultant</p>
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
            Ready to start bidding?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Join thousands of freelancers who are growing their business with Easy Bidder
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-float"
            >
              Sign Up for Free
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-green-100 px-10 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-green-100 transition-all duration-300 hover:shadow-md card-hover-lift"
            >
              Already have an account?
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
                {/* <img src="/logo.svg" alt="Easy Bidder" className="h-10 w-auto" /> */}
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
                <Link to="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-3">
                <li><Link to="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Mobile App</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Status</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
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
                <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
