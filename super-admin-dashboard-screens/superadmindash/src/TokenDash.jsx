import React from "react";
import "./Dashboard.css";
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
import {
  Link2,
  DollarSign,
  Activity,
  TrendingUp,
} from "lucide-react";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Dashboard({ dark = false }) {
  const stats = [
    {
      icon: <Link2 size={22} color="#fff" />,
      title: "Total Tokens Issued",
      value: "2.4M",
      subtitle: "Across 15 startups",
      change: "+12.5%",
      color: "linear-gradient(135deg, #d46bff, #8f5aff)",
    },
    {
      icon: <DollarSign size={22} color="#fff" />,
      title: "Market Cap",
      value: "$8.4M",
      subtitle: "Since this month",
      change: "+8.2%",
      color: "linear-gradient(135deg, #5abfff, #89e0ff)",
    },
    {
      icon: <Activity size={22} color="#fff" />,
      title: "Active Tokens",
      value: "100",
      subtitle: "In this quarter",
      change: "15 Active",
      color: "linear-gradient(135deg, #ff5a9d, #ff7ac2)",
    },
    {
      icon: <TrendingUp size={22} color="#fff" />,
      title: "Trading Volume",
      value: "$1.2M",
      subtitle: "Last 30 days",
      change: "+7%",
      color: "linear-gradient(135deg, #4cd964, #7bf58a)",
    },
  ];

  const doughnutData = {
    labels: ["Active", "Pending", "Paused"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ["#22c55e", "#999", "#fbbf24"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "70%",
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  };

  const barData = {
    labels: ["Equity", "Revenue Share", "Hybrid"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ["#8b5cf6", "#6b7280", "#ec4899"],
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className={`dashboard ${dark ? "dark" : ""}`}>
      <div className="stats-grid fixed-four">
        {stats.map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon" style={{ background: s.color }}>
              {s.icon}
            </div>
            <div className="stat-content">
              <h4>{s.title}</h4>
              <h2>{s.value}</h2>
              <p>{s.subtitle}</p>
            </div>
            <span className="stat-change">{s.change}</span>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Token Status Distribution</h3>
          <p>Current status of all tokens</p>
          <div className="donut-container">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <div className="chart-legend">
            <span><span className="dot active"></span>Active</span>
            <span><span className="dot pending"></span>Pending</span>
            <span><span className="dot paused"></span>Paused</span>
          </div>
        </div>

        <div className="chart-card">
          <h3>Token Type Distribution</h3>
          <p>Breakdown by token type</p>
          <Bar data={barData} options={{ plugins: { legend: { display: false } } }} />
          <div className="chart-legend">
            <span><span className="dot equity"></span>Equity</span>
            <span><span className="dot revenue"></span>Revenue Share</span>
            <span><span className="dot hybrid"></span>Hybrid</span>
          </div>
        </div>
      </div>
    </div>
  );
}
