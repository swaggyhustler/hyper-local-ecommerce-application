import React from "react";
import ShopCard from "../Cards/ShopCard";
import Spinner from "../Spinner"
import { useSelector } from "react-redux";
const ShopsSection = () => {
  const {loading,shops}=useSelector(state=>state.shops)
  return (
    <div>
         <div className="w-full flex justify-center items-center my-4">
           <h2 className="text-3xl font-bold">Near By <span className="text-4xl text-[#ec1b24]">Shops</span> </h2>
         </div>
         {
            loading ?
             <Spinner/>
            :
            <div className="flex flex-wrap justify-evenly">
              {
                shops?.slice(1,5).map((shop)=>{
                
                return  <ShopCard shop={shop}/>
                  
                })
              }
         
            </div>

         }
          
    </div>
  )
};

export default ShopsSection;
