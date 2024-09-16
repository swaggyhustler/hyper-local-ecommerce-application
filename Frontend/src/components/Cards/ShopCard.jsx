import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import bannerImage from "../../assets/bannerImage.jpg";
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ shop, checkit=true, ownerSide=false}) => {
  const {shopName, duration, distance, image, shop_id}=shop
  
  const navigate=useNavigate()
  const checkItHandler=()=>{
     navigate("/shopDetails",{
      state:{shop:shop}
     })
  }

  const productHandler = () =>{
    console.log("from shopcard ",shop_id);
    navigate('/addProduct', {
      state: {shop_id: shop_id}
    });
  }
  
  const showProductsHandler = () =>{
    navigate('/showProducts', {
      state: {shop_id: shop_id}
    });
  }

  return (
    <div className="w-[22%] bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-2">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-40 object-cover"
          src={image || bannerImage}
          alt="Shop"
        />
      </a>
      <div className="p-4 text-center">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-800">
          {shopName}
        </h5>
      {
        !ownerSide && 
        <div className="flex justify-around w-full mb-4 text-gray-600">
        <div className="flex flex-col items-center">
          <FaClock className="text-blue-500 mb-1" />
          <span className="text-sm font-medium">Duration</span>
          <span className="text-sm">{duration} Min.</span>
        </div>
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt className="text-red-500 mb-1" />
          <span className="text-sm font-medium">Distance</span>
          <span className="text-sm">{distance} Km</span>
        </div>
      </div>
      }
        {
          checkit && <p
          onClick={checkItHandler}
         className=" cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
       >
         Check It
         <svg
           className="w-4 h-4 ml-2"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </p>
        }
                {
          ownerSide && 
          <div className="flex items-center mb-4 gap-2 text-gray-600">
          <p
          onClick={productHandler}
         className=" cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
       >
         Add Product
         <svg
           className="w-4 h-4 ml-2"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </p>

       <p
          onClick={showProductsHandler}
         className=" cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
       >
         Show All Product
         <svg
           className="w-4 h-4 ml-2"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </p>
       </div>
        }
      </div>
    </div>
  );
};

export default ShopCard;
