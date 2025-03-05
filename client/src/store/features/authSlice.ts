import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

// Define API URL
const API_URL = "http://localhost:8080/api/auth";

// ✅ Register User Thunk
// ✅ Register User Thunk (return user details)
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (
    {
      name,
      email,
      password,
    }: { name: string; email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${API_URL}/signup`,
        { name, email, password },
        { withCredentials: true }
      );
      return response.data.data; // ✅ Return user details
    } catch (error) {
      return rejectWithValue("Registration failed");
    }
  }
);

// ✅ Login User Thunk (return user details)
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        { withCredentials: true }
      );
      return response.data.data; // ✅ Return user details
    } catch (error) {
      return rejectWithValue("Invalid credentials");
    }
  }
);

// ✅ Check Authentication Status Thunk
export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const response = await axios.get(`${API_URL}/check-auth`, {
      withCredentials: true,
    });
    // console.log(response.data);

    return response.data;
  } catch (error) {
    return null;
  }
});

// ✅ Logout User Thunk
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
  return false;
});

// ✅ Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null as { name: string; email: string } | null,
    loading: false,
    error: null as string | null,
    authChecked: false, // ✅ Ensures we know when auth check is done
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 🔹 Register User Cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload; // ✅ Store new user details
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // 🔹 Login User Cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload; // ✅ Store new user details
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // 🔹 Check Authentication
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuthenticated = !!action.payload;
        state.user = action.payload?.data || null; // ✅ Fix: Ensure user is correctly set
        state.authChecked = true;
        state.loading = false;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.authChecked = true;
        state.loading = false;
      })

      // 🔹 Logout User
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null; // ✅ Clear user on logout
      });
  },
});

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
