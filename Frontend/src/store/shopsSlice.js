import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch shops data with latitude and longitude in a POST request using Axios
export const fetchShops = createAsyncThunk(
  "shops/fetchShops",
  async (location) => {
    console.log({coordinates:location})
    console.log(location)
    const response = await axios.get("http://localhost:5000/api/v1/get/nearestShops", {coordinates:location}); // locationData is the object
    return response.data;
  }
);

const shopsSlice = createSlice({
  name: "shops",
  initialState: {
    shops: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.loading = false;
      
        state.shops = action.payload.data;
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export default shopsSlice.reducer;
