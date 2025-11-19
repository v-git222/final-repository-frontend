import React from "react";
import "./FounderSidebar.css";
import {
  Mail,
  Phone,
  Edit3,
  ExternalLink,
  MoreHorizontal,
  Calendar,
  Clock,
} from "lucide-react";

export default function FounderSidebar({ dark }) {
  return (
    <div className={`founder-sidebar ${dark ? "dark" : ""}`}>
      {/* === Founder Contact Card === */}
      <div className="card">
        <h3 className="card-title">Founder Contact</h3>
        <div className="founder-profile">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Founder"
            className="founder-avatar"
          />
          <h4 className="founder-name">Emma Harrison</h4>

          <div className="founder-actions">
            <button><Edit3 size={18} /></button>
            <button><Mail size={18} /></button>
            <button><Phone size={18} /></button>
            <button><ExternalLink size={18} /></button>
            <button><MoreHorizontal size={18} /></button>
          </div>
        </div>

        <div className="founder-info">
          <div className="info-row">
            <span className="info-label">Gender</span>
            <span className="info-value">Female</span>
          </div>

          <div className="info-row">
            <span className="info-label">Contact</span>
            <span className="info-value">+1-555-123-4567</span>
          </div>

          <div className="info-row">
            <span className="info-label">Email ID</span>
            <a href="mailto:emmaharisson@mail.com" className="info-link">
              emmaharrison@mail.com
            </a>
          </div>

          <div className="info-row">
            <span className="info-label">Address</span>
            <span className="info-value">
              123 Maplewood Drive, Apt 4B <br />
              Springfield, IL 62704, United States
            </span>
          </div>
        </div>
      </div>

      {/* === Funding Card === */}
      <div className="card">
        <h3 className="card-title">Funding</h3>
        <p className="subtext">Funds Raised</p>
        <h1 className="fund-value">$0</h1>
      </div>

      {/* === Timeline Card === */}
      <div className="card">
        <h3 className="card-title">Timeline</h3>

        <div className="timeline-row">
          <div className="timeline-icon blue">
            <Calendar size={18} />
          </div>
          <div className="timeline-info">
            <p className="timeline-label">Registered</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>

        <div className="timeline-row">
          <div className="timeline-icon purple">
            <Clock size={18} />
          </div>
          <div className="timeline-info">
            <p className="timeline-label">Last Updated</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
