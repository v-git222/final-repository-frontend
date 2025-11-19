import React from "react";
import {
  Building2,
  Users,
  Coins,
  HandHeart,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import "./StatsCard.css";

export default function StatsCard({ title, value, change, positive, icon, color, dark }) {
  const Icon = icon;

  return (
    <div className={`stats-card ${dark ? "dark" : ""}`}>
      <div className="stats-left">
        <p className="stats-title">{title}</p>
        <h2 className="stats-value">{value}</h2>
        <div className="stats-change">
          {positive ? (
            <ArrowUp size={14} color="#16a34a" />
          ) : (
            <ArrowDown size={14} color="#dc2626" />
          )}
          <span
            className={`change-text ${positive ? "positive" : "negative"}`}
          >
            {positive ? "+" : "-"}
            {change}% 
          </span>
          <span className="vs-text">vs last month</span>
        </div>
      </div>
      <div className="stats-icon" style={{ backgroundColor: color }}>
        <Icon color="#fff" size={20} />
      </div>
    </div>
  );
}
