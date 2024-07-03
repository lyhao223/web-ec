'use client';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import isClient from "../../utils/isClient";
interface CartItem{
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: isClient() ? JSON.parse(sessionStorage.getItem('cartItems') || '[]') : [],
};
const saveCartToSessionStorage = (items: CartItem[]) => {
  if (isClient()) {
    sessionStorage.setItem('cartItems', JSON.stringify(items));
  }
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<CartItem>) {
            const existingItem = state.items.find(item=> item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity++;
            }else {
                state.items.push({...action.payload, quantity: 1});
                console.log('done')
            }
            saveCartToSessionStorage(state.items)
        },
    }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;