import React from "react";
import "./investors.css";
// import sampleImg from "/mnt/data/b2d86d18-4c21-42c1-9284-1e0bf4ac6ed8.png";

/* Small inline SVG icons used instead of emoji */
const IconLocation = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const IconBuilding = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
    <path fill="currentColor" d="M4 22h16V2L12 6 4 2v20zM8 10h2v2H8v-2zm0 3h2v2H8v-2zm0-6h2v2H8V7zm4 0h2v2h-2V7zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2z"/>
  </svg>
);

function InvestorCard({ name, location, type, range, tags, deals, active }) {
  return (
    <article className="inv-card" role="article" aria-label={name}>
      <div className="inv-card-top">
        <div className="inv-icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="4" fill="#071b4c" />
            <path d="M7 17h10v-2H7v2zm0-4h10v-2H7v2z" fill="#ffffff" opacity="0.95"/>
          </svg>
        </div>

        <span className="inv-trending">Trending</span>
      </div>

      <h3 className="inv-title">{name}</h3>

      <div className="inv-meta">
        <span className="meta-item"><IconLocation /> <span className="meta-text">{location}</span></span>
        <span className="meta-item"><IconBuilding /> <span className="meta-text">{type}</span></span>
        <span className="meta-item range"><span className="meta-text">{range}</span></span>
      </div>

      <div className="inv-tags">
        {tags.map((t) => (
          <span key={t} className="inv-tag">{t}</span>
        ))}
      </div>

      <div className="inv-stats" aria-hidden>
        <div className="stat-block">
          <div className="stat-number">{deals}</div>
          <div className="stat-label">Deals</div>
        </div>

        <div className="divider" />

        <div className="stat-block">
          <div className="stat-number">{active}</div>
          <div className="stat-label">Active</div>
        </div>
      </div>

      <button className="inv-btn" type="button">View Profile →</button>
    </article>
  );
}

export default function InvestorsPage() {
  const sampleData = [
    {
      name: "Alpha Ventures Capital",
      location: "Dubai, UAE",
      type: "VC Fund",
      range: "$2M – $10M",
      tags: ["FinTech", "Series A/B"],
      deals: 42,
      active: 8,
    },
    {
      name: "Noor Angel Group",
      location: "Riyadh, Saudi Arabia",
      type: "Private Equity",
      range: "$2M – $10M",
      tags: ["HealthTech", "Seed"],
      deals: 42,
      active: 8,
    },
    {
      name: "Alpha Ventures Capital",
      location: "NYC, USA",
      type: "VC Fund",
      range: "$2M – $10M",
      tags: ["E-commerce", "Growth"],
      deals: 42,
      active: 8,
    },
    {
      name: "Alpha Ventures Capital",
      location: "NYC, USA",
      type: "VC Fund",
      range: "$2M – $10M",
      tags: ["E-commerce", "Growth"],
      deals: 42,
      active: 8,
    },
  ];

  return (
    <div className="investors-wrapper">
      <aside className="filters" aria-label="Quick Filters">
        <div className="filters-header">
          <div className="filter-icon" aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 5h18v2H3zM6 11h12v2H6zM10 17h4v2h-4z"/>
            </svg>
          </div>
          <h4 className="filters-title">Quick Filters</h4>
        </div>

        {[
          "Investor Type",
          "Industry Focus",
          "Funding Stage",
          "Geography",
          "Ticket Size",
          "Sort By",
        ].map((label) => (
          <div className="filter-block" key={label}>
            <label className="filter-label">{label}</label>
            <div className="dropdown" role="button" tabIndex="0">All <span className="chev">▾</span></div>
          </div>
        ))}
      </aside>

      <main className="content">
        <header className="header-area">
          <div className="subtitle">PREMIUM SOLUTIONS</div>

          <h1 className="main-title">
            Featured <span className="blue">Investors</span>
          </h1>

          <p className="subtext">Top investors actively seeking new opportunities</p>

          <div className="hero-sample">
            {/* <img src={sampleImg} alt="" /> */}
          </div>
        </header>

        <section className="cards-grid" aria-label="Investors list">
          {sampleData.map((item, i) => (
            <InvestorCard key={i} {...item} />
          ))}
        </section>

        <nav className="pagination" aria-label="Pagination">
          <button className="page-btn disabled" aria-disabled="true">Previous</button>
          <button className="page-btn active" aria-current="page">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">Next</button>
        </nav>
      </main>
    </div>
  );
}
