import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Register = ()=>{
    const [registerData, setRegisterData] = useState(null);
    const navigate = useNavigate();
    const {signupUser} = useAuthStore();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
            ...registerData, [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!registerData) {
                console.log("Provide Data");
                return;
            }
            if (registerData.role === 'owner') {
                return navigate("/registerOwner", { state: registerData });
            }
            signupUser(registerData);
            navigate("/verify-email");
            
        }catch(error){
            console.log("Cannot send register details to backend", error);
        }
    }


    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <form className="max-w-md mx-auto shadow-2xl p-6 rounded-lg" onSubmit={handleSubmit}>
                <h1 className="text-center text-3xl font-bold my-6">Register</h1>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="username" id="username" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="floating_email" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" id="floating_password" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" name="phone" onChange={handleChange} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    </div>

                    <div className='flex flex-row gap-6'>
                        <div className="flex items-center mb-4">
                            <input id="role-option-1" type="radio" name="role" onChange={handleChange} value="user" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="role-option-1" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-900">
                                User
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input id="role-option-2" type="radio" name="role" onChange={handleChange} value="owner" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="role-option-2" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-900">
                                Owner
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className=" mr-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <button onClick={() => navigate('/login')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

            </form>
        </div>
    )
}

export default Register;