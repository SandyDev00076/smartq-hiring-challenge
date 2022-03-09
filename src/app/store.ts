import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import menuReducer from "../slices/menuSlice";
import cartReducer from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
