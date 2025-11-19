import React from "react";
import "./Investor.css";

export default function InvestorDashboard() {
  return (
    <div className="dashboard-container">

      {/* LEFT SECTION */}
      <div className="left-section">

        {/* HEADER */}
        <div className="header-row">
          <div>
            <h2 className="header-title">Aurum Strategies</h2>
            <p className="header-sub">Angel Investor · London, UK</p>
          </div>
          <span className="badge-verified">Verified</span>
        </div>

        {/* PERSONAL INFORMATION CARD */}
        <div className="card">
          <div className="card-content">
            <div className="card-title-row">
              <h3 className="card-title">Personal Information</h3>
              <button className="edit-btn">Edit</button>
            </div>

            <div className="info-grid">
              <div>
                <p className="label">Full Name</p>
                <p>Aurum Strategies</p>
              </div>

              <div>
                <p className="label">Username</p>
                <p>investor_aurum</p>
              </div>

              <div>
                <p className="label">Email</p>
                <p>invest@aurumstrategiesuk</p>
              </div>

              <div>
                <p className="label">Mobile Number</p>
                <p>+442079310213</p>
              </div>

              <div>
                <p className="label">Country</p>
                <p>UK</p>
              </div>

              <div>
                <p className="label">City</p>
                <p>London</p>
              </div>
            </div>
          </div>
        </div>

        {/* LOCATION & CONTACT */}
        <div className="card">
          <div className="card-content">
            <div className="card-title-row">
              <h3 className="card-title">Location & Contact</h3>
              <button className="edit-btn">Edit</button>
            </div>

            <div className="info-grid">
              <div>
                <p className="label">Address</p>
                <p>N/A</p>
              </div>

              <div>
                <p className="label">LinkedIn</p>
                <p>N/A</p>
              </div>

              <div>
                <p className="label">Twitter</p>
                <p>N/A</p>
              </div>
            </div>
          </div>
        </div>

        {/* KYC & COMPLIANCE */}
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">KYC & Compliance</h3>

            <div className="kyc-list">
              <div className="kyc-row">
                <p>Terms & Conditions</p>
                <span className="status-pill status-green">Accepted</span>
              </div>

              <div className="kyc-row">
                <p>KYC Verification</p>
                <span className="status-pill status-yellow">Pending</span>
              </div>

              <div className="kyc-row">
                <p>Shariah Compliance</p>
                <span className="status-pill status-yellow">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">

        {/* QUICK STATS */}
        <div className="card">
          <div className="card-content">
            <p className="balance-label">Available Balance</p>
            <h2 className="balance-amount">$4.1M</h2>
            <button className="approve-btn">Approve</button>
          </div>
        </div>

        {/* ACCOUNT TIMELINE */}
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Account Timeline</h3>

            <ul className="timeline-list">
              <li className="timeline-item">
                <span>Approved</span>
                <span className="timeline-date">October 26, 2025</span>
              </li>

              <li className="timeline-item">
                <span>Onboarding</span>
                <span className="timeline-date">October 26, 2025</span>
              </li>

              <li className="timeline-item">
                <span>Registered</span>
                <span className="timeline-date">October 26, 2025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* NEXT STEPS */}
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Next Steps</h3>

            <div className="next-steps">
              <p>Complete KYC verification</p>
              <p>Add sector preferences</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
