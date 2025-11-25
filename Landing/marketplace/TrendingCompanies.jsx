// TrendingCompanies.jsx
import React, { useEffect, useRef, useState } from "react";
import "./trending.css";
import FOOTER_LOGO from "../assets/logo.png"
// Local uploaded image (you provided)
// const FOOTER_LOGO = "/mnt/data/6111c510-3270-43b0-bb2d-b02e31e73d13.png";

const companies = [
  { id: 1, initials: "DS", name: "DataSync Pro", rating: "4.8", clients: "2,500+", badge: "Top", },
  { id: 2, initials: "CF", name: "CloudForge", rating: "4.9", clients: "3,200+", badge: "Top", },
  { id: 3, initials: "DM", name: "DevOps Masters", rating: "4.7", clients: "1,800+", badge: "Top", },
  { id: 4, initials: "AI", name: "Aether Insights", rating: "4.6", clients: "1,200+", badge: "", },
  { id: 5, initials: "NX", name: "Nexus Data", rating: "4.5", clients: "1,000+", badge: "", },
];

export default function TrendingCompanies() {
  const [index, setIndex] = useState(0);
  const slidesToShow = 3; // desktop, adjust with CSS for smaller viewports
  const total = companies.length;
  const autoplayRef = useRef(null);

  // Next / Prev handlers (looping)
  function goNext() {
    setIndex((i) => (i + 1) % total);
  }
  function goPrev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function goTo(i) {
    setIndex(i % total);
  }

  // autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4500);
    return () => clearInterval(autoplayRef.current);
  }, [total]);

  // pause on hover
  const sliderRef = useRef(null);
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onEnter = () => clearInterval(autoplayRef.current);
    const onLeave = () => {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => setIndex((i) => (i + 1) % total), 4500);
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [total]);

  // compute translate for slider inner — we show slidesToShow visible; but we center by index
  // We'll compute a visual index offset so selected index card appears centered when possible.
  const computeTranslatePercent = () => {
    // Show slidesToShow cards; each card is (100 / slidesToShow)%
    // Move so that index is placed at leftmost visible slot (for simplicity)
    // But to mimic screenshot (three cards centered with dots) we position by index * (100 / slidesToShow)
    return -(index * (100 / slidesToShow));
  };

  return (
    <div className="trending-wrap">
      {/* Font-face injection (component-local CSS also contains font-face but keep this safe) */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('./URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        `}
      </style>

      <header className="trending-header">
        <div className="breadcrumb">TOP COMPANIES</div>
        <h1 className="trending-title">
          Trending <span className="blue">Companies</span>
        </h1>
        <p className="trending-sub">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
          viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>
      </header>

      <section className="carousel-section">
        <h3 className="section-label">Top IT Vendors</h3>

        <div className="carousel-shell" ref={sliderRef}>
          <button className="nav-arrow left" aria-label="Previous" onClick={goPrev}>
            ‹
          </button>

          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                width: `${(100 / slidesToShow) * total}%`,
                transform: `translateX(${computeTranslatePercent()}%)`,
              }}
            >
              {companies.map((c) => (
                <article className="company-card" key={c.id}>
                  <div className="card-initials">{c.initials}</div>
                  <h4 className="company-name">{c.name}</h4>

                  <div className="company-meta">
                    <div className="rating">★ {c.rating} rating</div>
                    <div className="clients">{c.clients} clients</div>
                  </div>

                  <button className="view-btn">View Profile →</button>
                </article>
              ))}
            </div>
          </div>

          <button className="nav-arrow right" aria-label="Next" onClick={goNext}>
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="dots">
          {companies.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* FOOTER (matches screenshot) */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={FOOTER_LOGO} alt="emireq" className="footer-logo" />
            <p>Commodo nec mi id ullamcorper vitae augue neque dis.</p>
         <div className="socials">
  <a>
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 2c-2.63 0-4.77 2.13-4.77 4.76 0 .37.04.73.12 1.07A13.13 13.13 0 013 3.16a4.76 4.76 0 001.47 6.36A4.4 4.4 0 012 9.1v.06c0 2.23 1.6 4.09 3.72 4.51a4.52 4.52 0 01-2.15.08 4.77 4.77 0 004.45 3.29A9 9 0 012 19.54 12.77 12.77 0 008.29 21c7.55 0 11.68-6.15 11.68-11.5 0-.17 0-.35-.01-.52A8.1 8.1 0 0023 3z"/>
    </svg>
  </a>

  <a>
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.408.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.408 24 24 23.408 24 22.674V1.326C24 .593 23.408 0 22.675 0z"/>
    </svg>
  </a>

  <a>
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-9.3 18H6.1V9h3.7v9zm-1.8-10.3c-1.2 0-2-.8-2-1.8s.8-1.8 2-1.8 2 .8 2 1.8-.8 1.8-2 1.8zM20 18h-3.7v-4.8c0-1.2-.4-2-1.6-2-.9 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V18H9.4V9h3.6v1.3c.5-.8 1.3-1.6 2.9-1.6 2.1 0 3.8 1.3 3.8 4.2V18z"/>
    </svg>
  </a>

  <a>
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z"/>
    </svg>
  </a>

  <a>
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .8 1.3 1.3.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.8 1-1.3 1.3-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.8-1.3-1.3-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.8-1 1.3-1.3.5-.3 1.2-.5 2.4-.6 1.3-.1 1.7-.1 4.9-.1zM12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.6a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
    </svg>
  </a>
</div>

          </div>

          <div className="footer-links">
            <div className="col">
              <h5>Products</h5>
              <a>Tokenization</a>
              <a>Marketplace</a>
              <a>How it works</a>
              <a>Startups</a>
            </div>

            <div className="col">
              <h5>Resources</h5>
              <a>Learn & Explore</a>
              <a>Insights</a>
              <a>Investment guide</a>
              <a>FAQ</a>
            </div>

            <div className="col">
              <h5>Company</h5>
              <a>About us</a>
              <a>Careers</a>
              <a>Press & Media</a>
              <a>Blog</a>
            </div>

            <div className="col">
              <h5>Support</h5>
              <a>Help Center</a>
              <a>Security & Trust</a>
              <a>Disclaimer</a>
            </div>
          </div>
        </div>

        <div className="footer-subscribe">
          <div className="subscribe-left">
            <h4>Stay in the loop</h4>
            <p>Subscribe to our newsletter for the latest insights and market updates.</p>
          </div>
          <div className="subscribe-right">
            <input className="subscribe-input" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2025 EMIREQ. All rights reserved.</div>
          <div className="legal-links">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
