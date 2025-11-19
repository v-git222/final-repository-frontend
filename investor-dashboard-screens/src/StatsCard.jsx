// src/StatsCards.jsx
import "./StatsCard.css";

function StatsCards() {
  return (
    <div className="stats-row">

      {/* CARD 1 */}
      <div className="stat-card blue-card">
        <div className="stat-card-top">
          <div className="icon-box blue-icon">
            <span className="icon-symbol">$</span>
          </div>
          <div className="growth-tag blue-growth">↑ +12.5%</div>
        </div>

        <p className="stat-label">Total Portfolio Value</p>
        <h2 className="stat-value">$410,000</h2>
        <p className="stat-sub">vs last month</p>
      </div>

      {/* CARD 2 */}
      <div className="stat-card purple-card">
        <div className="stat-card-top">
          <div className="icon-box purple-icon">
            <span className="icon-symbol">◎</span>
          </div>
          <div className="growth-tag purple-growth">↑ +$45,000</div>
        </div>

        <p className="stat-label">Total Invested</p>
        <h2 className="stat-value">$320,000</h2>
        <p className="stat-sub">new investments</p>
      </div>

      {/* CARD 3 */}
      <div className="stat-card green-card">
        <div className="stat-card-top">
          <div className="icon-box green-icon">
            <span className="icon-symbol">↗</span>
          </div>
          <div className="growth-tag green-growth">↑ +3.2%</div>
        </div>

        <p className="stat-label">Return On Investment</p>
        <h2 className="stat-value">28%</h2>
        <p className="stat-sub">annual ROI</p>
      </div>

      {/* CARD 4 */}
      <div className="stat-card orange-card">
        <div className="stat-card-top">
          <div className="icon-box orange-icon">
            <span className="icon-symbol">✔</span>
          </div>
          <div className="growth-tag orange-growth">+22.5%</div>
        </div>

        <p className="stat-label">Active Investments</p>
        <h2 className="stat-value">12</h2>
        <p className="stat-sub">Shariah compliant</p>
      </div>

    </div>
  );
}

export default StatsCards;
