import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#285259] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-[#4DBAA3] mb-3">Evently</h2>
          <p className="text-sm text-gray-300">
            Evently is your ultimate platform for discovering, joining, and managing events with ease.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#4DBAA3]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#4DBAA3] transition">Home</a></li>
            <li><a href="/events" className="hover:text-[#4DBAA3] transition">All Events</a></li>
            <li><a href="/dashboard" className="hover:text-[#4DBAA3] transition">Dashboard</a></li>
            <li><a href="/contact" className="hover:text-[#4DBAA3] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#4DBAA3]">Connect With Us</h3>
          <p className="text-sm text-gray-300 mb-3 flex items-center gap-2">
            <FaEnvelope /> support@evently.com
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#4DBAA3]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#4DBAA3]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#4DBAA3]"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Evently. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
