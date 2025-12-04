import React from "react";
import "./startup.css";

const startups = [
  {
    initials: "CN",
    name: "CloudNova AI",
    desc: "AI automation + cloud cost optimization",
    category: "Technology",
    funding: "$6.2M",
    location: "San Francisco, CA",
    verified: true,
    trending: true
  },
  {
    initials: "HD",
    name: "HealPro Diagnostics",
    desc: "Advanced testing + digital lab solutions",
    category: "Healthcare",
    funding: "$3.8M",
    location: "Boston, MA",
    verified: true,
    trending: false
  },
  {
    initials: "BB",
    name: "BlueByte Cyber",
    desc: "Defensive cybersecurity for SMEs",
    category: "Cybersecurity",
    funding: "$4.1M",
    location: "Austin, TX",
    verified: true,
    trending: true
  },
  {
    initials: "MG",
    name: "MarqGrow",
    desc: "Growth marketing engine for scaling brands",
    category: "Marketing",
    funding: "$2.4M",
    location: "New York, NY",
    verified: true,
    trending: false
  },
  {
    initials: "PG",
    name: "PayStream Global",
    desc: "Cross-border payment solutions for businesses",
    category: "FinTech",
    funding: "$8.5M",
    location: "London, UK",
    verified: true,
    trending: true
  },
  {
    initials: "TF",
    name: "TalentForge",
    desc: "AI-powered recruitment and talent management",
    category: "HR Tech",
    funding: "$5.1M",
    location: "Singapore",
    verified: true,
    trending: false
  },
];

export default function StartupsSection() {
  return (
    <div className="startups-wrapper">

      {/* Section Header */}
      <div className="section-top">
        <span className="breadcrumb">STARTUPS</span>

        <h2 className="section-title">
          Featured <span className="blue">Startups</span> on Emireq
        </h2>

        <p className="section-sub">
          Discover innovative companies shaping the future across AI, FinTech, cybersecurity, and more.
        </p>
      </div>

      {/* Cards */}
      <div className="startups-grid">
        {startups.map((s) => (
          <div className="startup-card" key={s.name}>

            {/* Top Header */}
            <div className="card-header">
              <div className="initials">{s.initials}</div>

              <div className="badges">
                {s.verified && (
                  <span className="badge verified">Verified</span>
                )}
                {s.trending && (
                  <span className="badge trending">Trending</span>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="startup-name">{s.name}</h3>

            {/* Description */}
            <p className="startup-desc">{s.desc}</p>

            {/* Meta */}
            <div className="startup-meta">
              <span className="tag-chip category">{s.category}</span>
              <span className="tag-chip funded">{s.funding}</span>
            </div>

            {/* Location */}
            <div className="location">{s.location}</div>

            {/* CTA */}
            <button className="profile-btn">View Profile →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
