import React from "react";
import './header.css'
import logo from '../../pictures/VISTA.LOGO.png';

//Header component function
const Header = () => {
  return (
    <div>
      <div class="logoBlock">
        <img
          src={logo}
          alt="Ancient Wisdom Birth Services Logo"
        />
        <h1>Ancient Wisdom Birth Servies</h1>
      </div>

      <div class="mottoBlock">
        <h2>REBUILDING THE VILLAGE</h2>
      </div>
    </div>
  );
};

export default Header;
