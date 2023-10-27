import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Terms from "../pages/Policies/Terms.js";
import Conditions from "../pages/Policies/Conditions.js";
import Privacy from "../pages/Policies/Privacy.js";

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
              <BrowserRouter>
                <Routes>
                  <Route>{Terms}</Route>

                  <Route>
                    {Conditions}
                  </Route>
                  <Route>
                    {Privacy}
                  </Route>
                </Routes>
              </BrowserRouter>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
