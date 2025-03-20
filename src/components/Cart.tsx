import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { RootState } from '../store';
import { removeFromCart, updateQuantity, toggleCart, clearCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  
  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => dispatch(toggleCart())}
      ></div>
      
      <div className="relative w-full max-w-md bg-white h-full overflow-y-auto shadow-xl animate-slideInRight">
        <div className="p-4 bg-purple-600 text-white flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingBag className="mr-2" size={20} />
            Your Cart
          </h2>
          <button 
            onClick={() => dispatch(toggleCart())}
            className="p-1 rounded-full hover:bg-purple-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="p-8 text-center">
            <div className="text-gray-500 mb-4">
              <ShoppingBag size={64} className="mx-auto opacity-30" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added any toys to your cart yet!</p>
            <button 
              onClick={() => dispatch(toggleCart())}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.product.id} className="p-4 flex">
                  <div className="w-20 h-20 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">Age: {item.product.ageRange}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                        <button 
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button 
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-bold text-purple-700">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.product.id)}
                          className="text-xs text-red-500 hover:text-red-700 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50 sticky bottom-0 border-t border-gray-200">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Subtotal:</span>
                <span className="font-bold text-purple-700">${totalPrice.toFixed(2)}</span>
              </div>
              
              <Link 
                to="/checkout"
                onClick={() => dispatch(toggleCart())}
                className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-full font-medium transition-colors mb-2"
              >
                Checkout
              </Link>
              
              <button 
                onClick={() => dispatch(clearCart())}
                className="block w-full text-purple-600 hover:text-purple-800 text-center py-2 text-sm transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
