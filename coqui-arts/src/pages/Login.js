import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from '../utils/auth';
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


const handleLogin = async (email, password) => {
  
  try {
    const response = await AuthService.login(email, password);
    
    const { user, sessionToken } = response.data;

  localStorage.setItem('session', sessionToken);
  console.log('success' + user)

  // Redirect
  navigate('/');
  } catch (error) {
    // Handle login error
    console.error(error);
  }
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
        <form onSubmit={handleLogin}>
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
                <i className="fa fa-lock"></i>
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
