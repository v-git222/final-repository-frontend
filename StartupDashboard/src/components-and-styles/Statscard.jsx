import React from "react";
import "./StatsCard.css";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
  iconBg = "#EFF6FF",
  borderColor = "#155DFC",
  dark = false,
}) {
  return (
    <div className={`stats-card ${dark ? "dark" : "light"}`}>
      <div className="stats-icon" style={{ background: iconBg }}>
        <div className="icon-border" style={{ borderColor }}>
          {icon}
        </div>
      </div>

      <div className="stats-info">
        <p className="stats-title">{title}</p>
        <h3 className="stats-value">{value}</h3>
        <p className="stats-sub">{subtitle}</p>
      </div>
    </div>
  );
}
