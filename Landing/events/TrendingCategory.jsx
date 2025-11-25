import React, { useRef, useEffect, useState } from "react";

export default function TrendingCategory() {
  const scrollRef = useRef(null);
  const [scaleMap, setScaleMap] = useState({});

  const events = [
    {
      id: 1,
      title: "Fine Dining",
      category: "Food",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Live Music",
      category: "Music",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Tech Conference",
      category: "Technology",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Race Event",
      category: "Race",
      img: "https://images.unsplash.com/photo-1508606572321-901ea443707f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Art Exhibition",
      category: "Art",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
  
  ];

  // Inverse scaling logic
  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      const centerX = container.scrollLeft + container.offsetWidth / 2;
      let newScale = {};

      events.forEach((item, index) => {
        const card = container.children[index];
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;

        const distance = Math.abs(centerX - cardCenter);

        const minScale = 0.8;  
        const maxScale = 1.25; 

        const normalized = Math.min(distance / 450, 1);
        const scale = minScale + (maxScale - minScale) * normalized;

        newScale[index] = scale;
      });

      setScaleMap(newScale);
    };

    handleScroll(); 
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 40px",
        fontFamily: "URWGeometric, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "42px", fontWeight: 700, marginBottom: "30px" }}>
        Trending <span style={{ color: "#1877F2" }}>Category</span>
      </h1>

   <div
  ref={scrollRef}
  className="scroll-row"
  style={{
    display: "flex",
    gap: "5rem",
    overflowX: "auto",
    overflowY: "hidden",
    paddingBottom: "20px",
    scrollBehavior: "smooth",
    whiteSpace: "nowrap",

    // ⭐ Move cards to center
    paddingLeft: "20vw",
  }}
>

        {events.map((item, index) => (
          <div
            key={item.id}
            style={{
              minWidth: "360px",
              display: "inline-block",
              whiteSpace: "normal",
              transform: `scale(${scaleMap[index] || 0.8})`,
              transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",

              // ⭐ FRAME
              border: "3px solid #E5E7EB",
              borderRadius: "28px",
              padding: "12px",
              background: "white",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "330px",
                height: "330px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />

            <div
              style={{
                marginTop: "12px",
                background: "#E7ECFF",
                padding: "4px 12px",
                borderRadius: "6px",
                display: "inline-block",
                color: "#1D4ED8",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {item.category}
            </div>

            <h3
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}

        {/* HIDE SCROLLBAR */}
        <style>
          {`
            .scroll-row::-webkit-scrollbar {
              display: none;
            }
            .scroll-row {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
      </div>
    </div>
  );
}
