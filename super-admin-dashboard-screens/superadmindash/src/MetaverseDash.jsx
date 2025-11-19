import React from "react";
import "./MetaverseDashboard.css";
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
import { Activity, CalendarDays, Users, MapPin, Info } from "lucide-react";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function MetaverseDashboard({ dark = false }) {
  const cards = [
    {
      icon: <Activity size={22} color="#fff" />,
      title: "Active Platforms",
      value: "5",
      subtitle: "Decentraland, Sandbox, more",
      badge: "Active",
      color: "linear-gradient(135deg, #22c55e, #86efac)",
    },
    {
      icon: <CalendarDays size={22} color="#fff" />,
      title: "Virtual Events",
      value: "18",
      subtitle: "5 upcoming this month",
      badge: "+3 this month",
      color: "linear-gradient(135deg, #ec4899, #f472b6)",
    },
    {
      icon: <Users size={22} color="#fff" />,
      title: "Total Attendees",
      value: "2,450",
      subtitle: "Across last month",
      badge: "+18% growth",
      color: "linear-gradient(135deg, #38bdf8, #60a5fa)",
    },
    {
      icon: <MapPin size={22} color="#fff" />,
      title: "Virtual Land Parcels",
      value: "12",
      subtitle: "Across 4 platforms",
      badge: "$420K value",
      color: "linear-gradient(135deg, #a855f7, #c084fc)",
    },
  ];

  const doughnutData = {
    labels: [ "Somnium Space", "Spatial", "Others"],
    datasets: [
      {
        data: [6, 5, 4, 2, 1],
        backgroundColor: ["#8b5cf6", "#ec4899", "#0ea5e9", "#f97316", "#94a3b8"],
        borderWidth: 0,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Attendees",
        data: [600, 850, 700, 750, 820, 900, 870],
        fill: true,
        backgroundColor: "rgba(147, 51, 234, 0.1)",
        borderColor: "#9333ea",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={`metaverse-dashboard ${dark ? "dark" : ""}`}>
      <div className="cards-grid">
        {cards.map((c, i) => (
          <div className="card" key={i}>
            <div className="card-icon" style={{ background: c.color }}>
              {c.icon}
            </div>
            <div className="card-content">
              <h4>{c.title}</h4>
              <h2>{c.value}</h2>
              <p>{c.subtitle}</p>
            </div>
            <span className="badge">{c.badge}</span>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Event Distribution by Platform</h3>
            <Info size={14} />
          </div>
          <p>Events scheduled across metaverse platforms</p>

          <div className="donut-wrapper">
            <Doughnut
              data={doughnutData}
              options={{
                cutout: "70%",
                plugins: { legend: { display: false } },
                maintainAspectRatio: false,
              }}
            />
          </div>

          <ul className="legend-list">
            {doughnutData.labels.map((label, i) => (
              <li key={i}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    className="legend-dot"
                    style={{
                      background: doughnutData.datasets[0].backgroundColor[i],
                    }}
                  ></span>
                  {label}
                </div>
                <span className="count">
                  {doughnutData.datasets[0].data[i]} events
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Monthly Attendee Growth</h3>
            <Info size={14} />
          </div>
          <p>Cumulative attendance trend over time</p>

          <Line
            data={lineData}
            options={{
              plugins: { legend: { display: false } },
              scales: {
                x: {
                  grid: { color: "transparent" },
                  ticks: { color: dark ? "#ccc" : "#666" },
                },
                y: {
                  ticks: { stepSize: 300, color: dark ? "#ccc" : "#666" },
                  grid: { color: dark ? "#333" : "#f1f5f9" },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
