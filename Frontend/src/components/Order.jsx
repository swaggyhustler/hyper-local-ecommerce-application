import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios"
import Spinner from "./Spinner";
import ProductCard from "./Cards/ProductCard";
const Order = () => {
  const user=useSelector((state)=>state.user)
  const [orders,setOrders]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchOrder=async()=>{
      try {
        const response=await axios.get(`http://localhost:5000/api/v1/get/orders/${user._id}`)
        setOrders(response.data.data)
        setLoading(false)
       } catch (error) {
         console.log(error)
       }
    }
    fetchOrder()
 
  },[])

  return (
    <div className="w-full flex flex-col items-center my-5">
        <h2 className="text-3xl font-semibold">Your <span className="text-4xl text-red-600">Orders</span></h2>
        <div className="flex justify-evenly flex-wrap w-full my-3">
          {loading ? (
            <Spinner />
          ) : orders.length === 0 ? (
            <p>No Orders Available</p>
          ) : (
            orders.map((order, index) => <ProductCard product={order.product} date={order.createdAt} key={index} buttonDisable={true} searched={false} showDate={true}/>)
          )}
        </div>
      </div>

  )
};

export default Order;
