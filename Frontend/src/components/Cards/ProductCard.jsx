import React from "react";
import { addToCart } from "../../store/cartSlice";
import {useDispatch} from "react-redux"
const ProductCard = ({ product }) => {
  const { name, price, description, image_url } = product;
  const dispatch=useDispatch()
  console.log()

  const addCartHandler=()=>{

  }

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center" style={{ width: "22%", height: "400px" }}>
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 w-full text-center flex-grow">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-red-600 font-semibold">₹{price}</p>
        
        <button onClick={addCartHandler} className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
