import React, { useState } from "react";
import "./StartupDetails.css";

export default function StartupDetails({ dark }) {
  const [activeTab, setActiveTab] = useState("Founders");

  const tabs = ["Basic Information", "Business Deals", "Founders", "Visions"];

  return (
    <div className={`startup-details ${dark ? "dark" : ""}`}>
      {/* === Header Section === */}
      <div className="startup-header">
        <div className="header-left">
          <h1>Inspection & Clean</h1>
          <div className="header-tags">
            <span className="tag tag-blue">Shariah Compliant</span>
            <span className="meta">Founded 2025 • Ideal Stage</span>
          </div>
        </div>
        <div className="header-right">
          <span className="tag tag-outline">Series A</span>
        </div>
      </div>

      {/* === Tab Navigation === */}
      <div className="startup-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* === Tab Content === */}
      <div className="startup-content">
        {activeTab === "Founders" && (
          <div className="content-section">
            <h3>Founder Information</h3>
            <p className="desc">Details about the founding team</p>

            <div className="info-block">
              <h4>Foundation List</h4>
              <p>Information to be provided by the startup team.</p>
            </div>

            <div className="info-block">
              <h4>Professional Backgrounds</h4>
              <p>Information to be provided by the startup team.</p>
            </div>

            <div className="info-block">
              <h4>Origin Story</h4>
              <p>SMEs in MENA retail</p>
            </div>

            <div className="info-block">
              <h4>Motivation</h4>
              <p>Information to be provided by the startup team.</p>
            </div>

            <div className="info-block">
              <h4>Founder Roles</h4>
              <p>Information to be provided by the startup team.</p>
            </div>

            <div className="info-block">
              <h4>Founder Strengths</h4>
              <p>Information to be provided by the startup team.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
