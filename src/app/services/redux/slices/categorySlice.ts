import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface ProductsState {
    products: Product[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    visibleProducts: number;
}

const initialState: ProductsState = {
    products: [],
    status: "idle",
    error: null,
    visibleProducts: 9,
};

export const fetchCategoryProducts = createAsyncThunk("products/fetchCategoryProducts", async (category: string) => {
    const response = await axios.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
});

const categorySlice = createSlice({
    name: "productCategory",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || null;
            });
    },
});

export default categorySlice.reducer;