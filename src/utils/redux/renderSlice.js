import { createSlice } from "@reduxjs/toolkit";

export const renderSlice = createSlice({
  name: "render",
  initialState: {
    courseList: [],
    productList: [],
  },
  reducers: {
    updateCourse: (state, action) => {
      state.courseList = action.payload;
    },
    updateProduct: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { updateCourse, updateProduct } = renderSlice.actions;
export default renderSlice.reducer;
