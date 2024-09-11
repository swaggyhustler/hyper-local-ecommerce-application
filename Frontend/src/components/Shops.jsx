import React from "react";
import ShopCard from "./Cards/ShopCard";
import Spinner from "./Spinner";
import { useSelector } from "react-redux";
const Shops = () => {
  const {loading,shops}=useSelector(state=>state.shops)
  return (
    <div>
        <div className="w-full flex items-center justify-center h-32 flex-col">

            <h2 className="font-semibold text-4xl">Find the <span className="text-[#E21A23] text-5xl">Shop</span> Near to you</h2>
            <p className="font-medium text-2xl">And Search for your <span className="text-[#E21A23] ">Product</span></p>

        </div>

        <div className="flex flex-wrap justify-evenly">
        {
            loading ?
             <Spinner/>
            :
            <div className="flex flex-wrap justify-evenly">
              {
                shops?.map((shop)=>{
                
                return  <ShopCard shop={shop}/>
                  
                })
              }
         
            </div>

         }

        </div>
    </div>
  )
};

export default Shops;
