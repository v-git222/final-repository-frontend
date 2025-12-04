import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { FiPieChart, FiMoreHorizontal, FiMaximize } from "react-icons/fi";
import "./investment.css";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 58 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 32 },
  { name: "May", value: 68 },
  { name: "Jun", value: 61 },
  { name: "Jul", value: 76 },
];

export default function InvestmentCard() {
  const [selected, setSelected] = useState("Jun");

  return (
    <div className="investment-card">
      
      {/* Header */}
      <div className="inv-header">
        <div className="inv-left">
          <div className="inv-header-icon">
            <FiPieChart size={18} color="#D9B000" />
          </div>
          <span>Total Investment</span>
        </div>

        <div className="inv-actions">
          <FiMaximize size={18} />
          <FiMoreHorizontal size={18} />
        </div>
      </div>

      {/* Amount */}
      <div className="inv-value">$94,127</div>
      <div className="inv-growth">
        <span className="growth-pill">↑12%</span> vs last month
      </div>

      {/* Chart */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={data}>
            <XAxis dataKey="name" hide />

            {/* Highlight Active */}
            <ReferenceArea
              x1={selected}
              x2={selected}
              fill="#FFE689"
              fillOpacity={0.35}
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#FFC700"
              strokeWidth={3}
              dot={{ r: 6, fill: "#FFC700", stroke: "#222" }}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Growth"]}
              contentStyle={{
                borderRadius: 12,
                background: "#fff",
                border: "1px solid #f0f0f0",
                fontSize: "13px",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Month Picker */}
      <div className="month-selector">
        {data.map((m) => (
          <div
            key={m.name}
            className={`month ${selected === m.name ? "active" : ""}`}
            onClick={() => setSelected(m.name)}
          >
            {m.name}
          </div>
        ))}
      </div>
    </div>
  );
}
