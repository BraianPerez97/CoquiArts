import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//Image
import Background from "../assets/login/Ghost.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Sign() {
  // Declarations
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  //Methods
  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Reset errors
    setErrors({
      email: false,
      password: false,
      confirmPassword: false,
    });

    let isValid = true;

    // Validate email
    if (!formData.email.includes("@")) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
      isValid = false;
    }

    // Validate password length
    if (formData.password.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
      isValid = false;
    }

    // Validate confirmation
    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: true }));
      isValid = false;
    }

    // If valid, submit form
    if (isValid &&
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      formData.email &&
      formData.password
    ) {
      // create user session after validation
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          email: formData.email,
          password: formData.password,
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
        {/* FORM SECTION */}
        <form>
          <h1 className="card-title">
            Let's get you <span>discovered</span>
          </h1>

          {/* INPUT */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formData.email}
            className={`form-control ${errors.email ? "invalid-input" : ""}`}
            id="email-signup"
          />

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
              </span>
            </div>

            {/* INPUT */}

            <input
              type="password"
              name="password"
              id="password-signup"
              onChange={handleInputChange}
              className={`form-control ${
                errors.password ? "invalid-input" : ""
              }`}
              placeholder="Password"
              value={formData.password}
            />

            {/* INPUT */}

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`form-control ${
                errors.confirmPassword ? "invalid-input" : ""
              }`}
              placeholder="Confirm password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-login"
            onClick={handleSubmit}
          >
            I'M READY
          </button>
        </form>
      </div>
      <div className="login-btn">
        <p>Have an account already?</p>
        <Link exact to="/login">
          <button type="submit" className="btn btn-small2">
            Login
          </button>
        </Link>
      </div>
    </section>
  );
}
