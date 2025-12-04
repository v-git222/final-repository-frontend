// TrendingCompanies.jsx
import React, { useEffect, useRef, useState } from "react";
import "./trending.css";
import FOOTER_LOGO from "../assets/logo.png"
import Footer from "../about/Footer";


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
      <div style={{marginTop:"25rem"}}></div>
<Footer/>
    </div>
  );
}
