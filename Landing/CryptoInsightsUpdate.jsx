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

        {/* Dashboard card */}
        <div className="dashboard">
          {/* top row */}
          <div className="dashboard-top">
            <div className="dashboard-title">Investment Portfolio Dashboard</div>
            <div className="dashboard-actions">
              <button className="icon-btn" aria-label="theme"><FiSun /></button>

              <div className="search">
                <FiSearch className="search-icon" />
                <input className="search-input" placeholder="Search" />
              </div>

              <button className="icon-btn" aria-label="notifications"><FiBell /></button>
              <FaUserCircle className="profile" />
            </div>
          </div>

          {/* mini cards */}
          <div className="mini-cards">
            {topCoins.map((c, i) => (
              <article className="mini-card" key={i}>
                <div className="mini-top">
                  <div className="coin-meta">
                    <div className="coin-badge" style={{ background: c.color }}>
                      {/* simplified icon placeholder */}
                      <span className="coin-initial">{c.code[0]}</span>
                    </div>
                    <div className="coin-name">
                      <div className="name">{c.name}</div>
                      <div className="code">{c.code}</div>
                    </div>
                  </div>

                  <div className={`small-badge ${c.trend === "up" ? "up" : "down"}`}>
                    {c.change}
                  </div>
                </div>

                <div className="mini-price">{c.price}</div>

                <div className={`mini-graph ${c.trend}`}>
                  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="spark">
                    {c.trend === "up" ? (
                      <polyline points="0,24 20,20 40,18 60,12 80,6 100,4" />
                    ) : (
                      <polyline points="0,8 20,12 40,14 60,20 80,24 100,26" />
                    )}
                  </svg>
                </div>

                <div className="mini-footer">
                  <div className="date">Tuesday, 14th October 2025</div>
                  <div className="mini-link">$23,738</div>
                </div>
              </article>
            ))}
          </div>

          {/* table header */}
          <div className="market-heading">
           <h3 className="market-heading-title">
  <FiBarChart2 className="mh-ico" /> Market Overview
</h3>

            <p className="mh-sub">Comprehensive token statistics trading information</p>
          </div>

          {/* table */}
          <div className="table-wrap">
            <table className="market-table" role="table">
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
                {tableData.map((r, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="row-name">
                        <div className="row-icon" aria-hidden>{r.icon}</div>
                        <div>
                          <div className="row-title">{r.name}</div>
                          <div className="row-sub">{r.code}</div>
                        </div>
                      </div>
                    </td>

                    <td>{r.price}</td>

                    <td className={r.trend === "up" ? "trend up" : "trend down"}>
                      {r.trend === "up" ? <FiChevronUp /> : <FiChevronDown />}
                      <span>{r.changePct}</span>
                    </td>

                    <td className={r.trend === "up" ? "trend up" : "trend down"}>
                      <span>{r.changeDollar}</span>
                    </td>

                    <td>{r.marketcap}</td>

                    <td>
                      <button className="trade-btn">Trade</button>
                    </td>
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
