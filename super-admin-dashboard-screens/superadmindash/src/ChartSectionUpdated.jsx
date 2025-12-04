import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ChartsSection.css";

const fundingData = [
  { month: "Jan", value: 60 },
  { month: "Feb", value: 75 },
  { month: "Mar", value: 95 },
  { month: "Apr", value: 110 },
  { month: "May", value: 130 },
  { month: "Jun", value: 150 },
  { month: "Jul", value: 168 },
  { month: "Aug", value: 200 },
];

const dealsData = [
  { month: "Jan", value: 3 },
  { month: "Feb", value: 5 },
  { month: "Mar", value: 7 },
  { month: "Apr", value: 5 },
  { month: "May", value: 6 },
  { month: "Jun", value: 7 },
  { month: "Jul", value: 6 },
  { month: "Aug", value: 8 },
];

export default function ChartsSection() {
  return (
    <div className="chart-grid">

      {/* ===== Chart 1 ===== */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Monthly Funding Trends ($K)</h3>
            <p className="chart-sub">Funding growth over time</p>
          </div>
          <div className="chart-icons">⋯</div>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={fundingData} margin={{ top: 10, right: 20, left: -10 }}>
            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#999" }} />
            <YAxis tick={{ fontSize: 10, fill: "#999" }} />
            <Tooltip cursor={false} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2.2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ===== Chart 2 ===== */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Investment Deals Count</h3>
            <p className="chart-sub">Number of deals per month</p>
          </div>
          <div className="chart-icons">⋯</div>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={dealsData} margin={{ top: 10, right: 20, left: -10 }}>
            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#999" }} />
            <YAxis tick={{ fontSize: 10, fill: "#999" }} />
            <Tooltip cursor={false} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2.2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
