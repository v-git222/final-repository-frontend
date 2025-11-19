// File: CryptoInsights.jsx
import React, { useState } from "react";
import "./CryptoInsights.css";

export default function CryptoInsightsUpdate() {
  const [showUSD, setShowUSD] = useState(true);

  const stats = [
    { label: "Bitcoin Dominance", value: "41.5%" },
    { label: "Total Market Capitalization", value: "$2.5 T" },
    { label: "24-Hour Trading Volume", value: "$300 B" },
  ];

  const topCoins = [
    {
      iconClass: "coin-icon coin-amber",
      name: "Aurivox",
      symbol: "AVX",
      price: "$23,738",
      change: "+14.67%",
      changeUp: true,
      marketcap: "$213.8M",
    },
    {
      iconClass: "coin-icon coin-indigo",
      name: "Eminar",
      symbol: "EMN",
      price: "$23,738",
      change: "-14.67%",
      changeUp: false,
      marketcap: "$213.8M",
    },
    {
      iconClass: "coin-icon coin-emerald",
      name: "Xenara",
      symbol: "XNR",
      price: "$23,738",
      change: "+1.32%",
      changeUp: true,
      marketcap: "$245.8M",
    },
  ];

  return (
    <section className="crypto-section" aria-labelledby="crypto-heading">
      {/* Outer violet rounded frame (new CSS expects crypto-panel-outer) */}
      <div className="crypto-panel-outer">
        {/* Inner white panel */}
        <div className="crypto-panel" role="region" aria-label="crypto panel">
          <div className="crypto-frame">
            {/* Title */}
            <div className="crypto-title">
              <div className="crypto-label">Crypto Insights</div>
              <h2 id="crypto-heading" className="crypto-heading">
                Insights into the Crypto Landscape
              </h2>
              <p className="crypto-subtitle">
                Stay updated with real-time market data, trends, and analysis
                across the cryptocurrency ecosystem.
              </p>
            </div>

            {/* Fun facts / stats */}
            <div className="fun-facts" role="list" aria-label="crypto stats">
              {stats.map((s, i) => (
                <div className="fun-fact" role="listitem" key={i}>
                  <p className="stat">{s.value}</p>
                  <p className="label">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Top metric cards row */}
            <div className="metrics-row" role="list" aria-label="top coins">
              {topCoins.map((m, i) => (
                <div className="metric-card card-width-346" key={i} role="listitem" aria-label={`${m.name} card`}>
                  <div className="metric-header">
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div className={m.iconClass} aria-hidden>
                        <span className="coin-abbr">{m.symbol}</span>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div className="metric-title">{m.name}</div>
                        <div className="small-muted">{m.symbol}</div>
                      </div>
                    </div>

                    <div style={{ marginLeft: "auto" }}>
                      <div className={`change-pill ${m.changeUp ? "positive" : "negative"}`}>{m.change}</div>
                    </div>
                  </div>

                  <div className="metric-price-row" style={{ marginTop: 12 }}>
                    <div className="metric-price">{m.price}</div>
                    <div style={{ marginLeft: 12 }} className="metric-date small-muted">
                      Tuesday, 14th October 2025
                    </div>

                    {/* sparkline placeholder on the right */}
                    <div style={{ marginLeft: "auto" }} className="sparkline" aria-hidden>
                      {/* Keep this as placeholder or render an inline svg/sparkline here */}
                      <svg width="110" height="48" viewBox="0 0 110 48" fill="none" aria-hidden>
                        <path d="M6 34 C26 14 46 30 66 22 C86 14 100 18 104 16" stroke={m.changeUp ? "#10B981" : "#EF4444"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </div>
                  </div>

                  <hr className="hr" />

                  <div className="small-muted">
                    Market cap <strong style={{ color: "#121212" }}>{m.marketcap}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Market overview / table */}
            <div className="market-overview">
              <div className="market-header">
                <div className="title">Market Overview</div>
                <div className="desc">Comprehensive token statistics trading information</div>
              </div>

              <div className="market-table-wrap" role="table" aria-label="market table">
                {/* inner wrapper expected by CSS */}
                <div className="market-table-inner">
                  <table className="market-table" role="grid" aria-label="Top tokens">
                    <thead>
                      <tr>
                        <th className="table-col-name">Name</th>
                        <th className="table-col-price">Price</th>
                        <th className="table-col-change">Change(%)</th>
                        <th className="table-col-change-dollar">Change($)</th>
                        <th className="table-col-marketcap">Marketcap</th>
                        <th className="table-col-trade">Trade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topCoins.map((c, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="coin-cell">
                              <div className={`coin-icon-small ${c.iconClass.replace("coin-icon ", "")}`} aria-hidden>
                                <span className="coin-abbr">{c.symbol}</span>
                              </div>
                              <div>
                                <div className="font-semibold">{c.name}</div>
                                <div className="coin-sub small-muted">{c.symbol}</div>
                              </div>
                            </div>
                          </td>

                          <td>{c.price}</td>

                          <td>
                            <div className={`change-pill-sm ${c.changeUp ? "up" : "down"}`}>
                              {/* small arrow (svg) */}
                              {c.changeUp ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                                  <path d="M5 14L11 8L19 16" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              ) : (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                                  <path d="M19 10L13 16L5 8" stroke="#DC2626" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                              <span>{c.changeUp ? "+1.32%" : "-1.32%"}</span>
                            </div>
                          </td>

                          <td>
                            <div className={`change-pill-sm ${c.changeUp ? "up" : "down"}`}>
                              <span>{c.changeUp ? "+$0.148" : "-$0.057"}</span>
                            </div>
                          </td>

                          <td className="marketcap">{c.marketcap}</td>

                          <td style={{ textAlign: "right" }}>
                            <button className="trade-btn" aria-label={`Trade ${c.name}`}>Trade</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="market-note">
                Market data is updated in real-time. Prices are for informational purposes only and may vary across exchanges.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
