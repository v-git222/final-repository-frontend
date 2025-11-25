import React from "react";
import "./testimonials.css";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="11" fill="#10B981" />
    <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" fill="none" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z"
      fill="#FACC15"/>
  </svg>
);

function TestimonialCard({ initials, name, role, text, location, raised }) {
  return (
    <div className="t-card">

      {/* Profile Section */}
      <div className="t-profile">
        <div className="t-initials">{initials}</div>

        <div className="t-profile-info">
          <div className="t-name">{name}</div>
          <div className="t-role">{role}</div>
        </div>

        <div className="t-verify">
          <CheckIcon />
        </div>
      </div>

      {/* Testimonial text */}
      <p className="t-text">{text}</p>

      {/* Footer row */}
      <div className="t-footer">
        <div className="t-location">
          <LocationIcon /> {location}
        </div>
        <div className="t-raised">Raised {raised}</div>
      </div>

    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="t-wrapper">

      <div className="t-header-badge">Success Stories</div>

      <h1 className="t-title">
        Trusted by Entrepreneurs <br />
        <span className="yellow">Worldwide</span>
      </h1>

      <p className="t-subtitle">
        See how Emireq helped businesses raise capital and grow
      </p>

      <div className="t-grid">
        <TestimonialCard
          initials="SA"
          name="Sarah Ahmed"
          role="CEO, FinTech Startup"
          text={`"Emireq helped us connect with the right investors in just 2 weeks. 
We raised $3M in Series A funding. The platform is incredibly intuitive 
and the investor quality is outstanding."`}
          location="Dubai"
          raised="$3M"
        />

        <TestimonialCard
          initials="MR"
          name="Mohammed Al-Rashid"
          role="Founder, HealthTech"
          text={`"The investor directory is comprehensive and easy to use. 
Found our lead investor through the platform. The verification process 
ensures high-quality connections."`}
          location="Riyadh"
          raised="$1.5M"
        />

        <TestimonialCard
          initials="DC"
          name="David Chen"
          role="CEO, AI Company"
          text={`"Best platform for connecting with Shariah-compliant investors. 
Highly recommend for MENA expansion. The analytics features are game-changing."`}
          location="San Francisco"
          raised="$5M"
        />
      </div>

    </section>
  );
}
