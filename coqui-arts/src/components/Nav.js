import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo_blk.png";
import "../css/burger.css";

const Nav = () => {
  /* ======================
        MENU OPTIONS 
  ========================*/
  function toggleMenu() {
    window.alert("hello");
  }

  const [menu] = useState([
    {
      name: "Home",
      ref: "http://localhost:3000/",
    },
    {
      name: "About us",
      ref: "http://localhost:3000/about-us",
    },
    {
      name: "FAQ",
      ref: "http://localhost:3000/faq",
    },
    // login conditional
    [
      {
        name: "Login",
        ref: "http://localhost:3000/login",
      },
      {
        name: "Logout",
        ref: "http://localhost:3000/",
      },
    ],
  ]);

  function sayName(name) {
    window.alert(name);
  }

  return (
    <header>
      <div className="logo">
        <Link exact to="/">
          {" "}
          <img src={Logo} alt="Coqui Arts logo"></img>
        </Link>
      </div>

      <button className="burger-menu">
        <span></span>
      </button>

      <div className="menu">
        <ul>
          {
            (menu.map = (category) => {
              <li onClick={() => sayName(category.name)}>
                <Link exact to={category.ref}>
                  <a href={category.ref}>{category.name}</a>
                </Link>
              </li>;
            })
          }
        </ul>
      </div>
    </header>
  );
};

export default Nav;
