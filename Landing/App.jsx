// src/App.jsx
import React, { useEffect } from "react";
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import CategorySelector from "./CategorySelector.jsx";
import CryptoInsights from "./CryptoInsightsUpdate.jsx";
import Footer from "./Footer.jsx";
import hero from "./assets/hero.png";
import PortfolioSectionUpdated from "./PortfolioSectionUpdated.jsx";
import "./App.css";

const BusinessListingUpdated = React.lazy(() =>
  import("./BusinessListingUpdated.jsx")
);
const BlogListingUpdated = React.lazy(() =>
  import("./BlogListingUpdated.jsx")
);

export default function App() {

  // 🔒 FULL HARD LOCK OF ZOOM
  useEffect(() => {
    const setLockedZoom = () => {
      const lockedScale = 0.95;
      document.body.style.zoom = lockedScale;
      document.documentElement.style.zoom = lockedScale;

      document.body.style.transform = `scale(${lockedScale})`;
      document.body.style.transformOrigin = "top center";
      document.body.style.width = `${100 / lockedScale}%`;
    };

    setLockedZoom();

    const blockZoom = (e) => {
      if (e.ctrlKey || e.metaKey) e.preventDefault();
      setLockedZoom();
    };

    window.addEventListener("wheel", blockZoom, { passive: false });
    window.addEventListener("keydown", blockZoom);
    window.addEventListener("resize", setLockedZoom);

    document.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length > 1) e.preventDefault();
      },
      { passive: false }
    );

    return () => {
      window.removeEventListener("wheel", blockZoom);
      window.removeEventListener("keydown", blockZoom);
      window.removeEventListener("resize", setLockedZoom);
    };
  }, []);

  return (
    <div
      className="no-horizontal-scroll"
      style={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
        overflowY: "auto",
        height: "100vh",
        position: "relative",
      }}
    >

      {/* UI SCALE WRAPPER */}
      <div
        style={{
          transform: "scale(0.98)",
          transformOrigin: "top center",
          width: "100%",       // FIXED (was 102.04%)
          overflowX: "hidden",
        }}
      >

        {/* COLUMN WRAPPER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10rem",
            paddingRight: "10rem",
            margin: "4rem 0",
            background: "transparent",
            minHeight: "100vh",
            fontFamily: "'DM Sans', Arial, sans-serif",
            color: "#2F2F33",
            boxSizing: "border-box",
          }}
        >

          {/* HEADER */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
            <div style={{ width: "100%", maxWidth: "1280px" }}>
              <Header />
            </div>
          </div>

          {/* MAIN */}
          <main style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>

            {/* HERO SECTION */}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <div>
                <HeroSection />
              </div>
            </div>

            {/* HERO IMAGE */}
            <img
              src={hero}
              alt="Hero"
              style={{
                width: "100%",
                maxWidth: "1280px",
                borderRadius: "20px",
                marginTop: 32,
                objectFit: "cover",
                display: "block",
              }}
              loading="eager"
            />

            {/* CATEGORY SELECTOR */}
            <div style={{ marginTop: 56 }}>
              <CategorySelector />
            </div>

            <CryptoInsights />
            <PortfolioSectionUpdated />

            {/* LAZY LOAD SECTIONS */}
            <React.Suspense
              fallback={
                <div style={{ padding: "40px 0", textAlign: "center", fontSize: "18px", opacity: 0.5 }}>
                  Loading…
                </div>
              }
            >
              <BusinessListingUpdated />
              <BlogListingUpdated />
            </React.Suspense>

            {/* FOOTER */}
            <div
              style={{
                marginTop: 40,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Footer />
            </div>

            {/* Remove leftover bottom gap */}
            {/* <div style={{ height: "0px", marginBottom: "0px", padding: "0" }}></div> */}

          </main>
        </div>
      </div>
    </div>
  );
}
