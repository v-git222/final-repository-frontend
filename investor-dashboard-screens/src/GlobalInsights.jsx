import React from "react";
import "./globalInsights.css";

export default function GlobalInsights() {
  const insights = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14a8 8 0 0 1 16 0"/>
          <path d="M12 14v7"/>
        </svg>
      ),
      text: "Healthtech investments in GCC grew ~13% in 2025",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/>
          <path d="M18 17l-4-4-3 3-4-4"/>
        </svg>
      ),
      text: "AI-driven platforms projected to ROI by 2026",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      text: "FinTech sees early-stage funding in India & MENA",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      text: "Islamic finance market expected to reach $3.8T by 2026",
    },
  ];

  return (
    <div className="gi-card">
      {/* Header */}
      <div className="gi-header">
        <div className="gi-title-left">
          <div className="gi-title-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="8" r="1" />
              <path d="M12 12v4" />
            </svg>
          </div>
          <div>
            <h2>Global Insights</h2>
            <p className="gi-sub">Market trends and opportunities</p>
          </div>
        </div>
      </div>

      {/* 4 Insight Items */}
      <div className="gi-grid">
        {insights.map((item, i) => (
          <div className="gi-item" key={i}>
            <div className="gi-item-icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="gi-footer">Updated daily from global market data</p>
    </div>
  );
}
