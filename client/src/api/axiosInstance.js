import axios from 'axios';

const axiosInstance = axios.create({ baseURL: '/api' });

axiosInstance.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('userInfo'));
  if (user?.token) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

export default axiosInstance;
