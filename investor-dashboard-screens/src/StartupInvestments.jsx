import "./StartupInvestments.css";

export default function StartupInvestments() {
  const data = [
    {
      letter: "S",
      name: "Synesthia",
      sector: "HealthTech",
      region: "USA",
      roi: "+40%",
      roiPositive: true,
      invested: "$250,000",
      value: "$150,000",
      stage: "Growth",
    },
    {
      letter: "E",
      name: "EnerTech Labs",
      sector: "Clean Energy",
      region: "Europe",
      roi: "-10%",
      roiPositive: false,
      invested: "$250,000",
      value: "$240,000",
      stage: "Series A",
    },
    {
      letter: "E",
      name: "Emireq Metaverse",
      sector: "VR/AR",
      region: "UAE",
      roi: "+40%",
      roiPositive: true,
      invested: "$250,000",
      value: "$230,000",
      stage: "Seed",
    },
    {
      letter: "V",
      name: "Voxel Capital",
      sector: "FinTech",
      region: "Asia",
      roi: "+40%",
      roiPositive: true,
      invested: "$250,000",
      value: "$220,000",
      stage: "Series B",
    },
    {
      letter: "B",
      name: "BioGenix",
      sector: "AI/ML",
      region: "UAE",
      roi: "+40%",
      roiPositive: true,
      invested: "$250,000",
      value: "$210,000",
      stage: "Growth",
    },
  ];

  return (
    <div className="startup-box">

      {/* HEADER */}
      <div className="startup-header">
        <div>
          <h2>Startup Investments <span className="info-icon">ℹ️</span></h2>
          <p>Your portfolio of startup investments</p>
        </div>

        {/* Search Bar */}
        <div className="search-box">
          <svg width="18" height="18" fill="#999">
            <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="2" fill="none"/>
            <line x1="13" y1="13" x2="17" y2="17" stroke="#999" strokeWidth="2"/>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* FILTERS */}
      <div className="startup-filters">
        <button className="filter-btn">All Sectors ▼</button>
        <button className="filter-btn">All Regions ▼</button>
        <button className="filter-btn">Stage ▼</button>
      </div>

      {/* TABLE */}
      <table className="startup-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Sector</th>
            <th>Region</th>
            <th>ROI</th>
            <th>Invested</th>
            <th>Current Value</th>
            <th>Stage</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td className="name-cell">
                <div className="avatar">{row.letter}</div>
                {row.name}
              </td>
              <td>{row.sector}</td>
              <td>{row.region}</td>
              <td className={row.roiPositive ? "roi-up" : "roi-down"}>
                {row.roiPositive ? "↑ " : "↓ "}
                {row.roi}
              </td>
              <td>{row.invested}</td>
              <td>{row.value}</td>
              <td><span className="stage-pill">{row.stage}</span></td>
              <td>
                <svg width="22" height="22" fill="none" stroke="#333" strokeWidth="2">
                  <circle cx="11" cy="11" r="9" />
                  <circle cx="11" cy="11" r="3" fill="#333"/>
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* FOOTER + PAGINATION */}
      <div className="startup-footer">
        <div className="results-box">
          Showing <span className="results-number">05</span> / 1280 Results
        </div>

        <div className="pagination">
          <button className="page-btn">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="dots">...</span>
          <button className="page-btn">20</button>
          <button className="page-btn">&gt;</button>
        </div>
      </div>

      <p className="disclaimer">
        Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
      </p>

    </div>
  );
}
