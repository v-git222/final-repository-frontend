import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Info, Maximize2, Edit3, MoreHorizontal } from "lucide-react";
import "./DealStageAndValueCharts.css";

export default function DealStageAndValueCharts({ dark }) {
  const pieData = [
    { name: "Initial Review", value: 7, color: "#8b5cf6" },
    { name: "Due Diligence", value: 6, color: "#06b6d4" },
    { name: "Negotiation", value: 5, color: "#22c55e" },
    { name: "Documentation", value: 3, color: "#f59e0b" },
    { name: "Closing", value: 3, color: "#ec4899" },
  ];

  const barData = [
    { month: "Jan", value: 200 },
    { month: "Feb", value: 1000 },
    { month: "Mar", value: 600 },
    { month: "Apr", value: 1400 },
    { month: "May", value: 1100 },
    { month: "Jun", value: 800 },
    { month: "Jul", value: 1700 },
  ];

  return (
    <div className={`deal-charts ${dark ? "dark" : ""}`}>
      {/* ==== LEFT: DEAL STAGE DISTRIBUTION ==== */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3>
              Deal Stage Distribution <Info size={14} className="info-icon" />
            </h3>
            <p>Current pipeline breakdown</p>
          </div>
          <div className="chart-actions">
            <Maximize2 size={16} />
            <Edit3 size={16} />
            <MoreHorizontal size={16} />
          </div>
        </div>

        <div className="chart-body pie-section">
          <div className="pie-chart-wrapper">
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: dark ? "#1a1a1a" : "#fff",
                    border: "none",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="pie-legend">
            {pieData.map((item, i) => (
              <div key={i} className="legend-item">
                <span
                  className="legend-color"
                  style={{ background: item.color }}
                ></span>
                <span className="legend-name">{item.name}</span>
                <span className="legend-value">{item.value} deals</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==== RIGHT: DEAL VALUE BY MONTH ==== */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3>
              Deal Value by Month ($K) <Info size={14} className="info-icon" />
            </h3>
            <p>Value growth</p>
          </div>
          <div className="chart-actions">
            <Maximize2 size={16} />
            <Edit3 size={16} />
            <MoreHorizontal size={16} />
          </div>
        </div>

        <div className="chart-body">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={barData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={dark ? "#333" : "#eee"}
              />
              <XAxis
                dataKey="month"
                tick={{ fill: dark ? "#aaa" : "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: dark ? "#aaa" : "#6b7280", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: dark ? "#222" : "#f9fafb" }}
                contentStyle={{
                  background: dark ? "#1a1a1a" : "#fff",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`Deal value: ${value}`, ""]}
              />
              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[8, 8, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
