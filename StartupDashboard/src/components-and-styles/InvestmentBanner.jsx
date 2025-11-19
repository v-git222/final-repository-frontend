import React, { useState } from "react";
import "./InvestorDashboard.css";
import {
  FiMail,
  FiArrowUpRight,
  FiCalendar,
  FiMessageSquare,
  FiSearch,
} from "react-icons/fi";

const metrics = [
  {
    icon: <FiMail />,
    title: "Total Investor Contacted",
    value: 42,
    sub: "+4 this week",
    colorLight: "#e7f0ff",
    colorDark: "#1e2a44",
  },
  {
    icon: <FiArrowUpRight />,
    title: "Responses Received",
    value: 17,
    sub: "+12% vs last month",
    colorLight: "#f4e9ff",
    colorDark: "#312340",
  },
  {
    icon: <FiCalendar />,
    title: "Follow-Ups Scheduled",
    value: 8,
    sub: "3 upcoming this week",
    colorLight: "#eaffea",
    colorDark: "#233627",
  },
  {
    icon: <FiMessageSquare />,
    title: "Active Discussions",
    value: 6,
    sub: "2 new this week",
    colorLight: "#fff3e4",
    colorDark: "#3b2a14",
  },
];

const investors = [
  {
    initial: "S",
    name: "Sarah Johnson",
    firm: "Novocure Ventures",
    round: "Seed",
    location: "Switzerland",
    status: "In Discussion",
    statusColor: "#d9fdd3",
    lastContact: "Nov 3, 2025",
    nextFollowUp: "Nov 6, 2025",
  },
  {
    initial: "M",
    name: "Michael Chen",
    firm: "Crescent Capital",
    round: "Series A",
    location: "UAE",
    status: "Interested",
    statusColor: "#d7efff",
    lastContact: "Nov 1, 2025",
    nextFollowUp: "—",
  },
  {
    initial: "E",
    name: "Emily Rodriguez",
    firm: "FutureTech Angels",
    round: "Pre-Seed",
    location: "USA",
    status: "No Response",
    statusColor: "#efe6ff",
    lastContact: "Oct 25, 2025",
    nextFollowUp: "Nov 8, 2025",
  },
  {
    initial: "D",
    name: "David Park",
    firm: "NeoFund Global",
    round: "Series B",
    location: "Singapore",
    status: "Follow up needed",
    statusColor: "#ffe9d2",
    lastContact: "Oct 15, 2025",
    nextFollowUp: "—",
  },
];

export default function InvestorDashboard({ dark = false }) {
  const [search, setSearch] = useState("");

  const filteredInvestors = investors.filter(
    (inv) =>
      inv.name.toLowerCase().includes(search.toLowerCase()) ||
      inv.firm.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`investor-dashboard ${dark ? "dark-mode" : ""}`}>
      {/* Top Stats */}
      <div className="metrics-grid">
        {metrics.map((item, i) => (
          <div
            key={i}
            className="metric-card"
            style={{
              backgroundColor: dark ? item.colorDark : item.colorLight,
            }}
          >
            <div className="metric-icon">{item.icon}</div>
            <div className="metric-title">{item.title}</div>
            <div className="metric-value">{item.value}</div>
            <div className="metric-sub">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Investor Table */}
      <div className="investor-list">
        <div className="list-header">
          <div>
            <h3>Investor Contact List</h3>
            <p>Manage your outreach and follow-up progress.</p>
          </div>
          <div className="controls">
            <select>
              <option>Status</option>
              <option>Interested</option>
              <option>In Discussion</option>
              <option>No Response</option>
            </select>
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <table className="investor-table">
          <thead>
            <tr>
              <th>INVESTOR</th>
              <th>FIRM</th>
              <th>ROUND</th>
              <th>LOCATION</th>
              <th>STATUS</th>
              <th>LAST CONTACT</th>
              <th>NEXT FOLLOW UP</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvestors.map((inv, i) => (
              <tr key={i}>
                <td className="investor-cell">
                  <span className="investor-avatar">{inv.initial}</span>
                  {inv.name}
                </td>
                <td>{inv.firm}</td>
                <td>{inv.round}</td>
                <td>{inv.location}</td>
                <td>
                  <span
                    className="status-badge"
                    style={{
                      backgroundColor: inv.statusColor,
                      color: dark ? "#111" : "#333",
                    }}
                  >
                    {inv.status}
                  </span>
                </td>
                <td>{inv.lastContact}</td>
                <td>{inv.nextFollowUp}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span>Showing 04 / 1280 Results</span>
          <div className="pagination-buttons">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>20</button>
          </div>
        </div>
      </div>

      <div className="footer">
        Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
      </div>
    </div>
  );
}
