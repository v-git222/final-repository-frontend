import React from "react";

export default function FundingAndInvestmentCards({ dark = false }) {
  const theme = dark
    ? {
        background: "#121212",
        cardBg: "#1a1a1a",
        textPrimary: "#f5f5f5",
        textSecondary: "#a0a0a0",
        borderColor: "rgba(255,255,255,0.08)",
        accentBlue: "#3b82f6",
        accentGreen: "#22c55e",
        buttonBg: "#f5f5f5",
        buttonText: "#000",
      }
    : {
        background: "#fff",
        cardBg: "#f9fafb",
        textPrimary: "#1a1a1a",
        textSecondary: "#6b7280",
        borderColor: "rgba(0,0,0,0.08)",
        accentBlue: "#2563eb",
        accentGreen: "#16a34a",
        buttonBg: "#000",
        buttonText: "#fff",
      };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "20px",
        fontFamily: 'Inter, "Segoe UI", sans-serif',
        color: theme.textPrimary,
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      {/* Funding Stage Card */}
      <div
        style={{
          background: theme.cardBg,
          borderRadius: "16px",
          padding: "20px",
          boxShadow: dark ? "0 2px 8px rgba(255,255,255,0.06)" : "0 2px 8px rgba(0,0,0,0.06)",
          border: `1px solid ${theme.borderColor}`,
        }}
      >
        <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "4px" }}>Funding Stage</h3>
        <p style={{ color: theme.textSecondary, marginBottom: "16px" }}>Your Current fundraising phase</p>

        <div
          style={{
            background: dark ? "#1f2937" : "#eef2ff",
            border: `1px solid ${theme.accentBlue}33`,
            borderRadius: "12px",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <div>
            <p style={{ color: theme.textSecondary, fontSize: "0.85rem", margin: 0 }}>CURRENT STAGE</p>
            <h4 style={{ color: theme.accentBlue, margin: 0, fontSize: "1rem" }}>Idea</h4>
          </div>
          <span
            style={{
              background: theme.accentBlue,
              color: "#fff",
              borderRadius: "20px",
              padding: "4px 10px",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            Active
          </span>
        </div>

        <div
          style={{
            background: dark ? "#1e1e1e" : "#f3f4f6",
            borderRadius: "12px",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>📅</span>
          <div>
            <p style={{ color: theme.textSecondary, fontSize: "0.85rem", margin: 0 }}>Founded</p>
            <h4 style={{ margin: 0 }}>2024</h4>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            background: "transparent",
            border: `1px solid ${theme.borderColor}`,
            borderRadius: "12px",
            padding: "10px 0",
            fontWeight: 500,
            color: theme.textPrimary,
            cursor: "pointer",
          }}
        >
          Update Stage
        </button>
      </div>

      {/* Investment Terms Card */}
      <div
        style={{
          background: theme.cardBg,
          borderRadius: "16px",
          padding: "20px",
          boxShadow: dark ? "0 2px 8px rgba(255,255,255,0.06)" : "0 2px 8px rgba(0,0,0,0.06)",
          border: `1px solid ${theme.borderColor}`,
        }}
      >
        <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "4px" }}>Investments Terms</h3>
        <p style={{ color: theme.textSecondary, marginBottom: "16px" }}>Key terms for potential investors</p>

        <div
          style={{
            background: dark ? "#0d2914" : "#ecfdf5",
            border: `1px solid ${theme.accentGreen}33`,
            borderRadius: "12px",
            padding: "16px 20px",
            marginBottom: "16px",
          }}
        >
          <p style={{ color: theme.textSecondary, fontSize: "0.85rem", margin: 0 }}>MINIMUM INVESTMENT</p>
          <h4 style={{ color: theme.accentGreen, margin: 0, fontSize: "1.1rem" }}>$25,000</h4>
        </div>

        <div
          style={{
            background: dark ? "#1e1e1e" : "#f3f4f6",
            borderRadius: "12px",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>📈</span>
          <div>
            <p style={{ color: theme.textSecondary, fontSize: "0.85rem", margin: 0 }}>Equity offered</p>
            <h4 style={{ margin: 0 }}>To be discussed</h4>
            <p style={{ color: theme.textSecondary, margin: 0, fontSize: "0.85rem" }}>
              Negotiate based on investment amount and strategic value
            </p>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            background: "transparent",
            border: `1px solid ${theme.borderColor}`,
            borderRadius: "12px",
            padding: "10px 0",
            fontWeight: 500,
            color: theme.textPrimary,
            cursor: "pointer",
          }}
        >
          View Term Sheet →
        </button>
      </div>
    </div>
  );
}
