import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header.jsx";
import hero from "./assets/hero.png";
import "./App.css";

import HeroSection from "./HeroSection.jsx";

const AboutPage = React.lazy(() => import("./about/index.jsx"));
const CategorySelector = React.lazy(() => import("./CategorySelector.jsx"));
const CryptoInsights = React.lazy(() => import("./CryptoInsightsUpdate.jsx"));
const PortfolioSectionUpdated = React.lazy(() => import("./PortfolioSectionUpdated.jsx"));
const BusinessListingUpdated = React.lazy(() => import("./BusinessListingUpdated.jsx"));
const BlogListingUpdated = React.lazy(() => import("./BlogListingUpdated.jsx"));
const Footer = React.lazy(() => import("./about/Footer.jsx"));

import EventsPage from "./events/index.jsx";
import Tokenize from "./tokenize/index.jsx";
import MarketPlace from "./marketplace/index.jsx";
import InvestorHub from "./investors/index.jsx";

export default function App() {

  const [activeScreen, setActiveScreen] = useState(null); // Default = Home

  // ---- Prevent Zoom ----
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey || e.metaKey) e.preventDefault();
    };

    window.addEventListener("wheel", preventZoom, { passive: false });
    window.addEventListener("keydown", preventZoom, { passive: false });

    const preventGesture = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);

    return () => {
      window.removeEventListener("wheel", preventZoom);
      window.removeEventListener("keydown", preventZoom);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
    };
  }, []);

  // ---- Scroll top on page change ----
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeScreen]);


  // ---- Page Fade Animation ----
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
  };


  // ---- Render Screens ----
  const renderActiveScreen = () => {

    // HOME PAGE (DEFAULT)
    if (!activeScreen) {
      return (
        <>
          <HeroSection />

          <img
            src={hero}
            alt="Hero"
            className="hero-image"
          />

          <React.Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
            <CategorySelector />
            <CryptoInsights />
            <PortfolioSectionUpdated />
            <BusinessListingUpdated />
            <BlogListingUpdated />
            <div style={{ marginTop: "9rem" }}></div>
            <Footer />
          </React.Suspense>
        </>
      );
    }

    // OTHER SCREENS
    switch (activeScreen) {
      case "about":
        return <AboutPage />;
      case "marketplace":
        return <MarketPlace />;
      case "tokenize":
        return <Tokenize />;
      case "investors":
        return <InvestorHub />;
      case "events":
        return <EventsPage />;
      default:
        return null;
    }
  };


  return (
    <div className="no-horizontal-scroll">
      <div className="scale-wrapper">
        <div className="container">

          {/* Header Always Visible */}
          <div className="header-background">
            <Header setActiveScreen={setActiveScreen} />
          </div>

          {/* Animated Page Wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen || "home"}
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="screen"
            >
              {renderActiveScreen()}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
