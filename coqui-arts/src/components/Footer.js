//This component is the section footer of the app | contains OUR socials

import React, { useState } from "react";
import { Link } from "react-router-dom";

//images
import Facebook from "../assets/socialsIcons/facebook.png";
import Instagram from "../assets/socialsIcons/instagram.png";
import LinkedIn from "../assets/socialsIcons/linkedin.png";
import X from "../assets/socialsIcons/x.png";

//Types of socials
const socials = [
  {
    href: "#",
    class: "icon ion-social-intagram",
    src: { Facebook },
    alt: "CoquiArts Facebook icon",
  },
  {
    href: "#",
    class: "icon ion-social-snapchat",
    src: { Instagram },
    alt: "CoquiArts Instagram icon",
  },
  {
    href: "#",
    class: "icon ion-social-twitter",
    src: { LinkedIn },
    alt: "CoquiArts LinkedIn icon",
  },
  {
    href: "#",
    class: "icon ion-social-facebook",
    src: { X },
    alt: "CoquiArts X icon",
  },
];

const Footer = () => {
  return (
    <div class="footer ">
      <div class="footer-basic">
        <footer>
          <div class="social">
            {/* Maps the social array for DRY*/}
            {socials.map((socials) => {
              <a href={socials.href}>
                <img
                  className={socials.class}
                  src={socials.src}
                  alt={socials.alt}
                ></img>
              </a>;
            })}
          </div>
          <div>
            <ul class="list-inline">
              <li class="home">
                <a href="#hero">⬆ Back</a>
              </li>
            </ul>
          </div>
          <div className="line"></div>
          <p class="copyright">CoquiArts © 2023</p>
          <div className="agreements">
            <ul className="policies">
              <Link exact to="/terms">
                | Terms |
              </Link>

              <Link exact to="/usage">
                Usage |
              </Link>

              <Link exact to="/privacy">
                Privacy |
              </Link>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
