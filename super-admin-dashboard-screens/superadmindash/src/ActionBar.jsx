import React from "react";
import "./ActionBar.css";
import { ArrowLeft, Check, X } from "lucide-react";

export default function ActionBar({ onBack, dark }) {

  const API_URL = "/superadmin/investors/1/decision/";

  // -----------------------------
  // HANDLE APPROVE ACTION (POST)
  // -----------------------------
  const handleApprove = async () => {
    console.log("%c[APPROVE] Sending approval request...",
      "color:#10b981;font-weight:600;");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          action: "approve"
        }),
      });

      if (!res.ok) {
        console.error(
          "%c[ERROR] Approve request failed → " + res.status,
          "color:#ef4444;font-weight:700;"
        );
        return;
      }

      const data = await res.json();
      console.log("%c[SUCCESS] Investor Approved", "color:#22c55e;font-weight:700;");
      console.log(data);

      alert("Investor Approved Successfully");

    } catch (err) {
      console.error(
        "%c[CRITICAL] Approve request crashed!",
        "background:#dc2626;color:white;padding:4px 8px;border-radius:4px;"
      );
      console.error(err);
    }
  };

  // -----------------------------
  // HANDLE REJECT ACTION (POST)
  // -----------------------------
  const handleReject = async () => {
    const reason = prompt("Enter rejection reason:");

    if (!reason) {
      alert("Rejection reason is required.");
      return;
    }

    console.log("%c[REJECT] Sending rejection request...",
      "color:#f97316;font-weight:600;");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          action: "reject",
          reason: reason
        }),
      });

      if (!res.ok) {
        console.error(
          "%c[ERROR] Reject request failed → " + res.status,
          "color:#ef4444;font-weight:700;"
        );
        return;
      }

      const data = await res.json();
      console.log("%c[SUCCESS] Investor Rejected", "color:#f97316;font-weight:700;");
      console.log(data);

      alert("Investor Rejected Successfully");

    } catch (err) {
      console.error(
        "%c[CRITICAL] Reject request crashed!",
        "background:#dc2626;color:white;padding:4px 8px;border-radius:4px;"
      );
      console.error(err);
    }
  };

  return (
    <div className={`action-bar ${dark ? "dark" : ""}`}>
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={18} />
        <span>Back to Startups</span>
      </button>

      <div className="action-buttons">
        <button className="reject-btn" onClick={handleReject}>
          <X size={16} />
          Reject
        </button>
        <button className="approve-btn" onClick={handleApprove}>
          <Check size={16} />
          Approve
        </button>
      </div>
    </div>
  );
}
