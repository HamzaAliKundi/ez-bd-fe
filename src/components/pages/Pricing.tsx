import { Link } from "react-router-dom";
import { FiCheck, FiStar } from "react-icons/fi";
import { useEffect, useRef } from "react";
import LandingNavbar from "../landing/LandingNavbar";

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pricing cards animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && pricingRef.current) {
          const cards = pricingRef.current.querySelectorAll('.pricing-card') as NodeListOf<HTMLElement>;
          cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease-out';
            
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 150);
          });
        }
      });
    });

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
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
              Simple, Transparent
              <span className="animate-gradient block animate-delay-200">
                Pricing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-300">
              Choose the perfect plan for your freelancing journey. Start free and upgrade as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up animate-delay-400">
              <div className="flex items-center gap-2 animate-scale-in animate-delay-500">
                <FiCheck className="text-green-400" />
                <span className="text-gray-300">No setup fees</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-600">
                <FiCheck className="text-green-400" />
                <span className="text-gray-300">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2 animate-scale-in animate-delay-700">
                <FiCheck className="text-green-400" />
                <span className="text-gray-300">14-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={pricingRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="pricing-card bg-black rounded-3xl border-2 border-gray-800 p-8 hover:border-green-500 transition-all duration-300 hover:shadow-2xl card-hover-lift animate-slide-up animate-delay-200">
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
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Basic messaging</span>
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
            <div className="pricing-card bg-gradient-to-br from-green-900 to-black rounded-3xl border-2 border-green-500 p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in animate-delay-300">
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
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Advanced messaging</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-200">Portfolio showcase</span>
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
            <div className="pricing-card bg-black rounded-3xl border-2 border-gray-800 p-8 hover:border-green-500 transition-all duration-300 hover:shadow-2xl card-hover-lift animate-slide-up animate-delay-400">
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
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Dedicated manager</span>
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">White-label options</span>
                  </li>
                </ul>
                
                <Link
                  to="/contact"
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

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-200">
              <h3 className="text-xl font-bold text-white mb-4">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-300">
              <h3 className="text-xl font-bold text-white mb-4">What happens if I exceed my bid limit?</h3>
              <p className="text-gray-300">If you exceed your monthly bid limit, you'll be prompted to upgrade to a higher plan or wait until your next billing cycle resets your limit.</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-400">
              <h3 className="text-xl font-bold text-white mb-4">Is there a free trial for paid plans?</h3>
              <p className="text-gray-300">Yes! All paid plans come with a 14-day free trial. No credit card required to start your trial.</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-500">
              <h3 className="text-xl font-bold text-white mb-4">How secure are the payments?</h3>
              <p className="text-gray-300">We use industry-standard encryption and work with trusted payment processors to ensure your financial information is always secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              See why thousands of freelancers choose Easy Bidder for their business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-slide-up animate-delay-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-green-400 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "The Professional plan transformed my freelance business. I've won 5x more projects since upgrading!"
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

            <div className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-scale-in animate-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-green-400 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Started with the free plan and upgraded as I grew. The pricing is fair and transparent."
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

            <div className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-green-500 hover:shadow-2xl transition-all duration-300 card-hover-lift animate-slide-up animate-delay-400">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-green-400 fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "Enterprise plan gives me everything I need to manage my team of freelancers efficiently."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  EC
                </div>
                <div>
                  <h4 className="font-semibold text-white">Emily Chen</h4>
                  <p className="text-gray-400 text-sm">Agency Owner</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto animate-slide-up animate-delay-100">
            Choose your plan and start building your freelance career today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-float"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-green-100 px-10 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-green-100 transition-all duration-300 hover:shadow-md card-hover-lift"
            >
              Contact Sales
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

export default Pricing;
