import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
//Image
import Background from "../assets/login/Spy.png";

const Login = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

 const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5001/api/user/login', userInput)
      .then((response) => {
        console.log(response.data.user);
        setLoggedIn(true);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        setError('Incorrect Credentials, Please try again')
      });
  };
// !Token it's currently NOT working, damaged back-end. Needs new approach
const handleLogin = async (email, password) => {
  try {
    const response = await axios.post('/api/user/login', { email, password });
    const token = response.data.token;

    // Store the token securely
    localStorage.setItem('token', token);

    // Redirect to the user's dashboard or another protected route
    navigate('/');
  } catch (error) {
    // Handle login error
    console.error(error);
  }
};




// Log out the user by removing the JWT token
const handleLogout = () => {
  // Remove the token from localStorage
  localStorage.removeItem('token');
  // Redirect to the login page or another appropriate page
  navigate('/login');
};


  return (
    <section className="login-card container container2">
      {loggedIn ? (
      <div>
        <Link exact to='/'>Redirecting please wait...</Link>
      </div>
    ) : (
   <div>
      <img
        src={Background}
        alt="a doodle of a ghost "
        className="background-img"
      ></img>

      <div className="form">
        <form onSubmit={handleFormSubmit}>
          <h1 className="card-title1">
            Are you <span>registered?</span>
          </h1>
          <p className="card-p">Let’s check those credentials</p>

          {/* Form Section */}
          <input type="email" name="email" value={userInput.email}
          id="email-login"
          className="form-control" placeholder="Email" 
          onChange={handleInputChange}
          />

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              name="password"
              id="password-login"
              className="form-control"
              placeholder="Password"
              value={userInput.password}
              onChange={handleInputChange}
            />
          </div>

          {/* Buttons Section */}
          <button type="submit" className="btn btn-login">
            LET ME IN!
          </button>

          <div className="message">
            <div>
              <input id="rem-check" type="checkbox" /> Remember Me
            </div>
            <div>Forgot your password?</div>
          </div>

          <div className="sign-up">
            {/* Sign-up Section */}
            <p>Don't have an account?</p>
            <Link exact to="/sign-up">
              <button type="submit" className="btn btn-small">
                Create one
              </button>
            </Link>
          </div>
        </form>
      </div> 
      </div>
 )}
    </section>
  );
};

export default Login;
