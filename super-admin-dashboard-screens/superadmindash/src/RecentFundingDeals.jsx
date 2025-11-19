import React, { useState } from "react";
import "./RecentFundingDeals.css";
import { Info, Search, ChevronLeft, ChevronRight } from "lucide-react";

const dealsData = [
  {
    company: "CureCloud",
    investor: "Ahmed Al-Rashid",
    amount: "$250",
    stage: "Series A",
    status: "Completes",
    date: "2025-08-15",
  },
  {
    company: "SukunPay",
    investor: "John Doe",
    amount: "$250",
    stage: "Seed",
    status: "In progress",
    date: "2025-08-10",
  },
  {
    company: "AqsaAI",
    investor: "Fatima Hassan",
    amount: "$250",
    stage: "Series B",
    status: "Pending",
    date: "2025-08-05",
  },
  {
    company: "HalalFoods INC",
    investor: "Sarah",
    amount: "$250",
    stage: "Pre-seed",
    status: "Completes",
    date: "2025-07-28",
  },
  {
    company: "GreenTech Solutions",
    investor: "Sarah Al-Mansoori",
    amount: "$250",
    stage: "Seed",
    status: "Pending",
    date: "2025-07-20",
  },
];

export default function RecentFundingDeals({ dark }) {
  const [stageFilter, setStageFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering logic
  const filteredDeals = dealsData.filter((deal) => {
    const matchesStage = stageFilter === "All" || deal.stage === stageFilter;
    const matchesStatus =
      statusFilter === "All" || deal.status === statusFilter;
    const matchesSearch = deal.company
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStage && matchesStatus && matchesSearch;
  });

  return (
    <div className={`funding-deals ${dark ? "dark" : ""}`}>
      {/* Header */}
      <div className="funding-header">
        <h3>
          Recent Funding Deals <Info size={14} className="info-icon" />
        </h3>
        <p>Latest investment transactions</p>
      </div>

      {/* Filters */}
      <div className="filters">
        <select
          className="filter-dropdown"
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
        >
          <option>All</option>
          <option>Seed</option>
          <option>Series A</option>
          <option>Series B</option>
          <option>Pre-seed</option>
        </select>

        <select
          className="filter-dropdown"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Completes</option>
          <option>In progress</option>
          <option>Pending</option>
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
              <th>Company Name</th>
              <th>Investor</th>
              <th>Amount ($K)</th>
              <th>Stage</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredDeals.map((deal, index) => (
              <tr key={index}>
                <td className="company-cell">
                  <div className="company-icon">
                    {deal.company[0].toUpperCase()}
                  </div>
                  {deal.company}
                </td>
                <td>{deal.investor}</td>
                <td>{deal.amount}</td>
                <td>
                  <span className="badge stage">{deal.stage}</span>
                </td>
                <td>
                  <span
                    className={`badge status ${
                      deal.status.toLowerCase().replace(" ", "-")
                    }`}
                  >
                    {deal.status}
                  </span>
                </td>
                <td>{deal.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="table-footer">
          <p>
            Showing <span className="result-count">05</span> / 1280 Results
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
