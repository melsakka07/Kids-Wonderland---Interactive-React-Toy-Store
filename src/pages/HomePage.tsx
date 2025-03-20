import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Kids' Club!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive special offers, new product alerts, and fun activity ideas for kids!
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold px-6 py-3 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
