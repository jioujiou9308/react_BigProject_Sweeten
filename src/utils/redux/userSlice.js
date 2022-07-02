import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: 0,
      name: "遊客",
    },
    favorite: [],
    cart: [],
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updateFavorite: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

export const { updateUser, updateCart, updateFavorite } = userSlice.actions;
export default userSlice.reducer;
