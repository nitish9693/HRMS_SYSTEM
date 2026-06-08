import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchEmployees = createAsyncThunk('employees/fetchAll', async () => {
  const { data } = await axiosInstance.get('/employees');
  return data;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending,   (state) => { state.loading = true; })
      .addCase(fetchEmployees.fulfilled, (state, action) => { state.loading = false; state.list = action.payload; })
      .addCase(fetchEmployees.rejected,  (state, action) => { state.loading = false; state.error = action.error.message; });
  },
});

export default employeeSlice.reducer;
