import React from "react";

export default function RecentInvestmentActivity({ dark = false }) {
  const theme = dark
    ? {
        background: "#121212",
        headerBg: "#0d0d0d",
        textPrimary: "#f5f5f5",
        textSecondary: "#a0a0a0",
        borderColor: "rgba(255,255,255,0.08)",
        buttonBg: "#f5f5f5",
        buttonText: "#000",
        iconBg: "#2a2a2a",
      }
    : {
        background: "#fff",
        headerBg: "#fffbeb",
        textPrimary: "#1a1a1a",
        textSecondary: "#6b7280",
        borderColor: "rgba(0,0,0,0.08)",
        buttonBg: "#000",
        buttonText: "#fff",
        iconBg: "#f3f4f6",
      };

  return (
    <div
      style={{
        background: theme.background,
        borderRadius: "16px",
        boxShadow: dark ? "0 2px 8px rgba(255,255,255,0.06)" : "0 2px 8px rgba(0,0,0,0.06)",
        overflow: "hidden",
        maxWidth: "120rem",
        margin: "auto",
        fontFamily: 'Inter, "Segoe UI", sans-serif',
        color: theme.textPrimary,
      }}
    >
      {/* Header Section */}
      <div
        style={{
          background: theme.headerBg,
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: `1px solid ${theme.borderColor}`,
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0 }}>Recent Investment Activity</h3>
          <p style={{ color: theme.textSecondary, marginTop: "4px", fontSize: "0.95rem" }}>
            Monitor incoming investments and commitments
          </p>
        </div>
        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "0.9rem",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Export
        </button>
      </div>

      {/* Empty State */}
      <div
        style={{
          padding: "80px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: theme.iconBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          <span style={{ fontSize: "1.8rem", color: theme.textSecondary }}>₿</span>
        </div>

        <h4 style={{ fontSize: "1.1rem", margin: 0 }}>No investment activity yet</h4>
        <p style={{ color: theme.textSecondary, maxWidth: "460px", lineHeight: 1.6 }}>
          Start reaching out to investors to track funding progress. Once you receive commitments, they'll appear here.
        </p>

        <button
          style={{
            background: theme.buttonBg,
            color: theme.buttonText,
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontWeight: 500,
            fontSize: "0.95rem",
            cursor: "pointer",
          }}
        >
          View Investors
        </button>
      </div>
    </div>
  );
}
