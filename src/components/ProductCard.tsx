import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { addToCart } from '../store/cartSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <div className="w-full pt-[100%] relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute top-0 left-0 w-full h-full object-contain p-4"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
            }}
          />
        </div>
        
        <div className="absolute top-2 left-2 bg-yellow-400 text-purple-800 text-xs font-bold px-2 py-1 rounded-full z-10">
          {product.featured && "Featured"}
        </div>
        
        <div className="absolute top-2 right-2 bg-white text-purple-800 text-xs font-bold px-2 py-1 rounded-full shadow-sm z-10">
          Ages {product.ageRange}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-purple-800 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{product.description}</p>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-pink-600">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
