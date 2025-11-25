import React from "react";
import "./marketplace-hero.css";

export default function MarketplaceHero() {
  return (
    <>
      {/* Inline font injection for URWGeometric */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('./URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
          }
        `}
      </style>

      <section className="marketplace-hero">

        <span className="hero-badge">MARKETPLACE</span>

        <h1 className="hero-title">
          Discover Investment <br /> Opportunities
        </h1>

        <p className="hero-subtitle">
          Browse tokenized assets, startups, and real estate opportunities.
          Invest in the future with transparency and security
        </p>

        <div className="hero-stats">
          <div className="stat-box">
            <h2>500+</h2>
            <p>Active Listings</p>
          </div>

          <div className="stat-box">
            <h2>$2.5B+</h2>
            <p>Total Volume</p>
          </div>

          <div className="stat-box">
            <h2>24.8%</h2>
            <p>Avg. ROI</p>
          </div>
        </div>
      </section>
    </>
  );
}
