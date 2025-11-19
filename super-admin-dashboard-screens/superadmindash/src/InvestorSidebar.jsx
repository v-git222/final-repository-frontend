import React from "react";
import "./InvestorSidebar.css";
import {
  Edit,
  Mail,
  Phone,
  ExternalLink,
  MoreHorizontal,
  CheckCircle,
  Calendar,
  Clock,
  Building2,
} from "lucide-react";

export default function InvestorSidebar({ dark }) {
  return (
    <div className={`investor-sidebar ${dark ? "dark" : ""}`}>
      {/* === Contact Information === */}
      <div className="sidebar-card">
        <h3>Contact Information</h3>

        <div className="contact-top">
          <div className="contact-avatar">
            <Building2 size={40} color="#9ca3af" />
          </div>
          <h4>Aurum Strategies</h4>
          <div className="contact-actions">
            <button><Edit size={16} /></button>
            <button><Mail size={16} /></button>
            <button><Phone size={16} /></button>
            <button><ExternalLink size={16} /></button>
            <button><MoreHorizontal size={16} /></button>
          </div>
        </div>

        <div className="contact-info">
          <p><span>Contact</span> +1-555-123-4567</p>
          <p>
            <span>Email ID</span>{" "}
            <a href="mailto:invest@aurumstrategies.uk">
              invest@aurumstrategies.uk
            </a>
          </p>
          <p>
            <span>Address</span> 123 Maplewood Drive, Apt 4B <br />
            Springfield, IL 62704, United States
          </p>
        </div>
      </div>

      {/* === Financial Capacity === */}
      <div className="sidebar-card financial">
        <h3>Financial Capacity</h3>
        <p className="balance-label">Available Balance</p>
        <h2 className="balance-amount">$4.1M</h2>
        <p className="balance-total">of $6M total</p>
      </div>

      {/* === Timeline === */}
      <div className="sidebar-card">
        <h3>Timeline</h3>

        <div className="timeline-item">
          <div className="timeline-icon green">
            <CheckCircle size={16} />
          </div>
          <div>
            <p className="timeline-title">Approved</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon blue">
            <Calendar size={16} />
          </div>
          <div>
            <p className="timeline-title">Registered</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon purple">
            <Clock size={16} />
          </div>
          <div>
            <p className="timeline-title">Last Updated</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
