import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type StateType = {
  query: string;
};

const initialState: StateType = {
  query: "",
};

const searchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {
    updateSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { updateSearchQuery } = searchSlice.actions;

export const selectSearchQuery = (rootState: RootState) =>
  rootState.search.query;

export default searchSlice.reducer;
