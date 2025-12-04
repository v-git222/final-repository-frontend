import React, { useEffect } from "react";
import { motion } from "framer-motion";

import TokenizeHero from "./TokenizeHero.jsx";
import EmireqToken from "./EmireqToken.jsx";
import Marketplace from "./MarketPlaceSection.jsx";
import BuySellTokens from "./BuySellTokens.jsx";
import HowTokenizationWorks from "./HowTokenizationWorks.jsx";
import Footer from "../about/Footer.jsx";

export default function Tokenize() {

  // Same pinch-zoom restriction logic as App.jsx
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

  // Same animation config as App.jsx
  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25 } },
  };

  return (
    <div className="no-horizontal-scroll">
      <div className="scale-wrapper">
        <div className="container">

  <motion.div
  key="tokenize-screen"
  variants={fadeVariant}
  initial="hidden"
  animate="visible"
  exit="exit"
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "6rem", // adjust here for all sections
    width: "100%",
    height: "auto"
  }}
>
  <TokenizeHero />
  <EmireqToken />
  <Marketplace />
  <BuySellTokens />
  <HowTokenizationWorks />
  <Footer />
</motion.div>


        </div>
      </div>
    </div>
  );
}
