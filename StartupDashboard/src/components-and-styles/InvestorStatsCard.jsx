import React from "react";
import { FiMail, FiTrendingUp, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import "./InvestorStatsCard.css";

const InvestorStatsCards = ({ dark = false }) => {
  const stats = [
    {
      title: "Total Contacted",
      value: "6",
      subtitle: "All time",
      icon: <FiMail />,
      color: "#155DFC",
      bg: "linear-gradient(135deg, rgba(21,93,252,0.08) 0%, rgba(255,255,255,0.1) 100%)",
    },
    {
      title: "Replies / Interest",
      value: "17",
      subtitle: "67% response rate",
      icon: <FiTrendingUp />,
      color: "#9810FA",
      bg: "linear-gradient(135deg, rgba(152,16,250,0.08) 0%, rgba(255,255,255,0.1) 100%)",
    },
    {
      title: "Active Discussions",
      value: "2",
      subtitle: "In progress",
      icon: <FiMessageSquare />,
      color: "#00A63E",
      bg: "linear-gradient(135deg, rgba(0,166,62,0.08) 0%, rgba(255,255,255,0.1) 100%)",
    },
    {
      title: "Closed",
      value: "1",
      subtitle: "Completed",
      icon: <FiCheckCircle />,
      color: "#5E6472",
      bg: "linear-gradient(135deg, rgba(94,100,114,0.08) 0%, rgba(255,255,255,0.1) 100%)",
    },
  ];

  return (
    <div className={`stats-container ${dark ? "dark" : "light"}`}>
      {stats.map((s, i) => (
        <div key={i} className="stats-card" style={{ background: s.bg }}>
          <div
            className="stats-icon"
            style={{ backgroundColor: s.color, boxShadow: `0 2px 8px ${s.color}33` }}
          >
            {s.icon}
          </div>
          <h4 className="stats-title">{s.title}</h4>
          <div className="stats-value">{s.value}</div>
          <div className="stats-subtitle">{s.subtitle}</div>
        </div>
      ))}
    </div>
  );
};

export default InvestorStatsCards;
