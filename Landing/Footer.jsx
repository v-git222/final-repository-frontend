import React from "react";
import "./Footer.css";
import {
  FiTwitter,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiInstagram
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* BRANDING */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="footer-logo-img"
            />
          </div>

          <p className="brand-desc">
            Commodo nec mi id ullamcorper vitae augue neque dis.
          </p>

          <div className="footer-social">
            <a><FiTwitter /></a>
            <a><FiFacebook /></a>
            <a><FiLinkedin /></a>
            <a><FiYoutube /></a>
            <a><FiInstagram /></a>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="footer-col">
          <h4>Products</h4>
          <a>Tokenization</a>
          <a>Marketplace</a>
          <a>How it works</a>
          <a>Startups</a>
        </div>

        {/* RESOURCES */}
        <div className="footer-col">
          <h4>Resources</h4>
          <a>Learn & Explore</a>
          <a>Insights</a>
          <a>Investment guide</a>
          <a>FAQ</a>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <a>About us</a>
          <a>Careers</a>
          <a>Press & Media</a>
          <a>Blog</a>
          <a>Contact Us</a>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <a>Help Center</a>
          <a>Security & Trust</a>
          <a>Disclaimer</a>
        </div>

      </div>

      <div className="footer-divider" />

      {/* NEWSLETTER */}
      <div className="footer-newsletter">
        <div className="newsletter-left">
          <h3>Stay in the loop</h3>
          <p>Subscribe to our newsletter for the latest crypto insights and market updates.</p>
        </div>

        <div className="newsletter-right">
          <input className="newsletter-input" placeholder="Enter your email" />
          <button className="newsletter-btn">Subscribe</button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2025 EMIREQ. All rights reserved.</p>

        <div className="footer-links">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
