import {useState} from 'react';
import ShopCard from "./Cards/ShopCard";
import axios from 'axios';
import { useAuthStore } from "../store/authStore";
const MyShops = ()=>{

    const {user} = useAuthStore();
    const [shops, setShops] = useState(null);
    const getShops = async ()=>{
        const response = await axios.get(`http://localhost:5000/api/v1/get/shops/${user._id}`);
        setShops(response.data.data);
    }
    getShops();

    return (
        <div className="h-full flex basis-full flex-wrap justify-center items-center gap-6 m-12">
            {
                shops?.map((shop, index)=>{
                    return <ShopCard key={index}  shop={{...shop, ['image']:shop.image_url, ['shop_id']: shop._id, '_id': undefined}} ownerSide={true} checkit={false}/>
                })
            }
        </div>
    )
}

export default MyShops;