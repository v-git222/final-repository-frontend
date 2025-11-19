import React, { useState } from "react";
import "./CategoryGrid.css";
import CategoryOverlay from "./CategoryOverlay";

const CATEGORY_META = [
  { id: 1, name: "Technology", opportunities: 634, tone: "tech" },
  { id: 2, name: "Real Estate", opportunities: 634, tone: "green" },
  { id: 3, name: "Healthcare", opportunities: 634, tone: "red" },
  { id: 4, name: "AI & Machine Learning", opportunities: 634, tone: "purple" },
  { id: 5, name: "E-Commerce", opportunities: 634, tone: "teal" },
  { id: 6, name: "Fashion & Beauty", opportunities: 634, tone: "pink" },
];

function Icon({ tone }) {
  const colors = {
    tech: "#6366F1",
    green: "#10B981",
    red: "#EF4444",
    purple: "#8B5CF6",
    teal: "#0891B2",
    pink: "#F472B6",
  };
  const stroke = colors[tone] || "#6366F1";
 // Special SVG for "Technology"
  if (name === "Technology") {
    return (
      <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true">
        <path d="M0 14C0 6.26801 6.26801 0 14 0H34C41.732 0 48 6.26801 48 14V34C48 41.732 41.732 48 34 48H14C6.26801 48 0 41.732 0 34V14Z" fill="#6366F1" fillOpacity="0.12"/>
        <path d="M24 30.6666V32.3333M24 15.6666V17.3333M28.1667 30.6666V32.3333M28.1667 15.6666V17.3333M15.6667 24H17.3333M15.6667 28.1666H17.3333M15.6667 19.8334H17.3333M30.6667 24H32.3333M30.6667 28.1666H32.3333M30.6667 19.8334H32.3333M19.8333 30.6666V32.3333M19.8333 15.6666V17.3333M29 17.3334H19C18.0795 17.3334 17.3333 18.0796 17.3333 19V29C17.3333 29.9205 18.0795 30.6667 19 30.6667H29C29.9205 30.6667 30.6667 29.9205 30.6667 29V19C30.6667 18.0796 29.9205 17.3334 29 17.3334ZM26.5 20.6666H21.5C21.0398 20.6666 20.6667 21.0397 20.6667 21.5V26.5C20.6667 26.9602 21.0398 27.3333 21.5 27.3333H26.5C26.9602 27.3333 27.3333 26.9602 27.3333 26.5V21.5C27.3333 21.0397 26.9602 20.6666 26.5 20.6666Z" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  return (
    <svg className="cg-icon-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke={stroke} strokeWidth="1.6" fill="none" />
      <path d="M8 12h8" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function CategoryGrid() {
  const [selected, setSelected] = useState(new Set([2, 5]));

  const toggle = (id) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      copy.has(id) ? copy.delete(id) : copy.add(id);
      return copy;
    });
  };

  const clearAll = () => setSelected(new Set());
  const continueAction = () => {
    // Replace with actual navigation/handler
    alert(`Continue (selected ${selected.size})`);
  };

  return (
    <section className="cg-frame">
      <div className="cg-heading-wrap">
        <h3 className="cg-heading">Pickup your Category to start</h3>
      </div>

      <div className="cg-grid-wrap">
        <div className="cg-grid" role="list" aria-label="category list">
          {CATEGORY_META.map((c) => {
            const isSelected = selected.has(c.id);
            return (
              <article key={c.id} className={`cg-card ${isSelected ? "selected" : ""}`} role="listitem">
                <div className="cg-card-top">
                  <div className={`cg-icon ${c.tone}`}>
                    <Icon tone={c.tone} />
                  </div>

                  <button
                    type="button"
                    className={`cg-toggle ${isSelected ? "on" : "off"}`}
                    aria-pressed={isSelected}
                    aria-label={`${isSelected ? "Deselect" : "Select"} ${c.name}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggle(c.id);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === " " || e.key === "Spacebar" || e.key === "Enter") {
                        e.preventDefault();
                        e.stopPropagation();
                        toggle(c.id);
                      }
                    }}
                  />
                </div>

                <div className="cg-card-body">
                  <h4 className="cg-title">{c.name}</h4>
                  <p className="cg-sub">{c.opportunities} Opportunities</p>
                </div>
              </article>
            );
          })}

          <div
            className="cg-card cg-browse"
            role="button"
            tabIndex={0}
            onClick={() => alert("Open category browser")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                alert("Open category browser");
              }
            }}
          >
            <div className="cg-icon gray">
              <svg viewBox="0 0 24 24" className="cg-icon-svg" aria-hidden="true">
                <g fill="#9CA3AF">
                  <circle cx="6" cy="6" r="2"></circle>
                  <circle cx="12" cy="6" r="2"></circle>
                  <circle cx="18" cy="6" r="2"></circle>
                  <circle cx="6" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="18" cy="12" r="2"></circle>
                </g>
              </svg>
            </div>
            <div className="cg-card-body">
              <h4 className="cg-title">Browse Category</h4>
              <p className="cg-sub" style={{ marginTop: 8 }}></p>
            </div>
          </div>
        </div>

        <CategoryOverlay />

        {/* Footer with count + actions */}
        <div className="cg-footer" aria-hidden={false}>
          <div className="cg-selected-count">{selected.size} categories selected</div>

          <div className="cg-actions">
            <button
              className="cg-clear-btn"
              type="button"
              onClick={(e) => { e.stopPropagation(); clearAll(); }}
            >
              Clear all
            </button>

            <button
              className="cg-primary-btn"
              type="button"
              onClick={(e) => { e.stopPropagation(); continueAction(); }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
