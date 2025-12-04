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
import { Users, TrendingUp, DollarSign, Wallet, Info } from "lucide-react";

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
  // ---------------- STATS CARDS ----------------
  const cards = [
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

  // ---------------- CHART DATA ----------------
  const donutData = {
    labels: ["Angel", "VC Fund", "Institutional", "Family Office", "Sovereign Wealth"],
    datasets: [
      {
        data: [18, 12, 8, 7, 5],
        backgroundColor: ["#8b5cf6", "#06b6d4", "#22c55e", "#facc15", "#ec4899"],
        borderColor: dark ? "#111" : "#fff",
        borderWidth: 4,
        cutout: "72%",
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
        borderColor: "#facc15",
        tension: 0.4,
        pointRadius: 0,
        backgroundColor: (ctx) => {
          const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 230);
          g.addColorStop(0, "rgba(250,204,21,0.25)");
          g.addColorStop(1, "rgba(250,204,21,0.03)");
          return g;
        },
      },
    ],
  };

  // ---------------- STYLES ----------------
  const section = { display: "flex", flexDirection: "column", gap: "3rem" };

  const cardsRow = {
    display: "flex",
    gap: "20px",
    width: "100%",
  };

  const cardStyle = {
    flex: 1,
    background: dark ? "#111" : "#fff",
    borderRadius: "16px",
    border: `1px solid ${dark ? "#1f1f1f" : "#e5e7eb"}`,
    padding: "18px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
  };

  const chartsRow = {
    display: "flex",
    gap: "22px",
    width: "100%",
    flexWrap: "nowrap",
  };

  const miniChartCard = {
    flex: 1,
    background: dark ? "#111" : "#fff",
    borderRadius: "16px",
    border: `1px solid ${dark ? "#1f1f1f" : "#e5e7eb"}`,
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    height: "255px",
  };

  return (
    <div style={section}>
      {/* ---------- STATS CARDS ---------- */}
      <div style={cardsRow}>
        {cards.map((c, i) => (
          <div key={i} style={cardStyle}>
            <div style={{ background: c.color, padding: "10px", borderRadius: "10px" }}>
              {c.icon}
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: 14, color: dark ? "#ddd" : "#444" }}>{c.title}</h4>
              <h2 style={{ margin: "4px 0", fontSize: 26 }}>{c.value}</h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: c.negative ? "#ef4444" : "#22c55e",
                }}
              >
                {c.change}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- MINI CHARTS ---------- */}
      <div style={chartsRow}>
        {/* Donut Chart */}
        <div style={miniChartCard}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 16 }}>Investor Types</h3>
              <p style={{ margin: 0, fontSize: 12, color: dark ? "#9ca3af" : "#6b7280" }}>
                Distribution by category
              </p>
            </div>
            <Info size={14} style={{ opacity: 0.6 }} />
          </div>

          <div style={{ display: "flex", gap: "8px", height: "160px" }}>
            <div style={{ width: "55%" }}>
              <Doughnut data={donutData} options={{ plugins: { legend: { display: false } } }} />
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, width: "45%" }}>
              {donutData.labels.map((label, i) => (
                <li key={i} style={{ display: "flex", marginBottom: 6, fontSize: 13 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: donutData.datasets[0].backgroundColor[i],
                      marginRight: 8,
                    }}
                  ></span>
                  <span style={{ flex: 1 }}>{label}</span>
                  <strong>{donutData.datasets[0].data[i]}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Line Chart */}
        <div style={miniChartCard}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 16 }}>Investment Activity</h3>
              <p style={{ margin: 0, fontSize: 12, color: dark ? "#9ca3af" : "#6b7280" }}>
                Past 6 months performance
              </p>
            </div>
            <Info size={14} style={{ opacity: 0.6 }} />
          </div>

          <div style={{ height: "170px" }}>
            <Line
              data={lineData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } },
                  },
                  y: {
                    grid: { color: dark ? "#2b2b2b" : "#e5e7eb", borderDash: [4, 4] },
                    ticks: { font: { size: 11 } },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
