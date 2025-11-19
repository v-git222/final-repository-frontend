import React from "react";
import "./TokenizedStartups.css";
import { Info, Search, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function TokenizedStartups({ dark = false }) {
  const startups = [
    {
      name: "CureCloud",
      symbol: "CURE",
      supply: "500,000",
      price: "$250",
      marketcap: "$250",
      status: "Active",
    },
    {
      name: "SukunPay",
      symbol: "SKPAY",
      supply: "1,000,000",
      price: "$250",
      marketcap: "$250",
      status: "Active",
    },
    {
      name: "AqsaAI",
      symbol: "AQSA",
      supply: "250,000",
      price: "$250",
      marketcap: "$250",
      status: "Pending",
    },
    {
      name: "GreenAgri",
      symbol: "GRANG",
      supply: "750,000",
      price: "$250",
      marketcap: "$250",
      status: "Active",
    },
  ];

  return (
    <div className={`tokenized-container ${dark ? "dark" : ""}`}>
      <div className="tokenized-header">
        <div className="header-title">
          <h2>Tokenized Startups</h2>
          <Info size={16} />
        </div>
        <p>Overview of all tokenized companies</p>
      </div>

      <div className="controls">
        <button className="status-filter">
          Status <ChevronDown size={16} />
        </button>
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table className="tokenized-table">
        <thead>
          <tr>
            <th>COMPANY NAME</th>
            <th>TOKEN SYMBOL</th>
            <th>TOTAL SUPPLY</th>
            <th>PRICE ($)</th>
            <th>MARKETCAP ($K)</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {startups.map((s, i) => (
            <tr key={i}>
              <td>
                <div className="company-info">
                  <div className="avatar">{s.name.charAt(0)}</div>
                  {s.name}
                </div>
              </td>
              <td><span className="symbol">{s.symbol}</span></td>
              <td>{s.supply}</td>
              <td>{s.price}</td>
              <td>{s.marketcap}</td>
              <td>
                <span className={`status ${s.status.toLowerCase()}`}>{s.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <span>Showing <strong>04</strong> / 100 Results</span>
        <div className="pagination">
          <button><ChevronLeft size={16} /></button>
          <button className="active">1</button>
          <button>2</button>
          <span>...</span>
          <button>20</button>
          <button><ChevronRight size={16} /></button>
        </div>
      </div>

      <p className="disclaimer">
        Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
      </p>
    </div>
  );
}
