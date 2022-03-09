import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type StateType = string;

const initialState: StateType = "";

const searchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    setSearhQuery: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const { setSearhQuery } = searchSlice.actions;

export const selectSearchQuery = (rootState: RootState) => rootState.search;

export default searchSlice.reducer;
