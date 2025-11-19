import React from "react";
import "./ZakatCharts.css";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ZakatCharts({ dark = false }) {
  const donutData = {
    labels: ["Paid", "Pending", "Upcoming", "Overdue"],
    datasets: [
      {
        data: [55, 25, 12, 8],
        backgroundColor: ["#22c55e", "#f97316", "#3b82f6", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["Annual", "Quarterly", "Monthly"],
    datasets: [
      {
        label: "Payments",
        data: [90, 70, 40],
        backgroundColor: ["#22c55e", "#facc15", "#a855f7"],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className={`zakat-charts ${dark ? "dark" : ""}`}>
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Zakat Status Distribution</h3>
          <p>Current status of all tokens</p>
          <div className="donut-wrapper">
            <Doughnut
              data={donutData}
              options={{
                cutout: "70%",
                plugins: { legend: { display: false } },
              }}
            />
          </div>
          <div className="legend">
            {donutData.labels.map((label, i) => (
              <div key={i} className="legend-item">
                <span
                  className="dot"
                  style={{ background: donutData.datasets[0].backgroundColor[i] }}
                ></span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h3>Payment Type Distribution</h3>
          <p>Breakdown by token type</p>
          <Bar
            data={barData}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: { grid: { display: false } },
                y: { grid: { color: "#f1f5f9" }, beginAtZero: true },
              },
            }}
          />
          <div className="legend">
            {barData.labels.map((label, i) => (
              <div key={i} className="legend-item">
                <span
                  className="dot"
                  style={{ background: barData.datasets[0].backgroundColor[i] }}
                ></span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
