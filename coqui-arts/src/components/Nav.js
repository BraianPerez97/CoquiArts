//This component is the Navigation Bar (Nav) knwown as burger in css
//needs to manage inital state of menu (how its display now) and change 'login button' to logout and 'my profile' if user it's logged

//Dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {logout, isLoggedIn} from "../utils/auth";

//Images
import Logo from "../logo_blk.png";
import CloseIcon from "@mui/icons-material/Close";

const Nav = () => {
const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const loggedInStatus = await isLoggedIn();
      console.log('Logged in status:', loggedInStatus); // Add this line
      setLoggedIn(loggedInStatus);
    };
  
    checkLoggedIn();
  }, []);

  const handleLogout = async () => {
    await logout();
    setLoggedIn(false);
    navigate('/')
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
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
          }}
        ></CloseIcon>
        <ul>
          <Link
            to="/"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about-us"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <li>About Us</li>
          </Link>
          <Link
            to="/about-us"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <li>FAQ</li>
          </Link>
          {loggedIn ? (
            <>
              <Link
                to="/my-profile"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <li>My Profile</li>
              </Link>
              <li onClick={handleLogout}>Logout</li>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <li>Login</li>
            </Link>
          )}
         
        </ul>
      </div>
    </header>
  );
};

export default Nav;
