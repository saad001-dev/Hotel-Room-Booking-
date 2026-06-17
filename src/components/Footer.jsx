import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br mt-15 from-gray-900 via-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section with Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10 border-b border-gray-800">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Premium Logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-md opacity-50"></div>
                <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-2.5">
                  <span className="text-xl font-bold">QS</span>
                </div>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Quick Stay
                </h2>
                <p className="text-xs text-gray-400">Luxury Redefined</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Experience unparalleled luxury and comfort at the world's most
              exclusive hotels and resorts. Your perfect getaway starts here.
            </p>
            {/* Trust Badges */}
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-amber-500">🏆</span>
                <span className="text-xs">Award Winner</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-amber-500">🔒</span>
                <span className="text-xs">Secure Booking</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="text-amber-500">📧</span>
              Exclusive Offers
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special deals and luxury travel tips
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-700 focus:border-amber-500 focus:outline-none text-white placeholder-gray-400 transition-all"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">📨</span>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {["Home", "Hotels", "Destinations", "Offers", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-1 h-1 bg-amber-500 rounded-full transition-all"></span>
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative inline-block">
              Support
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Help Center",
                "FAQs",
                "Cancellation Policy",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1 h-1 bg-amber-500 rounded-full transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="text-amber-500">📍</span>
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-amber-500">📞</span>
                <span>+1 (888) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-amber-500">✉️</span>
                <span>hello@quickstay.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-amber-500">🕐</span>
                <span>24/7 Customer Support</span>
              </li>
            </ul>
          </div>

          {/* Working Hours & Payment */}
          <div>
            <h3 className="font-semibold text-lg mb-4 relative inline-block">
              We Accept
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-2xl">💳</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">VISA</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">MC</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">AMEX</span>
              <span className="text-xs bg-white/10 px-2 py-1 rounded">PayPal</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-amber-500 text-xl">🎧</span>
              <div>
                <p className="text-xs text-gray-400">24/7 Premium Support</p>
                <p className="text-sm font-semibold">+1 (888) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
          <div className="flex gap-4">
            {[
              { emoji: "📘", name: "Facebook", color: "hover:text-[#1877f2]" },
              { emoji: "🐦", name: "Twitter", color: "hover:text-[#1da1f2]" },
              { emoji: "📷", name: "Instagram", color: "hover:text-[#e4405f]" },
              { emoji: "▶️", name: "YouTube", color: "hover:text-[#ff0000]" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all hover:scale-110 ${social.color} hover:bg-white/20 text-xl`}
              >
                {social.emoji}
              </a>
            ))}
          </div>

          {/* Trustpilot Style Rating */}
          <div className="flex items-center gap-3 bg-white/5 rounded-full px-4 py-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-amber-500">★</span>
              ))}
            </div>
            <span className="text-sm font-semibold">4.9/5</span>
            <span className="text-xs text-gray-400">(2,345 reviews)</span>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-xs">
            © {currentYear} Quick Stay. All rights reserved. | Luxury Travel Redefined
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
    </footer>
  );
};

export default Footer;