import React from "react";
import {
  FiPlus,
  FiUpload,
  FiDownload,
  FiClock,
  FiStar,
  FiFilter,
  FiUsers,
} from "react-icons/fi";

const InvestorSidebar = ({ dark = false }) => {
  const meetings = [
    {
      initials: "MG",
      title: "Call with Monica",
      name: "Monica Gonzalez",
      date: "Nov 4, 2025 • 10:00 AM",
    },
    {
      initials: "SV",
      title: "Intro — Summit Ventures",
      name: "Monica Gonzalez",
      date: "Nov 4, 2025 • 10:00 AM",
    },
  ];

  const filters = [
    { label: "Seed Stage", count: 12 },
    { label: "MENA Region", count: 5 },
    { label: "HealthTech Focus", count: 8 },
  ];

  const theme = {
    bg: dark ? "#0d0d0d" : "#f9fafb",
    text: dark ? "#f5f5f5" : "#1a1a1a",
    subtext: dark ? "#a0a0a0" : "#555",
    border: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    cardBg: dark ? "#121212" : "#ffffff",
    accent: dark ? "#ffc300" : "#000",
    sectionBg: {
      blue: dark ? "#1a1f2e" : "#eaf0ff",
      yellow: dark ? "#2e2615" : "#fff8e1",
      green: dark ? "#18281c" : "#eaf8ee",
      pro: dark ? "#002fa7" : "#0057ff",
    },
  };

  return (
    <div
      style={{
        fontFamily: "'Inter','Segoe UI',sans-serif",
        color: theme.text,
        background: theme.bg,
        padding: "1.5rem",
        borderRadius: "12px",
        width: "340px",
        transition: "all 0.3s ease",
      }}
    >
      {/* Quick Actions */}
      <div
        style={{
          background: theme.sectionBg.blue,
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
          <FiStar size={18} color={theme.accent} />
          <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>Quick Actions</h3>
        </div>

        <button
          style={{
            width: "100%",
            background: theme.accent,
            color: dark ? "#000" : "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "0.7rem 0",
            fontWeight: "500",
            marginBottom: "0.75rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <FiPlus /> Add New Investor
        </button>

        <button
          style={{
            width: "100%",
            background: theme.cardBg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
            borderRadius: "8px",
            padding: "0.7rem 0",
            marginBottom: "0.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <FiUpload /> Import from CSV
        </button>

        <button
          style={{
            width: "100%",
            background: theme.cardBg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
            borderRadius: "8px",
            padding: "0.7rem 0",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <FiDownload /> Export Data
        </button>
      </div>

      {/* Upcoming Meetings */}
      <div
        style={{
          background: theme.sectionBg.yellow,
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>Upcoming Meetings</h3>
          <span
            style={{
              background: theme.cardBg,
              color: theme.text,
              borderRadius: "8px",
              fontSize: "0.8rem",
              fontWeight: "600",
              padding: "0.25rem 0.6rem",
            }}
          >
            {meetings.length}
          </span>
        </div>

        {meetings.map((m, i) => (
          <div
            key={i}
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderRadius: "10px",
              padding: "0.9rem 1rem",
              marginBottom: "0.7rem",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "8px",
                background: dark ? "#1f1f1f" : "#000",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "600",
                fontSize: "0.8rem",
              }}
            >
              {m.initials}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "600", fontSize: "0.9rem" }}>{m.title}</div>
              <div style={{ color: theme.subtext, fontSize: "0.8rem" }}>{m.name}</div>
              <div style={{ color: theme.subtext, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                <FiClock size={13} /> {m.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Saved Filters */}
      <div
        style={{
          background: theme.sectionBg.green,
          borderRadius: "12px",
          padding: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
          <FiFilter size={18} />
          <h3 style={{ fontSize: "1rem", fontWeight: "600" }}>Saved Filters</h3>
        </div>

        {filters.map((f, i) => (
          <div
            key={i}
            style={{
              background: theme.cardBg,
              border: `1px solid ${theme.border}`,
              borderRadius: "10px",
              padding: "0.7rem 1rem",
              marginBottom: "0.6rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: theme.text,
              fontSize: "0.9rem",
            }}
          >
            {f.label}
            <span
              style={{
                background: dark ? "#222" : "#f0f0f0",
                borderRadius: "20px",
                padding: "0.2rem 0.6rem",
                fontSize: "0.8rem",
                color: theme.subtext,
              }}
            >
              {f.count}
            </span>
          </div>
        ))}
      </div>

      {/* Pro Tip */}
      <div
        style={{
          background: theme.sectionBg.pro,
          color: "#fff",
          borderRadius: "12px",
          padding: "1.2rem 1.4rem",
          display: "flex",
          alignItems: "flex-start",
          gap: "0.7rem",
        }}
      >
        <FiUsers size={20} />
        <div>
          <div style={{ fontWeight: "600", marginBottom: "0.3rem" }}>Pro Tip</div>
          <div style={{ fontSize: "0.85rem", opacity: 0.9, lineHeight: 1.4 }}>
            Respond to investor inquiries within 24 hours to increase your chances of
            securing meetings.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorSidebar;
