import React from "react";
import "./HowThisWorks.css";
import mockup from "../assets/mockup.png"; // UPDATED

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" stroke="#7C3AED" strokeWidth="2" fill="none" />
    <line x1="16" y1="16" x2="21" y2="21" stroke="#7C3AED" strokeWidth="2" />
  </svg>
);

const ReviewIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="7" stroke="#2563EB" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="3" fill="#2563EB" />
  </svg>
);

const ConnectIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M5 12h14" stroke="#16A34A" strokeWidth="2" />
    <path d="M12 5v14" stroke="#16A34A" strokeWidth="2" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" stroke="#22C55E" strokeWidth="2" fill="none"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" stroke="#2563EB" strokeWidth="2" fill="none" />
    <path d="M3 12h18" stroke="#2563EB" strokeWidth="2" />
    <path d="M12 3c3 4 3 14 0 18" stroke="#2563EB" strokeWidth="2" />
  </svg>
);

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="#A855F7" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" fill="#A855F7"/>
  </svg>
);

export default function HowThisWorks() {
  return (
    <section className="htw-wrapper">

      {/* Heading */}
      <div className="htw-heading">
        <span className="htw-tag">SIMPLE PROCESS</span>
        <h1 className="htw-title">How This Works</h1>
        <p className="htw-subtitle">
          Connect with the right investors in three simple steps
        </p>
      </div>

      {/* Three Steps */}
      <div className="htw-steps">
        <div className="htw-step-card">
          <div className="htw-icon purple"><SearchIcon /></div>
          <h3>Search & Filter</h3>
          <p>Use our advanced filters to find investors that match your industry, stage, and funding needs.</p>
        </div>

        <div className="htw-step-card">
          <div className="htw-icon blue"><ReviewIcon /></div>
          <h3>Review Profiles</h3>
          <p>Explore detailed investor profiles with portfolio companies, investment preferences, and contact information.</p>
        </div>

        <div className="htw-step-card">
          <div className="htw-icon green"><ConnectIcon /></div>
          <h3>Connect & Pitch</h3>
          <p>Reach out directly through our platform or attend meetup events to present your opportunity.</p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="htw-cta">
        <div className="htw-cta-left">
          <button className="cta-badge">Join Emireq Today</button>

          <h2>Ready to Connect with Global Investors?</h2>

          <p>
            Join thousands of entrepreneurs and businesses who have successfully raised
            capital through the Emireq platform. Start your journey today.
          </p>

          <div className="cta-buttons">
            <button className="btn-primary">Get Started →</button>
            <button className="btn-outline">Schedule a Demo</button>
          </div>
        </div>

        <div className="htw-cta-right">
          <img src={mockup} alt="Dashboard mockup" />
        </div>
      </div>

      {/* Bottom Feature cards */}
      <div className="htw-features">

        <div className="htw-feature-card">
          <div className="ft-icon green"><ShieldIcon /></div>
          <h3>Verified Investors Only</h3>
          <p>Every investor profile is thoroughly verified and validated by our team.</p>
        </div>

        <div className="htw-feature-card">
          <div className="ft-icon blue"><GlobeIcon /></div>
          <h3>Global Network</h3>
          <p>Access investors from 45+ countries across 6 continents.</p>
        </div>

        <div className="htw-feature-card">
          <div className="ft-icon purple"><SupportIcon /></div>
          <h3>24/7 Support</h3>
          <p>Round-the-clock customer support to help you succeed.</p>
        </div>

      </div>

    </section>
  );
}
