import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./Cards/ProductCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((acc, item) => acc + item.price, 0));
  }, [cartItems]);

  return (
    <div className="w-full p-5 flex flex-col items-center justify-center gap-6">
      {/* Total Price Section */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center bg-white shadow-md p-5 rounded-lg">
        <p className="text-3xl font-semibold text-gray-700">
          Total Price: ₹{totalPrice}
        </p>
        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 hover:text-white transition-all">
          <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0 transition-all duration-75">
            Place Order
          </span>
        </button>
      </div>

      {/* Cart Items Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold my-4 text-gray-700">Your Items</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg text-red-500 font-medium text-center">
            Please add items to the cart to proceed further.
          </p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-evenly">
            {cartItems?.map((item, index) => (
              <ProductCard product={item} buttonDisable={true} key={index} deleteButton={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
