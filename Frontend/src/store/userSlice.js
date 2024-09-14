import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:{role:"user"},
    reducers:{
       setUser:(state,action)=>{
         return action.payload
       },
       removeUser:(state,action)=>{
        state={}
        return {}
       }
    }
})
export const {setUser,removeUser}=userSlice.actions
export default userSlice.reducer