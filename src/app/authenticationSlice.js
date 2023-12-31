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
    const user = JSON.stringify(response.data.data);
    const authToken = response.headers.authorization;
    window.localStorage.setItem("authToken", authToken);
    window.localStorage.setItem("user", user);
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
    const user = JSON.stringify(response.data)
    JSON.stringify(window.localStorage.setItem("user", user));
    return response.data;
  },
);

const authToken = window.localStorage.getItem('authToken');
const user = JSON.parse(window.localStorage.getItem('user'));

const initialState = {
  error: null,
  status: '',
  loggedIn: !!authToken,
  authToken: authToken || null,
  user: user || null,
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // User registration
      .addCase(registerUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUserAsync.fulfilled, (state) => {
        state.status = 'success';
        toast.success(
          'Registration successfuly!!', {
          position: toast.POSITION.TOP_RIGHT
        }
        )
      })
      .addCase(registerUserAsync.rejected, (state) => {
        state.status = 'failed';
        toast.error(
          'User could not be created successfuly', {
          position: toast.POSITION.TOP_RIGHT
        }
        )
      })

      // Login 
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.loggedIn = true;
        state.user = action.payload.data
        toast.success(
          `Log in successful `, {
          position: toast.POSITION.TOP_RIGHT
        }
        );
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        toast.error(
          `Login failed! Check your email and password`, {
          position: toast.POSITION.TOP_RIGHT
        }
        );
      })

      // Logout User
      .addCase(logoutUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.status = 'success';
        state.loggedIn = false;

        toast.success(
          'You have logged out successfuly!!', {
          position: toast.POSITION.TOP_RIGHT
        }
        );
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;

        toast.error(
          'Could not find an active session!', {
          position: toast.POSITION.TOP_RIGHT
        }
        )
      })

      // Current User
      .addCase(currentUserAsync.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(currentUserAsync.fulfilled, (state, action) => {
        state.status = 'success';
        state.user = action.payload;
        state.loggedIn = true;
      });
  },
});
export default authenticationSlice.reducer;
