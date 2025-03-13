import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductURL } from "../../URLS/URL";
import axios from "axios";


export const fetchProducts = createAsyncThunk('fetchProducts', async() => {
    return await axios.get(`${ProductURL}`)
        .then(res => res.data)
})

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },

    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            // console.log(action.payload);
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            // console.log(action.payload);
            state.isError = true
        })
    }
})

export default productsSlice.reducer