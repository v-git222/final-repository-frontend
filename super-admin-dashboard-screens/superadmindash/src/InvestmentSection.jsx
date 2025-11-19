import React from "react";
import "./InvestmentSection.css";
import { Plus, Info } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import bitcoinBg from "./assets/bitcoin.png"; // ✅ Bitcoin image for banner background

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3800 },
  { name: "Mar", value: 4100 },
  { name: "Apr", value: 3600 },
  { name: "May", value: 4600 },
  { name: "Jun", value: 4900 },
  { name: "Jul", value: 5100 },
];

export default function InvestmentSection({ dark }) {
  return (
    <div className={`investment-section ${dark ? "dark" : ""}`}>
      {/* Left - Banner with Bitcoin background */}
      <div
        className="investment-banner"
        style={{
          backgroundImage: `url(${bitcoinBg})`,
        }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <h2>Securely Invest your money</h2>
            <p>You can start your journey here</p>
            <span className="banner-date">20th October, 2025</span>
            <button className="create-btn">
              <Plus size={16} />
              Create your fund
            </button>
          </div>
        </div>
      </div>

      {/* Right - Chart Card */}
      <div className="investment-card">
        <div className="investment-header">
          <h3>Total Investment</h3>
          <Info size={16} className="info-icon" />
        </div>

        <h2 className="investment-value">$94,127</h2>
        <p className="investment-change">
          <span className="up">↑ 12%</span> vs last month
        </p>

        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
                labelStyle={{ color: "#111" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#facc15"
                strokeWidth={3}
                dot={{ r: 4, fill: "#facc15", stroke: "white", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-months">
          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
            <span key={m} className={m === "Jun" ? "active" : ""}>
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
