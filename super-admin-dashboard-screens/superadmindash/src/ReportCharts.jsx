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
import "./ReportCharts.css";

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
        borderColor: dark ? "#0d0d0d" : "#fff",
        borderWidth: 3,
        cutout: "70%",
      },
    ],
  };

  const donutOptions = {
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
  };

  // Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Reports",
        data: [5, 25, 12, 20, 35, 25, 37],
        backgroundColor: "#3B82F6",
        borderRadius: 10,
        borderSkipped: false,
        barPercentage: 0.6,
        categoryPercentage: 0.7,
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
        titleColor: "#fff",
        bodyColor: "#fff",
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
          font: { size: 13 },
          padding: 8,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: dark ? "#a1a1aa" : "#6b7280",
          font: { size: 12 },
          stepSize: 10,
        },
        grid: {
          color: dark ? "#1f1f1f" : "#e5e7eb",
          drawBorder: false,
          borderDash: [4, 4],
        },
      },
    },
  };

  // Legends
  const donutLegend = [
    { label: "Funding", color: "#3B82F6", value: 35 },
    { label: "Investor", color: "#10B981", value: 28 },
    { label: "Startup", color: "#A855F7", value: 22 },
    { label: "Tokenization", color: "#F59E0B", value: 18 },
    { label: "Zakat", color: "#EC4899", value: 15 },
    { label: "Platform", color: "#06B6D4", value: 30 },
  ];

  const barLegend = [
    { label: "Jan", value: 5 },
    { label: "Feb", value: 25 },
    { label: "Mar", value: 12 },
    { label: "Apr", value: 20 },
    { label: "May", value: 35 },
    { label: "Jun", value: 25 },
    { label: "Jul", value: 37 },
  ];

  const Card = ({ title, subtitle, chart, legend }) => (
    <div className={`chart-card ${dark ? "dark" : "light"}`}>
      <div className="chart-header">
        <div>
          <h3 className="chart-title">{title}</h3>
          <p className="chart-subtitle">{subtitle}</p>
        </div>
        <div className="chart-actions">⋯</div>
      </div>

      <div className="chart-body">
        <div className="chart-visual">{chart}</div>
        {legend && (
          <ul className="chart-legend">
            {legend.map((item, i) => (
              <li key={i}>
                <span
                  className="dot"
                  style={{ backgroundColor: item.color || "#3B82F6" }}
                ></span>
                <span className="legend-text">{item.label}</span>
                <span className="legend-value">{item.value}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  return (
    <div className="report-chart-container">
      <Card
        title="Report Type Distribution"
        subtitle="Breakdown by report category"
        chart={<Doughnut data={donutData} options={donutOptions} />}
        legend={donutLegend}
      />
      <Card
        title="Reports Generated"
        subtitle="Last 6 months trend"
        chart={<Bar data={barData} options={barOptions} />}
        legend={barLegend}
      />
    </div>
  );
}
