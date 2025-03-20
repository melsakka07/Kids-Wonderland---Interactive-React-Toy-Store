import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import * as LucideIcons from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const category = categories.find(c => c.id === id);
  const categoryProducts = products.filter(p => p.category === id);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the category you're looking for doesn't exist.</p>
        <Link 
          to="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }
  
  // Dynamically get the icon component
  const IconComponent = (LucideIcons as any)[category.icon];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/categories"
        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium mb-6"
      >
        <ArrowLeft size={20} className="mr-2" /> All Categories
      </Link>
      
      <div className="flex items-center mb-8">
        <div className={`${category.color} p-3 rounded-full mr-4`}>
          {IconComponent && <IconComponent size={24} className="text-white" />}
        </div>
        <h1 className="text-3xl font-bold text-purple-800">{category.name}</h1>
      </div>
      
      {categoryProducts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium text-gray-700 mb-4">No products found in this category</h2>
          <p className="text-gray-500 mb-6">Check back soon for new additions!</p>
          <Link 
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
