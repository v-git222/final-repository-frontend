import React from "react";

export default function RedefiningExperiences() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "80px 0",
        fontFamily: "URWGeometric, sans-serif",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
        }}
      >
        {/* ABOUT EVENT BADGE */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            fontSize: "12px",
            borderRadius: "8px",
            background: "#F1F5F9",
            border: "none",
            cursor: "pointer",
            marginBottom: "18px",
          }}
        >
          <span>↗</span> ABOUT EVENT
        </button>

        {/* TITLE */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "1.2",
            marginBottom: "18px",
          }}
        >
          Redefining <span style={{ color: "#1877F2" }}>Global</span>{" "}
          Experiences
        </h1>

        {/* SUBTITLE */}
        <p
          style={{
            fontSize: "18px",
            opacity: 0.75,
            lineHeight: 1.6,
            marginBottom: "50px",
          }}
        >
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
          viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>

        {/* TOP GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "#F3E8FF",
              borderRadius: "22px",
              overflow: "hidden",
              paddingBottom: "20px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1000&q=80"
              alt=""
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "24px" }}>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                High-Impact Networking
              </div>
              <p style={{ opacity: 0.75 }}>
                AI-powered matching connects you with the right people at the
                right time.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "#FFF7D6",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <div style={{ fontSize: "26px", marginBottom: "12px" }}>✨</div>

            <h3 style={{ fontSize: "22px", fontWeight: 600 }}>
              Creative Excellence
            </h3>

            <p style={{ opacity: 0.75, marginTop: "10px" }}>
              World-class performances, exhibitions, and artistic showcases.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "#DDF1FF",
              borderRadius: "22px",
              padding: "24px",
            }}
          >
            <div style={{ fontSize: "26px", marginBottom: "12px" }}>🌐</div>

            <h3 style={{ fontSize: "22px", fontWeight: 600 }}>
              Global Network
            </h3>

            <p style={{ opacity: 0.75, marginTop: "10px" }}>
              Connect with 150+ countries through a powerful global network.
            </p>
          </div>
        </div>

        {/* BOTTOM GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          {/* PREMIUM EXPERIENCES */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "22px",
              overflow: "hidden",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
              Premium Experiences
            </h3>

            <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
              Whether it’s an exclusive leadership dinner or a prestigious
              international forum, each detail is intentional. Discover
              experiences crafted to leave a lasting impression.
            </p>

            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1000&q=80"
              alt=""
              style={{
                width: "100%",
                marginTop: "20px",
                borderRadius: "18px",
              }}
            />
          </div>

          {/* INNOVATION CARD */}
          <div
            style={{
              position: "relative",
              borderRadius: "22px",
              overflow: "hidden",
            }}
          >
        <img
  src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80"
  alt="Innovation"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
/>


            {/* OVERLAY */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                padding: "30px",
                color: "white",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
              }}
            >
              <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>
                Innovation at Scale
              </h3>

              <p style={{ opacity: 0.8, lineHeight: 1.5 }}>
                Experience the convergence of breakthrough technology, creative
                vision, and global collaboration.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
