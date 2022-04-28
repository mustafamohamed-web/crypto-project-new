import React from "react";
import img from "../assests/logo.png";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-card">
        <img src={img} alt="" />
        <nav>
          <ul>
            <li>
              <a href="About">Market</a>
            </li>
            <li>
              <a href="More Cryptos">Connect Wallet</a>
            </li>
            <li>
              <a href="Investment Guide">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <button>Connect Wallet</button>
    </div>
  );
};

export default Nav;
