import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBlogPost, fetchBlogPost, deleteBlogPost, updateBlogPost } from "./blogApi";

export const createBlogAsync = createAsyncThunk(
  'blog/createBlog',
  async (data, userId) => {
    const response = await createBlogPost({data, userId});
    return response.data;
  }
);

export const updateBlogPostAsync = createAsyncThunk(
  'blog/updateBlog',
  async (data) => {
    const response = await updateBlogPost(data);
    return response.data;
  }
)
export const fetchBlogPostAsync = createAsyncThunk(
  'blog/fetchBlogs',
  async () => {
    const response = await fetchBlogPost();
    return response.data;
  }
);

export const deleteBlogPostAsync = createAsyncThunk(
  'blog/deletBlog',
  async (data) => {
    const response = await deleteBlogPost(data);
    return response.data;
  }
)


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
      })
      .addCase(fetchBlogPostAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogPostAsync.fulfilled, (state, action) => ({
        ...state,
        posts: action.payload,
        status: 'success',
      }))
      .addCase(fetchBlogPostAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(deleteBlogPostAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteBlogPostAsync.fulfilled, (state, action) => ({
        posts: action.payload
      }))
      .addCase(deleteBlogPostAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(updateBlogPostAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBlogPostAsync.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        const postIndex = state.posts.findIndex((post) => post.id === updatedPost.id);
        if (postIndex !== -1) {
          state.posts[postIndex] = { ...state.posts[postIndex], ...updatedPost }
          state.status = 'succeeded'
        }
      })
      .addCase(updateBlogPostAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
  },
});
export default blogSlice.reducer;
