import React from "react";
import ShopCard from "../Cards/ShopCard";
const ShopsSection = () => {
  return (
    <div>
         <div className="w-full flex justify-center items-center my-4">
           <h2 className="text-4xl font-bold">Near By <span className="text-[#ec1b24]">Shops</span> </h2>
         </div>
          <div className="flex flex-wrap justify-evenly">
          <ShopCard distance={100} name={"xyz"} duration={"cb"}/>
          <ShopCard distance={100} name={"xyz"} duration={"cb"}/>
          <ShopCard distance={100} name={"xyz"} duration={"cb"}/>
          <ShopCard distance={100} name={"xyz"} duration={"cb"}/>
          </div>
    </div>
  )
};

export default ShopsSection;
