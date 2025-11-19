import React from "react";
import "./PortfolioSectionUpdated.css";
import { FiArrowUpRight } from "react-icons/fi";

function PortfolioSectionUpdated() {
  const cards = [
    {
      tag: "Growth",
      title: "Scaled SaaS",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=600&q=70",
    },
    {
      tag: "Scaling",
      title: "Tripled Revenue",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&w=600&q=70",
    },
    {
      tag: "Pre-Seed",
      title: "Build MVP",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&w=600&q=70",
    },
  ];

  return (
    <section className="portfolio-wrapper">

      {/* TOP ROW */}
      <div className="top-row">
        <div className="top-left">
          <span className="tag">PORTFOLIO</span>
          <h1 className="title">
            We Invest in <span className="blue">Founders</span>
            <br /> Building the Future
          </h1>
        </div>

        <div className="top-right">
          <p className="subtitle">
            Join successful startups that have raised funding through our platform.
            From pre-seed to Series A, we support founders at every stage.
          </p>

          <button className="learn-btn">
            Learn More <FiArrowUpRight />
          </button>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="bottom-row">

        {/* Yellow Highlight Card */}
        <div className="yellow-card fade-item">
          <div>
            <div className="investors">
              <img loading="lazy" src="https://randomuser.me/api/portraits/men/41.jpg" alt="" />
              <img loading="lazy" src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
              <img loading="lazy" src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
              <span>+750 Active Investors</span>
            </div>

            <h2>750+ Members Invest On This Project</h2>
            <p>
              Commodo nec mi id ullamcorper vitae augue neque dis.
              Nunc lacinia viverra orci diam.
            </p>
          </div>
        </div>

        {/* Right Cards */}
        <div className="portfolio-cards">
          {cards.map((card, i) => (
            <div className="p-card fade-item" key={i}>
              <div className="p-card-tag">{card.tag}</div>

              <img
                src={card.img}
                loading="lazy"
                alt={card.title}
              />

              <div className="p-card-title">{card.title}</div>
              <FiArrowUpRight className="card-arrow" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default React.memo(PortfolioSectionUpdated);
