import React from "react";
import "./FundingStats.css";
import { DollarSign, Handshake, PiggyBank, Target, TrendingUp } from "lucide-react";

export default function FundingStats({ dark }) {
  const stats = [
    {
      title: "Total Funding Raised",
      value: "$3.27M",
      subtitle: "from last month",
      badge: "+7%",
      icon: <DollarSign size={20} color="#fff" />,
      color: "#16a34a",
      progress: 85,
    },
    {
      title: "Active Deals",
      value: "8",
      subtitle: "ongoing negotiations",
      badge: "2 this week",
      icon: <Handshake size={20} color="#fff" />,
      color: "#2563eb",
      progress: 70,
    },
    {
      title: "Average Deal Size",
      value: "$408K",
      subtitle: "from last quarter",
      badge: "Q3 2025",
      icon: <PiggyBank size={20} color="#fff" />,
      color: "#8b5cf6",
      progress: 60,
    },
    {
      title: "Success Rate",
      value: "85%",
      subtitle: "from last year",
      badge: "+3%",
      icon: <Target size={20} color="#fff" />,
      color: "#3b82f6",
      progress: 90,
    },
  ];

  return (
    <div className={`funding-stats ${dark ? "dark" : ""}`}>
      {stats.map((card, i) => (
        <div key={i} className="funding-card">
          <div className="funding-top">
            <div
              className="funding-icon"
              style={{ backgroundColor: card.color }}
            >
              {card.icon}
            </div>
            <div className="funding-badge">{card.badge}</div>
          </div>

          <p className="funding-title">{card.title.toUpperCase()}</p>
          <h2 className="funding-value">{card.value}</h2>
          <p className="funding-sub">{card.subtitle}</p>

          <div className="funding-progress">
            <div
              className="funding-progress-bar"
              style={{ width: `${card.progress}%`, backgroundColor: card.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
