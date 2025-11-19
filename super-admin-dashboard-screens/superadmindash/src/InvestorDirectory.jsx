import React from "react";
import "./InvestorDirectory.css";
import {
  Info,
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function InvestorDirectory({ dark = false }) {
  const investors = [
    {
      name: "Mohammed Al-Farooq",
      type: "Angel",
      portfolio: "5 Startups",
      invested: "1,250",
      available: "750",
      status: "Active",
    },
    {
      name: "Sarah Johnson",
      type: "VC Fund",
      portfolio: "12 Startups",
      invested: "8,500",
      available: "15,500",
      status: "Active",
    },
    {
      name: "Ahmed Khan",
      type: "Institutional",
      portfolio: "3 Startups",
      invested: "600",
      available: "400",
      status: "Reviewing",
    },
  ];

  return (
    <div className={`investor-directory ${dark ? "dark" : ""}`}>
      <div className="directory-header">
        <div className="title">
          <h2>Investor Directory</h2>
          <Info size={16} />
        </div>
        <p>Complete list of all investors in your network</p>
      </div>

      <div className="controls">
        <button className="status-btn">
          Status <ChevronDown size={16} />
        </button>
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table className="investor-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>TYPE</th>
            <th>PORTFOLIO</th>
            <th>INVESTED ($K)</th>
            <th>AVAILABLE ($K)</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((inv, i) => (
            <tr key={i}>
              <td>{inv.name}</td>
              <td>
                <span className="type-tag">{inv.type}</span>
              </td>
              <td>{inv.portfolio}</td>
              <td>{inv.invested}</td>
              <td>{inv.available}</td>
              <td>
                <span className={`status-badge ${inv.status.toLowerCase()}`}>
                  {inv.status}
                </span>
              </td>
              <td>
                <button className="action-btn">
                  <Eye size={16} color="#fff" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <span>
          Showing <strong>04</strong> / 100 Results
        </span>
        <div className="pagination">
          <button>
            <ChevronLeft size={16} />
          </button>
          <button className="active">1</button>
          <button>2</button>
          <span>...</span>
          <button>20</button>
          <button>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <p className="disclaimer">
        Market data is updated in real-time. Prices are for reference only and
        may vary across exchanges.
      </p>
    </div>
  );
}
