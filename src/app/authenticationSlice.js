import { toast } from "react-toastify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, userLogin, userLogout, currentUser } from "./authenticationApi";

export const registerUserAsync = createAsyncThunk(
  'authentication/userRegistration',
  async (data) => {
    const response = await registerUser(data);
    const authToken = response.headers.authorization;
    window.localStorage.setItem('authToken', authToken);

    return response.data;
  },
);

export const loginUserAsync = createAsyncThunk(
  'authentication/userLogin',
  async (data) => {
    const response = await userLogin(data);
    const authToken = response.headers.authorization;
    window.localStorage.setItem("authToken", authToken);
    return response.data;
  }
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
      // User registration
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        toast.success(
          'Registration successfuly!!', {
          position: toast.POSITION.TOP_RIGHT
        }
        )
      })
      .addCase(registerUserAsync.rejected, (state) => {
        state.isLoading = false;
        toast.error(
          'User could not be created successfuly', {
          position: toast.POSITION.TOP_RIGHT
        }
        )
      })

      // Login 
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.loggedIn = true;

        toast.success(
          `Log in successful `, {
          position: toast.POSITION.TOP_RIGHT
        }
        );
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;

        toast.error(
          `Login failed! Check your email and password`, {
          position: toast.POSITION.TOP_RIGHT
        }
        );
      })

      // Logout User
      .addCase(logoutUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.loggedIn = false;

        toast.success(
          'You have logged out successfuly!!', {
          position: toast.POSITION.TOP_RIGHT
        }
        );
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;

        toast.error(
          'Could not find an active session!', {
          position: toast.POSITION.TOP_RIGHT
        }
        )
      })

      // Current User
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
