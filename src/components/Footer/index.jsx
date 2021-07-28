import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="footer-wrapper">
        <ul className="menu-items-container">
          <div className="top-menu">
            <li className="menu-item _home-label">
              <Link to="/">sunnyside</Link>
            </li>
          </div>
          <div className="bottom-menu">
            <li className="menu-item">
              <Link to="/about">About</Link>
            </li>
            <li className="menu-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="menu-item">
              <Link to="/projects">Projects</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
