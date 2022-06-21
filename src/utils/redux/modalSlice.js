import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
