//This component is the Hero section of the app in home

//Dependencies
import React from "react";
import { Link } from "react-router-dom";

//Image
import coverDoodle from "../assets/cover/hero.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <h1 className="slogan">
        If it's <span>Art</span>, checkout <span>coquiArts!</span>
      </h1>

      <img
        src={coverDoodle}
        className="heroDoodle"
        alt="two freelancer with two clients cover"></img>

      <h4 className="description">
        An easy way to connect <span>creativity</span> in Puerto Rico
      </h4>

      <Link exact to="/about-us">
        <btn id="learn-more" type="button">
          <span className="btn-text button-3">Learn more ➜</span>
        </btn>
      </Link>
    </div>
  );
};

export default Hero;
