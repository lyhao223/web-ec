import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:{
    rate: number;
    count: number;
  }
}

interface ProductState {
  product: Product | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialProductState: ProductState = {
  product: null,
  status: 'idle',
  error: null,
};

export const fetchDetailProduct = createAsyncThunk('products/fetchDetailProducts', async (id:any) => {
    const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
    return response.data;
});

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: initialProductState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDetailProduct.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchDetailProduct.fulfilled, (state, action: PayloadAction<Product>) =>{
            state.status = 'succeeded';
            state.product = action.payload;
        }).addCase(fetchDetailProduct.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Something went wrong';
        });
    }
})

export default productDetailSlice.reducer;