// src/components/NewsLetterCTA.jsx
import React, { useState } from "react";
import "./NewsLetterCTA.css";

/**
 * NewsletterCTA
 * - Safe: image is optional and must be provided via `illustrationSrc` prop.
 * - Usage: <NewsletterCTA illustrationSrc={myImage} onSubscribe={(email)=>{...}} />
 */
export default function NewsletterCTA({ onSubscribe, illustrationSrc = null }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    // simple, adequate validation
    return /\S+@\S+\.\S+/.test(value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    try {
      if (onSubscribe && typeof onSubscribe === "function") {
        onSubscribe(email);
      }
      setEmail("");
      // Prefer handling UX (toast/modal) in parent. This is a minimal acknowledgement:
      alert("Thanks — you’re subscribed!");
    } catch (err) {
      console.error("subscribe error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="newsletter-outer" role="region" aria-label="Newsletter signup">
      <div className="newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-left">
            <h3 className="newsletter-title">Never Miss an Insight</h3>
            <p className="newsletter-sub">
              Join 10,000+ investors and founders getting weekly insights on
              startups, funding, and market trends.
            </p>

            {/* image is optional — only render if illustrationSrc is provided */}
            {illustrationSrc ? (
              <div className="newsletter-illustration" aria-hidden="true">
                <img src={illustrationSrc} alt="" />
              </div>
            ) : null}
          </div>

          <form className="newsletter-right" onSubmit={handleSubmit} noValidate>
            <div className="email-input" aria-hidden={false}>
              <input
                type="email"
                name="email"
                aria-label="Email address"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="subscribe-btn" aria-label="Subscribe">
              <span>Subscribe</span>
            </button>
          </form>
        </div>

        {error && (
          <div className="newsletter-error" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
