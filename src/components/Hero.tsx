import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, BookOpen, Beaker } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4 leading-tight">
              Discover the Magic of <span className="text-pink-600">Childhood</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Explore our wonderful collection of toys, books, and science kits that spark imagination, 
              creativity, and learning for kids of all ages!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/categories" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md hover:shadow-lg"
              >
                Shop Now
              </Link>
              <Link 
                to="/featured" 
                className="bg-white hover:bg-gray-100 text-purple-600 border border-purple-600 px-6 py-3 rounded-full font-medium transition-colors"
              >
                Featured Products
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative md:pl-8">
            <div className="relative z-0 bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy kids playing with toys" 
                  className="rounded-lg w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/800x450?text=Kids+Playing';
                  }}
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                <span className="text-purple-800 font-bold text-base md:text-lg text-center">New Arrivals!</span>
              </div>
            </div>
            
            {/* Floating icons */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 p-2 md:p-3 rounded-full shadow-lg animate-bounce">
              <Rocket size={20} className="text-white" />
            </div>
            <div className="absolute bottom-1/4 right-0 transform translate-x-1/3 bg-blue-500 p-2 md:p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
              <BookOpen size={20} className="text-white" />
            </div>
            <div className="absolute top-1/3 right-0 transform translate-x-1/2 bg-purple-500 p-2 md:p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
              <Beaker size={20} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
