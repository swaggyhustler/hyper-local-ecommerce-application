import {useEffect, useState} from 'react';
import ProductCard from './Cards/ProductCard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ShowProducts = ()=>{
    const [products, setProducts] = useState(null);
    const location = useLocation();
    const {shop_id} = location.state;
    const getProducts = async ()=>{
        const response = await axios.get(`http://localhost:5000/api/v1/products/${shop_id}`);
        setProducts(response.data.data);
        console.log(products);
    }
    useEffect(()=>{
        getProducts();
    }, [])

    return (
        <div className="h-full flex basis-full flex-wrap justify-center items-center gap-6 m-12">
            {
                products?.map((product, index)=>{
                    return <ProductCard key={index}  product={{...product}} searched={false} buttonDisable={true}/>
                })
            }
        </div>
    )
}

export default ShowProducts;