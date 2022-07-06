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
    openOrderDetail: (state, action) => {
      state.orderDetail = !state.orderDetail;
      state.payload = action.payload;
    },
    openAddComment: (state, action) => {
      state.addComment = !state.addComment;
      state.payload = action.payload;
    },
  },
});

export const { openLogin, openSignup, closeModal, openOrderDetail, openAddComment } =
  modalSlice.actions;
export default modalSlice.reducer;
