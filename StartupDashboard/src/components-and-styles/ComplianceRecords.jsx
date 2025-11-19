import React from "react";
import { FileText, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export default function ComplianceRecords({ dark = false }) {
  const theme = dark
    ? {
        "--bg": "#0d0d0d",
        "--card-bg": "#121212",
        "--table-bg": "#1b1b1b",
        "--text-primary": "#f5f5f5",
        "--text-secondary": "#a0a0a0",
        "--border": "rgba(255,255,255,0.08)",
        "--accent": "#155DFC",
      }
    : {
        "--bg": "#f9fafb",
        "--card-bg": "#ffffff",
        "--table-bg": "#f9fafb",
        "--text-primary": "#111827",
        "--text-secondary": "#6b7280",
        "--border": "#e5e7eb",
        "--accent": "#155DFC",
      };

  const data = [
    {
      name: "Certificate of Incorporation",
      type: "Legal",
      reviewDate: "2025-09-15",
      reviewer: "Legal Team",
      status: "Approved",
      statusColor: "#4ade80",
    },
    {
      name: "Trade License",
      type: "Legal",
      reviewDate: "2025-09-30",
      reviewer: "Compliance Officer",
      status: "In Review",
      statusColor: "#3b82f6",
    },
    {
      name: "GST Registration",
      type: "Financial",
      reviewDate: "2025-10-15",
      reviewer: "Finance Director",
      status: "Pending",
      statusColor: "#fbbf24",
    },
    {
      name: "Shareholder Agreement",
      type: "Legal",
      reviewDate: "2025-10-15",
      reviewer: "Legal Dept.",
      status: "Non-Compliant",
      statusColor: "#ef4444",
    },
  ];

  return (
    <div
      style={{
        background: theme["--bg"],
        color: theme["--text-primary"],
        padding: "2rem",
        borderRadius: "16px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <h2 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "0.3rem" }}>
        Compliance Records <span style={{ color: theme["--text-secondary"] }}>ⓘ</span>
      </h2>
      <p style={{ color: theme["--text-secondary"], marginBottom: "1.5rem" }}>
        Detailed history of compliance document reviews
      </p>

      {/* Filter Row */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <select
          style={{
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            border: `1px solid ${theme["--border"]}`,
            background: theme["--card-bg"],
            color: theme["--text-primary"],
            fontSize: "0.95rem",
            flex: "0 0 180px",
          }}
        >
          <option>Status</option>
          <option>Approved</option>
          <option>In Review</option>
          <option>Pending</option>
          <option>Non-Compliant</option>
        </select>

        <input
          type="text"
          placeholder="🔍  Search"
          style={{
            flex: "1 1 300px",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            border: `1px solid ${theme["--border"]}`,
            background: theme["--card-bg"],
            color: theme["--text-primary"],
            fontSize: "0.95rem",
          }}
        />
      </div>

      {/* Table */}
      <div
        style={{
          background: theme["--card-bg"],
          borderRadius: "12px",
          border: `1px solid ${theme["--border"]}`,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.95rem",
          }}
        >
          <thead>
            <tr
              style={{
                background: dark ? "#181818" : "#f3f4f6",
                color: theme["--text-secondary"],
                textAlign: "left",
              }}
            >
              {["Startup", "Type", "Review Date", "Reviewer", "Status", "Actions"].map(
                (header) => (
                  <th
                    key={header}
                    style={{
                      padding: "0.9rem 1rem",
                      fontWeight: 500,
                      borderBottom: `1px solid ${theme["--border"]}`,
                    }}
                  >
                    {header.toUpperCase()}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: `1px solid ${theme["--border"]}`,
                }}
              >
                {/* Startup Column */}
                <td
                  style={{
                    padding: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      background: dark ? "#000" : "#111",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FileText size={18} color="#fff" />
                  </div>
                  <span>{item.name}</span>
                </td>

                <td style={{ padding: "1rem", color: theme["--text-secondary"] }}>
                  {item.type}
                </td>

                <td style={{ padding: "1rem", color: theme["--text-secondary"] }}>
                  {item.reviewDate}
                </td>

                <td style={{ padding: "1rem", color: theme["--text-secondary"] }}>
                  {item.reviewer}
                </td>

                <td style={{ padding: "1rem" }}>
                  <span
                    style={{
                      background: `${item.statusColor}22`,
                      color: item.statusColor,
                      padding: "0.35rem 0.7rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "0.85rem",
                    }}
                  >
                    {item.status}
                  </span>
                </td>

                <td
                  style={{
                    padding: "1rem",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <MoreHorizontal color={theme["--text-secondary"]} size={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1.2rem",
          color: theme["--text-secondary"],
          fontSize: "0.9rem",
        }}
      >
        <div>
          Showing{" "}
          <span
            style={{
              background: dark ? "#1a1a1a" : "#e5e7eb",
              padding: "0.3rem 0.6rem",
              borderRadius: "6px",
              color: theme["--text-primary"],
              fontWeight: "600",
            }}
          >
            04
          </span>{" "}
          / 15 Results
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            style={{
              background: "transparent",
              border: `1px solid ${theme["--border"]}`,
              borderRadius: "8px",
              padding: "0.3rem 0.6rem",
              cursor: "pointer",
            }}
          >
            <ChevronLeft color={theme["--text-secondary"]} size={16} />
          </button>
          <button
            style={{
              background: theme["--accent"],
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.4rem 0.8rem",
              fontWeight: "600",
            }}
          >
            1
          </button>
          <button
            style={{
              background: "transparent",
              border: `1px solid ${theme["--border"]}`,
              borderRadius: "8px",
              padding: "0.3rem 0.6rem",
              cursor: "pointer",
            }}
          >
            <ChevronRight color={theme["--text-secondary"]} size={16} />
          </button>
        </div>
      </div>

      {/* Footer */}
      <p
        style={{
          marginTop: "1rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: theme["--text-secondary"],
        }}
      >
        Market data is updated in real-time. Prices are for reference only and may vary across
        exchanges.
      </p>
    </div>
  );
}
