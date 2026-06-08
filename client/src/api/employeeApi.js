import axiosInstance from './axiosInstance';

export const getEmployeesApi    = ()         => axiosInstance.get('/employees');
export const getEmployeeApi     = (id)       => axiosInstance.get(`/employees/${id}`);
export const createEmployeeApi  = (data)     => axiosInstance.post('/employees', data);
export const updateEmployeeApi  = (id, data) => axiosInstance.put(`/employees/${id}`, data);
export const deleteEmployeeApi  = (id)       => axiosInstance.delete(`/employees/${id}`);
