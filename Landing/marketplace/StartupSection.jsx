import React from "react";
import "./startup.css";

const startups = [
  {
    initials: "CN",
    name: "CloudNova AI",
    desc: "AI automation + cloud cost optimization",
    tag: "Technology",
    location: "San Francisco, CA",
  },
  {
    initials: "HD",
    name: "HealPro Diagnostics",
    desc: "Advanced testing + digital lab solutions",
    tag: "Healthcare",
    location: "Boston, MA",
  },
  {
    initials: "BB",
    name: "BlueByte Cyber",
    desc: "Defensive cybersecurity for SMEs",
    tag: "Cybersecurity",
    location: "Austin, TX",
  },
  {
    initials: "MG",
    name: "MarqGrow",
    desc: "Growth marketing engine for fast-scaling brands",
    tag: "Marketing",
    location: "New York, NY",
  },
  {
    initials: "PG",
    name: "PayStream Global",
    desc: "Cross-border payment solutions for businesses",
    tag: "FinTech",
    location: "London, UK",
  },
  {
    initials: "TF",
    name: "TalentForge",
    desc: "AI-powered recruitment and talent management",
    tag: "HR Tech",
    location: "Singapore",
  },
];

export default function StartupsSection() {
  return (
    <div className="startups-wrapper">

      {/* Section Heading */}
      <div className="section-top">
        <span className="breadcrumb">STARTUPS</span>

        <h2 className="section-title">
          Featured <span className="blue">Startups</span> on Emireq
        </h2>

        <p className="section-sub">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
          viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="startups-grid">
        {startups.map((s) => (
          <div className="startup-card" key={s.name}>

            {/* Initials + Verified */}
            <div className="card-head">
              <div className="initials">{s.initials}</div>
              <div className="verified">✔ Verified</div>
            </div>

            {/* Name + Desc */}
            <h3 className="startup-name">{s.name}</h3>
            <p className="startup-desc">{s.desc}</p>

            {/* Tag */}
            <span className="startup-tag">{s.tag}</span>

            {/* Location */}
            <div className="location">
              <span>📍</span> {s.location}
            </div>

            {/* Button */}
            <button className="profile-btn">
              View Profile →
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}
