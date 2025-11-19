import React from "react";
import "./InvestorDashboard.css";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Users,
  TrendingUp,
  DollarSign,
  Wallet,
  Info,
} from "lucide-react";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function InvestorDashboard({ dark = false }) {
  const cards = [
    {
      icon: <Users size={22} color="#fff" />,
      title: "Total Investors",
      value: "50",
      change: "+8% this quarter",
      color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    },
    {
      icon: <TrendingUp size={22} color="#fff" />,
      title: "Active Investors",
      value: "42",
      change: "+5% this month",
      color: "linear-gradient(135deg, #22c55e, #86efac)",
    },
    {
      icon: <DollarSign size={22} color="#fff" />,
      title: "Total Capital",
      value: "$45M",
      change: "+$8.2M vs last quarter",
      color: "linear-gradient(135deg, #facc15, #fbbf24)",
    },
    {
      icon: <Wallet size={22} color="#fff" />,
      title: "Zakat Pending",
      value: "$450K",
      change: "-$50K vs last quarter",
      color: "linear-gradient(135deg, #8b5cf6, #a855f7)",
      negative: true,
    },
  ];

  const donutData = {
    labels: ["Angel", "VC Fund", "Institutional", "Family Office", "Sovereign Wealth"],
    datasets: [
      {
        data: [18, 12, 8, 7, 5],
        backgroundColor: ["#8b5cf6", "#06b6d4", "#22c55e", "#facc15", "#ec4899"],
        borderWidth: 0,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Investments",
        data: [15, 21, 14, 15, 17, 22, 20],
        fill: true,
        backgroundColor: "rgba(250, 204, 21, 0.2)",
        borderColor: "#facc15",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className={`investor-dashboard ${dark ? "dark" : ""}`}>
      <div className="cards-grid">
        {cards.map((c, i) => (
          <div className="card" key={i}>
            <div className="card-icon" style={{ background: c.color }}>
              {c.icon}
            </div>
            <div className="card-info">
              <h4>{c.title}</h4>
              <h2>{c.value}</h2>
              <p className={c.negative ? "negative" : "positive"}>{c.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Investor Type Distribution</h3>
            <Info size={14} />
          </div>
          <p>Breakdown by investor category</p>
          <div className="donut-wrapper">
            <Doughnut
              data={donutData}
              options={{
                cutout: "70%",
                plugins: { legend: { display: false } },
              }}
            />
          </div>
          <ul className="legend-list">
            {donutData.labels.map((label, i) => (
              <li key={i}>
                <span
                  className="dot"
                  style={{
                    background: donutData.datasets[0].backgroundColor[i],
                  }}
                ></span>
                {label}
                <span className="count">{donutData.datasets[0].data[i]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Investment Activity (Last 6 Months)</h3>
            <Info size={14} />
          </div>
          <p>Monthly investment trend with targets</p>
          <Line
            data={lineData}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: { grid: { color: "transparent" } },
                y: { ticks: { stepSize: 7 }, grid: { color: "#f1f5f9" } },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
