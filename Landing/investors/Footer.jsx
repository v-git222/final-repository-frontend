import React from "react";
import FOOTER_LOGO from "../assets/logo.png"
export default function Footer() {
  const styles = {
    wrapper: {
      width: "100%",
      padding: "80px 40px",
      background: "#ffffff",
      fontFamily: "URWGeometric, sans-serif",
    },

    fontLoader: {
      __html: `
        @font-face {
          font-family: "URWGeometric";
          src: url("/font/URWGeometricRegular.otf") format("opentype");
          font-weight: 400;
        }
        .use-urw * { font-family: "URWGeometric", sans-serif !important; }
      `,
    },

    topRow: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
      gap: "30px",
      maxWidth: "1300px",
      margin: "0 auto 70px auto",
      alignItems: "flex-start",
    },

    brandBlock: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },

    brandLogo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "34px",
      fontWeight: 700,
      color: "#263243",
    },

    brandText: {
      fontSize: "19px",
      color: "#6d6f7b",
      maxWidth: "360px",
      lineHeight: "26px",
    },

    socialRow: {
      display: "flex",
      gap: "14px",
      marginTop: "10px",
    },

    socialCircle: {
      width: "44px",
      height: "44px",
      background: "#f5f5f5",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },

    colTitle: {
      fontSize: "19px",
      fontWeight: 600,
      marginBottom: "18px",
      color: "#0f1724",
    },

    colItem: {
      fontSize: "17px",
      color: "#5b6777",
      marginBottom: "12px",
      cursor: "pointer",
    },

    divider: {
      width: "100%",
      height: "1px",
      background: "#e8e8e8",
      margin: "50px 0",
    },

    newsletterRow: {
      display: "grid",
      gridTemplateColumns: "1fr 560px 160px",
      alignItems: "center",
      gap: "20px",
      maxWidth: "1300px",
      margin: "0 auto 80px auto",
    },

    newsTitle: {
      fontSize: "28px",
      fontWeight: 600,
      marginBottom: "10px",
      color: "#0f1724",
    },

    newsDesc: {
      fontSize: "17px",
      color: "#6d6f7b",
      lineHeight: "24px",
    },

    emailInput: {
      width: "100%",
      padding: "18px 20px",
      borderRadius: "12px",
      fontSize: "17px",
      border: "1px solid #e6e6e6",
      outline: "none",
      background: "#fafafa",
    },

    subscribeBtn: {
      background: "#FFC400",
      padding: "18px 24px",
      borderRadius: "12px",
      fontSize: "17px",
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
    },

    bottomRow: {
      maxWidth: "1300px",
      margin: "30px auto 0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#6d6f7b",
      fontSize: "17px",
    },

    policyLinks: {
      display: "flex",
      gap: "30px",
      fontSize: "17px",
      cursor: "pointer",
    },
  };

  // Inline SVG icons (outline style) matching minimal look
  const SvgTwitter = () => (
    <svg width="18" height="14" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 2.999c-.8.4-1.6.7-2.5.8.9-.5 1.6-1.3 1.9-2.3-.8.5-1.7.9-2.6 1.1C19.2 1.6 18 1 16.7 1c-2 0-3.6 1.6-3.6 3.6 0 .3 0 .7.1 1C9.6 5.6 6.5 3.9 4.4 1.4c-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.6 1.7 3.4-.7 0-1.4-.2-2-.6v.1c0 2 1.4 3.6 3.3 4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.2 4.2 3.2C7.9 17.3 5.6 18 3 18c-.4 0-.8 0-1.2-.1C1.8 19.4 4.1 20 6.6 20c7.9 0 12.3-6.6 12.3-12.3v-.6C20.8 4.6 22 3.9 23 2.999z" stroke="#0F1724" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SvgFacebook = () => (
    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 0H6.5C4.6 0 3 1.6 3 3.6V6H1v3h2v8h3v-8h2.1l.4-3H6V3.6c0-.5.4-1.1 1.1-1.1H9V0z" stroke="#0F1724" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SvgLinkedIn = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.98 3.5a2.13 2.13 0 11.001 4.26 2.13 2.13 0 01-.001-4.26zM3 8.75h4v12.5H3V8.75zM10.5 8.75h3.8v1.7h.1c.5-.9 1.7-1.8 3.6-1.8 3.9 0 4.6 2.6 4.6 6v7.6h-4v-6.7c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5v6.8h-4V8.75z" stroke="#0F1724" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const SvgYouTube = () => (
    <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 4.5s-.2-1.6-.8-2.2c-.8-.9-1.7-.9-2.1-1C16.9 1 12 1 12 1s-4.9 0-8.1.3c-.4 0-1.3.1-2.1 1C1.1 2.9 1 4.5 1 4.5S1 6.3 1 8.1v.8c0 1.8 0 3.6 0 3.6s.2 1.6.8 2.2c.8.9 1.9.9 2.4 1 1.7.3 7.1.3 7.1.3s4.9 0 8.1-.3c.4 0 1.3-.1 2.1-1 .6-.6.8-2.2.8-2.2s.1-1.8.1-3.6v-.8c0-1.8-.1-3.6-.1-3.6z" stroke="#0F1724" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 8.5l6 3.3V5.2L10 8.5z" stroke="#0F1724" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SvgInstagram = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="#0F1724" strokeWidth="0.9" />
      <path d="M8 12a4 4 0 108 0 4 4 0 00-8 0z" stroke="#0F1724" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 6.5h.01" stroke="#0F1724" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="use-urw" style={styles.wrapper}>
      <style dangerouslySetInnerHTML={styles.fontLoader} />

      <div style={styles.topRow}>
        <div style={styles.brandBlock}>
          <div style={styles.brandLogo}>
           <img src={FOOTER_LOGO} />
          </div>

          <div style={styles.brandText}>
            Commodo nec mi id ullamcorper vitae augue neque dis.
          </div>

          <div style={styles.socialRow}>
            <div style={styles.socialCircle}><SvgTwitter /></div>
            <div style={styles.socialCircle}><SvgFacebook /></div>
            <div style={styles.socialCircle}><SvgLinkedIn /></div>
            <div style={styles.socialCircle}><SvgYouTube /></div>
            <div style={styles.socialCircle}><SvgInstagram /></div>
          </div>
        </div>

        <div>
          <div style={styles.colTitle}>Products</div>
          <div style={styles.colItem}>Tokenization</div>
          <div style={styles.colItem}>Marketplace</div>
          <div style={styles.colItem}>How it works</div>
          <div style={styles.colItem}>Startups</div>
        </div>

        <div>
          <div style={styles.colTitle}>Resources</div>
          <div style={styles.colItem}>Learn & Explore</div>
          <div style={styles.colItem}>Insights</div>
          <div style={styles.colItem}>Investment guide</div>
          <div style={styles.colItem}>FAQ</div>
        </div>

        <div>
          <div style={styles.colTitle}>Company</div>
          <div style={styles.colItem}>About us</div>
          <div style={styles.colItem}>Careers</div>
          <div style={styles.colItem}>Press & Media</div>
          <div style={styles.colItem}>Blog</div>
          <div style={styles.colItem}>Contact Us</div>
        </div>

        <div>
          <div style={styles.colTitle}>Support</div>
          <div style={styles.colItem}>Help Center</div>
          <div style={styles.colItem}>Security & Trust</div>
          <div style={styles.colItem}>Disclaimer</div>
        </div>
      </div>

      <div style={styles.divider} />

      <div style={styles.newsletterRow}>
        <div>
          <div style={styles.newsTitle}>Stay in the loop</div>
          <div style={styles.newsDesc}>Subscribe to our newsletter for the latest crypto insights and market updates.</div>
        </div>

        <input style={styles.emailInput} placeholder="Enter your email" />

        <button style={styles.subscribeBtn}>Subscribe</button>
      </div>

      <div style={styles.bottomRow}>
        <div>© 2025 EMIREQ. All rights reserved.</div>

        <div style={styles.policyLinks}>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
}
