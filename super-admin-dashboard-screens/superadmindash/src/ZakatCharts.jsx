import React from "react";
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

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function MiniCharts({ dark }) {
  // ==== DONUT DATA ====
  const donutData = {
    labels: ["Decentraland", "The Sandbox", "Somnium Space", "Spatial", "Others"],
    datasets: [
      {
        data: [6, 5, 4, 2, 1],
        backgroundColor: ["#a855f7", "#3b82f6", "#06b6d4", "#fb923c", "#9ca3af"],
        borderColor: dark ? "#111" : "#fff",
        borderWidth: 4,
        cutout: "72%",
      },
    ],
  };

  // ==== LINE / AREA CHART ====
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const values = [420, 690, 530, 580, 620, 850, 830];

  const lineData = {
    labels,
    datasets: [
      {
        label: "Attendance",
        data: values,
        fill: true,
        borderColor: "#3b82f6",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 240);
          gradient.addColorStop(0, "rgba(59,130,246,0.25)");
          gradient.addColorStop(1, "rgba(59,130,246,0.03)");
          return gradient;
        },
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: dark ? "#18181b" : "#111827",
        borderRadius: 8,
        displayColors: false,
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: { color: dark ? "#9ca3af" : "#6b7280" },
        grid: { display: false },
      },
      y: {
        ticks: { color: dark ? "#9ca3af" : "#6b7280", stepSize: 300 },
        grid: { color: dark ? "#2b2b2b" : "#e5e7eb", borderDash: [4, 4] },
      },
    },
    hover: { mode: "index", intersect: false },
  };

  // ==== CARD STYLE ====
  const card = {
    flex: 1,
    background: dark ? "#111" : "#fff",
    padding: "18px",
    borderRadius: "16px",
    border: `1px solid ${dark ? "#1f1f1f" : "#e5e7eb"}`,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const container = {
    display: "flex",
    flexWrap: "nowrap",
    gap: "22px",
    width: "100%",
  };

  return (
    <div style={container}>
      {/* ================= DONUT CHART ================= */}
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: 16, margin: 0, color: dark ? "#fff" : "#000" }}>
              Event Distribution by Platform
            </h3>
            <p style={{ fontSize: 12, color: dark ? "#9ca3af" : "#6b7280", margin: 0 }}>
              Events scheduled across metaverse platforms
            </p>
          </div>
          <span style={{ opacity: 0.6, cursor: "pointer" }}>⋯</span>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
          <div style={{ width: "55%", height: "160px" }}>
            <Doughnut
              data={donutData}
              options={{ plugins: { legend: { display: false } }, maintainAspectRatio: false }}
            />
          </div>

          <div style={{ width: "45%" }}>
            {donutData.labels.map((label, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", marginBottom: 6, fontSize: 13 }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: donutData.datasets[0].backgroundColor[i],
                    marginRight: 8,
                  }}
                ></span>
                <span style={{ flex: 1, color: dark ? "#e5e5e5" : "#4b5563" }}>{label}</span>
                <strong style={{ color: dark ? "#fff" : "#000" }}>
                  {donutData.datasets[0].data[i]} events
                </strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= LINE CHART ================= */}
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: 16, margin: 0, color: dark ? "#fff" : "#000" }}>
              Monthly Attendee Growth
            </h3>
            <p style={{ fontSize: 12, color: dark ? "#9ca3af" : "#6b7280", margin: 0 }}>
              Cumulative attendance trend over time
            </p>
          </div>
          <span style={{ opacity: 0.6, cursor: "pointer" }}>⋯</span>
        </div>

        <div style={{ width: "100%", height: "180px", marginTop: "10px" }}>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
}
