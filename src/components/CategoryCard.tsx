import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[category.icon];

  return (
    <Link 
      to={`/category/${category.id}`}
      className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className={`${category.color} p-3 sm:p-4 rounded-full mb-3 sm:mb-4`}>
        {IconComponent && <IconComponent size={24} className="text-white" />}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-purple-800 text-center">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;
