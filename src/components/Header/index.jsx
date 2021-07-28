import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-container">
        <nav className="header-wrapper">
          <ul className="menu-items-container">
            <div className="left-menu">
              <li className="menu-item _home-label">
                <Link to="/">sunnyside</Link>
              </li>
            </div>
            <div className="right-menu">
              <li className="menu-item">
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
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
