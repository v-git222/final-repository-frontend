import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Maximize2, Edit3, MoreHorizontal } from "lucide-react";
import "./FundingTrendsAndDeals.css";

const fundingData = [
  { month: "Jan", value: 80 },
  { month: "Feb", value: 95 },
  { month: "Mar", value: 115 },
  { month: "Apr", value: 130 },
  { month: "May", value: 150 },
  { month: "Jun", value: 170 },
  { month: "Jul", value: 190 },
  { month: "Aug", value: 210 },
];

const dealsData = [
  { month: "Jan", count: 3 },
  { month: "Feb", count: 4 },
  { month: "Mar", count: 5 },
  { month: "Apr", count: 4 },
  { month: "May", count: 6 },
  { month: "Jun", count: 5 },
  { month: "Jul", count: 7 },
  { month: "Aug", count: 8 },
];

export default function FundingTrendsAndDeals({ dark }) {
  return (
    <div className={`funding-trends-container ${dark ? "dark" : ""}`}>
      {/* Funding Trends */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3>Monthly Funding Trends ($K)</h3>
            <p>Funding growth over time</p>
          </div>
          <div className="chart-actions">
            <Maximize2 size={16} />
            <Edit3 size={16} />
            <MoreHorizontal size={16} />
          </div>
        </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={fundingData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={dark ? "#333" : "#eee"}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: dark ? "#aaa" : "#6b7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: dark ? "#aaa" : "#6b7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: dark ? "#1a1a1a" : "#fff",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 5, fill: "#10b981", stroke: "#fff", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Investment Deals Count */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3>Investment Deals Count</h3>
            <p>Number of deals per month</p>
          </div>
          <div className="chart-actions">
            <Maximize2 size={16} />
            <Edit3 size={16} />
            <MoreHorizontal size={16} />
          </div>
        </div>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={dealsData}>
              <defs>
                <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke={dark ? "#333" : "#eee"}
              />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: dark ? "#aaa" : "#6b7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: dark ? "#aaa" : "#6b7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: dark ? "#1a1a1a" : "#fff",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#colorBlue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
