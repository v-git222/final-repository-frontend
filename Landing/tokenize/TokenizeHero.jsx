import React from "react";
import illus from "../assets/preview.svg"

export default function TokenizeHero() {
  return (
    <div className="tokenize-root">
      <style>{`
      
  @font-face {
    font-family: "URWGeometric";
    src: url("/fonts/URWGeometricRegular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root{
    --page-width: 920px;
    --muted: #64748b;
    --accent-start: #2b8cff;
    --accent-end: #1b4fe0;
  }

  .tokenize-root{
    font-family: "URWGeometric", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    display:flex;
    justify-content:center;
    padding:56px 24px 72px;
    background: radial-gradient(600px 400px at 10% 10%, rgba(99,102,241,0.06), transparent 10%), 
                radial-gradient(500px 380px at 95% 90%, rgba(59,130,246,0.03), transparent 12%), 
                #ffffff;
  }

  .tokenize-container{
    width:var(--page-width);
    text-align:center;
    transform: scale(1.3);
  }

  .badge{
    display:inline-block;
    padding:6px 10px;
    background:#f1f7ff;
    color:#0b2a66;
    border-radius:8px;
    font-size:11px;
    letter-spacing:0.6px;
    margin-bottom:16px;
  }

  .heading{
    font-size:44px;
    line-height:1.02;
    font-weight:400 !important;   /* ↓ reduced */
    color:#0f1724;
    margin:8px 0 12px;
    max-width:880px;
    margin-left:auto;
    margin-right:auto;
  }

  .sub{
    color:var(--muted);
    font-size:19px;
    max-width:760px;
    margin:0 auto 22px;
  }

  .cta-row{
    display:flex;
    gap:12px;
    justify-content:center;
    margin:18px 0 26px;
  }

  .btn-primary{
    background:#152B5A;
    color:white;
    border:none;
    padding:11px 18px;
    border-radius:10px;
    font-weight:700;
    box-shadow:0 10px 30px rgba(27,79,224,0.18);
    cursor:pointer;
  }

  .btn-outline{
    background:white;
    color:#1f2937;
    border:1px solid #e6e9ef;
    padding:11px 16px;
    border-radius:10px;
    cursor:pointer;
    font-weight:700;
  }

  /* Stats card layout */
  .card {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    gap:22px;
  }

  .stat-item {
    white-space: nowrap;
  }

  .stat-value{
    font-weight:600; 
    font-size:16px; 
    color:#0f1724;
  }

  .stat-label{
    font-size:12px; 
    color:var(--muted); 
    margin-top:6px;
  }

  .hero-image{
    max-width:92%;
    height:auto;
    display:block;
    border-radius:10px;
    position:relative;
    left:5rem;
  }

  /* Responsive: Card goes into column */
  @media (max-width:980px){
    :root{ --page-width:760px }
    .heading{ font-size:36px }
    .card { flex-direction:row; gap:16px; }
  }

  @media (max-width:640px){
    :root{ --page-width:360px }
    .heading{ font-size:24px }
    .card { 
      flex-direction:column; 
      gap:8px; 
      padding:14px;
      align-items:flex-start;
    }
  }

      `}</style>

      <div className="tokenize-container">
        <div className="badge">TOKENIZE</div>

        <h1 className="heading">
          Tokenize assets — build global, Shariah-compliant investment markets
        </h1>

        <p className="sub">
          Emniq bridges real-world assets and ethical digital finance. Tokenize property, commodities, art, sukuk and more with transparent, asset-backed tokens.
        </p>

        <div className="cta-row">
          <button className="btn-primary">Start Tokenizing</button>
          <button className="btn-outline">Read Whitepaper</button>
        </div>

        <div className="card" aria-label="stats">
          <div className="stat-item">
            <div className="stat-value">100M EMN</div>
            <div className="stat-label">Total Emn supply</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">3 Tokens</div>
            <div className="stat-label">Ecosystem tokens (EMN / XMR / AVX)</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">Shariah</div>
            <div className="stat-label">Standards & Audit Ready</div>
          </div>
        </div>

        <div style={{marginTop:"10rem"}}></div>

        <img className="hero-image" src={illus} alt="Tokenize preview" />
      </div>
    </div>
  );
}
