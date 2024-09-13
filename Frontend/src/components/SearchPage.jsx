import React, { useEffect, useState } from "react";
import {toast} from "react-toastify"
import axios from "axios"
import Spinner from "./Spinner"
import ProductCard from "./Cards/ProductCard";
const SearchPage = () => {
  const [searchResults,setSearchResults]=useState([])
  const [location,setLocation]=useState([])
  const [loading,setLoadng]=useState(true)
  const [searchInput,setSearchInput]=useState("")

  const submitHandler=async ()=>{
        if(!searchResults){
            toast.info("Please Search Something ")
            return
        }
        try {
        
            setLoadng(true)
            const response=await axios.post("http://localhost:5000/api/v1/search/product",{coordinates:location,keyword:searchInput})
            setSearchResults(response.data.data)
            setLoadng(false)
            setSearchInput("")
            
        } catch (error) {
            console.log("error in frontend")
        }
  }
  const fetchLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve([
          
            position.coords.latitude,
            position.coords.longitude
           
          ]);
        },
        (error) => {
          console.log("Error getting user's current location:", error);
          reject(error);
        }
      );
    });
  };

  useEffect(() => {
    fetchLocation()
      .then((locations) => {
        setLocation(locations)
      })
      .catch((error) => {
        console.log("Failed to fetch location", error);
      });
  }, []);

  return (
    <div className="w-full ">
        <div className="flex justify-center items-center flex-col py-4 gap-4">

          <div className="text-center">

            <h1 className="text-2xl font-semibold">Search For Your <span className="text-red-600 text-4xl">Product</span></h1>
            <h2 className=" font-semibold">You will get the products available in nearest shops</h2>

          </div>
          <div>
                <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder="Search Your Product" className="mx-4 w-96 px-2 h-11 rounded-md border-[1.5px] border-red-500" />
                <button onClick={submitHandler} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  focus:outline-none  ">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                    Search
                    </span>
                </button>
          </div>

        </div>
        <div>
        {
            loading ?
            <Spinner/>
            :
            <div className="flex flex-wrap justify-evenly">
                {
                    searchResults?.map((result)=>{

                        return <ProductCard product={result}/>
                    })
                }

            </div>

          }
          
        </div>
    </div>
  )
};

export default SearchPage;
