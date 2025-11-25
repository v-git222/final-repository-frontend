import React from "react";

export default function InvestorSection() {
  const styles = {
    wrapper: {
      width: "100%",
      padding: "120px 20px",
      background: "transparent",
      textAlign: "center",
      fontFamily: "URWGeometric, sans-serif",
    },

    fontLoader: {
      __html: `
        @font-face {
          font-family: "URWGeometric";
          src: url("/fonts/URWGeometricRegular.otf") format("opentype");
          font-weight: 700;
        }
      `,
    },

    tag: {
      display: "inline-block",
      background: "#f5f6fa",
      borderRadius: "6px",
      padding: "6px 14px",
      fontSize: "14px",
      fontWeight: 600,
      color: "#5b5d6a",
      marginBottom: "22px",
    },

    title: {
      fontSize: "98px",
      fontWeight: 700,
      color: "#0f1724",
      lineHeight: "1.2",
      marginBottom: "20px",
    },

    subtitle: {
      fontSize: "30px",
      color: "#5c6274",
      maxWidth: "900px",
      margin: "0 auto",
      lineHeight: "30px",
      fontWeight: 400,
      marginBottom: "80px", // ⬅ INCREASED SPACE HERE
    },

    divider: {
      width: "60%",
      height: "1px",
      background: "#e5e6ed",
      margin: "0 auto 80px auto", // ⬅ Also increased
    },

    statsRow: {
      display: "flex",
      justifyContent: "center",
      gap: "140px",
      marginTop: "40px", // ⬅ Additional spacing before stats
    },

    statBlock: {
      textAlign: "center",
    },

    statNumber: {
      fontSize: "34px",
      fontWeight: 700,
      color: "#0f1724",
      marginBottom: "8px",
    },

    statLabel: {
      fontSize: "16px",
      color: "#646a76",
    },
  };

  return (
    <div style={styles.wrapper}>
      <style dangerouslySetInnerHTML={styles.fontLoader} />

      <div style={styles.tag}>INVESTORS</div>

      <div style={styles.title}>Connect with the<br />Right Investors</div>

      <div style={styles.subtitle}>
        Access the world’s largest directory of verified investors. Connect with VCs,
        angel networks, and private equity funds actively seeking opportunities in your sector.
      </div>

      <div style={styles.divider}></div>

      <div style={styles.statsRow}>
        <div style={styles.statBlock}>
          <div style={styles.statNumber}>500+</div>
          <div style={styles.statLabel}>Active Investors</div>
        </div>

        <div style={styles.statBlock}>
          <div style={styles.statNumber}>$2.5B+</div>
          <div style={styles.statLabel}>Capital Raised</div>
        </div>

        <div style={styles.statBlock}>
          <div style={styles.statNumber}>1,240</div>
          <div style={styles.statLabel}>Total Deals</div>
        </div>
      </div>
    </div>
  );
}
