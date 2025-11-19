import React from "react";
import {
  FiMail,
  FiPhone,
  FiEye,
  FiSearch,
  FiMapPin,
  FiBriefcase,
  FiDollarSign,
  FiClock,
} from "react-icons/fi";

const InquiryPipeline = ({ dark = false }) => {
  const investors = [
    {
      name: "Sarah Johnson",
      company: "Novocure Capital",
      location: "Switzerland",
      investment: "$100K – $1M",
      stage: "Series A",
      interests: ["HealthTech", "Oncology"],
      status: "In Discussion",
      statusColor: "#b4f5b4",
      lastContact: "Oct 30, 2025",
      nextCall: "Call with Monica — Nov 4, 2025 at 10:00 AM",
    },
    {
      name: "Michael Lee",
      company: "Greenstone Ventures",
      location: "USA",
      investment: "$250K – $2M",
      stage: "Series B",
      interests: ["FinTech", "Blockchain"],
      status: "Awaiting Reply",
      statusColor: "#ffd6a5",
      lastContact: "Oct 28, 2025",
    },
    {
      name: "Michael Lee",
      company: "Greenstone Ventures",
      location: "USA",
      investment: "$250K – $2M",
      stage: "Series B",
      interests: ["FinTech", "Blockchain"],
      status: "Interested",
      statusColor: "#a5d8ff",
      lastContact: "Oct 28, 2025",
    },
    {
      name: "James Smith",
      company: "NextGen Fund",
      location: "UK",
      investment: "$150K – $800K",
      stage: "Series A",
      interests: ["Sustainability", "Clean Energy"],
      status: "Closed",
      statusColor: "#d0d0d0",
      lastContact: "Oct 27, 2025",
    },
  ];

  return (
    <div className={`page ${dark ? "dark" : ""}`} style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <div className="profile-wrapper" style={{ backgroundColor: "var(--profile-bg)", minHeight: "100vh", padding: "2rem", color: "var(--text-primary)" }}>
        <div style={{ marginBottom: "1rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "600", marginBottom: "0.25rem" }}>
            Inquiry Pipeline
          </h2>
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            Track and manage all incoming investor inquiries
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginTop: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ position: "relative", flex: 1 }}>
            <FiSearch
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-secondary)",
              }}
            />
            <input
              type="text"
              placeholder="Search"
              style={{
                flex: 1,
                padding: "0.6rem 1rem 0.6rem 2.2rem",
                borderRadius: "8px",
                border: `1px solid var(--border-color)`,
                background: "var(--card-bg)",
                color: "var(--text-primary)",
                fontSize: "0.9rem",
                width: "100%",
              }}
            />
          </div>
        </div>

        {investors.map((inv, idx) => (
          <div
            key={idx}
            style={{
              background: "var(--card-bg)",
              border: `1px solid var(--border-color)`,
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "1.5rem",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundImage: `url(https://i.pravatar.cc/100?img=${idx + 1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div>
                  <span style={{ display: "block", fontWeight: "600", fontSize: "1rem" }}>
                    {inv.name}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    <FiBriefcase /> {inv.company} <FiMapPin /> {inv.location}
                  </span>
                </div>
              </div>
              <span
                style={{
                  background: inv.statusColor,
                  color: "#000",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                }}
              >
                {inv.status}
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              <span>
                <FiDollarSign /> Investment Range: {inv.investment}
              </span>
              <span>
                <FiClock /> Stage Focus: {inv.stage}
              </span>
              <div style={{ display: "flex", gap: "0.4rem" }}>
                Interests:{" "}
                {inv.interests.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(128,128,128,0.1)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span>Last Contact: {inv.lastContact}</span>
            </div>

            {inv.nextCall && (
              <div
                style={{
                  background: dark ? "rgba(255,195,0,0.1)" : "#e9fce9",
                  padding: "0.7rem 1rem",
                  borderRadius: "8px",
                  color: dark ? "#ffc300" : "#228b22",
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                <FiPhone />
                {inv.nextCall}
              </div>
            )}

            <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem" }}>
              <button
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  padding: "0.6rem",
                  borderRadius: "8px",
                  border: "none",
                  background: "var(--accent)",
                  color: "#000",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                <FiMail /> Send Message
              </button>
              <button
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  padding: "0.6rem",
                  borderRadius: "8px",
                  border: `1px solid var(--border-color)`,
                  background: "transparent",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                }}
              >
                <FiPhone /> Schedule Call
              </button>
              <button
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  padding: "0.6rem",
                  borderRadius: "8px",
                  border: `1px solid var(--border-color)`,
                  background: "transparent",
                  color: "var(--text-primary)",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                }}
              >
                <FiEye /> View History
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InquiryPipeline;
