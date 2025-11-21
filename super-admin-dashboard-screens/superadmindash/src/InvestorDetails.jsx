import React, { useState, useEffect } from "react";
import "./InvestorDetails.css";

export default function InvestorDetails({ investorId }) {

  const [activeTab, setActiveTab] = useState("Overview");
  const [investor, setInvestor] = useState(null);

  const tabs = ["Overview", "Investor Profile", "Financials", "Interests"];

 const API_URL = `/api/superadmin/investors/${investorId}`;


  /* ====================================================
     FETCH DATA + PREMIUM CONSOLE LOGS
  ==================================================== */
  useEffect(() => {
    async function fetchData() {
      console.log(
        "%c[FETCH START] Requesting investor data from API...",
        "color:#00c4ff;font-size:14px;font-weight:600;"
      );

      console.log("%c[API URL] → " + API_URL, "color:#888;font-size:12px;");

      try {
        const res = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        console.log(
          "%c[HTTP STATUS] " + res.status,
          "color:#a855f7;font-weight:600;"
        );

        if (!res.ok) {
          console.error(
            "%c[ERROR] API returned invalid status → " + res.status,
            "background:#ff1f1f;color:white;padding:4px 10px;border-radius:6px;"
          );
          return;
        }

        const json = await res.json();

        console.log(
          "%c[SUCCESS] API data fetched successfully",
          "color:#22c55e;font-size:14px;font-weight:700;"
        );

        console.log("%c[RAW RESPONSE]", "color:#2563eb;font-weight:600;");
        console.log(json);

        console.log(
          "%c[PARSED] Checking important fields in response...",
          "color:#f97316;font-size:13px;font-weight:600;"
        );

        Object.keys(json).forEach((key) => {
          console.log(
            `%c• ${key}: %c${json[key]}`,
            "color:#64748b;font-weight:600;",
            "color:#000;font-weight:500;"
          );
        });

        setInvestor(json);
      } catch (err) {
        console.error(
          "%c[FATAL] Network or parsing error",
          "background:#ff0000;color:white;padding:5px 10px;border-radius:6px;"
        );
        console.error(err);
      }
    }

    fetchData();
  }, []);

  if (!investor) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">

      {/* ================================================== */}
      {/*                    HEADER SECTION                  */}
      {/* ================================================== */}
      <div className="top-header">
        <div>
          <h2 className="header-title">{investor.full_name}</h2>
          <p className="header-sub">
            {investor.investor_type?.toUpperCase() ?? "Investor"} ·{" "}
            {investor.country?.toUpperCase()}
          </p>
        </div>

        <span className="badge-verified">
          {investor.kyc_verified ? "Verified" : "Not Verified"}
        </span>
      </div>

      {/* ================================================== */}
      {/*                   TAB BUTTONS (TEXT)               */}
      {/* ================================================== */}
      <div
        className="tab-container"
        style={{
          display: "flex",
          gap: "22px",
          marginBottom: "20px",
          borderBottom: "1px solid #e5e7eb",
          paddingBottom: "6px",
          userSelect: "none",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => {
                console.log(
                  "%c[TAB SWITCH] → " + tab,
                  "color:#2563eb;font-weight:600;"
                );
                setActiveTab(tab);
              }}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                padding: "6px 0",
                fontSize: "0.92rem",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#2563eb" : "#6b7280",
                cursor: "pointer",
                borderBottom: isActive
                  ? "2px solid #2563eb"
                  : "2px solid transparent",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "#2563eb";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "#6b7280";
                }
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* ================================================== */}
      {/*                LEFT + RIGHT LAYOUT                */}
      {/* ================================================== */}
      <div className="dashboard-body">

        {/* LEFT SECTION */}
        <div className="left-section">

          {/* ========================= OVERVIEW TAB ========================= */}
          {activeTab === "Overview" && (
            <>
              {/* PERSONAL INFO */}
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">Personal Information</h3>

                  <div className="info-grid">
                    <div><p className="label">Full Name</p><p>{investor.full_name}</p></div>
                    <div><p className="label">Username</p><p>{investor.username}</p></div>
                    <div><p className="label">Email</p><p>{investor.email}</p></div>
                    <div><p className="label">Mobile Number</p><p>{investor.mobile ?? "Not Provided"}</p></div>
                    <div><p className="label">Country</p><p>{investor.country?.toUpperCase()}</p></div>
                    <div><p className="label">City</p><p>{investor.city ?? "Not Provided"}</p></div>
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">Location & Contact</h3>

                  <div className="info-grid">
                    <div><p className="label">Address</p><p>{investor.address ?? "Not Provided"}</p></div>
                    <div><p className="label">LinkedIn</p><p>{investor.linkedin ?? "Not Provided"}</p></div>
                    <div><p className="label">Twitter</p><p>{investor.twitter ?? "Not Provided"}</p></div>
                  </div>
                </div>
              </div>

              {/* KYC */}
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">KYC & Compliance</h3>

                  <div className="kyc-list">
                    <div className="kyc-row">
                      <p>Terms & Conditions</p>
                      <span className="status-pill status-green">
                        {investor.onboarding_completed ? "Accepted" : "Pending"}
                      </span>
                    </div>

                    <div className="kyc-row">
                      <p>KYC Verification</p>
                      <span className="status-pill status-yellow">
                        {investor.kyc_verified ? "Verified" : "Pending"}
                      </span>
                    </div>

                    <div className="kyc-row">
                      <p>Shariah Compliance</p>
                      <span className="status-pill status-yellow">
                        {investor.shariah_compliant ? "Compliant" : "Pending"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ========================= INVESTOR PROFILE TAB ========================= */}
          {activeTab === "Investor Profile" && (
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Investor Profile</h3>

                <div className="info-grid">
                  <div><p className="label">Investor Type</p><p>{investor.investor_type}</p></div>
                  <div><p className="label">Onboarding Step</p><p>{investor.onboarding_step}</p></div>
                  <div><p className="label">Approval Status</p><p>{investor.approval_status}</p></div>
                  <div><p className="label">Approved At</p><p>{investor.approved_at}</p></div>
                </div>
              </div>
            </div>
          )}

          {/* ========================= FINANCIALS TAB ========================= */}
          {activeTab === "Financials" && (
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Financial Capacity</h3>

                <div className="info-grid">
                  <div><p className="label">Available Balance</p><p>${investor.total_funds_available?.toLocaleString()}</p></div>
                  <div><p className="label">Total Invested</p><p>${investor.total_invested?.toLocaleString()}</p></div>
                </div>
              </div>
            </div>
          )}

          {/* ========================= INTERESTS TAB ========================= */}
          {activeTab === "Interests" && (
            <div className="card">
              <div className="card-content">
                <h3 className="card-title">Investment Interests</h3>

                <div className="info-grid">
                  <div><p className="label">Preferred Sectors</p><p>{investor.sectors ?? "Not Provided"}</p></div>
                  <div><p className="label">Regions</p><p>{investor.regions ?? "Not Provided"}</p></div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ====================================== */}
        {/*           RIGHT SIDEBAR (STATIC)       */}
        {/* ====================================== */}
        <div className="right-section">

          <div className="card">
            <div className="card-content">
              <p className="balance-label">Available Balance</p>
              <h2 className="balance-amount">
                ${investor.total_funds_available?.toLocaleString()}
              </h2>
              <button className="approve-btn">Approve</button>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Account Timeline</h3>

              <ul className="timeline-list">
                <li className="timeline-item">
                  <span>Approved</span>
                  <span className="timeline-date">{investor.approved_at}</span>
                </li>

                <li className="timeline-item">
                  <span>Registered</span>
                  <span className="timeline-date">{investor.created_at}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h3 className="card-title">Next Steps</h3>
              <p>Complete KYC verification</p>
              <p>Update onboarding details</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
