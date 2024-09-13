import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./Cards/ProductCard";
import axios from "axios"
import {toast} from "react-toastify"
import {emptyCart} from "../store/cartSlice"
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch=useDispatch

  useEffect(() => {
    setTotalPrice(cartItems.reduce((acc, item) => acc + item.price, 0));
  }, [cartItems]);

  const paymentHandler = async () => {
    try {
      const response = await axios.post("http://localhost:5000/payment/order", {
        amount: 1* 100, // Amount in paise
        currency: "INR",
        receipt: "#12345",
      });
  
      const { id: orderId, currency, amount } = response.data;
  
      const options = {
        key: "rzp_test_j11STEiZBsNKi2", // Your Razorpay key
        amount: amount, // Amount in paise
        currency: currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: orderId,
        handler: async function (response) {
          try {
            await axios.post("http://localhost:5000/payment/payment-success", {
              orderId: orderId,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature
            });
            toast.success("Payment Successful")
            toast.success("Go to Orders Page to check your Orders")
            dispatch(emptyCart())
          

          } catch (error) {
            console.error("Payment verification failed", error);
            alert("Payment Verification Failed");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };
  
      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error("Razorpay is not loaded.");
      }
    } catch (error) {
      console.error("Error creating order", error);
      alert("Error creating order");
    }
  };
  

  return (
    <div className="w-full p-5 flex flex-col items-center justify-center gap-6">
      {/* Total Price Section */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center bg-white shadow-md p-5 rounded-lg">
        <p className="text-3xl font-semibold text-gray-700">
          Total Price: ₹{totalPrice}
        </p>
        <button  onClick={paymentHandler} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 hover:text-white transition-all">
          <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0 transition-all duration-75">
            Place Order
          </span>
        </button>
      </div>

      {/* Cart Items Section */}
      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-2xl font-semibold my-4 text-gray-700">Your Items</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg text-red-500 font-medium text-center">
            Please add items to the cart to proceed further.
          </p>
        ) : (
          <div className="flex flex-wrap  justify-around w-full">
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
