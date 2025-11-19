import React from "react";
import "./documentdDashboard.css";

export default function DocumentsDashboard() {
  const icons = {
    file: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
    ),
    verify: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
    ),
    pending: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    download: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    ),
    share: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
    ),
    link: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 1 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 1 0 7.07 7.07l1.71-1.71"/></svg>
    ),
    more: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
    )
  };

  const topStats = [
    { label: "Total Documents", value: "8", tag: "All Documents", color: "blue" },
    { label: "Verified", value: "3", tag: "Audit", color: "green" },
    { label: "Pending", value: "1", tag: "Review", color: "yellow" },
    { label: "Total Size", value: "19.7 MB", tag: "Storage", color: "purple" },
  ];

  const categories = [
    { title: "Compliance Certificates", desc: "KYC, AML, and Regulatory Compliance Documents", color: "green-card" },
    { title: "Agreements", desc: "Investment Agreements And Legal Contracts", color: "blue-card" },
    { title: "Tax Reports", desc: "Tax Statements And Financial Reports", color: "orange-card" }
  ];

  const documents = [
    {
      name: "KYC Compliance Certificate.pdf",
      date: "Sep 18, 2024",
      size: "5.1 MB",
      status: "Verified",
      statusColor: "green"
    },
    {
      name: "AML Compliance Report.pdf",
      date: "Aug 3, 2024",
      size: "2.8 MB",
      status: "Pending",
      statusColor: "yellow"
    }
  ];

  return (
    <div className="docs-wrapper">
      {/* TOP STATS */}
      <div className="stats-grid">
        {topStats.map((s, i) => (
          <div key={i} className={`stat-card ${s.color}`}>
            <div className="stat-top">
              <span className="stat-tag">{s.tag}</span>
            </div>
            <p className="stat-label">{s.label}</p>
            <h2 className="stat-value">{s.value}</h2>
          </div>
        ))}
      </div>

      {/* CATEGORY CARDS */}
      <div className="cat-grid">
        {categories.map((c, i) => (
          <div key={i} className={`cat-card ${c.color}`}>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      {/* RECENT DOCUMENTS */}
      <div className="recent-section">
        <h3>Recent Documents</h3>

        {/* TABS + SEARCH */}
        <div className="toolbar">
          <div className="tabs">
            <button className="active">Compliance</button>
            <button>Agreements</button>
            <button>Tax</button>
          </div>

          <input className="search" placeholder="Search documents..." />
        </div>

        {/* FILE LIST */}
        <div className="file-list">
          {documents.map((d, i) => (
            <div key={i} className="file-row">
              <div className="file-left">
                <div className="file-icon">{icons.file}</div>
                <div>
                  <p className="file-name">{d.name}</p>
                  <span className="file-meta">{d.date} • {d.size}</span>
                </div>
              </div>

              <div className={`status-badge ${d.statusColor}`}>{d.status}</div>

              <div className="file-actions">
                {icons.download}
                {icons.link}
                {icons.share}
                {icons.more}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
