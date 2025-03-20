import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../store/cartSlice';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Product Not Found</h2>
          <p className="mb-4">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/" className="text-purple-600 hover:text-purple-800 font-medium">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Shopping
      </Link>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 bg-gray-50 p-6 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-[400px] object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/400x400?text=Product+Image';
              }}
            />
          </div>
          
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              
              {product.featured && (
                <span className="bg-yellow-400 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-500 ml-2">(42 reviews)</span>
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Age Range:</h3>
              <div className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                {product.ageRange}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Availability:</h3>
              <div className={`inline-block px-3 py-1 rounded-full text-sm ${
                product.inStock 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
              
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex items-center px-6 py-3 rounded-full font-medium ${
                  product.inStock
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                }`}
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
