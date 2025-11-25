import React from "react";
import "./header.css";
import logo from "./assets/logo.png";

const Header = ({setActiveScreen}) => {
  return (
    <header className="header">
      <div className="header-container">

        {/* COLUMN 1 — LOGO */}
        <div className="col logo-col">
          <img src={logo} alt="emireq logo" className="logo" />
        </div>

        {/* COLUMN 2 — NAV LINKS */}
<nav className="col nav-col">
  <a href="#" onClick={(e) => { e.preventDefault(); setActiveScreen("marketplace"); }}>
    Marketplace
  </a>

  <a href="#" onClick={(e) => { e.preventDefault(); setActiveScreen("tokenize"); }}>
    Tokenize
  </a>

  <a href="#" onClick={(e) => { e.preventDefault(); setActiveScreen("investors"); }}>
    Investors
  </a>

  <a href="#" onClick={(e) => { e.preventDefault(); setActiveScreen("events"); }}>
    Events
  </a>

  <a href="#" onClick={(e) => { e.preventDefault(); setActiveScreen("about"); }}>
    About
  </a>
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
