import React from "react";

export default function TopListingEvents() {
  const events = [
    {
      id: 1,
      title: "Music & Live Shows",
      category: "Music",
      description: "Concerts, festivals, DJ nights, and cultural performances.",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Fine Dining & Food",
      category: "Food",
      description: "Culinary festivals, tastings, and gourmet gatherings.",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Jewelry Exhibitions",
      category: "Jewelry",
      description: "Premium exhibitions and designer showcases.",
      img: "https://images.unsplash.com/photo-1587929651402-ce54a2b3af41?auto=format&fit=crop&w=1000&q=80",
    },
  ];

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
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        {/* LEFT SECTION */}
        <div style={{ maxWidth: "460px", marginLeft: "10px" }}>
          <button
            style={{
              display: "flex",
              gap: "6px",
              alignItems: "center",
              padding: "6px 14px",
              fontSize: "12px",
              borderRadius: "8px",
              background: "#F1F5F9",
              border: "none",
              cursor: "pointer",
              marginBottom: "18px",
            }}
          >
            <span>↗</span> EXPLORE
          </button>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: "1.2",
              marginBottom: "16px",
            }}
          >
            Top Listing <span style={{ color: "#1877F2" }}>Events</span>
          </h1>

          <p style={{ fontSize: "18px", opacity: 0.8, lineHeight: 1.6 }}>
            Explore an expanding world of events crafted for professionals,
            creators, and innovators. Whether it’s leadership forums, cultural
            festivals, or industry meetups, there’s something for everyone.
          </p>

          {/* ARROWS */}
          <div style={{ display: "flex", gap: "14px", marginTop: "40px" }}>
            <button
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "2px solid #D4D4D4",
                background: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ←
            </button>

            <button
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "2px solid #D4D4D4",
                background: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            overflowX: "auto",
            paddingBottom: "20px",
            scrollbarWidth: "none",
          }}
        >
          {/* Hide Scrollbar */}
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {events.map((item) => (
            <div key={item.id} style={{ minWidth: "330px" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "330px",
                  height: "330px",
                  objectFit: "cover",
                  borderRadius: "26px",
                }}
              />

              <div
                style={{
                  marginTop: "14px",
                  background: "#E7ECFF",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  display: "inline-block",
                  fontSize: "12px",
                  color: "#1D4ED8",
                }}
              >
                {item.category}
              </div>

              <h3
                style={{
                  fontSize: "20px",
                  margin: "10px 0 6px",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  opacity: 0.75,
                  marginBottom: "12px",
                }}
              >
                {item.description}
              </p>

              <button
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "#F1F5F9",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ↗
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
