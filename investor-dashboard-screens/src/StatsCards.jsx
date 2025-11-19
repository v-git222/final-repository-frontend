import "./StatsCardsPortfolio.css";

export default function StatsCardsPortfolio() {
  return (
    <div className="portstats-container">

      {/* Total Invested */}
      <div className="portstats-card">
        <div className="portstats-icon-block portstats-blue">
          <svg width="26" height="26" fill="#fff">
            <path d="M13 2C7.48 2 3 6.48 3 12s4.48 10 10 10 10-4.48 10-10S18.52 2 13 2zm1 15h-2v-1.27c-1.72-.36-3-1.64-3-3.23h2c0 .74.86 1.5 2 1.5s2-.76 2-1.5-.86-1.5-2-1.5c-2.21 0-4-1.57-4-3.5s1.79-3.5 4-3.5V5h2v1.27c1.72.36 3 1.64 3 3.23h-2c0-.74-.86-1.5-2-1.5s-2 .76-2 1.5.86 1.5 2 1.5c2.21 0 4 1.57 4 3.5s-1.79 3.5-4 3.5V17z"/>
          </svg>
        </div>

        <span className="portstats-tag portstats-blue-tag">Total</span>

        <p className="portstats-label">Total Invested</p>
        <h2 className="portstats-value">$1,085,000</h2>

        <div className="portstats-bg-shape portstats-blue-shape"></div>
      </div>

      {/* Current Value */}
      <div className="portstats-card">
        <div className="portstats-icon-block portstats-green">
          <svg width="28" height="28" fill="#fff">
            <path d="M5 17l6-6 4 4 6-6v6h2V7h-8v2h4l-4 4-4-4-8 8z"/>
          </svg>
        </div>

        <span className="portstats-tag portstats-green-tag">Current</span>

        <p className="portstats-label">Current Value</p>
        <h2 className="portstats-value">$1,360,000</h2>

        <div className="portstats-bg-shape portstats-green-shape"></div>
      </div>

      {/* ROI */}
      <div className="portstats-card">
        <div className="portstats-icon-block portstats-purple">
          <svg width="26" height="26" fill="#fff">
            <circle cx="13" cy="13" r="10"/>
            <circle cx="13" cy="13" r="5" fill="#fff"/>
          </svg>
        </div>

        <span className="portstats-tag portstats-purple-tag">ROI</span>

        <p className="portstats-label">Total ROI</p>
        <h2 className="portstats-value">26.5%</h2>

        <div className="portstats-bg-shape portstats-purple-shape"></div>
      </div>

      {/* Active Investments */}
      <div className="portstats-card">
        <div className="portstats-icon-block portstats-orange">
          <svg width="28" height="28" fill="#fff">
            <path d="M10 2h8l2 4h4v4h-2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10H4V6h4l2-4zm2 4h4l-1-2h-2l-1 2z"/>
          </svg>
        </div>

        <span className="portstats-tag portstats-orange-tag">Active</span>

        <p className="portstats-label">Active Investments</p>
        <h2 className="portstats-value">6</h2>

        <div className="portstats-bg-shape portstats-orange-shape"></div>
      </div>

    </div>
  );
}
