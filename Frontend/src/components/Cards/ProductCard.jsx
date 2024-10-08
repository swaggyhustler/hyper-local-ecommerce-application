import React from "react";
import { addToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { removeFromCart } from "../../store/cartSlice";
import { productStore } from "../../store/productStore";
import axios from 'axios';
const ProductCard = ({ product, searched = true, deleteProduct=false, buttonDisable=false,deleteButton=false,showDate=false,date}) => {
  const { name, price, description, image_url, shopName, distance } = product;
  const {removeProduct, products} = productStore();
  const dispatch = useDispatch();
  const formattedDate = new Date(date).toLocaleDateString();

  const addCartHandler = () => {
    dispatch(addToCart(product));
    toast.success("Item added to cart")
  };

  const removeFromCartHandler=()=>{
    console.log("clcikin")
    dispatch(removeFromCart(product))
  }

  const handleDeleteProduct = async ()=>{
    try{
      const response =  await axios.delete(`http://localhost:5000/api/v1/product/${product._id}`);
      toast.success(response.data.message);
      removeProduct(product._id, products);
    }catch(error){
      toast.error(error.response.data.message);
    }
  }

  return (
    <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white w-full max-w-xs lg:w-1/5 h-[400px]">
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 w-full flex-grow">
        <h2 className="text-lg font-bold mb-2 text-center">{name}</h2>
        <p className="text-gray-700 mb-2 text-center truncate">{description}</p>
        <p className="text-red-600 font-semibold mb-2 text-center">₹{price}</p>
        
        {searched && (
          <div className="text-sm text-gray-600 text-left">
            <p className="font-bold">Shop:</p>
            <p>{shopName}</p>
            <p className="font-bold">Distance:</p>
            <p>{distance} KM</p>
           
          </div>
        )}
        
      {
        !buttonDisable &&   <button
        onClick={addCartHandler}
        className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-full"
      >
        Add to Cart
      </button>
      }
        {
        deleteButton &&   <button
        onClick={removeFromCartHandler}
        className="bg-red-500 text-white mt-4 py-2 px-4 rounded hover:bg-red-600 transition duration-300 w-full"
      >
        Remove
      </button>
      }
      {
        deleteProduct && 
        <button 
          onClick={handleDeleteProduct}
          className="bg-red-500 text-white mt-4 py-2 px-4 rounded hover:bg-red-600 transition duration-300 w-full">
          Remove
        </button>
      }
       {
              showDate && 
              <>
              <p className="font-bold">Ordered Date</p>
              <p>{formattedDate}</p>
              </>

            }
      
      </div>
    </div>
  );
};

export default ProductCard;