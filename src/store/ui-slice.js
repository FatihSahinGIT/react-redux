/* =============== USER INTERFACE SLICE =============== */

import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "ui",
  initialState: { cartIsShown: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    showNot(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice;
