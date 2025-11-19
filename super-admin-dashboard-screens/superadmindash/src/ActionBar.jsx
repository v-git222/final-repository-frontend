import React from "react";
import "./ActionBar.css";
import { ArrowLeft, Check, X } from "lucide-react";

export default function ActionBar({ onBack, onReject, onApprove, dark }) {
  return (
    <div className={`action-bar ${dark ? "dark" : ""}`}>
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={18} />
        <span>Back to Startups</span>
      </button>

      <div className="action-buttons">
        <button className="reject-btn" onClick={onReject}>
          <X size={16} />
          Reject
        </button>
        <button className="approve-btn" onClick={onApprove}>
          <Check size={16} />
          Approve
        </button>
      </div>
    </div>
  );
}
