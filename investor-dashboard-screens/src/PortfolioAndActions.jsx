import "./PortfolioAndActions.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid
} from "recharts";

function PortfolioAndActions() {
  const data = [
    { name: "Jan", value: 310000 },
    { name: "Feb", value: 360000 },
    { name: "Mar", value: 320000 },
    { name: "Apr", value: 335000 },
    { name: "May", value: 340000 },
    { name: "Jun", value: 375000 },
    { name: "Jul", value: 350000 }
  ];

  const actions = [
    { label: "New Investment", sub: "Explore opportunities", color: "#4C8BFF", icon: "+" },
    { label: "Withdraw Funds", sub: "Transfer to bank", color: "#9C4DFF", icon: "↗" },
    { label: "Download Report", sub: "Get monthly statement", color: "#3CCB77", icon: "↓" },
    { label: "Reinvest Returns", sub: "Compound earnings", color: "#FF9B41", icon: "⟳" }
  ];

  return (
    <div className="portfolio-actions-row">

      {/* LEFT — PORTFOLIO PERFORMANCE */}
      <div className="portfolio-card">
        
        <div className="portfolio-header">
          <div>
            <h2>Portfolio Performance</h2>
            <p className="subtitle">Your investment growth over time</p>
          </div>
        </div>

        <div className="portfolio-value-row">
          <h1>$410,000</h1>
          <span className="growth-tag green">↑ +46.4%</span>
        </div>

        <p className="current-val">Current portfolio value</p>

        {/* Time Range Buttons */}
        <div className="time-buttons">
          <button>1W</button>
          <button>1M</button>
          <button>3M</button>
          <button>6M</button>
          <button className="active">1Y</button>
          <button>ALL</button>
        </div>

        {/* CHART */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height="230">
            <AreaChart data={data} margin={{ top: 10, left: -20 }}>
              <defs>
                <linearGradient id="purpleGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#A66CFF" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#A66CFF" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#A66CFF"
                fill="url(#purpleGradient)"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RIGHT — QUICK ACTIONS */}
      <div className="actions-card">
        <h2>Quick Actions</h2>
        <p className="subtitle">Common tasks and operations</p>

        <div className="actions-list">
          {actions.map((a, i) => (
            <div className="action-item" key={i}>
              <div className="action-icon" style={{ background: a.color + "20" }}>
                <span style={{ color: a.color }}>{a.icon}</span>
              </div>

              <div className="action-text">
                <h4>{a.label}</h4>
                <p>{a.sub}</p>
              </div>

              <div className="action-arrow">→</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default PortfolioAndActions;
