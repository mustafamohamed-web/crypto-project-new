import React from "react";
import img from "../assests/logo.png";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import Main from "./Main";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-card">
        <img src={img} alt="" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/market">Market</Link>
            </li>
            <li>
              <Link to="/about us">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <button>Connect Wallet</button>
    </div>
  );
};

export default Nav;
