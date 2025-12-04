import React, { useEffect } from "react";
import EventsHero from "./EventsHero";
import bg from "../assets/events.png";
import TopListingEvents from "./TopListingEvents";
import RedefiningExperiences from "./RedefiningExperiences";
import TrendingCategory from "./TrendingCategory";
import LearnFromBest from "./LearnFromBest";
import TipsArticles from "./TipsAndArticles";
import MomentsThatInspire from "./MomentsThatInspire";
import Footer from "../about/Footer";


export default function EventsPage() {

  // lock zoom like homepage
  useEffect(() => {
    const lockZoom = (e) => {
      if (e.ctrlKey || e.metaKey || e.touches?.length > 1) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", lockZoom, { passive: false });
    window.addEventListener("keydown", lockZoom);
    document.addEventListener("gesturestart", lockZoom);
    document.addEventListener("gesturechange", lockZoom);

    return () => {
      window.removeEventListener("wheel", lockZoom);
      window.removeEventListener("keydown", lockZoom);
      document.removeEventListener("gesturestart", lockZoom);
      document.removeEventListener("gesturechange", lockZoom);
    };
  }, []);

  return (
    <div className="no-horizontal-scroll">
      <div className="scale-wrapper">
        <div className="container">

          {/* FONT LOAD */}
          <style>{`
            @font-face {
              font-family: 'URWGeometric';
              src: url('/fonts/URWGeometricRegular.otf') format('opentype');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
          `}</style>

          {/* ====================== HERO ====================== */}
          <div
            style={{
              width: "100%",
              height: "680px",
              background: `url(${bg}) center/cover no-repeat`,
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EventsHero />
          </div>

          {/* ====================== CONTENT STACK ====================== */}
          <div style={{ marginTop: "3rem" }}><TopListingEvents /></div>

          <div style={{ marginTop: "3rem" }}><RedefiningExperiences /></div>

          <div style={{ marginTop: "3rem" }}><TrendingCategory /></div>

          <div style={{ marginTop: "3rem" }}><LearnFromBest /></div>

          <div style={{ marginTop: "3rem" }}><TipsArticles /></div>

          <div style={{ marginTop: "3rem" }}><MomentsThatInspire /></div>

          {/* ====================== SPACER BEFORE FOOTER ====================== */}
     

          {/* ====================== FOOTER ====================== */}
          
          <div style={{ width: "100%", marginTop: "-5rem" }}>
                 <Footer />
               </div>
            
        </div>
      </div>
    </div>
  );
}
