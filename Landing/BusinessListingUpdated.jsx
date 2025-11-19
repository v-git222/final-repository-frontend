import React from "react";
import "./BusinessListingUpdated.css";
import {
  FiSearch,
  FiChevronDown,
  FiStar,
  FiCheckCircle,
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
  FiEye,
  FiMail,
} from "react-icons/fi";

// High-quality working images (Unsplash)
const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=80&w=1200",
    category: "Technology",
    title: "TechVenture AI",
    verified: true,
    description:
      "Revolutionary AI platform transforming business automation and decision-making processes.",
    tags: ["AI", "SaaS", "B2B"],
    funding: "$5M",
    investors: 247,
    minEntry: "$10,000",
    minimumInvestment: "$10,000",
    badge: "Best Choice",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=80&w=1200",
    category: "E-commerce",
    title: "RetailHub",
    verified: true,
    description:
      "Fast-growing e-commerce store with established revenue and strong margins.",
    tags: ["Retail", "Marketplace"],
    funding: "$3.2M",
    investors: 134,
    minEntry: "$7,500",
    minimumInvestment: "$7,500",
    badge: "Best Choice",
  },
];

export default function BusinessListingUpdated() {
  return (
    <div className="bl-page">
      {/* Hero row */}
      <div className="bl-hero">
        <div className="bl-hero-left">
          <div className="bl-top-tag">BUSINESS LISTING</div>
          <h1 className="bl-hero-title">
            Profitable <span className="bl-accent">businesses</span>
            <br /> ready for acquisition
          </h1>
        </div>

        <div className="bl-hero-right">
          <p className="bl-hero-sub">
            Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
            viverra orci diam. Nibh est vitae suspendisse parturient sed lorem
            eu.
          </p>

          <button className="bl-ghost-btn">
            View all listing <FiChevronDown />
          </button>
        </div>
      </div>

      {/* Search row */}
      <div className="bl-search-row">
        <div className="bl-search">
          <FiSearch className="bl-search-icon" />
          <input className="bl-search-input" placeholder="Search Business" />
        </div>

        <div className="bl-filter">
          <select className="bl-select" defaultValue="">
            <option value="">All Category</option>
            <option>Technology</option>
            <option>E-commerce</option>
            <option>Food & Beverage</option>
          </select>
          <FiChevronDown className="bl-select-icon" />
        </div>
      </div>

      <div className="bl-results-count">Showing {listings.length} results</div>

      {/* List */}
      <div className="bl-list">
        {listings.map((l) => (
          <article className="bl-card" key={l.id}>
            <div className="bl-thumb-wrap">
              <img src={l.image} alt={l.title} className="bl-thumb" />
              <div className="bl-thumb-badge">{l.category}</div>
            </div>

            <div className="bl-meta">
              <div className="bl-meta-top">
                <div className="bl-title-wrap">
                  <h3 className="bl-title">{l.title}</h3>
                  {l.verified && (
                    <span className="bl-verified">
                      <FiCheckCircle /> Verified
                    </span>
                  )}
                </div>

                <div className="bl-right-badge">
                  <FiStar /> <span>{l.badge}</span>
                </div>
              </div>

              <p className="bl-desc">{l.description}</p>

              <div className="bl-tags">
                {l.tags.map((t) => (
                  <span className="bl-tag-pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="bl-stats">
                <div className="bl-stat">
                  <FiDollarSign className="stat-ico" />
                  <div>
                    <div className="stat-label">Funding</div>
                    <div className="stat-value">{l.funding}</div>
                  </div>
                </div>

                <div className="bl-stat">
                  <FiUsers className="stat-ico" />
                  <div>
                    <div className="stat-label">Investors</div>
                    <div className="stat-value">{l.investors}</div>
                  </div>
                </div>

                <div className="bl-stat">
                  <FiTrendingUp className="stat-ico" />
                  <div>
                    <div className="stat-label">Min. Entry</div>
                    <div className="stat-value">{l.minEntry}</div>
                  </div>
                </div>
              </div>

              <div className="bl-min-row">
                <div className="bl-min-label">Minimum Investment</div>
                <div className="bl-min-value">{l.minimumInvestment}</div>

                <div className="bl-actions">
                  <button className="bl-outline-btn">
                    <FiEye /> View Details
                  </button>

                  <button className="bl-primary-btn">
                    Contact <FiMail />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="bl-footer">
        <a className="bl-view-more" href="#more">
          View More
        </a>
      </div>
    </div>
  );
}
