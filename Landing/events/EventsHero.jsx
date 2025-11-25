import React from "react";
import events from "../assets/events.png"

export default function EventsHero() {
  return (
    <>
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('../assets/fonts/URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
          }
        `}
      </style>

      <div
        style={{
          width: "100%",
          minHeight: "80rem",
          backgroundImage:
            {events},
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          fontFamily: "URWGeometric",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 20px",
          marginTop:"-5rem"
        }}
      >
        {/* Overlay gradient like your design */}
       

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            maxWidth: "800px",
            color: "white",
          }}
        >
          {/* Badge */}
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "8px 18px",
              borderRadius: "10px",
              display: "inline-block",
              fontSize: "14px",
              marginBottom: "20px",
              backdropFilter: "blur(4px)",
            }}
          >
            EMIREQ EVENTS
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "54px",
              lineHeight: "1.15",
              fontWeight: 500,
              marginBottom: "20px",
            }}
          >
            The Future <br /> of{" "}
            <span style={{ color: "#FFC72C" }}>Events</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "20px",
              opacity: 0.9,
              marginBottom: "40px",
              lineHeight: 1.5,
            }}
          >
            Where innovation meets experience. Join 50,000+ leaders, creators,
            and visionaries shaping tomorrow's world.
          </p>

          {/* Categories */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {[
              "ALL",
              "MUSIC",
              "TECH",
              "FOOD",
              "JEWELRY",
              "STARTUP",
              "GOVERNANCE",
            ].map((item, idx) => (
              <button
                key={idx}
                style={{
                  padding: "10px 20px",
                  borderRadius: "24px",
                  background: item === "ALL" ? "#0066FF" : "rgba(255,255,255,0.15)",
                  border: "none",
                  color: "white",
                  fontSize: "14px",
                  backdropFilter: "blur(4px)",
                  cursor: "pointer",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
