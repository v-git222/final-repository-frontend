import React from "react";
import { FaBullseye, FaUsers, FaCube, FaBolt } from "react-icons/fa";
import "./CompanySummary.css";

export default function CompanySummary({ dark }) {
  const cards = [
    {
      icon: <FaBullseye color="#9810FA" />,
      title: "Problem Statement",
      value: "Bridging the gap between ethical finance and digital investments",
      bg: dark ? "rgba(152,16,250,0.15)" : "rgba(152,16,250,0.05)",
    },
    {
      icon: <FaUsers color="#155DFC" />,
      title: "Target Customers",
      value: "Early-stage startups and retail investors seeking Shariah-compliant funding",
      bg: dark ? "rgba(21,93,252,0.15)" : "rgba(21,93,252,0.05)",
    },
    {
      icon: <FaCube color="#00A63E" />,
      title: "Product Description",
      value: "A digital platform connecting investors with vetted Islamic-compliant opportunities",
      bg: dark ? "rgba(0,166,62,0.15)" : "rgba(0,166,62,0.05)",
    },
    {
      icon: <FaBolt color="#F59E0B" />,
      title: "Key Differentiator",
      value: "AI-driven portfolio screening ensuring transparency and faith-aligned compliance",
      bg: dark ? "rgba(245,158,11,0.15)" : "rgba(245,158,11,0.05)",
    },
  ];

  return (
    <div
      className={`company-summary ${dark ? "dark" : "light"}`}
      style={{
        fontFamily: `"URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif`,
      }}
    >
      <div className="summary-header">
        <h2
          style={{
            fontWeight: 400,
            fontFamily: `"URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif`,
            fontSize: "1.8rem",
            letterSpacing: "0.3px",
            margin: 0,
            color: dark ? "#f5f5f5" : "#111111",
            lineHeight: "1.2",
          }}
        >
          Company Summary
        </h2>

        <button
          className="complete-btn"
          style={{
            fontFamily: `"URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif`,
          }}
        >
          Complete Profile
        </button>
      </div>

      <div className="summary-grid">
        {cards.map((c, i) => (
          <div
            className="summary-card"
            key={i}
            style={{
              background: c.bg,
              fontFamily: `"URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif`,
            }}
          >
            <div className="summary-icon">{c.icon}</div>
            <div className="summary-text">
              <p className="summary-title">{c.title}</p>
              <p className="summary-value">{c.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
