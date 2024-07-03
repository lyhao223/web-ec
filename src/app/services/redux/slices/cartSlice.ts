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

        increaseItemQuantity(state, action: PayloadAction<number>) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if(existingItem){
                existingItem.quantity++;
            }
            saveCartToSessionStorage(state.items);
        },
        decreaseItemQuantity(state, action: PayloadAction<number>) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if(existingItem && existingItem.quantity > 1){
                existingItem.quantity--;
        }else{
            state.items = state.items.filter(item => item.id !== action.payload);
        }
        saveCartToSessionStorage(state.items);
    }
    }
});

export const { addItemToCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;