import React from "react";
import './header.css'

//Header component function
const Header = () => {
  return (
    <div>
      <div class="logoBlock">
        <img
          src="../../Public/Pictures/VISTA.LOGO.png"
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
