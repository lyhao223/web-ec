import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItem{
    id: number;
    title: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
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
        },
    }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;