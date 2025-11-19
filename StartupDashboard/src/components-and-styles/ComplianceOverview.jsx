import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Calendar } from "lucide-react";

export default function ComplianceOverview({ dark = false }) {
  const theme = dark
    ? {
        "--bg": "#0d0d0d",
        "--card-bg": "#121212",
        "--text-primary": "#f5f5f5",
        "--text-secondary": "#a0a0a0",
        "--border": "rgba(255,255,255,0.08)",
        "--accent": "#155DFC",
      }
    : {
        "--bg": "#f9fafb",
        "--card-bg": "#ffffff",
        "--text-primary": "#111827",
        "--text-secondary": "#6b7280",
        "--border": "#e5e7eb",
        "--accent": "#155DFC",
      };

  const chartData = [
    { name: "Approved", value: 31, color: "#22c55e" },
    { name: "In Review", value: 6, color: "#3b82f6" },
    { name: "Pending", value: 2, color: "#fbbf24" },
    { name: "Non-Compliant", value: 1, color: "#ef4444" },
  ];

  const total = chartData.reduce((acc, d) => acc + d.value, 0);

  const deadlines = [
    {
      title: "Trade License Renewal",
      date: "08 Nov 2025",
      tag: "Legal",
      status: "Pending",
      color: "#facc15",
    },
    {
      title: "Annual Audit Report",
      date: "11 Nov 2025",
      tag: "Finance",
      status: "In Review",
      color: "#3b82f6",
    },
    {
      title: "Data Privacy Update",
      date: "01 Jan 2026",
      tag: "Finance",
      status: "Non-Compliant",
      color: "#ef4444",
    },
  ];

  return (
    <div
      style={{
        background: theme["--bg"],
        color: theme["--text-primary"],
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", // ✅ responsive 2-column layout
        gap: "1.5rem",
        justifyContent: "center",
        alignItems: "start",
        padding: "1.5rem 2rem",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Compliance Status Card */}
      <div
        style={{
          background: theme["--card-bg"],
          borderRadius: "16px",
          border: `1px solid ${theme["--border"]}`,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          padding: "1.8rem 2rem",
        }}
      >
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: "600",
            marginBottom: "0.4rem",
          }}
        >
          Compliance Status{" "}
          <span style={{ color: theme["--text-secondary"], fontSize: "0.9rem" }}>
            ⓘ
          </span>
        </h3>
        <p
          style={{
            color: theme["--text-secondary"],
            fontSize: "0.95rem",
            marginBottom: "1rem",
          }}
        >
          Current status breakdown
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {/* Donut Chart */}
          <div
            style={{
              width: "220px",
              height: "220px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  innerRadius="70%"
                  outerRadius="100%"
                  paddingAngle={2}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  color: theme["--text-primary"],
                  fontWeight: "700",
                }}
              >
                {total}
              </div>
              <div style={{ color: theme["--text-secondary"] }}>Total</div>
            </div>
          </div>

          {/* Chart Breakdown List */}
          <div style={{ flex: "1 1 auto", minWidth: "200px" }}>
            {chartData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.4rem",
                  fontSize: "0.95rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      background: item.color,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span>{item.name}</span>
                </div>
                <div>
                  {item.value}{" "}
                  <span
                    style={{
                      color: theme["--text-secondary"],
                      marginLeft: "0.3rem",
                    }}
                  >
                    ({Math.round((item.value / total) * 100)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Deadlines Card */}
      <div
        style={{
          background: theme["--card-bg"],
          borderRadius: "16px",
          border: `1px solid ${theme["--border"]}`,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          padding: "1.8rem 2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            Upcoming Compliance Deadlines{" "}
            <span
              style={{
                color: theme["--text-secondary"],
                fontSize: "0.9rem",
                marginLeft: "4px",
              }}
            >
              ⓘ
            </span>
          </h3>
          <div
            style={{
              background: "#fee2e2",
              color: "#b91c1c",
              fontWeight: "600",
              fontSize: "0.9rem",
              borderRadius: "8px",
              padding: "0.3rem 0.6rem",
            }}
          >
            {deadlines.length}
          </div>
        </div>

        {deadlines.map((d, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: dark ? "#1b1b1b" : "#f9fafb",
              borderRadius: "12px",
              padding: "0.9rem 1rem",
              marginBottom: "0.8rem",
              border: `1px solid ${theme["--border"]}`,
            }}
          >
            <div>
              <div style={{ fontWeight: "600", fontSize: "1rem" }}>{d.title}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: theme["--text-secondary"],
                  fontSize: "0.9rem",
                  marginTop: "0.2rem",
                }}
              >
                <Calendar size={14} />
                <span>{d.date}</span>
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  display: "inline-block",
                  background: dark ? "#2a2a2a" : "#eef2ff",
                  color: theme["--text-secondary"],
                  padding: "0.2rem 0.6rem",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                }}
              >
                {d.tag}
              </div>
            </div>
            <div
              style={{
                background: `${d.color}22`,
                color: d.color,
                padding: "0.3rem 0.6rem",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "0.85rem",
              }}
            >
              {d.status}
            </div>
          </div>
        ))}

        <button
          style={{
            background: theme["--accent"],
            border: "none",
            color: "#fff",
            width: "100%",
            marginTop: "1rem",
            padding: "0.8rem",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            fontSize: "0.95rem",
          }}
        >
          <Calendar size={16} />
          View All Deadlines
        </button>
      </div>
    </div>
  );
}
