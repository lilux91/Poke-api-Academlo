import React from "react";
import "./styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-red">
        <img src="/public/images/home/pokedex.png" className="header-img"/>
        <div className="header-black"></div>
      </div>
    </div>
  )
}

export default Header;
