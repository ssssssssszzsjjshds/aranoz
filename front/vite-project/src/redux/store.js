import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/ProductSlice";



const store = configureStore({
    reducer: {
        product: ProductSlice,
    },
});
export default store


