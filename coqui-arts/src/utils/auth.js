import axios from 'axios';

async function requireAuth(req, res, next) {
    try {      
      if (!req.session.user_id) {
        throw new Error('Unauthorized');
      }
      next();
      
    } catch (err) {
      next(err);
    }
  }
  
  function isLoggedIn() {
  try {
    const sessionToken = localStorage.getItem('sessionToken');
    return !!sessionToken; // Returns true if sessionToken exists, false otherwise
  } catch (error) {
    console.error(error);
    return false;
  }
}


  function logout() {
  axios.post('/api/user/logout')
    .then(() => {
      // Remove session data  
      localStorage.removeItem('sessionToken');
      
      // Redirect to login
      window.location = '/login';
    })
}

export default {requireAuth, logout, isLoggedIn};