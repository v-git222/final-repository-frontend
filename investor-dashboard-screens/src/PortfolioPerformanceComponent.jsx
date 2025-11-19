import React, { useState } from "react";
import "./portfolioPerformance.css";

export default function PortfolioPerformance() {
  const [activeRange, setActiveRange] = useState("1Y");
  const [hoverPoint, setHoverPoint] = useState(null);

  const data = [
    { month: "Jan", value: 300000 },
    { month: "Feb", value: 350000 },
    { month: "Mar", value: 310000 },
    { month: "Apr", value: 320000 },
    { month: "May", value: 330000 },
    { month: "Jun", value: 360000 },
    { month: "Jul", value: 380000 }
  ];

  const handleHover = (point) => setHoverPoint(point);

  return (
    <div className="pp-card">
      {/* HEADER */}
      <div className="pp-header">
        <div>
          <h2>Portfolio Performance</h2>
          <p className="sub">Your investment growth over time</p>

          <h1 className="value">$410,000</h1>
          <span className="gain-tag">↑ +46.4%</span>
          <p className="current">Current portfolio value</p>
        </div>

        <div className="range-buttons">
          {"1W 1M 3M 6M 1Y ALL".split(" ").map((r) => (
            <button
              key={r}
              className={activeRange === r ? "active" : ""}
              onClick={() => setActiveRange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* CHART */}
      <div className="chart-box">
        <svg width="100%" height="260" viewBox="0 0 700 260">
          {/* Shaded area */}
          <polygon
            points={data
              .map((d, i) => `${100 + i * 80},${260 - (d.value / 500000) * 220}`)
              .join(" ") + " 700,260 100,260"}
            fill="rgba(168,85,247,0.2)"
          />

          {/* Line */}
          <polyline
            fill="none"
            stroke="#a855f7"
            strokeWidth="3"
            points={data
              .map((d, i) => `${100 + i * 80},${260 - (d.value / 500000) * 220}`)
              .join(" ")}
          />

          {/* Dots */}
          {data.map((d, i) => {
            const x = 100 + i * 80;
            const y = 260 - (d.value / 500000) * 220;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                fill="#a855f7"
                onMouseEnter={() => handleHover({ x, y, d })}
                onMouseLeave={() => setHoverPoint(null)}
              />
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoverPoint && (
          <div
            className="tooltip"
            style={{ left: hoverPoint.x, top: hoverPoint.y }}
          >
            <p>{hoverPoint.d.month}</p>
            <h4>${hoverPoint.d.value.toLocaleString()}</h4>
          </div>
        )}
      </div>
    </div>
  );
}