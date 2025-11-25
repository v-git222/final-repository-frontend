
import BuySellTokens from "./BuySellTokens.jsx";
import EmireqToken from "./EmireqToken.jsx";
import Footer from "./Footer.jsx";
import HowTokenizationWorks from "./HowTokenizationWorks.jsx";
import Marketplace from "./MarketPlaceSection.jsx";
import TokenizeHero from "./TokenizeHero";

export default function Tokenize() {
  
  return (
    <>
      {/* Inline injected font-face */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('/fonts/URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>

      {/* FULL PLAIN SCREEN */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: "60px 20px",
          boxSizing: "border-box",
          background: "#ffffff",
          fontFamily: "URWGeometric, DM Sans, sans-serif",
      
          
        }}
      >
     

   
        {/* MAIN AREA - plain, responsive */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px 0",
            fontSize: "26px",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
       <TokenizeHero/>
         <div style={{marginTop:"10rem"}}></div>
        
    <EmireqToken/>
      
            <div style={{marginTop:"10rem"}}></div>
          
            <Marketplace/>
  
             <div style={{marginTop:"10rem"}}></div>
           <BuySellTokens/>
           <div style={{marginTop:"10rem"}}></div>
           <HowTokenizationWorks/>
           <div style={{marginTop:"10rem"}}></div>
           <Footer/>
        </div>
      </div>
    </>
  );
}
