'use client';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { loadBindings } from "next/dist/build/swc";
interface MenuState {
  currentSection: 'HOT' | 'NEW' | 'SALE';
  products: {
    [key: string]: Product[];
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  visable: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const initialState: MenuState = {
  currentSection: 'HOT',
  products: {
    HOT: [],
    NEW: [],
    SALE: [],
  },
  status: 'idle',
  visable: 9
};
export const fetchProducts = createAsyncThunk(
  'menuSection/fetchProducts',
  async (section: 'HOT' | 'NEW' | 'SALE') => {
    let url = '';
    switch (section) {
      case 'HOT':
        url = "https://fakestoreapi.com/products/category/men's%20clothing";
        console.log('done');
        break;
      case 'NEW':
        url = "https://fakestoreapi.com/products/category/jewelery";
        break;
      case 'SALE':
        url = "https://fakestoreapi.com/products/category/women's%20clothing";
        break;
    }
    const response = await axios.get<Product[]>(url,{headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',      
    }});
    return { section, products: response.data };
  }
);

const menuSlices = createSlice({
    name: 'menuSection',
    initialState,
    reducers: {
        setMenuSection: (state, action: PayloadAction<'HOT' | 'NEW' | 'SALE'>) => {
            state.currentSection = action.payload;
            state.visable = 4;
            console.log(action.payload);
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products[action.payload.section] = action.payload.products;
        }).addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed';
        });
    }
})

export const { setMenuSection } = menuSlices.actions;
export default menuSlices.reducer;