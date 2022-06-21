import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { modal: false },
  reducers: {
    openLogin: (state, action) => {
      state.login = !state.login;
    },
  },
});

export const { openLogin } = modalSlice.actions;
export default modalSlice.reducer;
