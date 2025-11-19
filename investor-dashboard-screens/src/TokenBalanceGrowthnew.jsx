import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "./tokenBalanceGrowth.css";

/* ------------------- Chart Data ------------------- */
const data = [
  { name: "Q1", value: 12000, max: 47000 },
  { name: "Q2", value: 18000, max: 47000 },
  { name: "Q3", value: 35000, max: 47000 },
  { name: "Q4", value: 30000, max: 47000 },
];

/* -------- Custom Rounded Bar Component -------- */
const RoundedBar = (props) => {
  const { fill, x, y, width, height, radius } = props;
  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={fill}
    />
  );
};

/* -------- Tooltip Component -------- */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const item = payload[0].payload;

    return (
      <div className="tooltip-box">
        <div className="tooltip-title">{item.name}</div>
        <div className="tooltip-value">ROI: ${item.value.toLocaleString()}</div>
      </div>
    );
  }
  return null;
};

/* ------------------- Main Component ------------------- */
export default function TokenBalanceGrowth() {
  return (
    <div className="tg-card">
      {/* ---------- Header ---------- */}
      <div className="tg-header">
        <div className="tg-left">
          <div className="tg-icon"></div>
          <div className="tg-title-block">
            <h2 className="tg-title">Token Balance Growth</h2>
            <p className="tg-subtitle">6-month trend of total token value</p>
          </div>
        </div>

        <div className="tg-actions">
          <button className="tg-btn">⧉</button>
          <button className="tg-btn">✎</button>
          <button className="tg-btn">⋯</button>
        </div>
      </div>

      {/* ---------- Chart ---------- */}
      <div className="tg-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="25%">
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 15000, 30000, 45000, 60000]}
              tick={{ fill: "#A4AFCB", fontSize: 13 }}
              domain={[0, 60000]}
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A4AFCB", fontSize: 14 }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />

            {/* Background Faded Bars */}
            <Bar
              dataKey="max"
              shape={<RoundedBar radius={20} />}
              fill="url(#fadeGradient)"
            />

            {/* Main Value Bars */}
            <Bar
              dataKey="value"
              shape={<RoundedBar radius={20} />}
              fill="url(#blueGradient)"
              animationDuration={900}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#26A8FF" />
                <stop offset="100%" stopColor="#0094FF" />
              </linearGradient>

              <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C7E7FF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#C7E7FF" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
