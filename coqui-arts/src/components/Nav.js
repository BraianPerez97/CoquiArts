import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo_blk.png";
import "../css/burger.css";

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header>
      <div className="logo">
        <Link exact to="/">
          <img src={Logo} alt="Coqui Arts logo"></img>
        </Link>
      </div>

      <button className="burger-menu" onClick={()=> {
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
      </button>

      <div className={menuOpen ? "overlay" : "menu"}>
        <ul>
              <Link to='/' onClick={()=>{setMenuOpen(!menuOpen)}}><li>
              Home
              </li></Link>
              <Link to='/about-us' onClick={()=>{setMenuOpen(!menuOpen)}}><li>
              About Us
              </li></Link>
              <Link to='/faq' onClick={()=>{setMenuOpen(!menuOpen)}}><li>
              FAQ
              </li></Link>
              <Link to='/login' onClick={()=>{setMenuOpen(!menuOpen)}}><li>
              Login
              </li></Link>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
