import React, { useState } from "react";
import "./Profile.css";
import avatarImg from "../assets/profile.png";

export default function Profile({ dark = false }) {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    {
      title: "Company Information",
      content: (
        <>
          <p className="desc">
            Core details about your startup and business model.
          </p>
          <div className="info-grid">
            <div>
              <h4>Startup Name</h4>
              <p>NovaFin Technologies</p>
            </div>
            <div>
              <h4>Founded Year</h4>
              <p>2020</p>
            </div>
            <div>
              <h4>Stage</h4>
              <p>Series A</p>
            </div>
            <div>
              <h4>Funding Target</h4>
              <p>$5M</p>
            </div>
          </div>

          <div className="details">
            <div>
              <h4>Problem Statement</h4>
              <p>
                Retail investors lack access to institutional-grade analytics.
              </p>
            </div>
            <div>
              <h4>Product Description</h4>
              <p>
                An AI-powered investment dashboard offering real-time data,
                predictions, and risk evaluation.
              </p>
            </div>
            <div>
              <h4>Target Customers</h4>
              <p>Retail investors, wealth managers, and fintech startups.</p>
            </div>
            <div>
              <h4>Key Differentiator</h4>
              <p>
                Transparent AI models, instant insights, and compliance
                integrations.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Vision",
      content: (
        <p className="desc">
          To democratize access to financial intelligence using AI, empowering
          every investor with institutional-grade decision-making.
        </p>
      ),
    },
    {
      title: "Founders & Team",
      content: (
        <div className="team-grid">
          <div className="team-card">
            <img src={avatarImg} alt="Sophia Lee" className="team-photo" />
            <p className="team-name">Sophia Lee</p>
            <p className="team-role">CEO & Co-Founder</p>
          </div>
          <div className="team-card">
            <img
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="Arjun Patel"
              className="team-photo"
            />
            <p className="team-name">Arjun Patel</p>
            <p className="team-role">CTO & Co-Founder</p>
          </div>
        </div>
      ),
    },
    {
      title: "Contact Information",
      content: (
        <>
          <p>Email: contact@novafin.tech</p>
          <p>Website: www.novafin.tech</p>
          <p>LinkedIn: linkedin.com/company/novafin</p>
        </>
      ),
    },
  ];

  return (
    <div className={`profile-wrapper ${dark ? "dark" : "light"}`}>
      {/* Business Card Header */}
      <div className="profile-card-header">
        <div className="profile-card-left">
          <div className="profile-card-avatar">
            <img src={avatarImg} alt="NovaFin" />
          </div>
          <div className="profile-card-info">
            <h2>NovaFin Technologies</h2>
            <div className="profile-meta">
              <span className="tag">Series A</span>
              <span className="dot">•</span>
              <span>Founded 2020</span>
              <span className="dot">•</span>
              <span>San Francisco, CA</span>
            </div>
            <p className="profile-tagline">
              Empowering smarter investments through AI-driven insights.
            </p>
          </div>
        </div>
        <button className="edit-btn" title="Edit Profile">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="pencil-icon"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
</button>

      </div>

      {/* Accordion Tabs */}
      <div className="accordion">
        {tabs.map((tab, i) => (
          <div key={i} className="accordion-item">
            <button
              className={`accordion-tab ${
                activeTab === i ? "active" : ""
              }`}
              onClick={() => setActiveTab(activeTab === i ? null : i)}
            >
              {tab.title}
            </button>

            <div
              className={`accordion-content ${
                activeTab === i ? "open" : ""
              }`}
            >
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
