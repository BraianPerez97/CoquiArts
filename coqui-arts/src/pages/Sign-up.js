import React from "react";
import Background from "../assets/login/Ghost.png";

const Sign = () => {
  return (
    <section className="sign-up-card container">
      <div className="side-card col-1">
        <h1>Don't be a <span>ghost</span></h1>
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

          <input type="email" className="form-control" placeholder="Email" />

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </div>

          <button type="button" className="btn btn-login">
            I'M READY
          </button>
        </form>
      </div>
        <div className="login-btn">
          <p>Have an account already?</p>
          <button type="button" className="btn btn-small2">
            Login
          </button>
        </div>
    </section>
  );
};

export default Sign;
