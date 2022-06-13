import { configureStore } from "@reduxjs/toolkit";
import renderReducer from "./renderSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    render: renderReducer,
    user: userReducer,
  },
});
