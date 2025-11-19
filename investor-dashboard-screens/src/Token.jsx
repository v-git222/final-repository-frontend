// TokenDashboard.jsx
import React, { useEffect } from "react";
import {
  FiCircle,
  FiCpu,
  FiActivity,
  FiClock,
  FiPieChart,
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiAlertCircle
} from "react-icons/fi";

/* ---------- CSS injected (unchanged) ---------- */
const styles = `
/* TOKEN DASHBOARD - SINGLE FILE STYLES */
.token-wrap { width:100%; max-width:1100px; margin: 20px auto; font-family: Inter, system-ui, -apple-system, 'Helvetica Neue', Arial; color:#0f1724; }
.token-grid { display:flex; gap:18px; margin-bottom:18px; flex-wrap:wrap; }
.token-card { flex:1 1 24%; min-width:220px; background: #fff; border-radius:12px; padding:18px; box-shadow: 0 6px 24px rgba(16,24,40,0.06); position:relative; overflow:hidden; }
.token-card .icon { width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;margin-bottom:8px; }
.token-card .meta { color:#64748b; font-size:13px; margin-bottom:8px; }
.token-card .value { font-size:22px; font-weight:700; color:#08122b; }
.token-card .muted { color:#94a3b8; font-size:12px; margin-top:6px; }

/* Chart row */
.chart-row { display:flex; gap:18px; margin-bottom:18px; align-items:flex-start; }
.chart-card { background:#fff; border-radius:12px; padding:18px; box-shadow: 0 6px 24px rgba(16,24,40,0.06); flex:1; min-width:280px; }
.chart-card.small { width:320px; flex:0 0 320px; }

/* Chart title */
.chart-title { font-weight:700; font-size:16px; color:#08122b; margin-bottom:6px; }
.chart-sub { color:#94a3b8; font-size:13px; margin-bottom:12px; }

/* Line chart */
.line-plot { width:100%; height:220px; }

/* donut legend */
.donut-legend { display:flex; gap:10px; align-items:center; margin-top:12px; font-size:13px; color:#475569; }
.legend-dot { width:12px;height:12px;border-radius:50%;display:inline-block; margin-right:8px; }

/* Holdings list */
.holdings-card { margin-top:12px; background:#fff; border-radius:12px; padding:12px; box-shadow: 0 6px 24px rgba(16,24,40,0.04); }
.holding-row { display:flex; align-items:center; justify-content:space-between; padding:12px 8px; border-bottom:1px solid #f1f5f9; }
.h-left { display:flex; align-items:center; gap:12px; }
.h-badge { width:42px; height:42px; border-radius:8px; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; }
.h-info { display:flex; flex-direction:column; }
.h-name { font-weight:600; }
.h-subtle { color:#7b8794; font-size:13px; }

/* Table card */
.table-card { margin-top:18px; background:#fff; border-radius:12px; padding:14px; box-shadow: 0 6px 24px rgba(16,24,40,0.04); }
.table-controls { display:flex; justify-content:space-between; gap:12px; align-items:center; margin-bottom:12px; }
.filter-btn { padding:10px 14px; border-radius:10px; border:1px solid #e6eef7; background:#fff; cursor:pointer; color:#0f1724; font-weight:500; }
.search-input { flex:1; height:40px; border-radius:10px; padding:8px 12px; background-color: #fffbfbff; }

/* table */
.table { width:100%; border-collapse:collapse; font-size:14px; }
.table thead th { text-align:left; color:#64748b; padding:12px; font-weight:700; border-bottom:1px solid #eef2f7; }
.table tbody td { padding:12px; border-bottom:1px solid #f3f6f9; vertical-align:middle; }
.table .type-pill { padding:6px 10px; border-radius:8px; background:#f1f5f9; color:#475569; font-size:13px; }

/* status pills */
.status-active { background:#ecfdf5; color:#059669; padding:6px 10px; border-radius:8px; font-weight:600; font-size:13px; }
.status-complete { background:#f0fdf4; color:#16a34a; padding:6px 10px; border-radius:8px; font-weight:600; font-size:13px; display:flex; align-items:center; gap:6px; }
.status-pending { background:#fff7ed; color:#ea580c; padding:6px 10px; border-radius:8px; font-weight:600; font-size:13px; display:flex; align-items:center; gap:6px; }

/* footer */
.table-footer { display:flex; justify-content:space-between; align-items:center; margin-top:12px; color:#64748b; font-size:14px; }
.results-box { display:flex; align-items:center; gap:8px; }
.results-num { padding:6px 10px; border-radius:8px; background:#f1f5f9; font-weight:700; }

/* pagination */
.pager { display:flex; gap:8px; align-items:center; }
.page-btn { padding:8px 10px; border-radius:8px; border:1px solid #eef2f7; background:#fff; cursor:pointer; }
.page-btn.active { background:#0b4cff; color:#fff; border-color:#0b4cff; }

/* small screens */
@media (max-width:900px){
  .token-grid { gap:12px; }
  .chart-row { flex-direction:column; }
  .chart-card.small { width:100%; flex:1; }
}
`;

function useInjectStyles() {
  useEffect(() => {
    if (document.getElementById("token-dashboard-styles")) return;
    const styleEl = document.createElement("style");
    styleEl.id = "token-dashboard-styles";
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);
  }, []);
}

/* Number formatter */
const formatNumber = (n) => {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toString();
};

/* ---------- Token Stats Cards ---------- */
function TokenStatsCards() {
  return (
    <div className="token-grid">

      {/* Total Tokens */}
      <div className="token-card">
        <div className="icon" style={{ background: "linear-gradient(135deg,#eef2ff,#eff6ff)" }}>
          <FiCircle size={22} color="#2563eb" />
        </div>
        <div className="meta">Total Tokens Issued</div>
        <div className="value">{formatNumber(2400000)}</div>
        <div className="muted">Across 15 startups</div>
      </div>

      {/* Active Tokens */}
      <div className="token-card">
        <div className="icon" style={{ background: "linear-gradient(135deg,#dffcf0,#d1fae5)" }}>
          <FiCpu size={22} color="#059669" />
        </div>
        <div className="meta">Active Tokens</div>
        <div className="value">3</div>
        <div className="muted">ERC-20 holdings</div>
      </div>

      {/* Recent Activity */}
      <div className="token-card">
        <div className="icon" style={{ background: "linear-gradient(135deg,#f3e8ff,#f5f3ff)" }}>
          <FiActivity size={22} color="#7c3aed" />
        </div>
        <div className="meta">Recent Activity</div>
        <div className="value">12</div>
        <div className="muted">Last 30 days</div>
      </div>

      {/* Last Sync */}
      <div className="token-card">
        <div className="icon" style={{ background: "linear-gradient(135deg,#fff7ed,#fffbeb)" }}>
          <FiClock size={22} color="#ea580c" />
        </div>
        <div className="meta">Last Sync</div>
        <div className="value">2 mins ago</div>
        <div className="muted">Up to date</div>
      </div>
    </div>
  );
}

/* ---------- TokenBalanceGrowth (chart) ---------- */
function TokenBalanceGrowth({ data = [30, 50, 140, 70, 110, 100, 150], labels = ["Jan","Feb","Mar","Apr","May","Jun","Jul"] }) {

  const width = 720, height = 220, pad = 28;
  const max = Math.max(...data) * 1.15;
  const xStep = (width - pad * 2) / (data.length - 1);

  const X = (i) => pad + i * xStep;
  const Y = (v) => height - pad - (v / max) * (height - pad * 2);

  const path = data.map((v, i) => `${i === 0 ? "M" : "L"} ${X(i)} ${Y(v)}`).join(" ");

  return (
    <div className="chart-card">
      <div className="chart-title">Token Balance Growth</div>

      <svg className="line-plot" viewBox={`0 0 ${width} ${height}`}>
        {[0,.25,.5,.75,1].map((t, i) => (
          <line key={i} x1={pad} x2={width-pad} y1={pad + (height-pad*2)*t} y2={pad + (height-pad*2)*t} stroke="#eef2ff" />
        ))}

        <path d={path} stroke="#4f46e5" fill="none" strokeWidth="2.5" strokeLinecap="round" />

        {data.map((v, i) => (
          <circle key={i} cx={X(i)} cy={Y(v)} r="4" fill="#4f46e5" />
        ))}

        {labels.map((l,i)=>(
          <text key={i} x={X(i)} y={height-6} fontSize="11" textAnchor="middle" fill="#94a3b8">{l}</text>
        ))}
      </svg>
    </div>
  );
}

/* ---------- TokenDistribution Donut ---------- */
function TokenDistribution({ items = [
  { k:"EMRQ", v:45, color:"#2563eb" },
  { k:"ZMED", v:35, color:"#16a34a" },
  { k:"PLXR", v:20, color:"#f59e0b" }
] }) {

  const size=220, stroke=28, radius=(size-stroke)/2;
  const cx=110, cy=110, circumference=2*Math.PI*radius;

  let offset=0;

  return (
    <div className="chart-card small">
      <div className="chart-title">Token Distribution</div>

      <svg width={size} height={size}>
        <circle cx={cx} cy={cy} r={radius} stroke="#f1f5f9" strokeWidth={stroke} fill="none" />
        {items.map((it, i)=>{
          const dash=(it.v/100)*circumference;
          const seg =
            <circle key={i} cx={cx} cy={cy} r={radius}
              stroke={it.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${circumference-dash}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              fill="none"
              transform={`rotate(-90 ${cx} ${cy})`}
            />;
          offset+=dash;
          return seg;
        })}
        <circle cx={cx} cy={cy} r={radius-stroke-6} fill="#fff" />
      </svg>

      <div className="donut-legend">
        {items.map((it)=>
          <div key={it.k} style={{display:"flex",alignItems:"center",gap:8}}>
            <span className="legend-dot" style={{background:it.color}}></span>
            {it.k}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- Holdings List ---------- */
function ERC20HoldingsList() {

  const holdings = [
    { code:"EMRQ", name:"EMRQ", balance:12000, value:48000 },
    { code:"ZMED", name:"ZMED", balance:8500, value:31000 },
    { code:"PLXR", name:"PLXR", balance:4200, value:15000 }
  ];

  return (
    <div className="holdings-card">
      {holdings.map((h,i)=>(
        <div className="holding-row" key={i}>
          <div className="h-left">
            <div className="h-badge" style={{background:"#2563eb"}}>
              <FiPieChart size={20} color="#fff" />
            </div>

            <div className="h-info">
              <div className="h-name">{h.name}</div>
              <div className="h-subtle">Token Balance</div>
            </div>
          </div>

          <div style={{textAlign:"right"}}>
            <div style={{fontWeight:700}}>{h.balance.toLocaleString()}</div>
            <div className="h-subtle">Value (USD) ${h.value.toLocaleString()}</div>
            <div style={{marginTop:8}}>
              <span className="status-active">Active</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Table ---------- */
function ERC20HoldingsTable() {

  const rows = [
    {date:"2025-11-12", type:"SuperToken", entity:"StartupA", amount:"$25,000/TN-235B", status:"Confirmed"},
    {date:"2025-11-12", type:"Investment", entity:"StartupA", amount:"$20,000/TN-234A", status:"Completed"},
    {date:"2025-11-12", type:"Dividend", entity:"StartupB", amount:"$30,000/TN-236C", status:"Pending"},
    {date:"2025-11-12", type:"Investment", entity:"Emerg Marketplace", amount:"$20,000/TN-234A", status:"Completed"},
  ];

  return (
    <div className="table-card">

      <div className="table-controls">
        <button className="filter-btn">Status ▾</button>

        {/* Search bar */}
        <div style={{display:"flex", alignItems:"center", position:"relative", width:"100%"}}>
          <FiSearch size={16} color="#94a3b8" style={{position:"absolute", left:10}} />
          <input className="search-input" placeholder="Search" style={{paddingLeft:32}} />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Entity</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r,i)=>(
            <tr key={i}>
              <td>{r.date}</td>

              <td><span className="type-pill">{r.type}</span></td>

              <td>{r.entity}</td>

              <td style={{fontWeight:700}}>{r.amount}</td>

              <td>
                {r.status === "Pending" ? (
                  <span className="status-pending">
                    <FiAlertCircle size={14} /> Pending
                  </span>
                ) : (
                  <span className="status-complete">
                    <FiCheckCircle size={14} /> {r.status}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <div className="results-box">
          Showing <div className="results-num">04</div> / 100 Results
        </div>

        <div className="pager">
          <button className="page-btn"><FiChevronLeft /></button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span>...</span>
          <button className="page-btn">20</button>
          <button className="page-btn"><FiChevronRight /></button>
        </div>
      </div>

    </div>
  );
}

/* ---------- Main Export ---------- */
export default function TokenDashboard() {
  useInjectStyles();
  return (
    <div className="token-wrap">
      <TokenStatsCards />
      <div className="chart-row">
        <TokenBalanceGrowth />
        <TokenDistribution />
      </div>
      <ERC20HoldingsList />
      <ERC20HoldingsTable />
    </div>
  );
}
