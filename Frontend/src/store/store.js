import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice.js"
import shopsSlice from "./shopsSlice.js"
import fetchSlice from "./fetchSlice.js"
export const store=configureStore({
    reducer:{
        user:userSlice,
        shops:shopsSlice,
        fetch:fetchSlice

    }
})

