import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import employeeReducer from './slices/employeeSlice';
import attendanceReducer from './slices/attendanceSlice';
import leaveReducer from './slices/leaveSlice';
import payrollReducer from './slices/payrollSlice';

export const store = configureStore({
  reducer: {
    auth:       authReducer,
    employees:  employeeReducer,
    attendance: attendanceReducer,
    leaves:     leaveReducer,
    payroll:    payrollReducer,
  },
});
