import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <span className="footer-name">
            Gourav <span>Sancheti</span>
          </span>
        </div>

        {/* Center */}
        <div className="footer-center">
          © 2026 Gourav | All Rights Reserved.{" "}
          {/* <span className="heart">❤</span> in India */}
        </div>

        {/* Right */}
        <div className="footer-right">
          <a href="#About">About</a>
          <a href="#Portfolio">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
