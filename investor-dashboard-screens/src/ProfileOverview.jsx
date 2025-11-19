// ProfileOverview.jsx
import "./ProfileOverview.css";
import { FiEdit3 } from "react-icons/fi";

function ProfileOverview() {
  return (
    <div className="profile-wrapper">

      {/* PERSONAL INFORMATION */}
      <div className="profile-card">
        <div className="profile-card-header">
          <h3>Personal Information</h3>
          <button className="edit-btn"><FiEdit3 /> Edit</button>
        </div>

        <div className="info-grid">
          <div>
            <p className="label">Full Name</p>
            <p className="value">Aurum Strategies</p>
          </div>

          <div>
            <p className="label">Username</p>
            <p className="value">investor_aurum</p>
          </div>

          <div>
            <p className="label">Email</p>
            <p className="value">invest@aurumstrategies.uk</p>
          </div>

          <div>
            <p className="label">Mobile Number</p>
            <p className="value">+440723120123</p>
          </div>

          <div>
            <p className="label">Country</p>
            <p className="value">UK</p>
          </div>

          <div>
            <p className="label">City</p>
            <p className="value">London</p>
          </div>
        </div>
      </div>

      {/* LOCATION & CONTACT */}
      <div className="profile-card">
        <div className="profile-card-header">
          <h3>Location & Contact</h3>
          <button className="edit-btn"><FiEdit3 /> Edit</button>
        </div>

        <div className="info-grid">
          <div>
            <p className="label">Address</p>
            <p className="value">N/A</p>
          </div>

          <div>
            <p className="label">LinkedIn</p>
            <p className="value link">N/A</p>
          </div>

          <div>
            <p className="label">Twitter</p>
            <p className="value link">N/A</p>
          </div>
        </div>
      </div>

      {/* KYC & COMPLIANCE */}
      <div className="profile-card">
        <h3 className="kyc-title">KYC & Compliance</h3>
        <p className="kyc-sub">Regulatory and compliance information</p>

        <div className="kyc-section">
          <div className="kyc-row">
            <div className="kyc-left">
              <span className="dot green"></span>
              <p>Terms & Conditions</p>
            </div>
            <span className="badge success">Active</span>
          </div>

          <div className="kyc-row">
            <div className="kyc-left">
              <span className="dot orange"></span>
              <p>KYC Verification</p>
            </div>
            <span className="badge pending">Pending</span>
          </div>

          <div className="kyc-row">
            <div className="kyc-left">
              <span className="dot gray"></span>
              <p>Shariah Compliance</p>
            </div>
            <span className="badge pending">Pending</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileOverview;
