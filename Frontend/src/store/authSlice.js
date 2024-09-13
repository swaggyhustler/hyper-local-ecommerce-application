import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const API_ROUTE = "http://localhost:5000/api/v1/auth";

axios.defaults.withCredentials=true;


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (registerData) => {
    try {
      const response = await axios.post(`${API_ROUTE}/register/user`, registerData);
      return response.data;  // Return the successful data response, not the Promise
    } catch (error) {
      console.log(error)  // Return error response
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginData) => {
    try{
      const response = await axios.post( `${API_ROUTE}/login`, loginData);
      return response.data;
    }catch(error){
      console.log(error)
    }
  }
);

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        isAuthenticated: false,
        message: null,
        error: null,
        isLoading: false,
        isCheckingAuth: true,
        success: false
    },
    reducers: {
      setSuccess: (state, action)=>{
        state.success=action.payload;
      }
    },
    extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;  // Mark loading as true
      })
      .addCase(registerUser.fulfilled, async (state, action) => {
        state.isLoading = false;
        state.success = await action.payload.success  // Store the resolved value
        state.message = await action.payload.message
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;  // Store the error response
        state.success = action.payload.success;
      })
      .addCase(login.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.success = true;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action)=>{
        state.isLoading = false;
        state.success = false;
        state.error = action.payload;
      })
  }
});

export const {setSuccess} = authSlice.actions;
// Export the reducer
export default authSlice.reducer;