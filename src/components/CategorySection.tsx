import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';

const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-purple-800">Shop by Category</h2>
          <Link 
            to="/categories" 
            className="flex items-center text-purple-600 hover:text-purple-800 transition-colors font-medium"
          >
            View All <ChevronRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
