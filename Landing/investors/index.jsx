import React, { useEffect } from "react";
import { motion } from "framer-motion";


import InvestorsPage from "./FeaturedInvestors";
import FindInvestors from "./FindInvestors";
import HowThisWorks from "./HowThisWorks";
import InvestorSection from "./InvestorSection";
import Testimonials from "./Testimonials";
import UpcomingEvents from "./Upcomingevents";
import Footer from "../about/Footer";

export default function InvestorsHub() {

  // same zoom prevention as App.jsx
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.ctrlKey || e.metaKey || e.touches?.length > 1) {
        e.preventDefault();
      }
    };
    window.addEventListener("wheel", preventZoom, { passive: false });
    window.addEventListener("keydown", preventZoom);
    document.addEventListener("gesturestart", preventZoom);
    document.addEventListener("gesturechange", preventZoom);

    return () => {
      window.removeEventListener("wheel", preventZoom);
      window.removeEventListener("keydown", preventZoom);
      document.removeEventListener("gesturestart", preventZoom);
      document.removeEventListener("gesturechange", preventZoom);
    };
  }, []);

  // same animation rules as App.jsx
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
  };

  return (
    <>
      <style>{`
        @font-face {
          font-family: "URWGeometric";
          src: url("/fonts/URWGeometricRegular.otf") format("opentype");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className="no-horizontal-scroll">
        <div className="scale-wrapper">
          <div className="container">

            <motion.div
              key="investor-hub"
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10rem", // same rhythm as Tokenize
                fontFamily: "URWGeometric, sans-serif",
                textAlign: "center",
                marginTop: "-2rem"
              }}
            >

              {/* --- SECTIONS IN ORDER --- */}
              <InvestorSection />
              <FindInvestors />
              <InvestorsPage />
              <UpcomingEvents />
              <HowThisWorks />
              <Testimonials />

              {/* Footer protection offset */}
              

             <Footer/>

            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
