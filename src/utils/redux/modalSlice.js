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
    closeModal: (state, action) => {
      for (let key in state) {
        delete state[key];
      }
    },
  },
});

export const { openLogin, openSignup, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
