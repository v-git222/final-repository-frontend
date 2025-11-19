import React from "react";
import "./DashboardStatsCard.css";

const avatars = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/28.jpg",
];

const StatsCards = () => {
  return (
    <div className="stats-wrapper">

      {/* === CARD 1 === */}
      <div className="stat-card yellow-card">
        <div className="icon-circle">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="trend"
          />
        </div>

        <div className="yellow-content">
          <h3>Avg. ROI</h3>
          <h1>24.8%</h1>
          <p>Above market avg</p>
        </div>
      </div>

      {/* === CARD 2 === */}
      <div className="stat-card dark-card">
        <h1 className="big-title">
          500<span className="plus">+</span>
        </h1>

        <p className="subtitle">
          Trusted by over 500+ investors and buyers around the globe,
          we’ve built a solid reputation!
        </p>

        <div className="avatar-row">
          {avatars.map((src, i) => (
            <img key={i} src={src} className="avatar" alt="user" />
          ))}
          <div className="add-avatar">+</div>
        </div>
      </div>

      {/* === CARD 3 === */}
      <div className="stat-card white-card">
        <p className="label">Total Volume</p>
        <h1 className="value">$130.80M</h1>

        <div className="tag">+810%</div>

        <div className="chart-area"></div>
      </div>

    </div>
  );
};

export default StatsCards;
