import { configureStore } from "@reduxjs/toolkit";

import menuSlices from "./slices/menuSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import productsShopSlice from "./slices/productsShopSlice";
import productDetailSlice from "./slices/productDetailSlice";
import categorySlice from "./slices/categorySlice";
import userSlice from "./slices/userSlice";
const store = configureStore({
    reducer: {
        menuSection: menuSlices,
        cart: cartSlice,
        products: productSlice,
        productShop: productsShopSlice,
        productDetailSlice: productDetailSlice,
        categorySlice: categorySlice,
        userSlice : userSlice,
    },
});    

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


