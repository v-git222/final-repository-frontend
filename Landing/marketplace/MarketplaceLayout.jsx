import React, { useState } from "react";
import "./marketplace.css";

const sampleData = [
  {
    id: 1,
    title: "CyberGuard AI",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=60",
    tags: ["EDUCATION", "ARTIFICIAL INTELLIGENCE (AI)"],
    raisedText: "RM 450.350 (70%)",
    valuation: "RM 12.0M",
    minTarget: "RM 499,994",
    investors: 23,
    category: "Cybersecurity",
  },
  {
    id: 2,
    title: "BrandForge Studio",
    location: "Kuala Lumpur, Malaysia",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=60",
    tags: ["MARKETING", "BRANDING", "SHARIAH-SAFE"],
    raisedText: "RM 390.000 (54%)",
    valuation: "RM 8.1M",
    minTarget: "RM 399,994",
    investors: 41,
    category: "Marketing",
  },
  {
    id: 3,
    title: "MediLab Diagnostics",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1581093588401-5f6b9f1b8d12?auto=format&fit=crop&w=1200&q=60",
    tags: ["HEALTHCARE", "MEDTECH", "DIAGNOSTICS"],
    raisedText: "RM 520.000 (65%)",
    valuation: "RM 20.0M",
    minTarget: "RM 699,994",
    investors: 56,
    category: "Healthcare",
  },
  {
    id: 4,
    title: "StratWise Consulting",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60",
    tags: ["CONSULTING", "STRATEGY", "ADVISORY"],
    raisedText: "RM 290.000 (42%)",
    valuation: "RM 5.5M",
    minTarget: "RM 299,994",
    investors: 18,
    category: "Enterprise",
  },
  {
    id: 5,
    title: "FinNova PayTech",
    location: "India",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=60",
    tags: ["FINTECH", "PAYMENTS"],
    raisedText: "RM 610.000 (77%)",
    valuation: "RM 30.0M",
    minTarget: "RM 899,994",
    investors: 92,
    category: "Fintech",
  },
  {
    id: 6,
    title: "QuantumCompute Labs",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=60",
    tags: ["QUANTUM", "CLOUD", "DEEP TECH"],
    raisedText: "RM 780.000 (82%)",
    valuation: "RM 50.0M",
    minTarget: "RM 1,299,994",
    investors: 46,
    category: "Quantum",
  },
  {
    id: 7,
    title: "FarmLink AgriTech",
    location: "Jakarta, Indonesia",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=60",
    tags: ["AGRITECH", "SUPPLY CHAIN"],
    raisedText: "RM 210.000 (33%)",
    valuation: "RM 4.8M",
    minTarget: "RM 249,994",
    investors: 14,
    category: "Agritech",
  },
  {
    id: 8,
    title: "NeuraVoice AI",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=60",
    tags: ["VOICE AI", "NLP", "SAAS"],
    raisedText: "RM 330.000 (50%)",
    valuation: "RM 7.5M",
    minTarget: "RM 399,994",
    investors: 35,
    category: "AI",
  },
  {
    id: 9,
    title: "Urban EV Motors",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1200&q=60",
    tags: ["EV", "MOBILITY", "TECH"],
    raisedText: "RM 900.000 (90%)",
    valuation: "RM 80.0M",
    minTarget: "RM 1,999,994",
    investors: 120,
    category: "Automotive",
  },
  {
    id: 10,
    title: "CloudSprout HR",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1557093794-8f3e76abf3d9?auto=format&fit=crop&w=1200&q=60",
    tags: ["HR", "PAYROLL", "SAAS"],
    raisedText: "RM 150.000 (25%)",
    valuation: "RM 3.0M",
    minTarget: "RM 249,994",
    investors: 9,
    category: "HR Tech",
  },
  {
    id: 11,
    title: "EcoWave Energy",
    location: "Norway",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=60",
    tags: ["CLEAN ENERGY", "SUSTAINABILITY"],
    raisedText: "RM 670.000 (64%)",
    valuation: "RM 18.0M",
    minTarget: "RM 899,994",
    investors: 61,
    category: "Energy",
  },
  {
    id: 12,
    title: "MetaLearn EdTech",
    location: "India",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60",
    tags: ["EDTECH", "AI", "LEARNING"],
    raisedText: "RM 430.000 (58%)",
    valuation: "RM 10.0M",
    minTarget: "RM 399,994",
    investors: 50,
    category: "Education",
  },
];

// ⬇ CARD COMPONENT (XL SIZE)
function Card({ item }) {
  const match = item.raisedText.match(/\((\d+)%\)/);
  const progress = match ? parseInt(match[1], 10) : 0;

  return (
    <div className="card xl-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <span className="card-category">{item.category}</span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <div className="card-location">{item.location}</div>

        <p className="card-desc">
          AI-powered cybersecurity platform offering threat detection, privacy-first data protection, and compliance...
        </p>

        <div className="card-tags">
          {item.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="raised-row">
          <div className="raised-left">
            <div className="raised-label">RAISED</div>
            <div className="raised-value">{item.raisedText}</div>
          </div>

          <div className="progress-wrap">
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="valuation-row">
          <div className="val-block">
            <div className="val-label">VALUATION</div>
            <div className="val-value">{item.valuation}</div>
          </div>
          <div className="val-block">
            <div className="val-label">MIN. TARGET</div>
            <div className="val-value highlight">{item.minTarget}</div>
          </div>
          <div className="val-block">
            <div className="val-label">INVESTORS</div>
            <div className="val-value">{item.investors}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ⬇ MAIN LAYOUT
export default function MarketplaceLayout() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // Collapsible states
  const [openFilters, setOpenFilters] = useState(true);

  const pageSize = 4;
  const pageItems = sampleData.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(sampleData.length / pageSize);

  return (
    <>
      {/* Font injection */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('../URWGeometricRegular.otf');
          }
        `}
      </style>

      <div className="marketplace-wrap xl-wrap">
        {/* LEFT SIDEBAR (XL HEIGHT) */}
        <aside className="left-col xl-left">
          <div className="left-title">Departments</div>

        <ul className="dept-list">
  <li className="dept-item active">Enterprise Software <span className="count">245</span></li>
  <li className="dept-item">Cloud & Infrastructure <span className="count">189</span></li>
  <li className="dept-item">AI & ML Platforms <span className="count">156</span></li>
  <li className="dept-item">Cybersecurity <span className="count">98</span></li>
  <li className="dept-item">FinTech Solutions <span className="count">210</span></li>
  <li className="dept-item">Healthcare & MedTech <span className="count">132</span></li>
  <li className="dept-item">Education & EdTech <span className="count">167</span></li>
  <li className="dept-item">Sustainability & Clean Energy <span className="count">74</span></li>
  <li className="dept-item">HR & Payroll Platforms <span className="count">120</span></li>
  <li className="dept-item">Quantum Computing <span className="count">42</span></li>
  <li className="dept-item">Agritech Solutions <span className="count">53</span></li>
  <li className="dept-item">Mobility & EV <span className="count">95</span></li>
  <li className="dept-item">Marketing & Branding <span className="count">164</span></li>
  <li className="dept-item">Government & Defence <span className="count">28</span></li>
  <li className="dept-item">Retail & Ecommerce <span className="count">140</span></li>
    <li className="dept-item">Education & EdTech <span className="count">167</span></li>
  <li className="dept-item">Sustainability & Clean Energy <span className="count">74</span></li>
  <li className="dept-item">HR & Payroll Platforms <span className="count">120</span></li>
  <li className="dept-item">Quantum Computing <span className="count">42</span></li>
  <li className="dept-item">Agritech Solutions <span className="count">53</span></li>
</ul>

          {/* Collapsible Filters */}
          <div className="quick-filters">
            <h5
              className="collapsible-header"
              onClick={() => setOpenFilters(!openFilters)}
            >
              Quick Filters{" "}
              <span className="chevron">{openFilters ? "▾" : "▸"}</span>
            </h5>

            {openFilters && (
              <div className="filters-section animated">
                <label className="filter-label">Company Size</label>
                <select className="filter-select">
                  <option>All sizes</option>
                  <option>1–10</option>
                  <option>11–50</option>
                </select>

                <label className="filter-label">License Type</label>
                <select className="filter-select">
                  <option>SaaS</option>
                  <option>On-prem</option>
                </select>

                <label className="filter-label">Compliance</label>
                <select className="filter-select">
                  <option>All Standards</option>
                </select>
              </div>
            )}
          </div>
        </aside>

        {/* CENTER */}
        <main className="center-col xl-center">
          {/* Search */}
          <div className="search-row xl-search">
            <input
              className="search-input xl-input"
              placeholder="Search startups, tokens, or investors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary xl-btn">Search</button>
            <button className="btn btn-ghost xl-btn">Advanced Filters</button>
          </div>

          {/* Heading */}
          <div className="section-header">
            <div className="header-label">PREMIUM SOLUTIONS</div>
            <h2 className="section-title xl-title">
              Invest early in startups
            </h2>
            <p className="section-sub xl-sub">
              Take part in funding the next big thing.{" "}
              <a className="why-link">Why invest →</a>
            </p>
          </div>

          {/* Card Grid */}
          <div className="cards-grid xl-grid">
            {pageItems.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination xl-pagination">
            <button
              className="page-btn xl-btn"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`page-number xl-number ${
                  page === i + 1 ? "active" : ""
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="page-btn xl-btn"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
