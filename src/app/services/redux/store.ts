import { configureStore } from "@reduxjs/toolkit";

import menuSlices from "./slices/menuSlice";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
    reducer: {
        menuSection: menuSlices,
        cart: cartSlice,
    }
});    

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;