import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { PaymentMethod } from "../types/PaymentMethod";

interface StateType {
  methods: PaymentMethod[];
}

const initialState: StateType = {
  methods: [],
};

const paymentMethodSlice = createSlice({
  name: "PaymentMethodSlice",
  initialState,
  reducers: {
    setPaymentMethods: (state, action: PayloadAction<PaymentMethod[]>) => {
      state.methods = action.payload;
    },
  },
});

export const { setPaymentMethods } = paymentMethodSlice.actions;

export const selectPaymentMethods = (rootState: RootState) =>
  rootState.payment.methods;

export default paymentMethodSlice.reducer;
