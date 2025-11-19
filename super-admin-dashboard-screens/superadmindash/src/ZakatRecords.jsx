import React from "react";
import "./ZakatRecords.css";
import {
  Info,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function ZakatRecords({ dark = false }) {
  const records = [
    {
      investor: "Mohammed Al-Farooq",
      type: "ANNUAL",
      amount: "6,250",
      dueDate: "2025-08-15",
      paidDate: "2025-08-15",
      status: "Paid",
    },
    {
      investor: "Ahmed Khan",
      type: "QUARTERLY",
      amount: "2,300",
      dueDate: "2025-08-15",
      paidDate: "—",
      status: "Pending",
    },
    {
      investor: "Fatima Hassan",
      type: "QUARTERLY",
      amount: "1,500",
      dueDate: "2025-08-15",
      paidDate: "—",
      status: "Upcoming",
    },
    {
      investor: "Sarah Johnson",
      type: "MONTHLY",
      amount: "3,200",
      dueDate: "2025-08-15",
      paidDate: "—",
      status: "Upcoming",
    },
  ];

  return (
    <div className={`zakat-records ${dark ? "dark" : ""}`}>
      <div className="records-header">
        <div className="title">
          <h2>Zakat Records</h2>
          <Info size={16} />
        </div>
        <p>Detailed payment tracking and status</p>
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

      <table className="records-table">
        <thead>
          <tr>
            <th>INVESTOR</th>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>DUE DATE</th>
            <th>PAID DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.investor}</td>
              <td>
                <span className={`type-badge ${r.type.toLowerCase()}`}>
                  {r.type}
                </span>
              </td>
              <td>{r.amount}</td>
              <td>{r.dueDate}</td>
              <td>{r.paidDate}</td>
              <td>
                <span className={`status-badge ${r.status.toLowerCase()}`}>
                  {r.status}
                </span>
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
