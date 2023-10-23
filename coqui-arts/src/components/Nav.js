import React, { useState, useEffect } from "react";
import { render } from 'react-dom';
import Logo from '../logo_blk.png'
import '../css/burger.css'

/*
const Toggle = () => {
  var burgerMenu = document.getElementsByClassName('burger-menu');
  var overlay = document.getElementsByClassName('menu');
  
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
};
*/

const Nav = () => {
  
  
  function toggleMenu() {
    window.alert('hello');
  }
  
  const [menu] = useState([
  {
    name: "Home",
    ref: "http://localhost:3000/"
  },
  {
    name: "About us",
    ref: "http://localhost:3000/"
  },
  {
    name: "FAQ",
    ref: "http://localhost:3000/"
  },
  // login conditional
  [{
    name: "Login",
    ref: "http://localhost:3000/"
  },
  {
    name: "Logout",
    ref: "http://localhost:3000/"
  }]
  ])
  
  function sayName(name) {
    window.alert(name)
  }


  return (
    <header>
      <div className='logo'>
        <img  src={Logo} alt="Coqui Arts logo"></img>
        </div>

      <button className="burger-menu">
        <span></span>
      </button>

      <div className="menu">
        <ul>
  
          {menu.map = category => {
          <li onClick={()=> sayName(category.name)}>
            <a href={category.ref}>{category.name}</a>
          </li>
      }}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
