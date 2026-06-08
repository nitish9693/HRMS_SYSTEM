import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../api/authApi';

export const loginUser = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  try {
    const res = await loginApi(data);
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Login failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('userInfo')) || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => { state.user = null; localStorage.removeItem('userInfo'); },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => { state.loading = false; state.user = action.payload; })
      .addCase(loginUser.rejected,  (state, action) => { state.loading = false; state.error = action.payload; });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
