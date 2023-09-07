import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createComment, fetchAllComments } from "./commentApi";


export const createCommentAsync = createAsyncThunk(
  'comment/createComment',
  async (data) => {
    console.log('received data', data)
    const response = await createComment(data);
    return response.data;
  }
)

export const fetchAllCommentsAsync = createAsyncThunk(
  'comments/fetchAllComments',
  async(data) => {
    console.log('userId', data)
    const response = await fetchAllComments(data);
    return response.data;
  }
);

const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCommentAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCommentAsync.fulfilled, (state, action) => ({
        ...state,
        comments: action.payload,
      }))
      .addCase(createCommentAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(fetchAllCommentsAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAllCommentsAsync.fulfilled, (state, action) => ({
        ...state,
        comments: action.payload,
      }))
      .addCase(fetchAllCommentsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
  },
});
export default commentSlice.reducer;