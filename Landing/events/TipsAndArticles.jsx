import React from "react";

export default function TipsArticles() {
  const articles = [
    {
      id: 1,
      category: "EVENT PLANNING",
      title: "10 Tips for Hosting Successful Virtual Events",
      read: "8 min read",
      description:
        "Master the art of virtual event management with these proven strategies from industry experts.",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 2,
      category: "BEST PRACTICES",
      title: "The Ultimate Event Management Checklist",
      read: "8 min read",
      description:
        "From planning to execution, ensure nothing falls through the cracks with our comprehensive guide.",
      img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 3,
      category: "INDUSTRY INSIGHTS",
      title: "Trends Shaping Events in 2025",
      read: "8 min read",
      description:
        "Stay ahead of the curve with insights into emerging trends transforming the event industry.",
      img: "https://images.unsplash.com/photo-1573496782646-e8d943a4bdd1?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        padding: "60px 40px",
        fontFamily: "URWGeometric, sans-serif",
      }}
    >
      {/* INLINE CSS */}
      <style>
        {`
        .ta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          font-size: 11px;
          border-radius: 8px;
          background: #f1f5f9;
          margin-bottom: 18px;
        }

        .ta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 40px;
        }

        .ta-card {
          background: #fff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ta-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(0,0,0,0.12);
        }

        .ta-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .ta-content {
          padding: 22px;
        }

        .ta-category {
          font-size: 12px;
          color: #3b82f6;
          letter-spacing: 0.5px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .ta-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .ta-desc {
          font-size: 15px;
          color: #6b7280;
          margin-bottom: 18px;
        }

        .ta-read-more {
          color: #1d4ed8;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }

        .ta-read-more:hover {
          text-decoration: underline;
        }

        @media(max-width: 1000px){
          .ta-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 640px){
          .ta-grid { grid-template-columns: 1fr; }
        }
      `}
      </style>

      {/* BADGE */}
      <button className="ta-badge">
        ↗ RESOURCES
      </button>

      {/* TITLE */}
      <h1 style={{ fontSize: "42px", fontWeight: 700 }}>
        Tips & <span style={{ color: "#1877F2" }}>Articles</span>
      </h1>

      {/* SUBTITLE */}
      <p
        style={{
          fontSize: "20px",
          color: "#475569",
          maxWidth: "700px",
          marginTop: "12px",
          lineHeight: 1.6,
        }}
      >
        Expert advice and insights to help you plan, execute, and optimize your
        events. Learn from the best in the industry.
      </p>

      {/* GRID */}
      <div className="ta-grid">
        {articles.map((a) => (
          <div key={a.id} className="ta-card">
            <img src={a.img} className="ta-img" alt={a.title} />

            <div className="ta-content">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="ta-category">{a.category}</div>
                <div style={{ color: "#6b7280", fontSize: "13px" }}>
                  ⏱ {a.read}
                </div>
              </div>

              <div className="ta-title">{a.title}</div>

              <div className="ta-desc">{a.description}</div>

              <div className="ta-read-more">
                Read Article →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
