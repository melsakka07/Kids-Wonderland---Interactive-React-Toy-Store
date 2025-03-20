import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleCart } from '../store/cartSlice';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-wider">Kids' Wonderland</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-300 transition-colors font-medium">
              Home
            </Link>
            <Link to="/categories" className="hover:text-yellow-300 transition-colors font-medium">
              Categories
            </Link>
            <Link to="/featured" className="hover:text-yellow-300 transition-colors font-medium">
              Featured
            </Link>
            <Link to="/about" className="hover:text-yellow-300 transition-colors font-medium">
              About Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {!isSearchOpen ? (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                <Search size={20} />
              </button>
            ) : (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-white text-gray-800 rounded-full py-1 px-4 w-40 md:w-64 focus:outline-none"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <X size={16} />
                </button>
              </div>
            )}
            
            <button 
              onClick={() => dispatch(toggleCart())}
              className="p-2 rounded-full hover:bg-purple-600 transition-colors relative"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-purple-600 transition-colors md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-purple-600 rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                className="hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/featured" 
                className="hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Featured
              </Link>
              <Link 
                to="/about" 
                className="hover:text-yellow-300 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
