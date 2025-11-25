import React from "react";

export default function HowTokenizationWorks() {
  const styles = {
    wrapper: {
      width: "100%",
      padding: "80px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#ffffff",
    },

    processLabel: {
      fontSize: "14.4px",   // 12px → +20%
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#d1a400",
      marginBottom: "10px",
    },

    heading: {
      fontSize: "59.2px",  // 36px → +20%
      fontWeight: "600",
      color: "#0b0d17",
      marginBottom: "14px",
      textAlign: "center",
    },

    subheading: {
      fontSize: "19.2px",   // 16px → +20%
      color: "#6d6f7b",
      marginBottom: "60px",
      textAlign: "center",
      maxWidth: "800px",
    },

    stepsRow: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      marginBottom: "80px",
    },

    stepCard: {
      flex: 1,
      background: "#ffffff",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.06)",
      padding: "32px",
      minHeight: "200px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    },

    stepIndicator: (bg) => ({
      width: "46px",
      height: "46px",
      borderRadius: "12px",
      background: bg,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontWeight: 700,
      fontSize: "21.6px", // 18px → +20%
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }),

    stepTitle: {
      fontSize: "21.6px",  // 18px → +20%
      fontWeight: 600,
      color: "#101828",
    },

    stepText: {
      fontSize: "16.8px",  // 14px → +20%
      color: "#6a7282",
      lineHeight: "24px",
    },

    ctaBox: {
      width: "100%",
      maxWidth: "1200px",
      background: "linear-gradient(90deg, #092659, #0d2f6d, #0b407e)",
      borderRadius: "20px",
      padding: "70px 60px",
      color: "#ffffff",
      textAlign: "center",
      marginBottom: "90px",
      boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
    },

    ctaHeading: {
      fontSize: "33.6px", // 28px → +20%
      fontWeight: 700,
      marginBottom: "12px",
    },

    ctaSub: {
      fontSize: "19.2px", // 16px → +20%
      opacity: 0.85,
      marginBottom: "30px",
    },

    ctaButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "18px",
      marginTop: "20px",
    },

    yellowBtn: {
      background: "#FFC940",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "19.2px", // 16px → +20%
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },

    outlineBtn: {
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.5)",
      padding: "16px 32px",
      borderRadius: "12px",
      fontSize: "19.2px",
      fontWeight: 500,
      cursor: "pointer",
      color: "#fff",
    },

    featuresRow: {
      width: "100%",
      maxWidth: "1100px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
    },

    featureCard: {
      background: "#ffffff",
      borderRadius: "16px",
      padding: "32px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },

    featureIcon: (bg) => ({
      width: "46px",
      height: "46px",
      borderRadius: "12px",
      background: bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
    }),

    featureTitle: {
      fontSize: "21.6px", // 18px → +20%
      fontWeight: 600,
      color: "#101828",
    },

    featureText: {
      fontSize: "16.8px", // 14px → +20%
      color: "#6a7282",
      lineHeight: "22px",
    },
  };

  return (
    <div className="use-urw" style={styles.wrapper}>
      {/* FONT LOADER */}
      <style>
        {`
        @font-face {
          font-family: "URWGeometric";
          src: url("/fonts/URWGeometricRegular.otf") format("opentype");
          font-weight: 400;
          font-style: normal;
        }
        .use-urw * {
          font-family: "URWGeometric", sans-serif !important;
        }
      `}
      </style>

      {/* LABEL */}
      <div style={styles.processLabel}>SIMPLE PROCESS</div>

      {/* HEADING */}
      <div style={styles.heading}>How Tokenization Works</div>

      <div style={styles.subheading}>
        Four simple steps to transform your real-world assets into digital tokens
      </div>

      {/* STEPS */}
      <div style={styles.stepsRow}>

        <div style={styles.stepCard}>
          <div style={styles.stepIndicator("#3B82F6")}>1</div>
          <div style={styles.stepTitle}>Submit Asset</div>
          <div style={styles.stepText}>Upload documents, valuation, compliance forms</div>
        </div>

        <div style={styles.stepCard}>
          <div style={styles.stepIndicator("#A855F7")}>2</div>
          <div style={styles.stepTitle}>Due Diligence</div>
          <div style={styles.stepText}>KYC, Shariah & legal compliance reviews</div>
        </div>

        <div style={styles.stepCard}>
          <div style={styles.stepIndicator("#22C55E")}>3</div>
          <div style={styles.stepTitle}>Tokenize</div>
          <div style={styles.stepText}>Audited smart contracts ensure total transparency</div>
        </div>

        <div style={styles.stepCard}>
          <div style={styles.stepIndicator("#F97316")}>4</div>
          <div style={styles.stepTitle}>Launch & Manage</div>
          <div style={styles.stepText}>Offer tokens, track holders, distribute profit-share</div>
        </div>

      </div>

      {/* CTA */}
      <div style={styles.ctaBox}>
        <div style={styles.ctaHeading}>Ready to Tokenize Your Assets?</div>
        <div style={styles.ctaSub}>
          Join hundreds of asset owners leveraging blockchain for transparent, Shariah-compliant investments
        </div>

        <div style={styles.ctaButtons}>
          <button style={styles.yellowBtn}>Get Started →</button>
          <button style={styles.outlineBtn}>Schedule a Demo</button>
        </div>
      </div>

      {/* FEATURES */}
      <div style={styles.featuresRow}>

        <div style={styles.featureCard}>
          <div style={styles.featureIcon("#ECFDF5")}>✔</div>
          <div style={styles.featureTitle}>Shariah Compliant</div>
          <div style={styles.featureText}>All processes reviewed and approved by Islamic scholars</div>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.featureIcon("#EEF2FF")}>🛡</div>
          <div style={styles.featureTitle}>Fully Audited</div>
          <div style={styles.featureText}>Smart contracts audited by top blockchain security firms</div>
        </div>

        <div style={styles.featureCard}>
          <div style={styles.featureIcon("#F9F5FF")}>🌍</div>
          <div style={styles.featureTitle}>Global Access</div>
          <div style={styles.featureText}>Trade any time, anywhere, with instant settlement</div>
        </div>

      </div>
    </div>
  );
}
