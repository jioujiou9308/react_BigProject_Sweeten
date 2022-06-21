import { configureStore } from "@reduxjs/toolkit";
import renderReducer from "./renderSlice";
import userReducer from "./userSlice";
import chatReducer from "./chatSlice";
import modalReducer from "./modalSlice";

export default configureStore({
  reducer: {
    render: renderReducer,
    user: userReducer,
    chat: chatReducer,
    modal: modalReducer,
  },
});
