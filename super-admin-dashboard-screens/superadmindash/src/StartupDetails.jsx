import React, { useState, useEffect } from "react";
import "./StartupDetails.css";

export default function StartupDetails({ dark, startupId }) {
  const [activeTab, setActiveTab] = useState("Founders");
  const [startup, setStartup] = useState(null);

  const tabs = ["Basic Information", "Business Deals", "Founders", "Visions"];

  // ⭐ Dynamic endpoint
  const API_URL = `/api/superadmin/startups/${startupId}`;

  /* ======================================================
        FETCH STARTUP DATA USING DYNAMIC ID
  ====================================================== */
  useEffect(() => {
    async function loadStartup() {
      console.log(
        "%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        "color:#3b82f6;font-weight:bold;"
      );
      console.log(
        `%c[STARTUP FETCH INITIATED] Loading startup ID: ${startupId}`,
        "color:#00c4ff;font-size:15px;font-weight:700;"
      );
      console.log(
        "%c[REQUEST →] " + API_URL,
        "color:#64748b;font-size:13px;"
      );

      try {
        const res = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        console.log(
          `%c[HTTP STATUS] → ${res.status}`,
          "color:#a855f7;font-weight:700;font-size:13px;"
        );

        if (!res.ok) {
          console.error(
            `%c[API ERROR] Invalid HTTP status: ${res.status}`,
            "background:#ff1f1f;color:white;padding:6px;border-radius:6px;font-weight:bold;"
          );
          return;
        }

        const json = await res.json();

        console.log(
          `%c[SUCCESS] Startup ${startupId} data received!`,
          "color:#22c55e;font-size:15px;font-weight:800;"
        );

        console.log("%c[RAW RESPONSE DATA]", "color:#2563eb;font-weight:700;");
        console.log(json);

        setStartup(json);

        console.log(
          "%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
          "color:#3b82f6;font-weight:bold;"
        );
      } catch (error) {
        console.error(
          "%c[FATAL] Startup fetch failed",
          "background:#dc2626;color:white;padding:6px;border-radius:8px;font-weight:bold;"
        );
        console.error(error);
      }
    }

    if (startupId) loadStartup();
  }, [startupId]); // ⭐ Re-fetch when ID changes

  if (!startup) return <p>Loading startup...</p>;

  return (
    <div className={`startup-details ${dark ? "dark" : ""}`}>

      {/* HEADER */}
      <div className="startup-header">
        <div className="header-left">
          <h1>{startup.startup_name || "Unnamed Startup"}</h1>

          <div className="header-tags">
            <span className="tag tag-blue">
              {startup.shariah_compliant ? "Shariah Compliant" : "Not Shariah Compliant"}
            </span>

            <span className="meta">
              Founded {startup.founded_year} • {startup.stage?.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="header-right">
          <span className="tag tag-outline">
            {startup.status?.toUpperCase()}
          </span>
        </div>
      </div>

      {/* TABS */}
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

      {/* TAB CONTENT */}
      <div className="startup-content">

        {activeTab === "Basic Information" && (
          <div className="content-section">
            <h3>Basic Information</h3>
            <p className="desc">Startup identity & registration details</p>

            <div className="info-block">
              <h4>Startup Name</h4>
              <p>{startup.startup_name || "Not Provided"}</p>
            </div>

            <div className="info-block">
              <h4>Email</h4>
              <p>{startup.username}</p>
            </div>

            <div className="info-block">
              <h4>Founded Year</h4>
              <p>{startup.founded_year}</p>
            </div>

            <div className="info-block">
              <h4>Country</h4>
              <p>{startup.country || "Not Provided"}</p>
            </div>

            <div className="info-block">
              <h4>City</h4>
              <p>{startup.city || "Not Provided"}</p>
            </div>
          </div>
        )}

        {activeTab === "Business Deals" && (
          <div className="content-section">
            <h3>Business Deals</h3>
            <p className="desc">Funding insights</p>

            <div className="info-block">
              <h4>Funds Raised</h4>
              <p>${startup.funds_raised}</p>
            </div>

            <div className="info-block">
              <h4>Funding Target</h4>
              <p>{startup.funding_target || "Not Provided"}</p>
            </div>

            <div className="info-block">
              <h4>Tokenized</h4>
              <p>{startup.tokenized ? "Yes" : "No"}</p>
            </div>
          </div>
        )}

        {activeTab === "Founders" && (
          <div className="content-section">
            <h3>Founder Information</h3>
            <p className="desc">Details about the founding team</p>

            <div className="info-block">
              <h4>Origin Story</h4>
              <p>Information to be provided by startup.</p>
            </div>
          </div>
        )}

        {activeTab === "Visions" && (
          <div className="content-section">
            <h3>Startup Vision</h3>
            <p className="desc">Future roadmap</p>

            <div className="info-block">
              <h4>Current Stage</h4>
              <p>{startup.stage}</p>
            </div>

            <div className="info-block">
              <h4>Status</h4>
              <p>{startup.status}</p>
            </div>

            <div className="info-block">
              <h4>Created At</h4>
              <p>{startup.created_at}</p>
            </div>

            <div className="info-block">
              <h4>Updated At</h4>
              <p>{startup.updated_at}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
