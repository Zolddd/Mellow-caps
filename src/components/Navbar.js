import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation(); // Get the current route

  return (
    <nav className="navbar">
      <h1>Mellow Caps</h1>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className={location.pathname === "/shop" ? "active" : ""}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className={location.pathname === "/cart" ? "active" : ""}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
