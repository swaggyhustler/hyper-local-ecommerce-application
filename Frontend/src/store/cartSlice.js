import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);  
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item._id !== action.payload._id); 
        },
        emptyCart:(state,action)=>{
            return []
        }
    },
});

export const { addToCart, removeFromCart,emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
