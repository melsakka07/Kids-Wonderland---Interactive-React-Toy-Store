import React from 'react';
import { Heart, Award, Users, Gift } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">About Kids' Wonderland</h1>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Kids playing with toys" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Kids' Wonderland was founded in 2015 by a group of parents who were passionate about providing high-quality, 
              educational, and fun toys for children of all ages.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that play is an essential part of childhood development, and our mission is to inspire creativity, 
              curiosity, and joy through carefully curated toys, books, and science kits.
            </p>
            <p className="text-gray-700">
              Every product in our store is selected with care, ensuring safety, quality, and educational value. 
              We're committed to helping children learn, grow, and have fun!
            </p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Our Values</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={32} className="text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">Passion</h3>
          <p className="text-gray-600">
            We're passionate about childhood development and the power of play in shaping young minds.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award size={32} className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">Quality</h3>
          <p className="text-gray-600">
            We carefully select each product to ensure safety, durability, and educational value.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">Community</h3>
          <p className="text-gray-600">
            We build relationships with families and support educational initiatives in our community.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift size={32} className="text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-purple-800 mb-2">Joy</h3>
          <p className="text-gray-600">
            We believe in the magic of childhood and strive to bring joy to every child through our products.
          </p>
        </div>
      </div>
      
      <div className="bg-purple-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Sign up for our newsletter to receive special offers, new product alerts, and fun activity ideas for kids!
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded-full transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
