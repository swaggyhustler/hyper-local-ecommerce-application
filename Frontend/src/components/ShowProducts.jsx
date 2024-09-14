import {useEffect} from 'react';
import ProductCard from './Cards/ProductCard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { productStore } from '../store/productStore';

const ShowProducts = ()=>{
    const {products, addProducts} = productStore();
    const location = useLocation();
    const state = location.state;
    const getProducts = async ()=>{
        const response = await axios.get(`http://localhost:5000/api/v1/products/${state?.shop_id}`);
        addProducts(response.data.data);
    }
    useEffect(()=>{
        getProducts();
    }, [products]);

    return (
        <div className="h-full flex basis-full flex-wrap justify-center items-center gap-6 m-12">
            {
                products?.map((product, index)=>{
                    return <ProductCard key={index}  product={{...product}} deleteProduct={true} searched={false} buttonDisable={true}/>
                })
            }
        </div>
    )
}

export default ShowProducts;