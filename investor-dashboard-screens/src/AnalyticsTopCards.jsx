import React from "react";
import "./analyticsTopCards.css";

export default function AnalyticsTopCards() {
  const cards = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12l5-5 4 4 7-7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconColor: "#16a34a",
      bgGradient: "linear-gradient(135deg, #ecfdf5, #f0fdf4)",
      badge: "+28%",
      badgeColor: "#bbf7d0",
      title: "Overall ROI Growth",
      value: "$442,000",
      sub: "+$98,000 vs last year",
      subColor: "#16a34a",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 12l6.364-6.364A9 9 0 1 1 5.636 5.636"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 3v9h9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconColor: "#2563eb",
      bgGradient: "linear-gradient(135deg, #eff6ff, #eef2ff)",
      badge: "+48%",
      badgeColor: "#dbeafe",
      title: "Top Sector",
      value: "HealthTech",
      sub: "$128,000 invested",
      subColor: "#64748b",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M12 7v5l3 3"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconColor: "#7c3aed",
      bgGradient: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
      badge: "Optimal",
      badgeColor: "#e9d5ff",
      title: "Avg Holding Duration",
      value: "18 months",
      sub: "Across 12 startups",
      subColor: "#64748b",
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconColor: "#f97316",
      bgGradient: "linear-gradient(135deg, #fff7ed, #ffedd5)",
      badge: "Projected",
      badgeColor: "#fed7aa",
      title: "Projected Q4 Gain",
      value: "$156,880+",
      sub: "+13% expected ROI",
      subColor: "#16a34a",
    },
  ];

  return (
    <div className="analytics-cards-container">
      {cards.map((c, i) => (
        <div key={i} className="analytics-card" style={{ background: c.bgGradient }}>

          {/* Floating Badge */}
          <span className="analytics-badge" style={{ background: c.badgeColor }}>
            {c.badge}
          </span>

          {/* Icon */}
          <div
            className="analytics-icon"
            style={{ background: c.iconColor + "20", color: c.iconColor }}
          >
            {c.icon}
          </div>

          <p className="analytics-title">{c.title}</p>
          <h2 className="analytics-value">{c.value}</h2>
          <p className="analytics-sub" style={{ color: c.subColor }}>{c.sub}</p>
        </div>
      ))}
    </div>
  );
}
