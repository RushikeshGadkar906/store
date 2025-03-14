import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/porduct";


const store = configureStore({
    reducer: {
        products: productsReducer
    }
})

export default store