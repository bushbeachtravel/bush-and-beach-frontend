// import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactUsMessage, requisitioMessage } from "./messagesApi";

export const contactUsMessageAsync = createAsyncThunk(
  'contact/contactUsMessage',
  async (data) => {
    const response = await contactUsMessage(data);
    return response.data;
  }
);

export const requisitionMessageAsync = createAsyncThunk(
  'contact/requistionMessage', 
  async (data) => {
    const response = await requisitioMessage(data);
    return response.data;
  }
)

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    error: null,
    status: 'idle',
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUsMessageAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(contactUsMessageAsync.fulfilled, (state, action) => ({
        ...state,
        messages: action.payload,
        status: 'fulfilled',
      }))
      .addCase(contactUsMessageAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })

      .addCase(requisitionMessageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(requisitionMessageAsync.fulfilled, (state, action) => ({
        ...state,
        messages: action.payload,
        status: 'fulfilled',
      }))
      .addCase(requisitionMessageAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
  },
});
export default messageSlice.reducer;
