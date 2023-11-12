//This component is the Navigation Bar (Nav) knwown as burger in css
//needs to manage inital state of menu (how its display now) and change 'login button' to logout and 'my profile' if user it's logged

//Dependencies
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Images
import Logo from "../logo_blk.png";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
  // Remove the token from localStorage | Purpose: take JWT of user and send to back (bcrypt on the back)
  localStorage.removeItem('token');
  // Redirect to the login page
  navigate('/login');
};

  return (
    <header>
      <div className="logo">
        <Link exact to="/">
          <img src={Logo} alt="Coqui Arts logo"></img>
        </Link>
      </div>
      {/* Burger menu closed */}
      <div className="b-menu">
        <button
          className="burger-menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
        </button>
      </div>
      {/* Burger menu open */}
      <div className={menuOpen ? "overlay" : "menu"}>
        <CloseIcon
          style={{
            color: "white",
            position: "absolute",
            right: "3em",
            top: "1.5em",
            cursor: "pointer",
          }}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}></CloseIcon>
        <ul>
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
            <li>Home</li>
          </Link>
          <Link
            to="/about-us"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
            <li>About Us</li>
          </Link>
          <Link
            to="/about-us"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
            <li>FAQ</li>
          </Link>
          <Link
            to="/login"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
