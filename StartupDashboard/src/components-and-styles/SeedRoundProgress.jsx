import React from "react";

export default function SeedRoundProgress({ dark = false }) {
  const goal = 250000;
  const raised = 75000; // Dummy data
  const progress = (raised / goal) * 100;

  const theme = dark
    ? {
        background: "#121212",
        color: "#f5f5f5",
        textSecondary: "#a0a0a0",
        borderColor: "rgba(255,255,255,0.08)",
        accent: "#ffc300",
        barBackground: "#2a2a2a",
      }
    : {
        background: "#fff",
        color: "#1a1a1a",
        textSecondary: "#6b7280",
        borderColor: "#dbeafe",
        accent: "#6366f1",
        barBackground: "#e5e7eb",
      };

  return (
    <div
      style={{
        background: theme.background,
        borderRadius: "16px",
        padding: "24px",
        boxShadow: dark ? "0 2px 8px rgba(255,255,255,0.06)" : "0 2px 8px rgba(0,0,0,0.06)",
        fontFamily: 'Inter, "Segoe UI", sans-serif',
        color: theme.color,
        maxWidth: "130rem",
        margin: "auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 600, margin: 0 }}>
            Seed Round Progress
          </h3>
          <p style={{ color: theme.textSecondary, marginTop: "4px", fontSize: "0.95rem" }}>
            Track your fundraising journey to reach your goal
          </p>
        </div>
        <div
          style={{
            background: dark ? "#1f1f1f" : "#f3f4f6",
            borderRadius: "8px",
            padding: "6px 12px",
            color: theme.accent,
            fontWeight: 500,
            fontSize: "0.9rem",
            border: `1px solid ${theme.borderColor}`,
          }}
        >
          {progress.toFixed(1)}% Complete
        </div>
      </div>

      <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ color: theme.textSecondary, fontSize: "1rem" }}>
          ${raised.toLocaleString()} raised
        </span>
        <span style={{ color: theme.textSecondary, fontSize: "1rem" }}>
          Goal: <strong style={{ color: theme.color }}>${goal.toLocaleString()}</strong>
        </span>
      </div>

      <div
        style={{
          marginTop: "10px",
          height: "14px",
          background: theme.barBackground,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: dark
              ? "linear-gradient(90deg, #ffc300, #facc15)"
              : "linear-gradient(90deg, #ec4899, #6366f1)",
            transition: "width 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}
