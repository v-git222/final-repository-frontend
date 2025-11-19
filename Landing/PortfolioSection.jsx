import React from "react";
import "./PortfolioSection.css";

export default function StartupPortfolioSection() {
  return (
    <section className="startup-section" aria-labelledby="startup-portfolio">
      <div className="startup-inner">
        <div className="portfolio-row">
          {/* Left yellow card */}
          <div className="invest-card" role="article" aria-label="investment highlight">
            <div className="invest-top">
              <div className="avatar-stack" aria-hidden>
                <img
                  className="avatar"
                  alt="Investor 1"
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80&q=60"
                />
                <img
                  className="avatar"
                  alt="Investor 2"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=60"
                />
                <img
                  className="avatar"
                  alt="Investor 3"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&h=80&q=60"
                />
                <img
                  className="avatar"
                  alt="Investor 4"
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=60"
                />
              </div>
              <div className="invest-note">+750 Active Investors</div>
            </div>

            <h3 className="invest-title">750+ Members Invest On This Project</h3>
            <p className="invest-desc">
              Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
            </p>

            <div className="feature-badges" aria-hidden>
              <div className="pill dark">⚡ Scalable Solutions</div>
              <div className="pill dark">⏱ 24/7 Support</div>
              <div className="pill dark">✨ Automation Features</div>
            </div>

            <div className="invest-cta">
              <button className="contact-btn" aria-label="Contact">Contact →</button>
            </div>

            <div className="invest-deco" aria-hidden />
          </div>

          {/* Right column: image cards */}
          <div className="cards-col" role="list" aria-label="project cards">
            <article className="image-card" role="listitem" aria-label="Scaled SaaS">
              <div
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60')",
                }}
              />
              <div className="card-overlay">
                <div className="card-top">
                  <div className="card-tag">Growth</div>
                  <div className="card-circle">↗</div>
                </div>
                <div className="card-bottom">
                  <div className="card-title">Scaled SaaS</div>
                </div>
              </div>
            </article>

            <article className="image-card" role="listitem" aria-label="Tripled Revenue">
              <div
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=60')",
                }}
              />
              <div className="card-overlay">
                <div className="card-top">
                  <div className="card-tag">Scaling</div>
                  <div className="card-circle">↗</div>
                </div>
                <div className="card-bottom">
                  <div className="card-title">Tripled Revenue</div>
                </div>
              </div>
            </article>

            <article className="image-card" role="listitem" aria-label="Build MVP">
              <div
                className="card-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=60')",
                }}
              />
              <div className="card-overlay">
                <div className="card-top">
                  <div className="card-tag">Pre-Seed</div>
                  <div className="card-circle">↗</div>
                </div>
                <div className="card-bottom">
                  <div className="card-title">Build MVP</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
