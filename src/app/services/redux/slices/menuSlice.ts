import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { loadBindings } from "next/dist/build/swc";
interface MenuState {
  currentSection: 'HOT' | 'NEW' | 'SALE';
  products: {
    [key: string]: string[];
  };
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MenuState = {
  currentSection: 'NEW',
  products: {
    HOT: [],
    NEW: [],
    SALE: [],
  },
  status: 'idle',
};
export const fetchProducts = createAsyncThunk(
  'menuSection/fetchProducts',
  async (section: 'NEW' | 'NEW' | 'SALE') => {
    const response = await axios.get('https://fakestoreapi.com/products/category/men\'s%20clothing');
    return { section, products: response.data };
  }
);
const menuSlices = createSlice({
    name: 'menuSection',
    initialState,
    reducers: {
        setMenuSection: (state, action: PayloadAction<'HOT' | 'NEW' | 'SALE'>) => {
            state.currentSection = action.payload;
            console.log(action.payload);
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'idle';
            state.products[action.payload.section] = action.payload.products;
        }).addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed';
        });
    }
})

export const { setMenuSection } = menuSlices.actions;
export default menuSlices.reducer;