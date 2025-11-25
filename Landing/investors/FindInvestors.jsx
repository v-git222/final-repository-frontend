import React from "react";
import table from "../assets/table.png";
import "./findinvestors.css"
export default function FindInvestors() {
  return (
    <div className="fi-wrapper">
      {/* LEFT COLUMN */}
      <div className="fi-col-left">
        <div className="fi-badge">AI-Powered Matching</div>

        <h2 className="fi-title">
          Find the Right <br />
          <span>Investors</span>
        </h2>

        <p className="fi-subtitle">
          Our AI-powered matching algorithm analyzes investor preferences,
          portfolio history, and investment patterns to connect you with the
          most relevant opportunities.
        </p>

        <div className="fi-list">
          <div className="fi-check-item">
            <div className="fi-icon green"></div>
            <p>Access 500+ active investors across 45+ countries</p>
          </div>

          <div className="fi-check-item">
            <div className="fi-icon blue"></div>
            <p>Advanced filters for industry, stage, ticket size, and geography</p>
          </div>

          <div className="fi-check-item">
            <div className="fi-icon purple"></div>
            <p>Detailed investment portfolios and investor preferences</p>
          </div>
        </div>

        <button className="fi-btn">Get Started →</button>
      </div>

      {/* RIGHT COLUMN */}
      <div className="fi-col-right">
        <img src={table} className="fi-table-img" alt="Investors UI" />
      </div>
    </div>
  );
}
