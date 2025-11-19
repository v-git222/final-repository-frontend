import React from "react";
import "./FundingAndTokenization.css";
import { Info } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 60 },
  { name: "Mar", value: 140 },
  { name: "Apr", value: 60 },
  { name: "May", value: 100 },
  { name: "Jun", value: 110 },
  { name: "Jul", value: 130 },
  { name: "Aug", value: 100 },
  { name: "Sep", value: 180 },
];

const pieData = [
  { name: "Startup Tokenized", value: 50 },
  { name: "Not Tokenized", value: 50 },
];

const COLORS = ["#3b82f6", "#a855f7"];

export default function FundingAndTokenization({ dark }) {
  return (
    <div className={`funding-tokenization ${dark ? "dark" : ""}`}>
      {/* Left Chart - Funding Trend */}
      <div className="funding-card">
        <div className="funding-header">
          <h3>
            Monthly Funding Trend ($K)
          </h3>
          <Info size={16} className="info-icon" />
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#9ca3af" }}
              />
              <Tooltip
                formatter={(value) => [`$${value}K`, "Funding"]}
                contentStyle={{
                  background: "#fff",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  fontSize: "13px",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4, fill: "#6366f1", stroke: "#fff", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right Chart - Tokenization Status */}
      <div className="tokenization-card">
        <div className="token-header">
          <h3>Tokenization Status</h3>
          <button className="period-btn">Monthly ▾</button>
        </div>

        <div className="pie-chart-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="pie-center">
            <span>50%</span>
          </div>
        </div>

        <div className="token-legend">
          <div className="legend-item">
            <span className="dot blue"></span>
            <p>Startup Tokenized</p>
          </div>
          <div className="legend-item">
            <span className="dot purple"></span>
            <p>Not Tokenized</p>
          </div>
        </div>
      </div>
    </div>
  );
}
