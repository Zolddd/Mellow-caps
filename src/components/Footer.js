import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Name */}
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Mellow Caps Logo" />
          <h2>Mellow Caps</h2>
        </div>

        {/* Middle Section - Navigation Links */}
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          {/* <li>
            <a href="/contact">Contact</a>
          </li> */}
        </ul>

        {/* Right Section - Social Media Links with Images */}
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 Mellow Caps. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
