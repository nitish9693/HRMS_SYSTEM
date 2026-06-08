import { createSlice } from '@reduxjs/toolkit';

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
});

export default attendanceSlice.reducer;
