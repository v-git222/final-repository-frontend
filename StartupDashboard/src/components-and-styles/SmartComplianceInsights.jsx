import React from "react";
import { AlertTriangle, Info, CheckCircle, InfoIcon } from "lucide-react";

export default function SmartComplianceInsights({ dark = false }) {
  const theme = dark
    ? {
        "--bg": "#0d0d0d",
        "--card-bg": "#121212",
        "--text-primary": "#f5f5f5",
        "--text-secondary": "#a0a0a0",
        "--border": "rgba(255,255,255,0.08)",
        "--accent": "#3b82f6",
      }
    : {
        "--bg": "#f9fafb",
        "--card-bg": "#ffffff",
        "--text-primary": "#111827",
        "--text-secondary": "#6b7280",
        "--border": "#e5e7eb",
        "--accent": "#2563eb",
      };

  const insights = [
    {
      icon: <AlertTriangle color="#f97316" size={20} />,
      title:
        "Your Trade License expires on 12-Dec-2025 — renewal recommended",
      action: "Start Renewal",
      color: "#fff7ed",
      borderColor: "#fed7aa",
      textColor: "#92400e",
    },
    {
      icon: <Info color="#3b82f6" size={20} />,
      title:
        "Missing Board Meeting Minutes for Q4 2025 — upload before audit",
      action: "Upload Now",
      color: "#eff6ff",
      borderColor: "#bfdbfe",
      textColor: "#1e40af",
    },
    {
      icon: <CheckCircle color="#16a34a" size={20} />,
      title:
        "Investor Agreement pending one digital signature — initiate via Emireq Sign",
      action: "Sign Now",
      color: "#ecfdf5",
      borderColor: "#bbf7d0",
      textColor: "#065f46",
    },
    {
      icon: <InfoIcon color="#a855f7" size={20} />,
      title:
        "Tax Filing Window opens on Nov 17th 2025 — learn auto-reminders",
      action: "Set Reminder",
      color: "#faf5ff",
      borderColor: "#ddd6fe",
      textColor: "#5b21b6",
    },
  ];

  return (
    <div
      style={{
        background: theme["--card-bg"],
        color: theme["--text-primary"],
        padding: "1.8rem 2rem",
        borderRadius: "16px",
        border: `1px solid ${theme["--border"]}`,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        fontFamily: "Inter, sans-serif",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme["--accent"]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Smart Compliance Insights (AI-Powered)
        </h3>
      </div>

      <p
        style={{
          color: theme["--accent"],
          fontSize: "0.95rem",
          marginTop: "0.3rem",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        Automated recommendations to keep your compliance status on track
      </p>

      <hr
        style={{
          border: "none",
          borderTop: `1px solid ${theme["--border"]}`,
          marginBottom: "1.5rem",
        }}
      />

      {/* Insight Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {insights.map((item, i) => (
          <div
            key={i}
            style={{
              background: item.color,
              border: `1px solid ${item.borderColor}`,
              borderRadius: "12px",
              padding: "1rem 1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                color: theme["--text-primary"],
                flex: "1 1 70%",
                minWidth: "250px",
              }}
            >
              <div>{item.icon}</div>
              <span
                style={{
                  fontSize: "0.98rem",
                  fontWeight: 500,
                  color: dark ? "#f3f4f6" : "#1f2937",
                }}
              >
                {item.title}
              </span>
            </div>
            <a
              href="#"
              style={{
                color: theme["--accent"],
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "0.95rem",
                marginTop: "0.4rem",
              }}
            >
              {item.action} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
