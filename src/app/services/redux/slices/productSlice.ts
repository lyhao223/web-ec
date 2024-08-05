import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    visiable: number;
}

const initialProductState: ProductState = {
    products: [],
    status: 'idle',
    error: null,
    visiable: 16
}

export const fetchAllProducts = createAsyncThunk('products/fetchAllProducts', async () => {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products',{
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
        }
    });
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState: initialProductState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        }).addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Something went wrong';
        });
    }
})

export default productSlice.reducer;