import React from "react";
import "./CryptoInsightsUpdate.css";
import { FiSearch, FiSun, FiBell, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { SiBitcoin, SiEthereum, SiRipple } from "react-icons/si";
import { FiBarChart2 } from "react-icons/fi";

const topCoins = [
  {
    name: "Aurivox",
    code: "AVX",
    price: "$23,738",
    change: "+14.67%",
    color: "#F7D999",
    trend: "up",
  },
  {
    name: "Eminar",
    code: "EMN",
    price: "$23,738",
    change: "-14.67%",
    color: "#D1E9FF",
    trend: "down",
  },
  {
    name: "Xenara",
    code: "XNR",
    price: "$23,738",
    change: "+14.67%",
    color: "#DFF7E6",
    trend: "up",
  },
];

const tableData = [
  {
    name: "Aurivox",
    code: "AVX",
    price: "$200,000",
    changePct: "-1.32%",
    changeDollar: "$0.057",
    marketcap: "$213.8M",
    trend: "down",
    icon: <SiBitcoin />,
  },
  {
    name: "Eminar",
    code: "EMN",
    price: "$200,000",
    changePct: "+1.32%",
    changeDollar: "$0.146",
    marketcap: "$245.8M",
    trend: "up",
    icon: <SiEthereum />,
  },
  {
    name: "Xenara",
    code: "XNR",
    price: "$200,000",
    changePct: "+1.32%",
    changeDollar: "$0.450",
    marketcap: "$245.8M",
    trend: "up",
    icon: <SiRipple />,
  },
];

export default function CryptoInsights() {
  return (
    <section className="ci-wrapper">
      <div className="ci-inner">
        <span className="ci-pill">Crypto Insights</span>

        <h1 className="ci-title">Insights into the Crypto Landscape</h1>

        <p className="ci-sub">
          Stay updated with real-time market data, trends, and analysis across the cryptocurrency ecosystem.
        </p>

        {/* Metrics */}
        <div className="ci-metrics">
          <div className="metric">
            <div className="metric-value">41.5%</div>
            <div className="metric-label">Bitcoin Dominance</div>
          </div>

          <div className="metric">
            <div className="metric-value">$2.5 T</div>
            <div className="metric-label">Total Market Capitalization</div>
          </div>

          <div className="metric">
            <div className="metric-value">$300 B</div>
            <div className="metric-label">24-Hour Trading Volume</div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="dashboard">

          {/* Top row */}
          <div className="dashboard-top">
            <div className="dashboard-title">Investment Portfolio Dashboard</div>

            <div className="dashboard-actions">
              <button className="icon-btn"><FiSun /></button>

              <div className="search">
                <FiSearch className="search-icon" />
                <input className="search-input" placeholder="Search" />
              </div>

              <button className="icon-btn"><FiBell /></button>
              <FaUserCircle className="profile" />
            </div>
          </div>

          {/* Mini cards */}
          <div className="mini-cards">
            {topCoins.map((coin, i) => (
              <article className="mini-card" key={i}>

                {/* header */}
                <div className="mini-header">
                  <div className="mini-left">
                    <div className="badge-icon" style={{ backgroundColor: coin.color }}>
                      {coin.code[0]}
                    </div>
                    <div className="badge-text">
                      <div className="coin-name">{coin.name}</div>
                      <div className="coin-code">{coin.code}</div>
                    </div>
                  </div>

                  <div className={`mini-change ${coin.trend}`}>
                    {coin.change}
                  </div>
                </div>

                {/* price */}
                <div className="mini-price">{coin.price}</div>

                {/* graph */}
                <div className="mini-graph">
                  <svg viewBox="0 0 100 40" className="spark">
                    {coin.trend === "up" ? (
                      <polyline points="0,32 20,28 40,22 60,14 80,8 100,6" />
                    ) : (
                      <polyline points="0,10 20,14 40,20 60,26 80,32 100,34" />
                    )}
                  </svg>
                </div>

                <div className="mini-footer">
                  <span>Tuesday, 14th October 2025</span>
                  <span className="mini-link">$23,738</span>
                </div>
              </article>
            ))}
          </div>

          {/* Market Overview title */}
          <div className="market-heading">
            <h3 className="market-heading-title">
              <FiBarChart2 className="mh-ico" /> Market Overview
            </h3>
            <p className="mh-sub">Comprehensive token statistics trading information</p>
          </div>

          {/* Table */}
          <div className="table-wrap">
            <table className="market-table">
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
                {tableData.map((row, i) => (
                  <tr key={i}>
                    <td>
                      <div className="row-name">
                        <div className="row-icon">{row.icon}</div>
                        <div>
                          <div className="row-title">{row.name}</div>
                          <div className="row-sub">{row.code}</div>
                        </div>
                      </div>
                    </td>

                    <td>{row.price}</td>

                    <td className={`trend ${row.trend}`}>
                      {row.trend === "up" ? <FiChevronUp /> : <FiChevronDown />}
                      {row.changePct}
                    </td>

                    <td className={`trend ${row.trend}`}>
                      {row.changeDollar}
                    </td>

                    <td>{row.marketcap}</td>

                    <td><button className="trade-btn">Trade</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dashboard-note">
            Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
          </div>
        </div>
      </div>
    </section>
  );
}
