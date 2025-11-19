import React from "react";
import { Coins, DollarSign, Activity, TrendingUp } from "lucide-react";
import "./MetricCards.css";

export default function MetricCards() {
  const metrics = [
    {
      title: "Total Tokens Issued",
      value: "2.4M",
      subtitle: "Across 15 startups",
      icon: <Coins size={20} color="#fff" />,
      change: "+12.5%",
      gradient: "linear-gradient(135deg, #a855f7, #7e22ce)",
      badgeBg: "#f3e8ff",
      badgeColor: "#7e22ce",
    },
    {
      title: "Market Cap",
      value: "$8.4M",
      subtitle: "Since this month",
      icon: <DollarSign size={20} color="#fff" />,
      change: "+8.2%",
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      badgeBg: "#dbeafe",
      badgeColor: "#1d4ed8",
    },
    {
      title: "Active Tokens",
      value: "100",
      subtitle: "In this quarter",
      icon: <Activity size={20} color="#fff" />,
      change: "15 Active",
      gradient: "linear-gradient(135deg, #ec4899, #be185d)",
      badgeBg: "#fce7f3",
      badgeColor: "#be185d",
    },
    {
      title: "Trading Volume",
      value: "$1.2M",
      subtitle: "Last 30 days",
      icon: <TrendingUp size={20} color="#fff" />,
      change: "+7%",
      gradient: "linear-gradient(135deg, #22c55e, #15803d)",
      badgeBg: "#dcfce7",
      badgeColor: "#15803d",
    },
  ];

  return (
    <div className="metric-container">
      {metrics.map((m, i) => (
        <div key={i} className="metric-card">
          {/* Icon */}
          <div
            className="metric-icon"
            style={{ background: m.gradient }}
          >
            {m.icon}
          </div>

          {/* Change Tag */}
          <div
            className="metric-change"
            style={{ backgroundColor: m.badgeBg, color: m.badgeColor }}
          >
            {m.change}
          </div>

          {/* Content */}
          <div className="metric-content">
            <p className="metric-title">{m.title}</p>
            <h3 className="metric-value">{m.value}</h3>
            <p className="metric-subtitle">{m.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
