import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Item } from "../types/Item";

interface StateType {
  selectedCategory: string | null;
  items: Item[];
}

const initialState: StateType = {
  selectedCategory: null,
  items: [],
};

const menuSlice = createSlice({
  name: "menuSlice",
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setMenu: (state, action: PayloadAction<Item[]>) => {
      state.items = [...action.payload];
    },
  },
});

export const { updateCategory, setMenu } = menuSlice.actions;

export const selectCategory = (rootState: RootState) =>
  rootState.menu.selectedCategory;

export const selectMenuItems = (rootState: RootState) => rootState.menu.items;

export default menuSlice.reducer;
