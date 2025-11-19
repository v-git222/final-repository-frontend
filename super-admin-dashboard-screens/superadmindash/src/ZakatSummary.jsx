import React from "react";
import "./ZakatSummary.css";
import { HeartHandshake, Clock, Users, TrendingUp } from "lucide-react";

export default function ZakatSummary({ dark = false }) {
  const cards = [
    {
      icon: <HeartHandshake size={24} color="#fff" />,
      title: "Total Zakat Collected",
      value: "$187K",
      subtitle: "+12.3% from last year",
      badge: "This year",
      color: "linear-gradient(135deg, #22c55e, #4ade80)",
    },
    {
      icon: <Clock size={24} color="#fff" />,
      title: "Pending Zakat",
      value: "$24K",
      subtitle: "Awaiting payment",
      badge: "This Month",
      color: "linear-gradient(135deg, #f97316, #fb923c)",
    },
    {
      icon: <Users size={24} color="#fff" />,
      title: "Compliant Investors",
      value: "42",
      subtitle: "Out of 50 total",
      badge: "100% rate",
      color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    },
    {
      icon: <TrendingUp size={24} color="#fff" />,
      title: "Distributed Zakat",
      value: "$163K",
      subtitle: "To beneficiaries",
      badge: "87.2% rate",
      color: "linear-gradient(135deg, #8b5cf6, #c084fc)",
    },
  ];

  return (
    <div className={`zakat-summary ${dark ? "dark" : ""}`}>
      <div className="zakat-grid">
        {cards.map((card, i) => (
          <div className="zakat-card" key={i}>
            <div className="zakat-header">
              <div className="zakat-icon" style={{ background: card.color }}>
                {card.icon}
              </div>
              <span className="zakat-badge">{card.badge}</span>
            </div>
            <div className="zakat-content">
              <h4>{card.title}</h4>
              <h2>{card.value}</h2>
              <p>{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
