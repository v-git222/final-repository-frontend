import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ReportCharts({ dark }) {
  // Donut Chart Data
  const donutData = {
    labels: ["Funding", "Investor", "Startup", "Tokenization", "Zakat", "Platform"],
    datasets: [
      {
        data: [35, 28, 22, 18, 15, 30],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#A855F7",
          "#F59E0B",
          "#EC4899",
          "#06B6D4",
        ],
        borderColor: dark ? "#111" : "#fff",
        borderWidth: 4,
        cutout: "72%",
      },
    ],
  };

  const donutOptions = {
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: dark ? "#18181b" : "#111827",
        borderRadius: 8,
        padding: 10,
      },
    },
    maintainAspectRatio: false,
  };

  // Bar Chart Data (reduced corner radius)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Reports",
        data: [5, 25, 12, 20, 35, 25, 37],
        backgroundColor: "#3B82F6",
        borderRadius: 6, // 🔥 reduced roundness
        borderSkipped: false,
        barPercentage: 0.52, // tighter & cleaner
        categoryPercentage: 0.55,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: dark ? "#18181b" : "#111827",
        borderRadius: 8,
        padding: 10,
        displayColors: false,
        callbacks: {
          title: (items) => items[0].label,
          label: (item) => `Reports: ${item.formattedValue}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: dark ? "#a1a1aa" : "#6b7280",
          font: { size: 12 },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: dark ? "#a1a1aa" : "#6b7280",
          stepSize: 10,
          font: { size: 12 },
        },
        grid: {
          color: dark ? "#222" : "#e5e7eb",
          borderDash: [4, 4],
        },
      },
    },
  };

  const donutLegend = [
    { label: "Funding", color: "#3B82F6", value: 35 },
    { label: "Investor", color: "#10B981", value: 28 },
    { label: "Startup", color: "#A855F7", value: 22 },
    { label: "Tokenization", color: "#F59E0B", value: 18 },
    { label: "Zakat", color: "#EC4899", value: 15 },
    { label: "Platform", color: "#06B6D4", value: 30 },
  ];

  const chartContainerStyle = {
    display: "flex",
    gap: "22px",
    width: "100%",
    flexWrap: "nowrap", // 🔥 keeps same row
  };

  const cardStyle = {
    flex: 1,
    minHeight: "270px",
    background: dark ? "#111" : "#fff",
    borderRadius: "14px",
    border: `1px solid ${dark ? "#1f1f1f" : "#e5e7eb"}`,
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    transition: "0.2s",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: 600,
    color: dark ? "#fff" : "#111",
  };

  const subtitleStyle = {
    fontSize: "12px",
    color: dark ? "#9ca3af" : "#6b7280",
    marginTop: "3px",
  };

  const legendItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "13px",
    marginBottom: "6px",
  };

  return (
    <div style={chartContainerStyle}>
      
      {/* Donut Chart Card */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <div>
            <h3 style={titleStyle}>Report Type Distribution</h3>
            <p style={subtitleStyle}>Breakdown by report category</p>
          </div>
          <div style={{ fontSize: "20px", opacity: 0.7, cursor: "pointer" }}>⋯</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
          <div style={{ width: "55%", height: "160px" }}>
            <Doughnut data={donutData} options={donutOptions} />
          </div>

          <ul style={{ width: "45%", margin: 0, padding: 0, listStyle: "none" }}>
            {donutLegend.map((item, i) => (
              <li key={i} style={legendItemStyle}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: item.color,
                    marginRight: "8px",
                  }}
                ></span>
                <span
                  style={{ flex: 1, marginLeft: "8px", color: dark ? "#e5e5e5" : "#4b5563" }}
                >
                  {item.label}
                </span>
                <span style={{ fontWeight: 600 }}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div style={cardStyle}>
        <div style={headerStyle}>
          <div>
            <h3 style={titleStyle}>Reports Generated</h3>
            <p style={subtitleStyle}>Last 6 months trend</p>
          </div>
          <div style={{ fontSize: "20px", opacity: 0.7, cursor: "pointer" }}>⋯</div>
        </div>

        <div style={{ width: "100%", height: "180px", marginTop: "10px" }}>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
}
