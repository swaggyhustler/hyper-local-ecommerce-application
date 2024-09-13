import {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import { useAuthStore } from '../store/authStore';

const OwnerRegistration = ()=>{
    const [registerData, setRegisterData] = useState(null);
    const {signupOwner} = useAuthStore();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        setRegisterData({...registerData, ...location.state, ["owner_name"]: location.state.username});
    }, [location.state]);

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setRegisterData({
            ...registerData, [name]: value
        });
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(location.state);
        console.log(registerData);
        if(!registerData){
            console.log("Provide Data");
        }
        try{
            signupOwner(registerData);
            navigate('/verify-email');
        }catch(error){
            console.log("Cannot send register details to backend", error);
        }
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <form className="max-w-md mx-auto shadow-2xl p-6 rounded-lg" onSubmit={handleSubmit}>
            <h1 className="text-center text-3xl font-bold my-6 min-w-80">Banking Details</h1>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="bank_name" id="bank_name" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="bank_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bank Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="bank_account_no" id="bank_account_no" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="bank_account_no" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bank Account Number</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="bank_IFSC_code" id="bank_IFSC_code" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="bank_IFSC_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bank IFSC Code</label>
            </div>
            
            <button type="submit" className=" mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
export default OwnerRegistration;
