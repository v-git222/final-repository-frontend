import React from "react";
import "./buyselltokens.css";

export default function BuySellTokens() {
  return (
    <div className="bs-exchange-section">
      <h2 className="bs-exchange-title">
        Buy & Sell <span className="bs-blue-text">Tokens</span> Instantly
      </h2>

      <p className="bs-exchange-subtitle">
        Trade Emireq tokens and purchase assets with supported payment methods.
      </p>

      <div className="bs-exchange-grid">

        {/* BUY CARD */}
        <div className="bs-card bs-buy-card">
          <div className="bs-card-header">
            <span className="bs-icon bs-green-icon"></span>
            Buy Tokens
          </div>

          <p className="bs-card-description">
            Select an Emireq token and purchase using supported payment methods.
          </p>

          <label className="bs-label">Select Token</label>
          <select className="bs-input">
            <option>Emirar (EMR)</option>
          </select>

          <label className="bs-label">Amount to Buy</label>
          <input className="bs-input" placeholder="0.00" />

          <label className="bs-label">Payment Method</label>
          <div className="bs-payment-options">
            <button className="bs-payment-btn bs-active">Card</button>
            <button className="bs-payment-btn">Bank</button>
            <button className="bs-payment-btn">Crypto</button>
          </div>

          <div className="bs-info-box bs-blue-info">
            Instant Settlement: Tokens will be transferred to your wallet immediately after payment confirmation.
          </div>

          <button className="bs-primary-btn">Buy Now</button>
        </div>

        {/* SELL CARD */}
        <div className="bs-card bs-sell-card bs-bysell-card">
          <div className="bs-card-header">
            <span className="bs-icon bs-blue-icon"></span>
            Sell Tokens
          </div>

          <p className="bs-card-description">
            Convert your tokens back to fiat or crypto instantly.
          </p>

          <label className="bs-label">Select Token</label>
          <select className="bs-input">
            <option>Emirar (EMR)</option>
          </select>

          <label className="bs-label">Amount to Sell</label>
          <input className="bs-input" placeholder="0.00" />

          <label className="bs-label">Receive In</label>
          <select className="bs-input">
            <option>USD (Bank Transfer)</option>
          </select>

          <div className="bs-estimate-box">
            <div className="bs-estimate-row">
              <span>Estimated Value</span>
              <span>$0.00</span>
            </div>
            <div className="bs-estimate-row bs-fee-row">
              <span>Network Fee</span>
              <span>~$2.50</span>
            </div>
          </div>

          <div className="bs-info-box bs-orange-info">
            Processing Time: Bank transfers take 2–3 business days. Crypto transfers are instant.
          </div>

          <button className="bs-primary-btn">Sell Now</button>
        </div>

      </div>
    </div>
  );
}
