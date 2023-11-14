// Create an Axios instance with an Authorization header
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001/',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });


export default axiosInstance;