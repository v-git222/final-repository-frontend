import React, { useState, useEffect } from "react";
import "./InvestorDetails.css";

export default function InvestorDetails({ investorId }) {

  const [activeTab, setActiveTab] = useState("Overview");
  const [investor, setInvestor] = useState(null);

  const tabs = ["Overview", "Investor Profile", "Financials", "Interests"];
  const API_URL = `/api/superadmin/investors/${investorId}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) return;

        const json = await res.json();
        setInvestor(json);

      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  if (!investor) return <p>Loading...</p>;

  // ---- INLINE FONT STYLES ----
  const labelStyle = { fontSize: "0.55rem", color: "#9a9a9a", textTransform: "uppercase" };
  const valueStyle = { fontSize: "0.75rem", fontWeight: 500, lineHeight: "1.2", wordBreak: "break-word" };

  return (
    <div className="investor-details">
      <div className="content-wrapper">

        {/* HEADER */}
        <div className="header-card">
          <div>
            <h2 className="name">{investor.full_name}</h2>
            <p className="header-sub">
              {investor.investor_type?.toUpperCase() ?? "INVESTOR"} · {investor.country?.toUpperCase()}
            </p>
          </div>

          <span className="badge-verified">
            {investor.kyc_verified ? "Verified" : "Not Verified"}
          </span>
        </div>

        {/* TABS */}
        <div className="section-tabs-wrapper">
          <div className="section-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* LAYOUT */}
        <div className="layout">

          {/* LEFT SIDE */}
          <div className="left-section">

            {/* -------- OVERVIEW TAB -------- */}
            {activeTab === "Overview" && (
              <>
                <div className="card">
                  <h3 className="card-title">Personal Information</h3>
                  <div className="info-grid">
                    <div><p style={labelStyle}>Full Name</p><p style={valueStyle}>{investor.full_name}</p></div>
                    <div><p style={labelStyle}>Username</p><p style={valueStyle}>{investor.username}</p></div>
                    <div><p style={labelStyle}>Email</p><p style={valueStyle}>{investor.email}</p></div>
                    <div><p style={labelStyle}>Mobile Number</p><p style={valueStyle}>{investor.mobile ?? "Not Provided"}</p></div>
                    <div><p style={labelStyle}>Country</p><p style={valueStyle}>{investor.country}</p></div>
                    <div><p style={labelStyle}>City</p><p style={valueStyle}>{investor.city ?? "Not Provided"}</p></div>
                  </div>
                </div>

                <div className="card">
                  <h3 className="card-title">Location & Contact</h3>
                  <div className="info-grid">
                    <div><p style={labelStyle}>Address</p><p style={valueStyle}>{investor.address ?? "Not Provided"}</p></div>
                    <div><p style={labelStyle}>LinkedIn</p><p style={valueStyle}>{investor.linkedin ?? "Not Provided"}</p></div>
                    <div><p style={labelStyle}>Twitter</p><p style={valueStyle}>{investor.twitter ?? "Not Provided"}</p></div>
                  </div>
                </div>

                {/* KYC */}
                <div className="card">
                  <h3 className="card-title">KYC & Compliance</h3>
                  <div className="kyc-status">
                    <div className="kyc-row green">
                      <span>Terms & Conditions</span>
                      <span className="status-pill green">
                        {investor.onboarding_completed ? "Accepted" : "Pending"}
                      </span>
                    </div>

                    <div className="kyc-row orange">
                      <span>KYC Verification</span>
                      <span className="status-pill orange">
                        {investor.kyc_verified ? "Verified" : "Pending"}
                      </span>
                    </div>

                    <div className="kyc-row gray">
                      <span>Shariah Compliance</span>
                      <span className="status-pill gray">
                        {investor.shariah_compliant ? "Compliant" : "Pending"}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* -------- INVESTOR PROFILE -------- */}
            {activeTab === "Investor Profile" && (
              <div className="card">
                <h3 className="card-title">Investor Profile</h3>
                <div className="info-grid">
                  <div><p style={labelStyle}>Investor Type</p><p style={valueStyle}>{investor.investor_type}</p></div>
                  <div><p style={labelStyle}>Onboarding Step</p><p style={valueStyle}>{investor.onboarding_step}</p></div>
                  <div><p style={labelStyle}>Approval Status</p><p style={valueStyle}>{investor.approval_status}</p></div>
                  <div><p style={labelStyle}>Approved At</p><p style={valueStyle}>{investor.approved_at}</p></div>
                </div>
              </div>
            )}

            {/* -------- FINANCIALS -------- */}
            {activeTab === "Financials" && (
              <div className="card">
                <h3 className="card-title">Financial Capacity</h3>
                <div className="info-grid">
                  <div><p style={labelStyle}>Available Balance</p><p style={valueStyle}>${investor.total_funds_available?.toLocaleString()}</p></div>
                  <div><p style={labelStyle}>Total Invested</p><p style={valueStyle}>${investor.total_invested?.toLocaleString()}</p></div>
                </div>
              </div>
            )}

            {/* -------- INTERESTS -------- */}
            {activeTab === "Interests" && (
              <div className="card">
                <h3 className="card-title">Investment Interests</h3>
                <div className="info-grid">
                  <div><p style={labelStyle}>Preferred Sectors</p><p style={valueStyle}>{investor.sectors ?? "Not Provided"}</p></div>
                  <div><p style={labelStyle}>Regions</p><p style={valueStyle}>{investor.regions ?? "Not Provided"}</p></div>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="right-section">
            <div className="card">
              <p style={labelStyle}>Available Balance</p>
              <h2 className="value" style={{ fontSize: "1rem" }}>
                ${investor.total_funds_available?.toLocaleString()}
              </h2>
              <button className="approve-btn">Approve</button>
            </div>

            <div className="card">
              <h3 className="card-title">Account Timeline</h3>
              <ul className="timeline">
                <li>Approved — {investor.approved_at || "N/A"}</li>
                <li>Registered — {investor.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
