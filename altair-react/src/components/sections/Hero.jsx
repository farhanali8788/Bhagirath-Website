import React, { useEffect, useState } from "react";
import "./Hero.css";
import { META } from "../../data/altair";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="altair-hero" id="hero">
      <div className="altair-hero__bg">
        <img src="/images/hero-bg.jpg" alt="" className="altair-hero__bg-img" />
        <div className="altair-hero__overlay" />
      </div>

      <div className={`altair-hero__content ${loaded ? "is-loaded" : ""}`}>
        <div className="container">
          <p className="altair-hero__eyebrow">
            <span className="altair-hero__eyebrow-line" />
            Civil Lines, Nagpur &nbsp;·&nbsp; {META.group} · Est. {META.established}
          </p>

          <h1 className="altair-hero__heading">
            <span className="altair-hero__line">The</span>
            <span className="altair-hero__line altair-hero__line--gold">Brightest</span>
            <span className="altair-hero__line">Star</span>
          </h1>

          <p className="altair-hero__sub">
            A 32-floor icon ascending above Civil Lines. Where celestial ambition
            <br />meets earthly luxury — curated for those who live at the zenith.
          </p>

          <div className="altair-hero__ctas">
            <button className="altair-hero__btn-primary" onClick={() => scrollTo("contact")}>
              Book Consultation
            </button>
            <button className="altair-hero__btn-ghost" onClick={() => scrollTo("residences")}>
              View Residences
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stat badges */}
      <div className={`altair-hero__stats ${loaded ? "is-loaded" : ""}`}>
        {[
          { num: "32", label: "Floors" },
          { num: "4–5", label: "BHK" },
          { num: "20+", label: "Amenities" },
        ].map((s) => (
          <div key={s.label} className="altair-hero__stat">
            <span className="altair-hero__stat-num">{s.num}</span>
            <span className="altair-hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="altair-hero__scroll">
        <span className="altair-hero__scroll-line" />
        <span className="altair-hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
