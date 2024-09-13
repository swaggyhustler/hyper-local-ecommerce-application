import {useEffect, useState} from 'react';
// import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux';

const Login = ()=>{
    const [loginData, setLoginData] = useState(null);
    const navigate=useNavigate()
    
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setLoginData({
            ...loginData, [name]: value
        });
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(!loginData){
            console.log("Provide Data");
        }
        try{
            let result = await axios.post("http://localhost:5000/api/v1/auth/login", loginData);
            if(result.data.success){
                toast.success("Login Successfull...!");
                navigate("/home")
            }else{
                toast.error("Wrong Details...!");
            }
        }catch(error){
            console.log("Cannot send login details to backend", error);
        }
    }
    return (
        <div className="h-screen w-full flex justify-center items-center ">
            <form className="max-w-lg mx-auto shadow-lg p-6 rounded-lg" onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold text-center inline-block w-96">Hyper Local E-Commerce Application</h1>
                <h3 className="text-center text-2xl font-bold my-4 text-blue-300">Welcome</h3>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@example.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" required />
                </div>
                <div className='flex flex-row gap-6'>
                    <div className="flex items-center mb-4">
                        <input id="role-option-1" type="radio" name="role" onChange={handleChange} value="user" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="role-option-1" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                        User
                        </label>
                    </div>
                    <div className="flex items-center mb-4">
                        <input id="role-option-2" type="radio" name="role" onChange={handleChange} value="owner" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"  />
                        <label htmlFor="role-option-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-900">
                        Owner
                        </label>
                    </div>
                </div>
                <div className='flex justify-around'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <button onClick={()=>navigate("/register")} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login;