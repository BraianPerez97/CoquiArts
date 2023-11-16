import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {requireAuth, isLoggedIn} from '../utils/auth';
import axios from "axios";
//Image
import Background from "../assets/login/Spy.png";

const Login = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  
  });

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

 useEffect(() => {
    setLoggedIn(isLoggedIn()); // use isLoggedIn to set loggedIn state
  }, []);

  const emailExists = async (email) => {
  try {
    const response = await axios.get('http://localhost:5001/api/user', { params: { email } });
       console.log('Response from server:', response); // Add this lin
    return response.status === 200 && response.data.exists;
  } catch (error) {
    console.error('Failed to check email:', error);
    return false;
  }
};

const handleLogin = async (e) => {
  e.preventDefault();
  // Reset errors
  setErrors({
    email: false,
    password: false,
  });

  // Validate email
  if (!userInput.email.includes("@")) {
    setErrors((prevErrors) => ({ ...prevErrors, email: true }));
  }

  // Validate password length
  if (userInput.password.length < 8) {
    setErrors((prevErrors) => ({ ...prevErrors, password: true }));
  }

  // If valid, submit form
  if (!errors.email && !errors.password && userInput.email && userInput.password) {
    console.log('login on its way')
    if (await emailExists(userInput.email, userInput.password)) {
    try {
      await requireAuth(e);
      console.log('login successful')
      // Redirect
      navigate('/');
    }
    catch (error) {
      // Handle login error
      console.error(error);
    };} else {
      console.log('email does not exist')
    }
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
          onChange={handleInputChange}
          id="email-login"
          className={`form-control ${errors.email ? "invalid-input" : ""}`}
          placeholder="Email" 
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
              onChange={handleInputChange}
              className={`form-control ${errors.password ? "invalid-input" : ""}`}
              placeholder="Password"
              value={userInput.password}
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
