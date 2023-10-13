import React from "react";

const Nav = () => {
  return (
    <header>

      <div className="burger-menu">
        <span></span>
      </div>

      <div className="menu">
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
