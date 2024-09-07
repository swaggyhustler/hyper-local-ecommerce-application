import {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

const RegisterShop = ()=>{
    const [registerData, setRegisterData] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const {owner_id} = location.state;

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setRegisterData({
            ...registerData, [name]: value
        });
    }

    const fetchLocation = ()=>{
        return new Promise((resolve, reject)=>{
          navigator.geolocation.getCurrentPosition((position)=>{
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
            }, (error)=>{
            console.log("E: Error getting users current locaiton");
            reject(error);
          });
        });
    }
    
    // const handleLocation = ()=>{
    //     fetchLocation().then((res)=>{
    //         setRegisterData({...registerData, ["coordinates"]: [res.latitude, res.longitude], ["owner_id"]: owner_id});
    //     });
    // }

    useEffect(()=>{
        fetchLocation().then((res)=>{
            setRegisterData({...registerData, ["coordinates"]: [res.latitude, res.longitude], ["owner_id"]: owner_id});
        });
    }, []);

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setRegisterData({...registerData, ["owner_id"]: owner_id});
        if(!registerData){
            console.log("Provide Data");
        }
        try{
            const result = await axios.post("http://localhost:5000/api/v1/add/shop", registerData);
            if(result.data.success){
                toast.success("Shop registration Successfull...!");
                navigate('/login');
            }else{
                toast.error("Wrong Details...!");
            }
        }catch(error){
            console.log("Cannot send register details to backend", error);
        }
    }

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <form className="max-w-md mx-auto shadow-2xl p-6 rounded-lg" onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl font-bold my-6">Register Shop</h1>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="shopName" id="shopName" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="shopName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Shop Name</label>
            </div>
            {/* <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="email" id="floating_email" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
            </div> */}
            
            {/* <button onClick={} className=" mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Current Location</button> */}
            
            <button type="submit" className=" mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default RegisterShop;