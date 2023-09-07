import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, userLogin, userLogout, currentUser } from "./authenticationApi";

export const registerUserAsync = createAsyncThunk(
  'authentication/userRegistration',
  async (data) => {
    const response = await registerUser(data);
    const authToken = response.headers.authorization;
    const httpResponse = response.status;
    const httpResponseText = response.statusText;
    window.localStorage.setItem('authToken', authToken);

    return {
      authToken,
      httpResponse,
      httpResponseText,
    };
  },
);

export const loginUserAsync = createAsyncThunk(
  'authentication/userLogin',
  async (data) => {
    const response = await userLogin(data);
    const authToken = response.headers.authorization;
    const httpLoginResponse = response.status;
    const httpLoginResponseText = response.statusText;
    window.localStorage.setItem("authToken", authToken);
    return {
      authToken,
      httpLoginResponse,
      httpLoginResponseText,
    };
  },
);

export const logoutUserAsync = createAsyncThunk(
  'authentication/userLogout',
  async () => {
    await userLogout();
    window.localStorage.clear();
  },
);

export const currentUserAsync = createAsyncThunk(
  'authentication/currentUser',
  async () => {
    const response = await currentUser();
    const user = response.data;
    window.localStorage.setItem("userId", user.id);
    return response.data;
  },
);

const authToken = window.localStorage.getItem('authToken');
const userId = window.localStorage.getItem('userId');

const initialState = {
  error: null,
  isLoading: false,
  userId: userId || null,
  loggedIn: !!authToken,
  authToken: authToken || null,
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authToken = action.payload.authToken;
        state.httpResponse = action.payload.httpResponse;
        state.httpResponseText = action.payload.httpResponseText;
      })
      .addCase(registerUserAsync.rejected, (state) => {
        state.isLoading = false;
      })
      // Login 
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loggedIn = true;
        state.authToken = action.payload.authToken;
        state.httpLoginResponse = action.payload.httpLoginResponse;
        state.httpLoginResponseText = action.payload.httpLoginResponseText;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.httpLoginResponseText = action.error.message;
        state.httpLoginResponse = 401;
      })
      .addCase(currentUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentUserAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.loggedIn = true;
      });
  },
});
export default authenticationSlice.reducer;
