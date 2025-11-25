
import InvestorsPage from "./FeaturedInvestors";
import FindInvestors from "./FindInvestors";
import Footer from "./Footer";
import HowThisWorks from "./HowThisWorks";
import InvestorSection from "./InvestorSection";
import Testimonials from "./Testimonials";
import UpcomingEvents from "./Upcomingevents";

export default function InvestorsHub() {
  return (
    <>
      {/* Inline injected font-face */}
      <style>
        {`
      @font-face {
  font-family: "URWGeometric";
  src: url("/fonts/URWGeometricRegular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


        `}
      </style>

      {/* PLAIN FULL SCREEN */}
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
    


        {/* CONTENT AREA */}
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginTop:"-8rem",
            padding: "20px 0",
            fontSize: "26px",
         
            textAlign: "center",
          }}
        >
       
          <br />
          <InvestorSection/>
          <FindInvestors/>
          <InvestorsPage/>
          <UpcomingEvents/>
          <HowThisWorks/>
          <Testimonials/>
          <Footer/>
        </div>
      </div>
    </>
  );
}
