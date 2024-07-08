import { configureStore } from "@reduxjs/toolkit";

import menuSlices from "./slices/menuSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import productsShopSlice from "./slices/productsShopSlice";
const store = configureStore({
    reducer: {
        menuSection: menuSlices,
        cart: cartSlice,
        products: productSlice,
        productShop: productsShopSlice,
    },
});    

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;