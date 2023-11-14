import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Image
import Background from "../assets/login/Ghost.png";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Reset errors
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    // Validate email
    if (!email.includes("@")) {
      setEmailError(true);
    }

    // Validate password length
    if (password.length < 8) {
      setPasswordError(true);
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    }

    // If valid, submit form
    if (!emailError && !passwordError && !confirmPasswordError) {
      // create user session after validation
      sessionStorage.setItem(
        "signup",
        JSON.stringify({
          email,
          password,
        })
      );

      navigate("/sign-up/welcome");
    }
  }

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
        <form onSubmit={handleSubmit}>
          <h1 className="card-title">
            Let's get you <span>discovered</span>
          </h1>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
            className={
              emailError ? "form-control error-border" : "form-control"
            }
            id="email-signup"
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
              onChange={handlePasswordChange}
              className={
                passwordError ? "form-control error-border" : "form-control"
              }
              placeholder="Password"
              value={password}
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={
                confirmPasswordError
                  ? "form-control error-border"
                  : "form-control"
              }
              placeholder="Confirm password"
            />
          </div>

          <button type="submit" className="btn btn-login">
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
