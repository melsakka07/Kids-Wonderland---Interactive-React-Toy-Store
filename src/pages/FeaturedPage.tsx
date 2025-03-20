import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const FeaturedPage: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">Featured Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPage;
