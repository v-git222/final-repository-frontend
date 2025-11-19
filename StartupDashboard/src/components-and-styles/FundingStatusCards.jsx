import React from "react";
import { FiDollarSign, FiTarget, FiUsers, FiBarChart2 } from "react-icons/fi";
import "./FundingStatusCards.css";

const FundingStatusCards = ({ dark = false }) => {
  const cards = [
    {
      title: "TOTAL RAISED",
      value: "$0",
      subtitle: "Ready to grow",
      icon: <FiDollarSign />,
      gradientLight: "linear-gradient(135deg, #0062ff 0%, #2f80ed 100%)",
      gradientDark: "linear-gradient(135deg, #153977 0%, #0046b3 100%)",
      shadow: "0 8px 20px rgba(0, 98, 255, 0.35)",
    },
    {
      title: "TARGET AMOUNT",
      value: "$250,000",
      subtitle: "Seed Round goal",
      icon: <FiTarget />,
      gradientLight: "linear-gradient(135deg, #9b51e0 0%, #bb6bd9 100%)",
      gradientDark: "linear-gradient(135deg, #5e309c 0%, #8c42d2 100%)",
      shadow: "0 8px 20px rgba(155, 81, 224, 0.35)",
    },
    {
      title: "ACTIVE INVESTORS",
      value: "0",
      subtitle: "Committed partners",
      icon: <FiUsers />,
      gradientLight: "linear-gradient(135deg, #00a86b 0%, #00c06a 100%)",
      gradientDark: "linear-gradient(135deg, #016b43 0%, #00a86b 100%)",
      shadow: "0 8px 20px rgba(0, 160, 80, 0.35)",
    },
    {
      title: "PROGRESS",
      value: "0%",
      subtitle: "Of target reached",
      icon: <FiBarChart2 />,
      gradientLight: "linear-gradient(135deg, #ff7e1d 0%, #ff9a3d 100%)",
      gradientDark: "linear-gradient(135deg, #b65000 0%, #e76a00 100%)",
      shadow: "0 8px 20px rgba(255, 126, 29, 0.35)",
    },
  ];

  return (
    <div className={`funding-container ${dark ? "dark" : "light"}`}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="funding-card"
          style={{
            background: dark ? card.gradientDark : card.gradientLight,
            boxShadow: dark ? "none" : card.shadow,
          }}
        >
          <div className="funding-header">
            <div className="funding-title">{card.title}</div>
            <div className="funding-value">{card.value}</div>
          </div>
          <div className="funding-footer">
            <span className="funding-icon">{card.icon}</span>
            <span className="funding-subtitle">{card.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FundingStatusCards;
