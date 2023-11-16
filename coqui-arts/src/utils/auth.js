import axios from 'axios';

export async function requireAuth(email, password) {
  try {      
    await axios.post('http://localhost:5001/api/user/login', { email, password });
    const sessionToken = localStorage.getItem('sessionToken');
    if (!sessionToken) {
      throw new Error('Unauthorized');
    }
  } catch (err) {
    console.error(err);
  }
}
  
  export function isLoggedIn() {
  try {
    const sessionToken = localStorage.getItem('sessionToken');
    return !!sessionToken; // Returns true if sessionToken exists, false otherwise
  } catch (error) {
    console.error(error);
    return false;
  }
}


  export function logout() {
  axios.post('/api/user/logout')
    .then(() => {
      // Remove session data  
      localStorage.removeItem('sessionToken');
      
      // Redirect to login
      window.location = '/login';
    })
}
