import {useState} from 'react';
import { useAuthStore } from '../store/authStore';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from './Spinner';
const RegisterShop = ()=>{
    const [loading, setLoading] = useState(false);
    const [shopData, setShopData] = useState(null);
    const [file, setFile] = useState(null);
    const {user} = useAuthStore();
    const onFileChange = (e)=>{
        setFile(e.target.files[0]);
    }

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setShopData({
            ...shopData, [name]: value
        });
    }
    const handleSubmit= async (e)=>{
        setLoading(true);
        e.preventDefault();
        setShopData({...shopData, ['owner_id']: user._id});
        const formData = new FormData();
        formData.append('image', file);
        formData.append('shopName', shopData.shop_name);
        formData.append('coordinates', shopData.coordinates);
        formData.append('owner_id', user._id);

        if(!shopData || !file){
            console.log("Provide Data");
        }
        try{
            const response = await axios.post(`http://localhost:5000/api/v1/add/shop`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            // const response = await axios.post(`http://localhost:5000/api/v1/add/shop/${shopData.owner_id}`);
            toast.success(response.data.message);
            setLoading(false);
            setFile(null);
            setShopData(null);
        }catch(error){
            setLoading(false);
            console.log("Cannot send login details to backend", error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className="h-screen w-full flex justify-center items-center ">
            {loading?<Spinner />:
            <form className="max-w-lg mx-auto shadow-lg p-6 rounded-lg" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center inline-block w-96">Register You Shop Below</h1>
                <h3 className="text-center text-2xl font-bold my-4 text-blue-300">Shop Details</h3>
                <div className="mb-5">
                    <label htmlFor="shop_name" className="block mb-2 text-sm font-medium text-gray-900 ">Shop Name</label>
                    <input type="text" name="shop_name" id="shop_name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter you shop name here' required />
                </div>
                <div className="mb-5">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 ">Shop Picture</label>
                    <input type="file" name="image" id="image" onChange={onFileChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="coordinates" className="block mb-2 text-sm font-medium text-gray-900 ">Shop Coordinates</label>
                    <input type="text" name="coordinates" id="coordinates" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Latitude, Longitude" required />
                </div>

                <div className='flex justify-around'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Details</button>
                </div>
            </form>
            }
        </div>
    )
}

export default RegisterShop;