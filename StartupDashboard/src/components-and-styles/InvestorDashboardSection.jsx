import React from "react";
import {
  FiMail,
  FiTrendingUp,
  FiCalendar,
  FiMessageSquare,
} from "react-icons/fi";
import "./InvestorStats.css";

const stats = [
  {
    icon: <FiMail />,
    title: "Total Investor Contacted",
    value: 42,
    subtitle: "+4 this week",
    color: "#2563eb", // blue
  },
  {
    icon: <FiTrendingUp />,
    title: "Responses Received",
    value: 17,
    subtitle: "+12% vs last month",
    color: "#7c3aed", // purple
  },
  {
    icon: <FiCalendar />,
    title: "Follow-Ups Scheduled",
    value: 8,
    subtitle: "3 upcoming this week",
    color: "#16a34a", // green
  },
  {
    icon: <FiMessageSquare />,
    title: "Active Discussions",
    value: 6,
    subtitle: "2 new this week",
    color: "#f59e0b", // orange
  },
];

export default function InvestorStats({ dark = false }) {
  return (
    <div className={`stats-container ${dark ? "dark" : ""}`}>
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div
            className="stat-icon"
            style={{
              backgroundColor: `${item.color}20`,
              color: item.color,
            }}
          >
            {item.icon}
          </div>
          <div className="stat-info">
            <p className="stat-title">{item.title}</p>
            <h2 className="stat-value">{item.value}</h2>
            <p className="stat-subtitle">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
