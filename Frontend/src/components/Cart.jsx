import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./Cards/ProductCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { emptyCart } from "../store/cartSlice";
import 'react-toastify/dist/ReactToastify.css'; // Make sure to import CSS for toastify

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setTotalPrice(cartItems.reduce((acc, item) => acc + item.price, 0));
  }, [cartItems]);

  const paymentHandler = async () => {
    try {
      const response = await axios.post("http://localhost:5000/payment/order", {
        amount: totalPrice * 100, // Amount in paise
        currency: "INR",
        receipt: `#${Math.random() * 1000}`, // Unique receipt
      });

      const { id: orderId, currency, amount } = response.data;

      const options = {
        key: "rzp_test_j11STEiZBsNKi2", // Razorpay key
        amount: amount, // Amount in paise
        currency: currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: orderId, // Correct order ID
        handler: async function (response) {
          try {
            const paymentResponse = await axios.post(
              "http://localhost:5000/payment/payment-success",
              {
                orderId: orderId, // Use the order ID generated earlier
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }
            );

            if (paymentResponse.data.success) {
              toast.success("Payment Successful");
              toast.success("Go to Orders Page to check your Orders");

              // Add order to database
              const addOrderResponse = await axios.post(
                "http://localhost:5000/api/v1/add/order",
                { user_id: user._id, products: cartItems }
              );
              console.log(addOrderResponse.data);

              dispatch(emptyCart()); // Clear cart
            } else {
              toast.error("Payment Verification Failed");
            }
          } catch (error) {
            console.error("Payment verification failed", error);
            toast.error("Payment Verification Failed");
          }
        },
        prefill: {
          name: user.name || "Customer Name",
          email: user.email || "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error("Razorpay is not loaded.");
      }
    } catch (error) {
      console.error("Error creating order", error);
      toast.error("Error creating order");
    }
  };

  return (
    <div className="w-full p-5 flex flex-col items-center justify-center gap-6">
      
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center bg-white shadow-md p-5 rounded-lg">
        <p className="text-3xl font-semibold text-gray-700">
          Total Price: ₹{totalPrice}
        </p>
        <button
          onClick={paymentHandler}
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 hover:text-white transition-all"
        >
          <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0 transition-all duration-75">
            Place Order
          </span>
        </button>
      </div>

      <div className="w-full flex items-center justify-center flex-col">
        <h2 className="text-2xl font-semibold my-4 text-gray-700">Your Items</h2>
        {cartItems.length === 0 ? (
          <p className="text-lg text-red-500 font-medium text-center">
            Please add items to the cart to proceed further.
          </p>
        ) : (
          <div className="flex justify-evenly w-full flex-wrap">
            {cartItems?.map((item, index) => (
              <ProductCard
                product={item}
                buttonDisable={true}
                key={index}
                deleteButton={true}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
