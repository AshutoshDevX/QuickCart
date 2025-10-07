import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) existing.quantity++;
      else state.items.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.quantity = action.payload.qty;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
