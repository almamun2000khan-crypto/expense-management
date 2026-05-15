import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://expense-management-2-rpqv.onrender.com/api/v1/';

const axiosInstance = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;