import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function DashboardAnalytics() {
  // SAMPLE DATA
  const tokenData = [
    { name: "Q1", value: 15000 },
    { name: "Q2", value: 20000 },
    { name: "Q3", value: 35000 },
    { name: "Q4", value: 45000 },
  ];

  const lineData = [
    { name: "Jan", portfolio: 150000, benchmark: 140000 },
    { name: "Feb", portfolio: 160000, benchmark: 145000 },
    { name: "Mar", portfolio: 170000, benchmark: 150000 },
    { name: "Apr", portfolio: 180000, benchmark: 155000 },
    { name: "May", portfolio: 190000, benchmark: 160000 },
    { name: "Jun", portfolio: 200000, benchmark: 165000 },
  ];

  const sectorData = [
    { name: "HealthTech", value: 128 },
    { name: "FinTech", value: 96 },
    { name: "AI/ML", value: 84 },
    { name: "CleanTech", value: 66 },
    { name: "EdTech", value: 34 },
  ];

  const riskData = [
    { name: "Immunology", value: 35 },
    { name: "Medium Risk", value: 45 },
    { name: "High Risk", value: 20 },
  ];

  const COLORS = ["#34D399", "#3B82F6", "#F59E0B", "#EC4899", "#8B5CF6"];

  return (
    <div style={{ padding: "20px", display: "grid", gap: "20px", overflowY: "hidden" }}>
      {/* ---------------- Token Balance Growth ---------------- */}
      <div style={card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h3 style={title}>Token Balance Growth</h3>
            <p style={subtitle}>6-month trend of total token value</p>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <button style={iconBtn}>⤢</button>
            <button style={iconBtn}>✎</button>
            <button style={iconBtn}>⋯</button>
          </div>
        </div>

        <div style={{ marginTop: 10 }}>
          <BarChart width={900} height={240} data={tokenData} style={{ background: "transparent" }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <Bar dataKey="value" fill="url(#g1)" barSize={90} radius={[10, 10, 8, 8]} />
          </BarChart>
        </div>
      </div>

      {/* ---------------- Row 2: Line + Sector Donut ---------------- */}
      <div style={{ display: "flex", gap: "20px", alignItems: "stretch" }}>
        {/* Line chart */}
        <div style={{ ...card, flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h3 style={title}>Portfolio Performance</h3>
              <p style={subtitle}>vs Market Benchmark</p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button style={iconBtn}>⤢</button>
              <button style={iconBtn}>✎</button>
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <LineChart width={520} height={220} data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip formatter={(v) => `$${v.toLocaleString()}`} />
              <Line type="monotone" dataKey="benchmark" stroke="#94A3B8" dot={false} strokeWidth={2} />
              <Line type="monotone" dataKey="portfolio" stroke="#22C55E" dot={false} strokeWidth={3} />
            </LineChart>
          </div>
        </div>

        {/* Sector donut */}
        <div style={{ ...card, flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h3 style={title}>Sector Performance</h3>
              <p style={subtitle}>ROI by sector</p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button style={iconBtn}>⤢</button>
              <button style={iconBtn}>✎</button>
            </div>
          </div>

          <div style={{ display: "flex", gap: "20px", alignItems: "center", marginTop: 10 }}>
            <PieChart width={260} height={220}>
              <Pie data={sectorData} dataKey="value" nameKey="name" outerRadius={90} innerRadius={50} paddingAngle={4}>
                {sectorData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>

            <ul style={{ fontSize: "14px", marginTop: 0, paddingLeft: 0, listStyle: "none" }}>
              {sectorData.map((d, i) => (
                <li key={i} style={{ color: COLORS[i], marginBottom: 8 }}>
                  <strong>{d.name}</strong>
                  <div style={{ color: "#6B7280" }}>+{Math.round((d.value / 128) * 48)}% &nbsp; ${d.value}k</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- Row 3: Risk Donut + KPI (fixed) ---------------- */}
      <div style={{ display: "flex", gap: "20px", alignItems: "stretch" }}>
        {/* Risk donut */}
        <div style={{ ...card, flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h3 style={title}>Risk Distribution</h3>
              <p style={subtitle}>Portfolio allocation</p>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <button style={iconBtn}>⤢</button>
              <button style={iconBtn}>✎</button>
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 10 }}>
            <PieChart width={220} height={200}>
              <Pie data={riskData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={4}>
                {riskData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>

            <div>
              {riskData.map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 12, height: 12, background: COLORS[i], borderRadius: 3 }} />
                  <div style={{ fontSize: 14 }}>{r.name}</div>
                  <div style={{ color: "#6B7280", marginLeft: 8 }}>{r.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KEY PERFORMANCE INDICATORS - FIXED LAYOUT */}
        <div style={{ ...card, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h3 style={title}>Key performance Indicators</h3>
                <p style={subtitle}>Detailed overview of performance</p>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={iconBtn}>⤢</button>
                <button style={iconBtn}>✎</button>
              </div>
            </div>

            {/* Top small KPI cards row */}
            <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
              <div style={kpiSmall}>
                <div style={{ fontSize: 12, color: "#6B7280" }}>Best Performer</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>HealthTech</div>
                <div style={{ color: "#10B981", marginTop: 6 }}>+48% ROI</div>
              </div>

              <div style={kpiSmall}>
                <div style={{ fontSize: 12, color: "#6B7280" }}>Active Startups</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 6 }}>12 Companies</div>
                <div style={{ color: "#6B7280", marginTop: 6 }}>Across 5 sectors</div>
              </div>
            </div>

            {/* Large KPI summary */}
            <div style={{ marginTop: 16, padding: 12, background: "#F8FAFC", borderRadius: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 12, color: "#6B7280" }}>Risk-Adjusted Return (Sharpe Ratio)</div>
                  <div style={{ fontSize: 22, fontWeight: 700 }}>2.8</div>
                  <div style={{ color: "#6B7280", marginTop: 6 }}>Strong risk-adjusted performance</div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 12, color: "#6B7280" }}>Portfolio Value</div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>$450k</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
            <button style={ghostBtn}>View report</button>
            <button style={primaryBtn}>Export</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== Styles ==========
const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 6px 22px rgba(2,6,23,0.08)",
};

const title = {
  fontSize: "18px",
  margin: 0,
};

const subtitle = {
  color: "#6B7280",
  marginTop: "5px",
  marginBottom: "15px",
};

const iconBtn = {
  border: "none",
  background: "#F3F4F6",
  padding: "6px 8px",
  borderRadius: 8,
  cursor: "pointer",
};

const kpiSmall = {
  flex: 1,
  background: "#F8FAFC",
  padding: "12px",
  borderRadius: 10,
};

const ghostBtn = {
  border: "1px solid #E6E9EE",
  background: "transparent",
  padding: "8px 12px",
  borderRadius: 8,
  cursor: "pointer",
};

const primaryBtn = {
  border: "none",
  background: "#2563EB",
  color: "white",
  padding: "8px 12px",
  borderRadius: 8,
  cursor: "pointer",
};
