import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShopCard from "./Cards/ShopCard";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import ProductCard from "./Cards/ProductCard";

const ShopDetails = () => {
  const location = useLocation();
  const { shop } = location.state || {};
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { shop_id } = shop;
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/products/${shop_id}`);
      setProducts(response.data.data);
      setLoading(false);
    } catch (error) {
      toast.error(`Failed to fetch products: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full py-2">
      <div className="w-full flex justify-center items-center">
        <ShopCard shop={shop} checkit={false} />
      </div>
      <div className="w-full flex flex-col items-center my-5">
        <h2 className="text-3xl font-semibold">Available <span className="text-4xl text-red-600">Products</span> in our Shop</h2>
        <div className="flex justify-evenly flex-wrap w-full my-3">
          {loading ? (
            <Spinner />
          ) : products.length === 0 ? (
            <p>No Products Available</p>
          ) : (
            products.map((product, index) => <ProductCard product={{...product,shopName:shop.shopName,distance:shop.distance}} key={index} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
