import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//Image
import Background from "../assets/login/Ghost.png";

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleInputChange = (e) => {
    console.log('hello')
  };
 
   const handleSignup = async (event) => {
    event.preventDefault();

    if (password && confirmPassword) {
       console.log('hi!');
    }
  };

  return (
    <section className="sign-up-card container">
      <div className="side-card col-1">
        <h1>
          Don't be a <span>ghost</span>
        </h1>
        <p>Create a profile to get discovered</p>
      </div>
      <img
        src={Background}
        alt="an doodle of a cover agent "
        className="background-img2"
      ></img>

      <div className="form col-2">
        <form onSubmit={handleSignup}>
          <h1 className="card-title">
            Let's get you <span>discovered</span>
          </h1>

          <input
            type="email"
            name="email"
            className={'form-control'}
            placeholder="Email"
            id="email-signup" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              id="password-signup" 
              className={'form-control'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="confirmPassword"
              className={`form-control`}
              placeholder="Confirm password"
            />
          </div>
         
            <button type="submit" className="btn btn-login" >
              I'M READY
            </button>
    
        </form>
      </div>
      <div className="login-btn">
        <p>Have an account already?</p>
        <Link exact to="/login">
          <button type="button" className="btn btn-small2">
            Login
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Sign;
