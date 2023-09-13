import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import blogReducer from "./blogSlice";
import commentReducer from './commentSlice';
import galleryReducer from "./gallerySlice";
export default configureStore({
  reducer: {
    auth: authenticationReducer,
    post: blogReducer,
    comment: commentReducer,
    photos: galleryReducer,
  },
});