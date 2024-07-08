import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { stat } from "fs";
import { act } from "react";

interface ProductsShop {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
}

interface ProductsShopState {
    originalProducts: ProductsShop[];
    products: ProductsShop[];
    visibleProducts: number;
    status: "idle" | "loading" | "succeeded" |"failed";
    error: string | null;
    option: "all" | "highToLow" | "lowToHigh";
}

const initialState: ProductsShopState = {
    originalProducts: [],
    products: [],
    visibleProducts: 9,
    status: "idle",
    error: null,
    option: "all",
}

export const fetchAllProducts = createAsyncThunk("productsShop/fetchAllProducts",async()=>{
    const response = await axios.get<ProductsShop[]>("https://fakestoreapi.com/products");
    return response.data;
})

const productsShopSlice = createSlice({
    name: 'productsShop',
    initialState,
    reducers: {
        loadMoreProducts: (state)=>{
            state.visibleProducts += 9;
        },
        collapseProducts: (state) => {
            state.visibleProducts = 9;
        },
        setOption: (state,action)=>{
            state.option = action.payload;
            switch(state.option){
                case "highToLow":
                    state.products = [...state.originalProducts].sort((a,b)=>b.price - a.price);
                    break;
                case "lowToHigh":
                    state.products = [...state.originalProducts].sort((a,b)=>a.price - b.price);
                    break;
                case 'all':
                default:
                    state.products = state.originalProducts;
                    break;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending,(state)=>{
            state.status = "loading";
        }).addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.originalProducts = action.payload;
            state.products = action.payload;
        }).addCase(fetchAllProducts.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.error.message || "Something went wrong";
        })
    }
})

export const {loadMoreProducts,setOption, collapseProducts} = productsShopSlice.actions;
export default productsShopSlice.reducer;