import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';

const CategoriesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Shop by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
