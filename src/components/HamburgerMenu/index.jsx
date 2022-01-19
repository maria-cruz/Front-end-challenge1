import React from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <div className="right-menu-mobile">
      <div className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* <li className="menu-item">
        <Link to="/about">About</Link>
      </li>
      <li className="menu-item">
        <Link to="/services">Services</Link>
      </li>
      <li className="menu-item">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="menu-item">
        <Link to="/contact">CONTACT</Link>
      </li> */}
    </div>
  );
};

export default HamburgerMenu;
