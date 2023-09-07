import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import blogReducer from "./blogSlice";

export default configureStore({
  reducer: {
    auth: authenticationReducer,
    post: blogReducer,
  },
});