import React from "react";
import { FileText, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

export default function ComplianceCards({ dark = false }) {
  const theme = dark
    ? {
        "--profile-bg": "#0d0d0d",
        "--card-bg": "#121212",
        "--text-primary": "#f5f5f5",
        "--text-secondary": "#a0a0a0",
        "--border-color": "rgba(255, 255, 255, 0.08)",
        "--shadow": "0 2px 10px rgba(0,0,0,0.6)",
      }
    : {
        "--profile-bg": "#f9fafb",
        "--card-bg": "#ffffff",
        "--text-primary": "#111827",
        "--text-secondary": "#6b7280",
        "--border-color": "#e5e7eb",
        "--shadow": "0 1px 8px rgba(0,0,0,0.05)",
      };

  const cards = [
    {
      title: "Total Documents",
      count: 7,
      note: "+4 this week",
      icon: <FileText color="#fff" size={20} />,
      color: "#2563eb",
    },
    {
      title: "Compliances Up To Date",
      count: 4,
      note: "3 upcoming this week",
      icon: <CheckCircle2 color="#fff" size={20} />,
      color: "#16a34a",
    },
    {
      title: "Pending Reviews",
      count: 2,
      note: "Needs attention",
      icon: <Clock color="#fff" size={20} />,
      color: "#f97316",
    },
    {
      title: "Expiring Soon",
      count: 1,
      note: "Requires action",
      icon: <AlertTriangle color="#fff" size={20} />,
      color: "#dc2626",
    },
  ];

  return (
    <div
      style={{
        background: "transparent",
        padding: "1.5rem 1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "1.25rem",
        flexWrap: "wrap",
        maxWidth: "1300px",
        margin: "0 auto",
        transition: "all 0.3s ease",
      }}
      className="compliance-wrapper"
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: theme["--card-bg"],
            color: theme["--text-primary"],
            border: `1px solid ${theme["--border-color"]}`,
            borderRadius: "14px",
            flex: "1 1 200px", // ✅ shrink cards faster
            maxWidth: "240px", // ✅ reduced from 300px
            minWidth: "190px", // ✅ tighter minimum
            padding: "1.4rem",
            boxShadow: theme["--shadow"],
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          className="compliance-card"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = dark
              ? "0 4px 18px rgba(255,255,255,0.1)"
              : "0 4px 12px rgba(0,0,0,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = theme["--shadow"];
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <div
              style={{
                background: card.color,
                borderRadius: "10px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {card.icon}
            </div>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: theme["--text-secondary"],
              }}
            >
              {card.title}
            </span>
          </div>

          {/* Count */}
          <div
            style={{
              fontSize: "1.7rem",
              fontWeight: "700",
              marginTop: "0.9rem",
              color: theme["--text-primary"],
              fontFamily: "Inter, sans-serif",
            }}
          >
            {card.count}
          </div>

          {/* Note */}
          <div
            style={{
              marginTop: "0.7rem",
              fontSize: "0.85rem",
              color: theme["--text-secondary"],
              borderTop: `1px solid ${theme["--border-color"]}`,
              paddingTop: "0.5rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {card.note}
          </div>
        </div>
      ))}
    </div>
  );
}
