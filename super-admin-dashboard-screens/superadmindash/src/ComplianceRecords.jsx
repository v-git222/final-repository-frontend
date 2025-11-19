import React, { useState } from "react";
import "./ComplianceRecords.css";
import { Search, Eye } from "lucide-react";

export default function ComplianceRecords({ dark }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const records = [
    {
      startup: "CureCloud",
      reviewType: "Initial Review",
      reviewer: "Dr. Ahmad Al-Shamsi",
      date: "2025-09-15",
      status: "Approved",
    },
    {
      startup: "SukunPay",
      reviewType: "Annual Audit",
      reviewer: "Sheikh Mohammed Ibrahim",
      date: "2025-09-30",
      status: "In Review",
    },
    {
      startup: "AqsaAI",
      reviewType: "Initial Review",
      reviewer: "Dr. Fatima Al-Nasser",
      date: "2025-10-15",
      status: "Pending",
    },
  ];

  const filtered = records.filter(
    (r) =>
      (statusFilter === "All" || r.status === statusFilter) &&
      r.startup.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Approved":
        return "status approved";
      case "In Review":
        return "status in-review";
      case "Pending":
        return "status pending";
      case "Non-Compliant":
        return "status non-compliant";
      default:
        return "status";
    }
  };

  return (
    <div className={`compliance-container ${dark ? "dark" : "light"}`}>
      <div className="header">
        <div>
          <h2>Compliance Records</h2>
          <p>Detailed history of Shariah compliance reviews</p>
        </div>
      </div>

      <div className="controls">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Approved</option>
          <option>In Review</option>
          <option>Pending</option>
          <option>Non-Compliant</option>
        </select>

        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Startup</th>
            <th>Review Type</th>
            <th>Reviewer</th>
            <th>Review Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((r, i) => (
            <tr key={i}>
              <td>
                <div className="startup">
                  <div className="avatar">{r.startup[0]}</div>
                  {r.startup}
                </div>
              </td>
              <td>{r.reviewType}</td>
              <td>{r.reviewer}</td>
              <td>{r.date}</td>
              <td>
                <span className={getStatusClass(r.status)}>{r.status}</span>
              </td>
              <td>
                <button className="action-btn">
                  <Eye size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <p>
          Showing <span className="highlight">03</span> / 15 Results
        </p>
        <div className="pages">
          <button className="page-btn">&#60;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span>…</span>
          <button className="page-btn">10</button>
          <button className="page-btn">&#62;</button>
        </div>
      </div>

      <p className="footer">
        Market data is updated in real-time. Prices are for reference only and
        may vary across exchanges.
      </p>
    </div>
  );
}
