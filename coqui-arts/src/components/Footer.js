import React, { useState } from "react";
import { Link } from "react-router-dom";

import Terms from "../pages/Policies/Terms";

import Conditions from "../pages/Policies/Conditions";

import Privacy from "../pages/Policies/Privacy";

//images
import Facebook from "../assets/socialsIcons/facebook.png";
import Instagram from "../assets/socialsIcons/instagram.png";
import LinkedIn from "../assets/socialsIcons/linkedin.png";
import X from "../assets/socialsIcons/x.png";

const Footer = () => {
  return (
    <div class="footer ">
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#">
              <img
                class="icon ion-social-instagram"
                src={Facebook}
                alt="facebook icon"
              ></img>
            </a>
            <a href="#">
              <img
                src={Instagram}
                class="icon ion-social-snapchat"
                alt="instagram icon"
              ></img>
            </a>
            <a href="#">
              <img
                src={LinkedIn}
                class="icon ion-social-twitter"
                alt="linkedIn icon"
              ></img>
            </a>
            <a href="#">
              <img
                class="icon ion-social-facebook"
                alt="twitter icon"
                src={X}
              ></img>
            </a>
          </div>
          <div>
            <ul class="list-inline">
              <li class="home">
                <a href="#">⬆ Back</a>
              </li>
            </ul>
          </div>
          <div className="line"></div>
          <p class="copyright">CoquiArts © 2023</p>
          <div className="agreements">
            <ul className="policies">
              <Link exact to="/terms">
                Terms
              </Link>

              <Link exact to="/conditions">
                Conditions
              </Link>

              <Link exact to="/privacy">
                Privacy
              </Link>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
