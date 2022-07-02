import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    id: 1,
    name: "咖啡蛋糕",
    size: "8吋",
    flavor: "草莓",
    image: `${process.env.PUBLIC_URL}/images/home/section01_cake1.png`,
    price: 3000,
    count:1,
  },
  {
    id: 2,
    name: "夯蕉蛋糕",
    size: "10吋",
    flavor: "芒果",
    image: `${process.env.PUBLIC_URL}/images/home/section01_cake1.png`,
    price: 2500,
    count:1,
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    favorite: [],
    cart: [{
      tax:0.05,
      fee: 60,
      discount: 0.8, 
    },products],
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
