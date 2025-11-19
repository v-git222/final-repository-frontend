import React from "react";
import "./SmartInsights.css";
import { TrendingUp, Eye, Clock, Sparkles, Zap } from "lucide-react";

export default function SmartInsights({ dark = false }) {
  const insights = dark
    ? [
        {
          icon: <TrendingUp size={20} strokeWidth={2.2} />,
          text: "Your outreach to Series A investors shows a 35% higher response rate",
          color: "rgba(0, 87, 255, 0.08)", // subtle blue-glow background
        },
        {
          icon: <Eye size={20} strokeWidth={2.2} />,
          text: "3 investors viewed your updated pitch deck in the last 5 days",
          color: "rgba(0, 200, 255, 0.08)", // cyan glow
        },
        {
          icon: <Clock size={20} strokeWidth={2.2} />,
          text: "Follow-up with Crescent Capital — last response was 7 days ago",
          color: "rgba(255, 195, 0, 0.1)", // golden tint
        },
        {
          icon: <Sparkles size={20} strokeWidth={2.2} />,
          text: "Monica Gonzalez has a 90% investment rate. Consider prioritizing this conversation",
          color: "rgba(180, 130, 255, 0.1)", // soft violet tint
        },
      ]
    : [
        {
          icon: <TrendingUp size={20} strokeWidth={2.2} />,
          text: "Your outreach to Series A investors shows a 35% higher response rate",
          color: "#d9f5e5", // pastel green
        },
        {
          icon: <Eye size={20} strokeWidth={2.2} />,
          text: "3 investors viewed your updated pitch deck in the last 5 days",
          color: "#e6f0ff", // pastel blue
        },
        {
          icon: <Clock size={20} strokeWidth={2.2} />,
          text: "Follow-up with Crescent Capital — last response was 7 days ago",
          color: "#fff5e1", // pastel yellow
        },
        {
          icon: <Sparkles size={20} strokeWidth={2.2} />,
          text: "Monica Gonzalez has a 90% investment rate. Consider prioritizing this conversation",
          color: "#f4e9ff", // pastel purple
        },
      ];

  return (
    <div className={`smart-wrapper ${dark ? "dark" : "light"}`}>
      <div className="smart-header">
        <div className="smart-title">
          <Sparkles className="spark-icon" size={18} strokeWidth={2.2} />
          <h2>Smart Insights (AI-Powered)</h2>
        </div>
        <button className="ai-badge">
          <Zap size={16} strokeWidth={2.4} />
          <span>AI</span>
        </button>
      </div>

      <p className="smart-subtitle">
        Actionable recommendations based on your investor engagement data
      </p>

      <div className="smart-list">
        {insights.map((item, i) => (
          <div
            key={i}
            className="smart-item"
            style={{ background: item.color }}
          >
            <div className="smart-icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
