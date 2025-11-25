import { useEffect } from "react";
import MarketplaceHero from "./MarketplaceHero";
import MarketplaceLayout from "./MarketplaceLayout";
import StartupsSection from "./StartupSection";
import TopStartups from "./TopStartups";
import TrendingCompanies from "./TrendingCompanies";

export default function Marketplace() {

  // Hard zoom lock (97%)
  useEffect(() => {
    const lockedScale = 0.97;

    const applyZoom = () => {
      document.body.style.zoom = lockedScale;
      document.documentElement.style.zoom = lockedScale;
    };

    const preventZoom = (e) => {
      if (e.ctrlKey || e.metaKey || e.touches?.length > 1) {
        e.preventDefault();
        applyZoom();
      }
    };

    applyZoom();

    window.addEventListener("wheel", preventZoom, { passive: false });
    window.addEventListener("keydown", preventZoom);
    document.addEventListener("touchstart", preventZoom, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventZoom);
      window.removeEventListener("keydown", preventZoom);
      document.removeEventListener("touchstart", preventZoom);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('../URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
          }

          /* hide vertical scrollbar */
          html, body {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
            overflow-y: auto !important;
          }
          html::-webkit-scrollbar,
          body::-webkit-scrollbar {
            display: none !important;
          }
        `}
      </style>

      {/* OUTER WRAPPER */}
      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          minHeight: "100vh",
          margin: "0 auto",
          background: "#ffffff",
          fontFamily: "URWGeometric, DM Sans, sans-serif",
        }}
      >

        {/* INNER CONTENT — apply width/height magnification */}
        <div
          style={{
            width: "100%",
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "20px 24px 80px",

            /* 💥 width-scale = 1.10, height-scale = 1.05 */
            // transform: "scale(0.99 )",
            transformOrigin: "top center",

            /* prevent shrinking after scale */
            width: `${100 / 1.10}%`,
          }}
        >
          <MarketplaceHero />
          <div style={{marginTop:"2rem"}}></div>
          <MarketplaceLayout />
          <div style={{marginTop:"2rem"}}></div>
          <div style={{marginTop:"2rem"}}></div>
           <div style={{marginTop:"10rem"}}></div>
          <StartupsSection />
           <div style={{marginTop:"10rem"}}></div>
            <div style={{marginTop:"10rem"}}></div>
             <div style={{marginTop:"20rem"}}></div>
          <TopStartups />
            <div style={{marginTop:"10rem"}}></div>
            <div style={{marginTop:"10rem"}}></div>
             <div style={{marginTop:"20rem"}}></div>
          <TrendingCompanies />
        </div>

      </div>
    </>
  );
}
