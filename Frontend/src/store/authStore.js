import {create} from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';
const API_URL = "http://localhost:5000/api/v1/auth";
export const useAuthStore = create((set)=>({
    user: null,
    isAuthenticated: false,
    message: null,
    error: null,
    isLoading: false,
    isCheckingAuth: true,

    signupUser: async (registerData)=>{
        set({isLoading: true, error: null});
        try{
            const response = await axios.post(`${API_URL}/register/user`, registerData);
            toast.success(response.data.message);
            set({isLoading: false, user: response.data.data});
        }catch(error){
            toast.error(error.response.data.message);
            set({isLoading: false, error: error.response.data.message || "Error Registering User" });
            throw error;
        }
    },

    signupOwner: async(registerData)=>{
        set({isLoading: true, error: null, user: null});
        try{
            const response = await axios.post(`${API_URL}/register/owner`, registerData);
            toast.success(response.data.message);
            set({isLoading: false, user: response.data.data});
        }catch(error){
            toast.error(error.response.data.message);
            set({isLoading: false, error: error.response.data.message});
            throw error;
        }
    },

    login: async (loginData)=>{
        set({isLoading: true, error: null, user: null});
        try{
            const response = await axios.post(`${API_URL}/login`, loginData);
            toast.success(response.data.message);
            set({isLoading: false, user: response.data.data, isAuthenticated: true});
        }catch(error){
            toast.error(error.response.data.message);
            set({isLoading: false, error: error.response.data.message});
            throw error;
        }
    }
}))