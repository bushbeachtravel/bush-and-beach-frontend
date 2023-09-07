import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBlogPost, fetchBlogPost } from "./blogApi";

export const createBlogAsync = createAsyncThunk(
  'blog/createBlog',
  async (data, userId) => {
    console.log("data", data);
    const response = await createBlogPost({data, userId});
    return response.data;
  }
);

export const fetchBlogPostAsync = createAsyncThunk(
  'blog/fetchBlogs',
  async (id) => {
    const response = await fetchBlogPost(id);
    return response.data;
  }
);


const blogSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlogAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBlogAsync.fulfilled, (state, action) => ({
        ...state,
        posts: action.payload,

      }))
      .addCase(createBlogAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
        console.log("That did  not work", state.error)
      })
      .addCase(fetchBlogPostAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogPostAsync.fulfilled, (state, action) => ({
        ...state,
        posts: action.payload,
      }))
      .addCase(fetchBlogPostAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});
export default blogSlice.reducer;

