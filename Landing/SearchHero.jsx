// src/components/SearchHero.jsx
import React, { useState } from "react";
import "./SearchHero.css";

export default function SearchHero({ query, setQuery }) {
  const [active, setActive] = useState(null);

  const toggleActiveButton = (name) => {
    setActive((prev) => (prev === name ? null : name));
  };

  return (
    <section className="hero">
      <div className="hero__controls">
        {/* --- BUTTONS --- */}
        <div className="hero__buttons">
          <button className="btn btn--blue" type="button">
            <span>Get Started</span>
          </button>
          <button
            className={`btn btn--toggle ${active === "market" ? "active" : ""}`}
            type="button"
            onClick={() => toggleActiveButton("market")}
          >
            Explore Marketplace
          </button>
        </div>

        {/* --- SEARCH BAR --- */}
        <div className="hero__searchbar-wrap">
          <form
            className="searchbar"
            onSubmit={(e) => e.preventDefault()}
            autoComplete="off"
          >
            <div className="searchbar__left">
              <span className="searchbar__magnify" aria-hidden="true">
                🔍
              </span>
              <input
                className="searchbar__input"
                type="search"
                placeholder="Search startups, tokens, or investors..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="searchbar__right">
              <div className="dropdown">
                <select className="dropdown__select">
                  <option>All</option>
                  <option>Startups</option>
                  <option>Tokens</option>
                  <option>Investors</option>
                </select>
              </div>

              <button className="btn btn--search" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
