import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiInfo } from "react-icons/fi";
import { BsBarChartLine } from "react-icons/bs";
import InvestorMix from "./InvestorMixPie";

const lineData = [
  { month: "Jan", users: 70, revenue: 40 },
  { month: "Feb", users: 110, revenue: 60 },
  { month: "Mar", users: 80, revenue: 140 },
  { month: "Apr", users: 40, revenue: 60 },
  { month: "May", users: 90, revenue: 100 },
  { month: "Jun", users: 90, revenue: 95 },
  { month: "Jul", users: 120, revenue: 110 },
  { month: "Aug", users: 120, revenue: 80 },
  { month: "Sep", users: 90, revenue: 160 },
];

export default function GrowthInvestorDashboard({ dark }) {
  const theme = {
    textPrimary: dark ? "#f5f5f5" : "#111111",
    textSecondary: dark ? "#b5b5b5" : "#555555",
    tooltipBg: dark ? "#1e1e1e" : "#ffffff",
    border: dark ? "#333" : "#e5e7eb",
    shadow: dark
      ? "0 4px 10px rgba(255,255,255,0.05)"
      : "0 4px 10px rgba(0,0,0,0.08)",
    bg: dark ? "#0f0f0f" : "#ffffff",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Left Section — Line Chart (70%) */}
      <div
        style={{
          flex: "0 1 68%",
          background: theme.bg,
          borderRadius: "16px",
          boxShadow: theme.shadow,
          padding: "1.5rem",
          border: `1px solid ${theme.border}`,
          minWidth: "340px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <BsBarChartLine
              style={{
                color: "#8B5CF6",
                fontSize: "1.4rem",
                flexShrink: 0,
              }}
            />
            <div>
              <h3
                style={{
                  fontFamily: `"URW Geometric", 'Poppins', sans-serif`,
                  fontWeight: 400,
                  fontSize: "1.2rem",
                  color: theme.textPrimary,
                  margin: 0,
                }}
              >
                Growth Overview
              </h3>
              <p
                style={{
                  fontFamily: `"URW Geometric", 'Poppins', sans-serif`,
                  fontSize: "0.85rem",
                  color: theme.textSecondary,
                  margin: 0,
                }}
              >
                User acquisition and revenue trends
              </p>
            </div>
          </div>
          <FiInfo style={{ color: theme.textSecondary, cursor: "pointer" }} />
        </div>

        {/* Line Chart */}
        <div style={{ width: "100%", height: "250px" }}>
          <ResponsiveContainer>
            <LineChart
              data={lineData}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="month" stroke={theme.textSecondary} />
              <YAxis stroke={theme.textSecondary} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.tooltipBg,
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: theme.shadow,
                }}
                labelStyle={{ color: theme.textPrimary }}
                itemStyle={{ color: theme.textSecondary }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8B5CF6"
                strokeWidth={2}
                dot={{ fill: "#8B5CF6", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ fill: "#3B82F6", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginTop: "0.75rem",
            fontFamily: `"URW Geometric", sans-serif`,
            fontSize: "0.85rem",
            color: theme.textSecondary,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#8B5CF6",
              }}
            ></span>
            Revenue ($)
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#3B82F6",
              }}
            ></span>
            Users
          </div>
        </div>
      </div>

      {/* Right Section — Investor Mix (30%) */}
      <div
        style={{
          flex: "0 1 28%",
          minWidth: "280px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <InvestorMix dark={dark} />
      </div>
    </div>
  );
}
