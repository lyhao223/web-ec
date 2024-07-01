import { configureStore } from "@reduxjs/toolkit";

import menuSlices from "./slices/menuSlice";

const store = configureStore({
    reducer: {
        menuSection: menuSlices,
    }
});    

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;