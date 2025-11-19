import React, { useState } from "react";
import "./InvestorDetails.css";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

export default function InvestorDetails({ dark }) {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Investor Profile", "Financials", "Interests"];

  return (
    <div className={`investor-details ${dark ? "dark" : ""}`}>
      {/* === Header === */}
      <div className="investor-header">
        <div className="header-left">
          <h1>Aurum Strategies</h1>
          <div className="header-meta">
            <span className="tag tag-warning">Not Verified</span>
            <p className="meta-text">investor_aurum • London, UK</p>
          </div>
        </div>
        <div className="header-right">
          <span className="tag tag-outline">Angel Investor</span>
        </div>
      </div>

      {/* === Tabs === */}
      <div className="investor-tabs">
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

      {/* === Content Section === */}
      <div className="investor-content">
        {activeTab === "Overview" && (
          <>
            {/* === Personal Information === */}
            <div className="info-card">
              <h3>Personal Information</h3>
              <p className="desc">Core details about the Investor</p>

              <div className="info-grid">
                <div>
                  <p className="label">Full Name</p>
                  <p className="info-value">Aurum Strategies</p>
                </div>
                <div>
                  <p className="label">Username</p>
                  <p className="info-value">investor_aurum</p>
                </div>
                <div>
                  <p className="label">Email</p>
                  <p className="info-value">invest@aurumstrategies.uk</p>
                </div>
                <div>
                  <p className="label">Mobile Number</p>
                  <p className="info-value">+442071230123</p>
                </div>
                <div>
                  <p className="label">Country</p>
                  <p className="info-value">UK</p>
                </div>
                <div>
                  <p className="label">City</p>
                  <p className="info-value">London</p>
                </div>
              </div>
            </div>

            {/* === Location & Contact === */}
            <div className="info-card">
              <h3>Location & Contact</h3>
              <p className="desc">Additional contact information</p>

              <div className="info-grid">
                <div>
                  <p className="label">Address</p>
                  <p className="info-value">Not provided</p>
                </div>
                <div>
                  <p className="label">LinkedIn</p>
                  <a href="#" className="link">
                    Not provided
                  </a>
                </div>
                <div>
                  <p className="label">Twitter</p>
                  <a href="#" className="link">
                    Not provided
                  </a>
                </div>
              </div>
            </div>

            {/* === KYC & Compliance === */}
            <div className="info-card">
              <h3>KYC & Compliance</h3>
              <p className="desc">Regulatory and compliance information</p>

              <div className="kyc-status">
                <div className="kyc-row green">
                  <div className="kyc-left">
                    <CheckCircle size={18} />
                    <div>
                      <p className="kyc-title">Terms & Conditions</p>
                      <p className="kyc-desc">Accepted</p>
                    </div>
                  </div>
                  <span className="status-badge active">Active</span>
                </div>

                <div className="kyc-row orange">
                  <div className="kyc-left">
                    <AlertCircle size={18} />
                    <div>
                      <p className="kyc-title">KYC Verification</p>
                      <p className="kyc-desc">Under review</p>
                    </div>
                  </div>
                  <span className="status-badge pending">Pending</span>
                </div>

                <div className="kyc-row gray">
                  <div className="kyc-left">
                    <Clock size={18} />
                    <div>
                      <p className="kyc-title">Shariah Compliance</p>
                      <p className="kyc-desc">Not verified</p>
                    </div>
                  </div>
                  <span className="status-badge pending">Pending</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
