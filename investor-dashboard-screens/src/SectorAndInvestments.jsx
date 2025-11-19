import "./SectorAndInvestments.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const sectorData = [
  { name: "Real Estate", value: 35, color: "#1E5EFF" },
  { name: "Technology", value: 25, color: "#8A39FF" },
  { name: "Healthcare", value: 20, color: "#14C587" },
  { name: "Finance", value: 12, color: "#FFA31A" },
  { name: "Manufacturing", value: 8, color: "#FF5C5C" },
];

export default function SectorAndInvestments() {
  return (
    <div className="sector-wrapper">

      {/* LEFT DONUT CARD */}
      <div className="sector-card">
        <div className="sector-header">
          <h2>Sector Allocation</h2>
          <p>Portfolio diversification by sector</p>
        </div>

        <div className="sector-content-row">
          
          {/* DONUT CHART */}
          <div className="donut-container">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={sectorData}
                  innerRadius={65}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {sectorData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* LEGEND */}
          <ul className="legend-list">
            {sectorData.map((item) => (
              <li key={item.name}>
                <span className="legend-color" style={{ background: item.color }}></span>
                <span className="legend-name">{item.name}</span>
                <span className="legend-value">{item.value}%</span>
              </li>
            ))}
          </ul>

        </div>
      </div>

      {/* RIGHT ACTIVE INVESTMENTS CARD */}
      <div className="investments-card">
        <div className="invest-header">
          <h2>Active Investments</h2>
          <p>Your current investment portfolio</p>
        </div>

        <div className="invest-list">

          {[ 
            { name: "Dubai Real Estate Fund", sector: "Real Estate", invested: "$125,000", value: "$148,125" },
            { name: "Halal Tech Innovation", sector: "Technology", invested: "$85,000", value: "$100,125" },
            { name: "Healthcare Growth Fund", sector: "Healthcare", invested: "$65,000", value: "$81,125" },
            { name: "Islamic Finance Portfolio", sector: "Finance", invested: "$55,000", value: "$57,600" }
          ].map((item, i) => (
            <div className="invest-item" key={i}>
              <div className="invest-left">
                <div className="invest-icon">DR</div>
                <div>
                  <h4>{item.name}</h4>
                  <p className="invest-sector">{item.sector}</p>
                </div>
              </div>

              <div className="invest-right">
                <div>
                  <p className="label">Invested</p>
                  <h5>{item.invested}</h5>
                </div>
                <div>
                  <p className="label">Current Value</p>
                  <h5>{item.value}</h5>
                </div>
                <span className="growth">+3.2%</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
