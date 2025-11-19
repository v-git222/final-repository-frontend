import React from "react";
import "./header.css";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* COLUMN 1 — LOGO */}
        <div className="col logo-col">
          <img src={logo} alt="emireq logo" className="logo" />
        </div>

        {/* COLUMN 2 — NAV LINKS */}
        <nav className="col nav-col">
          <a href="#marketplace">Marketplace</a>
          <a href="#tokenize">Tokenize</a>
          <a href="#investors">Investors</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
        </nav>

        {/* COLUMN 3 — BUTTONS */}
        <div className="col btn-col">
          <button className="btn-startups">Startups</button>
          <button className="btn-investors">Investors</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
