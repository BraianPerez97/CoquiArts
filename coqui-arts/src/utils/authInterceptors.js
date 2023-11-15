// authInterceptor.js
import axios from 'axios';

const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if a session token exists in local storage
    const sessionToken = localStorage.getItem('session');

    // Attach the session token to the Authorization header
    if (sessionToken) {
      config.headers.Authorization = `Bearer ${sessionToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
