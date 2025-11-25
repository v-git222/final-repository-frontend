export default function AboutPage() {
  return (
    <>
      {/* Inline injected font-face */}
      <style>
        {`
          @font-face {
            font-family: 'URWGeometric';
            src: url('./URWGeometricRegular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
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
        {/* TITLE */}
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 700,
            letterSpacing: "0.4px",
            color: "#111",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          About Emireq
        </h1>

        {/* SUBTITLE */}
        <p
          style={{
            fontSize: "20px",
            opacity: 0.7,
            textAlign: "center",
            marginBottom: "50px",
            lineHeight: "1.5",
          }}
        >
          Learn about our mission, vision, and platform journey.
        </p>

        {/* CONTENT AREA */}
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
          About Screen Loaded
          <br />
          (Add team, mission, timeline here)
        </div>
      </div>
    </>
  );
}
