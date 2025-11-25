import React from "react";

export default function MomentsThatInspire() {
  const images = [
    // LEFT COLUMN
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=1400&q=80",

    // CENTER COLUMN (big)
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",

    // RIGHT COLUMN
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1400&q=80",
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 40px",
        fontFamily: "URWGeometric, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* TITLE */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={{ color: "#d4a200", fontSize: "12px", letterSpacing: 1 }}>
          — EVENT GALLERY —
        </div>

        <h1 style={{ fontSize: "42px", fontWeight: 700, marginTop: "10px" }}>
          Moments That Inspire
        </h1>

        <p style={{ color: "#6b7280", marginTop: "10px", maxWidth: "600px" }}>
          A glimpse into the exceptional experiences from past events.
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <img
            src={images[0]}
            style={styles.imgTall}
            alt=""
          />
          <img
            src={images[1]}
            style={styles.imgTall}
            alt=""
          />
        </div>

        {/* CENTER COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <img
            src={images[2]}
            style={styles.imgLarge}
            alt=""
          />
          <img
            src={images[3]}
            style={styles.imgSmall}
            alt=""
          />
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <img
            src={images[4]}
            style={styles.imgMedium}
            alt=""
          />
          <img
            src={images[5]}
            style={styles.imgMediumTall}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  imgTall: {
    width: "100%",
    height: "260px",
    borderRadius: "22px",
    objectFit: "cover",
  },
  imgLarge: {
    width: "100%",
    height: "380px",
    borderRadius: "22px",
    objectFit: "cover",
  },
  imgSmall: {
    width: "100%",
    height: "200px",
    borderRadius: "22px",
    objectFit: "cover",
  },
  imgMedium: {
    width: "100%",
    height: "240px",
    borderRadius: "22px",
    objectFit: "cover",
  },
  imgMediumTall: {
    width: "100%",
    height: "330px",
    borderRadius: "22px",
    objectFit: "cover",
  },
};
