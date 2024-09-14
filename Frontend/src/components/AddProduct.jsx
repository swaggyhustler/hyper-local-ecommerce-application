import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const AddProduct = ()=>{
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState(null);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const {shop_id} = location.state;

    const onFileChange = (e)=>{
        setFile(e.target.files[0]);
    }

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setProductData({
            ...productData, [name]: value
        });
    }
    const handleSubmit= async (e)=>{
        setLoading(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', productData.name);
        formData.append('price', productData.price);
        formData.append('shop_id', shop_id);
        formData.append('description', productData.description);

        if(!productData || !file){
            console.log("Provide Data");
        }

        try{
            const response = await axios.post(`http://localhost:5000/api/v1/add/product`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
            // const response = await axios.post(`http://localhost:5000/api/v1/add/shop/${shopData.owner_id}`);
            toast.success(response.data.message);
            setLoading(false);
            navigate('/myShop');
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
                <h1 className="text-3xl font-bold text-center inline-block w-96">Add Products to you Shop</h1>
                <h3 className="text-center text-2xl font-bold my-4 text-blue-300">Product Details</h3>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Product Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter your product name here' required />
                </div>
                <div className="mb-5">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">Product Price</label>
                    <input type="text" name="price" id="price" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter your product price here' required />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <input type="text" name="description" id="description" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Enter description here' required />
                </div>
                <div className="mb-5">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 ">Product Picture</label>
                    <input type="file" name="image" id="image" onChange={onFileChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                
                <div className='flex justify-around'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Details</button>
                </div>
            </form>
            }
        </div>
    )
}

export default AddProduct;