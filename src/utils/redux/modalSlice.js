import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    Node: null,
    isOpen: false,
  },
  reducers: {
    openLogin: (state, action) => {
      state.login = !state.login;
    },
    openSignup: (state, action) => {
      state.signup = !state.signup;
    },
  },
});

export const { openLogin, openSignup } = modalSlice.actions;
export default modalSlice.reducer;
