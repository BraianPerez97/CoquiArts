import React from "react";
import Logo from '../logo_blk.png'


const Toggle = () => {
  
  var burgerMenu = document.getElementsByClassName('burger-menu');
  var overlay = document.getElementsByClassName('menu');

  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
};



const Nav = () => {
  return (
    <header>
      <div className='logo'>
        <img  src={Logo} alt="Coqui Arts logo"></img>
        </div>

      <div className="burger-menu">
        <span></span>
      </div>

      <div className="menu" onClick={Toggle}>
        <ul>
          <li>
            <a href="http://localhost:3000/">Home</a>
          </li>

          <li>
            <a href="http://localhost:3000/">About Us</a>
          </li>

          <li>
            <a href="http://localhost:3000/">FAQ</a>
          </li>

          <li>
            <a href="http://localhost:3000/">Login</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
