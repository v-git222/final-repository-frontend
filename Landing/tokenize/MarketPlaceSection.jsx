import React from "react";
import "./marketplace.css";

/*
  Note: This component expects the URW Geometric font files to be available
  and loaded via the CSS @font-face block in Marketplace.css (see placeholder).
  Replace the font URLs in the CSS with the actual font file paths (woff2/woff).
*/

export default function Marketplace() {
  return (
    <main className="mk-page" aria-label="Marketplace - Tokenized Assets">
      <header className="mk-hero">
        <div className="mk-hero__tag" role="note" aria-hidden="false">
          <svg className="mk-hero__tag-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="mk-hero__tag-text">LIVE OPPORTUNITIES</span>
        </div>

        <h1 className="mk-hero__title">
          Marketplace - Features <span className="mk-hero__accent">Tokenized</span> Assets
        </h1>

        <p className="mk-hero__subtitle">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae
          suspendisse parturient sed lorem eu.
        </p>
      </header>

      <section className="mk-cards" aria-label="Opportunities cards">
        <article className="mk-card" tabIndex={0}>
          <div className="mk-card__top">
            <div className="mk-icon mk-icon--mint" aria-hidden="true">
              {/* replace with svg/icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="6" /><path d="M8 16v-6h8v6" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="mk-badge mk-badge--green">Live</span>
          </div>

          <h3 className="mk-card__title">Real Estate – Dubai Marina</h3>

          <div className="mk-card__meta">
            <span className="mk-tag">Real Estate</span>
            <div className="mk-location" aria-hidden="false">📍 Dubai, UAE</div>
          </div>

          <button className="mk-btn" type="button" aria-label="View profile for Real Estate Dubai Marina">
            <svg className="mk-btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Profile
          </button>
        </article>

        <article className="mk-card" tabIndex={0}>
          <div className="mk-card__top">
            <div className="mk-icon mk-icon--purple" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="6" /><path d="M8 12h8" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="mk-badge mk-badge--orange">Raising</span>
          </div>

          <h3 className="mk-card__title">Startup – FinTech (KSA)</h3>

          <div className="mk-card__meta">
            <span className="mk-tag">Technology</span>
            <div className="mk-location">📍 Riyadh, KSA</div>
          </div>

          <button className="mk-btn" type="button" aria-label="View profile for Startup FinTech KSA">
            <svg className="mk-btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Profile
          </button>
        </article>

        <article className="mk-card" tabIndex={0}>
          <div className="mk-card__top">
            <div className="mk-icon mk-icon--green" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="6" /><path d="M12 7v10" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="mk-badge mk-badge--blue">Pre-Sale</span>
          </div>

          <h3 className="mk-card__title">Sukuk Green Project – Indonesia</h3>

          <div className="mk-card__meta">
            <span className="mk-tag">Green Investment</span>
            <div className="mk-location">📍 Jakarta, Indonesia</div>
          </div>

          <button className="mk-btn" type="button" aria-label="View profile for Sukuk Green Project Indonesia">
            <svg className="mk-btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View Profile
          </button>
        </article>
      </section>


    </main>
  );
}
