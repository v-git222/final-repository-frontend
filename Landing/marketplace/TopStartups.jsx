// TopStartups.jsx
import React, { useState } from "react";
import "./topstartups.css";

const REGIONS = ["UAE", "India", "KSA", "Singapore", "USA"];
const CATEGORIES = ["All Category", "Technology", "FinTech", "Healthcare", "HR Tech"];

const sampleStartups = [
  {
    id: 1,
    initials: "FP",
    name: "FinEdge Payments",
    desc: "Payment gateway for global merchants",
    tag: "FinTech",
    badge: ["Verified","Trending"],
    raised: "$8.5M",
    location: "Dubai, UAE",
  },
  {
    id: 2,
    initials: "SH",
    name: "SwiftHire HR",
    desc: "AI hiring solution for enterprises",
    tag: "HR Tech",
    badge: ["Verified","Trending"],
    raised: "$6.5M",
    location: "Abu Dhabi, UAE",
  },
  {
    id: 3,
    initials: "SH",
    name: "EcoBuild Tech",
    desc: "Eco-friendly construction materials for the future",
    tag: "Technology",
    badge: ["Verified"],
    raised: "$1.2M",
    location: "Bangalore, India",
  },
  {
    id: 4,
    initials: "FP",
    name: "TradeRoute Logistics",
    desc: "Smart logistics + supply chain optimization",
    tag: "Technology",
    badge: ["Verified","Trending"],
    raised: "$2.9M",
    location: "Riyadh, KSA",
  },
  {
    id: 5,
    initials: "SH",
    name: "BioCore Labs",
    desc: "Genomics + biotech research",
    tag: "Healthcare",
    badge: ["Verified","Trending"],
    raised: "$3.1M",
    location: "Singapore",
  },
  {
    id: 6,
    initials: "MG",
    name: "MarqGrow",
    desc: "Growth marketing engine for fast-scaling brands",
    tag: "Marketing",
    badge: ["Verified"],
    raised: "$0.8M",
    location: "New York, NY",
  },
];

export default function TopStartups() {
  // filters
  const [region, setRegion] = useState("Singapore");
  const [category, setCategory] = useState("All Category");
  const [sortBy, setSortBy] = useState("Recently Added");

  // simple filter logic (demo)
  const filtered = sampleStartups.filter((s) => {
    if (category !== "All Category" && s.tag !== category) return false;
    // region filtering is demo-only; keep all for now
    return true;
  });

  return (
    <section className="startups-wrapper">
      <div className="startups-top">
        <span className="breadcrumb">TOP STARTUPS</span>

        <h1 className="page-title">
          Top <span className="blue">Startups</span>
          <br />
          in your Region
        </h1>

        <p className="page-sub">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
          viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>

        {/* FILTER CARD */}
        <div className="filters-card">
          <div className="region-row">
            <div className="region-label">Select Region</div>
            <div className="region-pills">
              {REGIONS.map((r) => (
                <button
                  key={r}
                  className={`pill ${r === region ? "active" : ""}`}
                  onClick={() => setRegion(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="controls-row">
            <div className="control">
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="control">
              <label>Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Recently Added</option>
                <option>Most Funded</option>
                <option>Trending</option>
              </select>
            </div>
          </div>

          <div className="filters-bottom">
            <div>Showing {filtered.length} startups</div>
            <div className="meta">· Most Funded</div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="cards-grid">
        {filtered.map((s) => (
          <article className="startup-card" key={s.id}>
            <div className="card-top">
              <div className="initials">{s.initials}</div>

              <div className="badges">
                {s.badge.includes("Verified") && <span className="badge verified">✔ Verified</span>}
                {s.badge.includes("Trending") && <span className="badge trending">Trending</span>}
              </div>
            </div>

            <h3 className="startup-name">{s.name}</h3>

            <p className="startup-desc">{s.desc}</p>

            <div className="row-meta">
              <span className="chip">{s.tag}</span>
              <span className="raised">{s.raised}</span>
            </div>

            <div className="location">📍 {s.location}</div>

            <button className="profile-btn">View Profile →</button>
          </article>
        ))}
      </div>
    </section>
  );
}
