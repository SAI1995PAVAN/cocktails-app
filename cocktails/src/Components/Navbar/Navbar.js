import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-component">
      <div className="nav-container">
        <Link to="/">
          <h1 className="logo-name">
            The<span id="cocktail-title">Cocktails</span>DB
          </h1>
        </Link>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
