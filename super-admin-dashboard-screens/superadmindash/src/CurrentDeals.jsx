import React, { useState } from "react";
import "./CurrentDeals.css";
import { Info, Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function CurrentDeals({ dark }) {
  const dealsData = [
    {
      startup: "CureCloud",
      investor: "Mohammed Al-Farooq",
      amount: 250,
      status: "Active",
      probability: "75%",
      expectedClose: "2025-09-15",
    },
    {
      startup: "SukunPay",
      investor: "Sarah Johnson",
      amount: 2400,
      status: "Active",
      probability: "85%",
      expectedClose: "2025-09-30",
    },
    {
      startup: "AqsaAI",
      investor: "Ahmed Khan",
      amount: 120,
      status: "Reviewing",
      probability: "45%",
      expectedClose: "2025-10-15",
    },
  ];

  const [stageFilter, setStageFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDeals = dealsData.filter((deal) => {
    const matchesSearch = deal.startup
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className={`current-deals ${dark ? "dark" : ""}`}>
      {/* Header */}
      <div className="deals-header">
        <div>
          <h3>
            Current Deals <Info size={14} className="info-icon" />
          </h3>
          <p>Active Deals</p>
        </div>
      </div>

      {/* Filters */}
      <div className="deals-filters">
        <select
          className="filter-dropdown"
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option>Stage</option>
          <option>Seed</option>
          <option>Series A</option>
          <option>Series B</option>
        </select>

        <div className="search-box">
          <Search size={16} color="#9ca3af" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Startup</th>
              <th>Investor</th>
              <th>Amount ($K)</th>
              <th>Status</th>
              <th>Probability</th>
              <th>Expected Close</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeals.map((deal, index) => (
              <tr key={index}>
                <td className="startup-name">{deal.startup}</td>
                <td>{deal.investor}</td>
                <td>{deal.amount.toLocaleString()}</td>
                <td>
                  <span
                    className={`status-badge ${
                      deal.status === "Active" ? "active" : "reviewing"
                    }`}
                  >
                    {deal.status}
                  </span>
                </td>
                <td>{deal.probability}</td>
                <td>{deal.expectedClose}</td>
                <td>
                  <button className="action-btn">
                    <Eye size={16} color="#fff" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="table-footer">
          <p>
            Showing <span className="result-count">04</span> / 100 Results
          </p>

          <div className="pagination">
            <button>
              <ChevronLeft size={16} />
            </button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>20</button>
            <button>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <p className="table-note">
          Market data is updated in real-time. Prices are for reference only and
          may vary across exchanges.
        </p>
      </div>
    </div>
  );
}
