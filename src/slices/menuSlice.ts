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

type UpdateItemQuantityPayload = {
  id: string;
  quantity: number;
};

type UpdateItemSessionPayload = {
  id: string;
  session: string;
};

type UpdateItemNotePayload = {
  id: string;
  note: string;
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
    updateItemQuantity: (
      state,
      action: PayloadAction<UpdateItemQuantityPayload>
    ) => {
      const itemToFind = state.items.findIndex(
        (item) => item.foodid === action.payload.id
      );
      if (itemToFind < 0) return;
      state.items[itemToFind].quantity = action.payload.quantity;
    },
    updateItemSession: (
      state,
      action: PayloadAction<UpdateItemSessionPayload>
    ) => {
      const itemToFind = state.items.findIndex(
        (item) => item.foodid === action.payload.id
      );
      if (itemToFind < 0) return;
      state.items[itemToFind].session = action.payload.session;
    },
    updateItemNote: (state, action: PayloadAction<UpdateItemNotePayload>) => {
      const itemToFind = state.items.findIndex(
        (item) => item.foodid === action.payload.id
      );
      if (itemToFind < 0) return;
      state.items[itemToFind].note = action.payload.note;
    },
  },
});

export const {
  updateCategory,
  setMenu,
  updateItemQuantity,
  updateItemSession,
  updateItemNote,
} = menuSlice.actions;

export const selectCategory = (rootState: RootState) =>
  rootState.menu.selectedCategory;

export const selectMenuItems = (rootState: RootState) => rootState.menu.items;

export default menuSlice.reducer;
