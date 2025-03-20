import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kids' Wonderland</h3>
            <p className="text-purple-200 mb-4">
              Bringing joy, learning, and imagination to children everywhere!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  Shop by Category
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  Featured Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-purple-200 hover:text-yellow-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-purple-200">support@kidswonderland.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-purple-200">1-800-KID-TOYS</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-8 pt-6 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} Kids' Wonderland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
