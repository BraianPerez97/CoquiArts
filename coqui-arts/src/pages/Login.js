import React from "react";
import Background from "../assets/login/Spy.png";

const Login = () => {
  return (
    <section className="login-card container container2">
      <img
        src={Background}
        alt="an doodle of a ghost "
        className="background-img"
      ></img>

      <div className="form">
        <form>
           <h1 className="card-title">Are you <span>registered?</span></h1>
           
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
          </div>

          <button type="button" className="btn btn-login">
            LOGIN
          </button>

          <div className="message">
            <div>
              <input id="rem-check" type="checkbox" /> Remember Me
            </div>
            <div>
              <a href="#">Forgot your password?</a>
            </div>
          </div>

          <div className="sign-up">
            <p>Don't have an account?</p>
          <button type="button" className="btn btn-small">
            Create one
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
