import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from "react-icons/fi";
import toast from "react-hot-toast";
import LandingNavbar from "../landing/LandingNavbar";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
              Get In
              <span className="animate-gradient block animate-delay-200">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-slide-up animate-delay-300">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up animate-delay-200">
              <div className="bg-black rounded-2xl p-8 border border-gray-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                        placeholder="Your name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <span className="text-red-400 text-sm mt-1">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                        placeholder="your@email.com"
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
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200"
                      placeholder="What's this about?"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && (
                      <span className="text-red-400 text-sm mt-1">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-500 transition-all duration-200 resize-none"
                      placeholder="Tell us more about your inquiry..."
                      {...register("message", { required: "Message is required" })}
                    />
                    {errors.message && (
                      <span className="text-red-400 text-sm mt-1">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 btn-hover-glow animate-float flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up animate-delay-300">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We're here to help! Reach out to us through any of the following channels, 
                    and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-black rounded-2xl border border-gray-800 hover:border-green-500 transition-colors card-hover-lift">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                      <FiMail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                      <p className="text-gray-300 mb-1">support@easybidder.com</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-black rounded-2xl border border-gray-800 hover:border-green-500 transition-colors card-hover-lift">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiPhone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                      <p className="text-gray-300 mb-1">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-black rounded-2xl border border-gray-800 hover:border-green-500 transition-colors card-hover-lift">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                      <p className="text-gray-300 mb-1">123 Business Ave</p>
                      <p className="text-gray-300 mb-1">Suite 100</p>
                      <p className="text-gray-300">San Francisco, CA 94105</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-black rounded-2xl border border-gray-800 hover:border-green-500 transition-colors card-hover-lift">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiClock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-300 mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300 mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
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
              Quick Answers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up animate-delay-100">
              Find answers to common questions before reaching out
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-200">
              <h3 className="text-xl font-bold text-white mb-4">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-300">We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-300">
              <h3 className="text-xl font-bold text-white mb-4">Do you offer technical support?</h3>
              <p className="text-gray-300">Yes! Our technical support team is available to help with any platform-related issues, account problems, or feature questions.</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-400">
              <h3 className="text-xl font-bold text-white mb-4">Can I schedule a demo?</h3>
              <p className="text-gray-300">Absolutely! Contact us to schedule a personalized demo of Easy Bidder. We'll show you how our platform can benefit your specific needs.</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 animate-slide-up animate-delay-500">
              <h3 className="text-xl font-bold text-white mb-4">Do you have enterprise solutions?</h3>
              <p className="text-gray-300">Yes, we offer custom enterprise solutions for larger organizations. Contact our sales team to discuss your specific requirements.</p>
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
            Join thousands of freelancers who are building successful careers with Easy Bidder
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up animate-delay-200">
            <Link
              to="/signup"
              className="bg-white hover:bg-gray-100 text-green-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-float"
            >
              Start Free Trial
            </Link>
            <Link
              to="/how-it-works"
              className="text-white hover:text-green-100 px-10 py-4 rounded-full text-lg font-semibold border-2 border-white hover:border-green-100 transition-all duration-300 hover:shadow-md card-hover-lift"
            >
              Learn More
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

export default Contact;
