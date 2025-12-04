import React from "react";
import "./EmireqToken.css";

const tokens = [
  {
    symbol: "EMR",
    name: "Eminar",
    tag: "EMRERC",
    color: "#FFEFBF",
    badgeColor: "#F7D054",
    supply: "500M (EMR)",
    primaryUse: "Governance + staking",
    smartLogic: "ERC-20 basic",
  },
  {
    symbol: "XNR",
    name: "Xenara",
    tag: "XNRERC",
    color: "#F1D9FF",
    badgeColor: "#CB8CFF",
    supply: "200,000,000",
    primaryUse: "NFT minting & purchases",
    smartLogic: "ERC-20 + ERC-721 integrations",
  },
  {
    symbol: "AVX",
    name: "Aurivox",
    tag: "AVXERC",
    color: "#DDEBFF",
    badgeColor: "#88B8FF",
    supply: "200,000,000",
    primaryUse: "Collateral for RWA, real-estate, fractional shares",
    smartLogic: "ERC-20 with fractional logic",
  },
];

export default function EmireqToken() {
  return (
    <div className="token-page">
      {/* Header */}
      <div className="token-header">
        <span className="token-ecosystem-tag">TOKEN ECOSYSTEM</span>
        <h1 className="token-title">
          Emireq <span className="blue">Token</span>
        </h1>
        <p className="token-subtitle">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
          viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>
      </div>

 <div className="token-grid">
  {tokens.map((t) => (
    <div
      key={t.symbol}
      className="token-card"
      style={{
        background: `linear-gradient(to bottom, ${t.color} 0%, ${t.color} 8%, white 8%)`
      }}
    >
      <div className="token-card-header">
        <span
          className="token-badge"
          style={{ backgroundColor: t.badgeColor }}
        >
          {t.symbol}
        </span>

        <div className="token-name-row">
          <h2>{t.name}</h2>
          <span className="token-tag">{t.tag}</span>
        </div>
      </div>

      <p className="token-desc">
        {t.symbol === "EMR" &&
          "Core governance and staking token — used for ecosystem payments, staking and DAO automation."}
        {t.symbol === "XNR" &&
          "NFT & Digital-asset token — powers halal NFT art + culture + minting — quality focus."}
        {t.symbol === "AVX" &&
          "Real-world asset token — used in Shariah-compliant real-estate + commodity profit-sharing models."}
      </p>

      <div className="token-info-box">
        <span>Total {t.symbol} Supply</span>
        <strong>{t.supply}</strong>
      </div>

      <div className="info-pair">
        <div>
          <label>Primary Use</label>
          <p>{t.primaryUse}</p>
        </div>

        <div>
          <label>Smart Logic</label>
          <p>{t.smartLogic}</p>
        </div>
      </div>

      <div className="actions">
        <button className="outline-btn">View Details</button>
        <button className="solid-btn">Buy / Mint</button>
      </div>
    </div>
  ))}
</div>

      <div style={{marginTop:"5rem"}}></div>
    
      {/* Footer Strategy Box */}
    <div class="strategy-box">
  <div class="icon-circle">
   
  </div>

  <div>
    <h4>Multi–Token Strategy</h4>
    <p>
      Each token serves a specific purpose in the Emireq ecosystem. EMR for governance, XNR for NFTs
      and digital assets, and AVX for real-world asset tokenization. This separation ensures clarity,
      compliance, and optimal utility across all use cases.
    </p>
  </div>
</div>

    </div>
  );
}
