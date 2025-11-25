import React, { useEffect, useRef } from "react";

export default function LearnFromBest() {
  const cardsRef = useRef([]);

  const speakers = [
    {
      id: 1,
      name: "Dr. Yuki Tanaka",
      title: "Chief AI Officer, QuantumLeap Technologies",
      category: "Artificial Intelligence",
      img:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 2,
      name: "Marcus Williams",
      title: "Founder & CEO, Future Capital Partners",
      category: "Venture Capital",
      img:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 3,
      name: "Aisha Al-Rahman",
      title: "Minister of Digital Transformation, UAE",
      category: "Governance & Policy",
      img:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 4,
      name: "James Chen",
      title: "Grammy-Winning Producer & Composer",
      category: "Music & Arts",
      img:
        "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 5,
      name: "Elena Rossi",
      title: "Master Jeweler & Creative Director, Lumière",
      category: "Luxury & Design",
      img:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: 6,
      name: "David Park",
      title: "Serial Entrepreneur & Innovation Catalyst",
      category: "Startups & Innovation",
      img:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  useEffect(() => {
    const nodes = cardsRef.current.filter(Boolean);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, idx * 90);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        fontFamily:
          "URWGeometric, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        padding: "64px 40px",
        background: "#fff",
      }}
    >
      <style>
        {`
        .lfb-top { text-align: center; margin-bottom: 36px; }
        .lfb-badge {
          display:inline-block;
          background: linear-gradient(90deg,#FFD24A,#FFC857 70%);
          height: 6px; width: 80px; border-radius: 4px;
          margin-bottom: 12px;
        }
        .lfb-title { font-size: 44px; font-weight: 700; }
        .lfb-subtitle { color: #94a3b8; margin-top: 8px; }

        .lfb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .lfb-card {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px) scale(.98);
          transition: 520ms cubic-bezier(.2,.9,.3,1);
          box-shadow: 0 6px 18px rgba(15,23,42,0.06);
        }
        .lfb-card.in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .lfb-media { height: 220px; overflow:hidden; position:relative; }
        .lfb-media img {
          width:100%; height:100%; object-fit:cover;
          transition: 420ms ease;
        }
        .lfb-card:hover img { transform:scale(1.06); }

        .lfb-pin {
          position:absolute; right:14px; top:14px;
          width:36px; height:36px;
          border-radius:10px;
          background:#1e40af;
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          box-shadow:0 6px 18px rgba(0,0,0,0.15);
        }

        .lfb-content { padding: 20px; }
        .lfb-cat {
          background:#f1f5f9;
          padding:6px 12px;
          border-radius:20px;
          font-size:12px;
          display:inline-block;
          margin-bottom:10px;
        }
        .lfb-name { font-size:20px; font-weight:600; margin-bottom:4px; }
        .lfb-role { color:#64748b; font-size:14px; margin-bottom:14px; }

        .lfb-actions { display:flex; gap:10px; }
        .icon-btn {
          width:36px; height:36px;
          border-radius:10px;
          background:#fff;
          border:1px solid rgba(0,0,0,0.05);
          display:flex; align-items:center; justify-content:center;
        }

        @media(max-width:1000px){
          .lfb-grid{ grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:600px){
          .lfb-grid{ grid-template-columns:1fr; }
        }
      `}
      </style>

      <div className="lfb-top">
        <div className="lfb-badge" />
        <div className="lfb-title">Learn From The Best</div>
        <div className="lfb-subtitle">
          500+ thought leaders, innovators, and creators sharing insights that transform industries.
        </div>
      </div>

      <div className="lfb-grid">
        {speakers.map((s, i) => (
          <div
            key={s.id}
            data-index={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="lfb-card"
          >
            <div className="lfb-media">
              <img src={s.img} alt={s.name} />

              {/* Ribbon badge SVG */}
              <div className="lfb-pin">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l3 6 6 .5-4.5 4 1.2 6-5.7-3.3L6.3 18l1.2-6L3 8.5 9 8l3-6z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="lfb-content">
              <div className="lfb-cat">{s.category}</div>
              <div className="lfb-name">{s.name}</div>
              <div className="lfb-role">{s.title}</div>

              <div className="lfb-actions">
                
                {/* LinkedIn icon */}
                <button className="icon-btn">
                  <svg width="18" height="18" fill="#1e3a8a" viewBox="0 0 24 24">
                    <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm1 6H3v12h2V9zm4 0H7v12h2v-6c0-2 3-2.2 3 0v6h2v-7c0-4-5-3.8-6 0V9z"/>
                  </svg>
                </button>

                {/* External link icon */}
                <button className="icon-btn">
                  <svg width="18" height="18" fill="#1e3a8a" viewBox="0 0 24 24">
                    <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z"/>
                    <path d="M5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/>
                  </svg>
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
