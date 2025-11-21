import React from "react";
import "./StartupActionBar.css";
import { ArrowLeft, Check, X } from "lucide-react";

export default function StartupActionBar({ onBack, dark }) {

  // 🔥 Fixed Startup ID = 1  
  const startupId = 1;

  const API_URL = `/api/superadmin/startups/${startupId}/decision/`;

  /* ----------------------------
     APPROVE STARTUP
  ---------------------------- */
  const handleApprove = async () => {
    console.log(
      "%c[STARTUP APPROVAL] → Sending approval request",
      "color:#22c55e;font-weight:700;font-size:14px;"
    );

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ action: "approve" }),
      });

      console.log(
        "%c[HTTP STATUS] → " + res.status,
        "color:#0ea5e9;font-weight:600;"
      );

      if (!res.ok) {
        console.error(
          `%c[ERROR] Approval failed (status: ${res.status})`,
          "background:#ef4444;color:white;padding:4px;border-radius:4px;"
        );
        return;
      }

      const data = await res.json();

      console.log(
        "%c[SUCCESS] Startup Approved ✔",
        "color:#22c55e;font-weight:700;font-size:14px;"
      );
      console.log(data);

      alert("Startup Approved Successfully");

    } catch (err) {
      console.error(
        "%c[FATAL] Approval request crashed!",
        "background:#dc2626;color:white;padding:5px;border-radius:6px;"
      );
      console.error(err);
    }
  };

  /* ----------------------------
     REJECT STARTUP
  ---------------------------- */
  const handleReject = async () => {
    const reason = prompt("Enter rejection reason:");

    if (!reason) {
      alert("Rejection reason is required.");
      return;
    }

    console.log(
      "%c[STARTUP REJECTION] → Sending rejection request",
      "color:#f97316;font-weight:700;font-size:14px;"
    );

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ action: "reject", reason }),
      });

      console.log(
        "%c[HTTP STATUS] → " + res.status,
        "color:#0ea5e9;font-weight:600;"
      );

      if (!res.ok) {
        console.error(
          `%c[ERROR] Rejection failed (status: ${res.status})`,
          "background:#ef4444;color:white;padding:4px;border-radius:4px;"
        );
        return;
      }

      const data = await res.json();

      console.log(
        "%c[SUCCESS] Startup Rejected ✖",
        "color:#f97316;font-weight:700;font-size:14px;"
      );
      console.log(data);

      alert("Startup Rejected Successfully");

    } catch (err) {
      console.error(
        "%c[FATAL] Reject request crashed!",
        "background:#dc2626;color:white;padding:5px;border-radius:6px;"
      );
      console.error(err);
    }
  };

  return (
    <div className={`startup-action-bar ${dark ? "dark" : ""}`}>

      {/* 🔥 Updated Back Button with console logs */}
      <button
        className="back-btn"
        onClick={() => {
          console.log(
            "%c[BACK] Navigating back to Startups list...",
            "color:#2563eb;font-weight:700;font-size:14px;"
          );
          onBack();
        }}
      >
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
