import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Image
import Background from "../assets/login/Ghost.png";

const Sign = () => {
  const [newUser, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    emailError: false,
    passwordError: false,
  });

  useEffect(() => {
    axios
      .post("/user", {
        email: newUser.email,
        passwd: newUser.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [newUser.email, newUser.password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...newUser,
      [name]: value,
      emailError: name === "email" && !value.includes("@"),
      passwordError: name === "confirmPassword" && value !== newUser.password,
    });
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
        <form>
          <h1 className="card-title">
            Let's get you <span>discovered</span>
          </h1>

          <input
            type="email"
            name="email"
            className={`form-control ${newUser.emailError ? "error" : ""}`}
            placeholder="Email"
            value={newUser.email}
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
              className={`form-control ${newUser.passwordError ? "error" : ""}`}
              placeholder="Password"
              value={newUser.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              className={`form-control ${newUser.passwordError ? "error" : ""}`}
              placeholder="Confirm password"
              value={newUser.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <Link exact to="/sign-up/welcome">
            <button type="button" className="btn btn-login">
              I'M READY
            </button>
          </Link>
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
