import React from "react";
import EventsHero from "./EventsHero";
import bg from "../assets/events.png";
import TopListingEvents from "./TopListingEvents";
import RedefiningExperiences from "./RedefiningExperiences";
import TrendingCategory from "./TrendingCategory";
import LearnFromBest from "./LearnFromBest";
import TipsArticles from "./TipsAndArticles";
import MomentsThatInspire from "./MomentsThatInspire";
import Footer from "../Footer";

export default function EventsPage() {
  return (
    <>
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

      {/* HERO SECTION */}
      <div
        style={{
          width: "100%",
          minHeight: "720px",
          background: `url(${bg}) center/cover no-repeat`,
          position: "relative",
        }}
      >
        <EventsHero />
        <div style={{ height: "-2rem" }}></div>
           
      </div>
 <TopListingEvents />
 <RedefiningExperiences/>
      {/* SPACER */}
      <TrendingCategory/>
    <LearnFromBest/>
      {/* TOP LISTING SECTION */}
      <TipsArticles/>
      <MomentsThatInspire/>
      <Footer/>
  
    </>
  );
}
