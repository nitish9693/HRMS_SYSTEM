import { createSlice } from '@reduxjs/toolkit';

const payrollSlice = createSlice({
  name: 'payroll',
  initialState: { list: [], loading: false, error: null },
  reducers: {},
});

export default payrollSlice.reducer;
