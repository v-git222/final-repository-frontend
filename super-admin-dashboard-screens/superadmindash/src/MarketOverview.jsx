import React, { useState } from "react";
import "./MarketOverview.css";
import {
  Search,
  TrendingUp,
  TrendingDown,
  Shield,
  Gem,
  CheckCircle,
} from "lucide-react";

const marketData = [
  {
    name: "Aurivox",
    symbol: "AVX",
    icon: <Shield size={20} color="#f59e0b" />, // gold tone
    price: "$200,000",
    changePercent: -1.32,
    changeDollar: -0.057,
    marketcap: "$213.8M",
  },
  {
    name: "Eminar",
    symbol: "EMN",
    icon: <Gem size={20} color="#6366f1" />, // purple-blue tone
    price: "$200,000",
    changePercent: 1.32,
    changeDollar: 0.146,
    marketcap: "$245.8M",
  },
  {
    name: "Xenara",
    symbol: "XNR",
    icon: <CheckCircle size={20} color="#10b981" />, // green tone
    price: "$200,000",
    changePercent: 1.32,
    changeDollar: 0.45,
    marketcap: "$245.8M",
  },
];

export default function MarketOverview({ dark }) {
  const [page, setPage] = useState(1);

  const handlePageChange = (p) => setPage(p);

  return (
    <div className={`market-overview ${dark ? "dark" : ""}`}>
      <div className="header">
        <h3>📊 Market Overview</h3>
        <p>Comprehensive token statistics trading information</p>
      </div>

      {/* Filters */}
      <div className="filters">
        <select className="filter-dropdown">
          <option>Label</option>
        </select>
        <select className="filter-dropdown">
          <option>Label</option>
        </select>
        <select className="filter-dropdown">
          <option>Label</option>
        </select>

        <div className="search-box">
          <Search size={16} color="#9ca3af" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change(%)</th>
              <th>Change($)</th>
              <th>Marketcap</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {marketData.map((token, index) => (
              <tr key={index}>
                <td className="token-info">
                  <div className="token-icon">{token.icon}</div>
                  <div>
                    <div className="token-name">{token.name}</div>
                    <div className="token-symbol">{token.symbol}</div>
                  </div>
                </td>
                <td>{token.price}</td>
                <td
                  className={`${
                    token.changePercent >= 0 ? "positive" : "negative"
                  }`}
                >
                  {token.changePercent >= 0 ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {token.changePercent > 0 ? "+" : ""}
                  {token.changePercent}%
                </td>
                <td
                  className={`${
                    token.changeDollar >= 0 ? "positive" : "negative"
                  }`}
                >
                  {token.changeDollar >= 0 ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  ${Math.abs(token.changeDollar).toFixed(3)}
                </td>
                <td>{token.marketcap}</td>
                <td>
                  <button className="trade-btn">Trade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="table-footer">
          <p>
            Showing <span className="result-count">03</span> / 1280 Results
          </p>

          <div className="pagination">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              ‹
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={page === p ? "active" : ""}
                onClick={() => handlePageChange(p)}
              >
                {p}
              </button>
            ))}
            <span>…</span>
            <button onClick={() => handlePageChange(20)}>20</button>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === 20}
            >
              ›
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
