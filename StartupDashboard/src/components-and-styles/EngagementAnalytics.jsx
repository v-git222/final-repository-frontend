import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./EngagementAnalytics.css"; // Add this to manage theme consistency

export default function EngagementAnalytics({ dark = false }) {
  // Ensure theme class consistency
  useEffect(() => {
    const wrapper = document.querySelector(".analytics-wrapper");
    if (dark) wrapper?.classList.add("dark");
    else wrapper?.classList.remove("dark");
  }, [dark]);

  const lineData = [
    { month: "Jan", value: 5 },
    { month: "Feb", value: 10 },
    { month: "Mar", value: 30 },
    { month: "Apr", value: 5 },
    { month: "May", value: 15 },
    { month: "Jun", value: 14 },
    { month: "Jul", value: 25 },
    { month: "Aug", value: 15 },
    { month: "Sep", value: 40 },
  ];

  const pieData = [
    { name: "In Discussion", value: 2, color: "#7fff00" },
    { name: "Interested", value: 2, color: "#00bfff" },
    { name: "No Response", value: 1, color: "#9d4edd" },
    { name: "Follow up needed", value: 1, color: "#ffa500" },
  ];

  return (
    <div className="analytics-wrapper">
      <div className="analytics-container">
        <h2 className="analytics-title">Engagement Analytics</h2>
        <p className="analytics-subtitle">
          Track response rate, average follow-up time, and investor activity trend.
        </p>

        <div className="analytics-grid">
          {/* Left Card — Line Chart */}
          <div className="analytics-card">
            <h3 className="analytics-section-title">Monthly Response Rate</h3>
            <div className="chart-container">
              <ResponsiveContainer>
                <LineChart data={lineData}>
                  <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    stroke="var(--text-secondary)"
                    fontSize={12}
                    tickMargin={8}
                  />
                  <YAxis
                    stroke="var(--text-secondary)"
                    fontSize={12}
                    tickMargin={4}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)",
                      borderRadius: "8px",
                      fontSize: "13px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="var(--accent)"
                    strokeWidth={2}
                    dot={{ r: 4, fill: "var(--accent)" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Card — Pie Chart */}
          <div className="analytics-card">
            <h3 className="analytics-section-title">Status Distribution</h3>
            <div className="pie-container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={3}
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="legend">
              {pieData.map((item, i) => (
                <div key={i} className="legend-item">
                  <div
                    className="legend-color"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-name">{item.name}</span>
                  <span className="legend-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
