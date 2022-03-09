import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Item } from "../types/Item";

interface StateType {
  items: Item[];
}

const initialState: StateType = {
  items: [],
};

const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemToFind = state.items.findIndex(
        (item) => item.foodid === action.payload
      );
      if (itemToFind < 0) return;
      state.items.splice(itemToFind, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (rootState: RootState) => rootState.cart.items;

export default cartSlice.reducer;
