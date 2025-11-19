import React, { useState } from "react";
import "./hero.css";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const sampleResults = [
    "Alpha Startup",
    "Beta Token",
    "Gamma Ventures",
    "Delta Investors Group",
  ];

  return (
    <section className="hero">

      {/* TITLE */}
      <h1 className="hero-title">
        Tokenize real-world <br /> opportunities
      </h1>

      {/* SUBTITLE */}
      <p className="hero-subtitle">
        Emireq empowers entrepreneurs to tokenize equity, revenue, and project shares —
        connecting them with<br/> investors across the globe.
      </p>

      {/* BUTTONS */}
      <div className="hero-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Explore Marketplace</button>
      </div>

      {/* SEARCH BAR */}
      <div className="hero-search-container">
        <div className="hero-search">
          <input
            type="text"
            placeholder="Search startups, tokens, or investors..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowResults(e.target.value.length > 0);
            }}
          />

          <select defaultValue="all">
            <option value="all">All</option>
            <option value="startups">Startups</option>
            <option value="tokens">Tokens</option>
            <option value="investors">Investors</option>
          </select>

          <button className="btn-search">Search</button>
        </div>

        {/* DROPDOWN RESULTS */}
        {showResults && (
          <div className="search-results">
            {sampleResults
              .filter(item => item.toLowerCase().includes(search.toLowerCase()))
              .map((item, index) => (
                <div key={index} className="result-item">{item}</div>
              ))}
          </div>
        )}
      </div>

    </section>
  );
};

export default HeroSection;
