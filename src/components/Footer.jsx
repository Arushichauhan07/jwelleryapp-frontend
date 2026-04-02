import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#640d14] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">MyStore</h2>
          <p className="text-gray-300">
            Discover timeless jewellery pieces crafted with love and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-200 transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-yellow-200 transition-colors">Products</a></li>
            <li><a href="/products" className="hover:text-yellow-200 transition-colors">Products</a></li>
            <li><a href="/contact" className="hover:text-yellow-200 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-200 transition-colors"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-yellow-200 transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-yellow-200 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-yellow-200 transition-colors"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
