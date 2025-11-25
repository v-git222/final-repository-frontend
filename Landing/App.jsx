import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import hero from "./assets/hero.png";
import "./App.css";

// Always-render About components
import HeroSection from "./HeroSection.jsx";

const CategorySelector = React.lazy(() => import("./CategorySelector.jsx"));
const CryptoInsights = React.lazy(() => import("./CryptoInsightsUpdate.jsx"));
const PortfolioSectionUpdated = React.lazy(() =>
  import("./PortfolioSectionUpdated.jsx")
);
const BusinessListingUpdated = React.lazy(() =>
  import("./BusinessListingUpdated.jsx")
);
const BlogListingUpdated = React.lazy(() =>
  import("./BlogListingUpdated.jsx")
);
const Footer = React.lazy(() => import("./Footer.jsx"));

// Pages (use imports directly)
import EventsPage from "./events/index.jsx";
import Tokenize from "./tokenize/index.jsx";
import MarketPlace from "./marketplace/index.jsx";
import InvestorHub from "./investors/index.jsx";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("about");

  // Zoom lock
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

  // Render active screen using switch
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case "marketplace":
        return <MarketPlace />;
      case "tokenize":
        return <Tokenize />;
      case "investors":
        return <InvestorHub />;
      case "events":
        return <EventsPage />;
      default:
        return null; // about page handled separately
    }
  };

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
      <div
        style={{
          transform: "scale(0.98)",
          transformOrigin: "top center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10rem",
            paddingRight: "10rem",
            margin: "4rem 0",
            minHeight: "100vh",
          }}
        >
          {/* Header */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <div style={{ width: "100%", maxWidth: "1280px" }}>
              <Header setActiveScreen={setActiveScreen} />
            </div>
          </div>

          <main
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* ABOUT SCREEN */}
            {activeScreen === "about" && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "1280px",
                  transform: "scale(1.15) translateX(-1.5rem)",
                  transformOrigin: "top left",
                  marginBottom: "5rem",
                }}
              >
                <HeroSection />

                <img
                  src={hero}
                  alt="Hero"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    marginTop: 32,
                    objectFit: "cover",
                  }}
                />

                <React.Suspense fallback={null}>
                  <CategorySelector />
                  <CryptoInsights />
                  <PortfolioSectionUpdated />
                  <BusinessListingUpdated />
                  <BlogListingUpdated />
                  <Footer />
                </React.Suspense>
              </div>
            )}

            {/* OTHER SCREENS */}
            {activeScreen !== "about" && (
              <div style={{ width: "100%", maxWidth: "1280px" }}>
                {renderActiveScreen()}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
