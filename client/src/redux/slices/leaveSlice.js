import { createSlice } from '@reduxjs/toolkit';

const leaveSlice = createSlice({
  name: 'leave',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
});

export default leaveSlice.reducer;
