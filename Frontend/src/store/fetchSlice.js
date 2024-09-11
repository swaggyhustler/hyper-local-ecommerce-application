import {createSlice} from "@reduxjs/toolkit"


const fetchSlice=createSlice({
    name:"isFetch",
    initialState:true,
    reducers:{
        changeFetch:(state,action)=>{
            state=false
            return state
        }
    }
})

export const {changeFetch}=fetchSlice.actions
export default fetchSlice.reducer