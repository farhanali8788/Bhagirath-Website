import React from "react";
import { Link } from "react-router-dom";
import "./AboutSnapshot.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Families Served" },
  { value: "4", label: "Project Categories" },
  { value: "₹100Cr+", label: "In Developments" },
];

const AboutSnapshot = () => {
  const [leftRef, leftVisible] = useScrollAnimation(0.15);
  const [rightRef, rightVisible] = useScrollAnimation(0.15);
  const [statsRef, statsVisible] = useScrollAnimation(0.1);

  return (
    <section className="about-snap">
      <div className="container about-snap__grid">
        {/* ── LEFT: image stack ── */}
        <div
          ref={leftRef}
          className={`about-snap__images anim-fade-left ${leftVisible ? "is-visible" : ""}`}
        >
          <div className="about-snap__img-main">
            <img
              src="/images/about-main.webp"
              alt="Bhagirath Realty development"
            />
          </div>
          {/* Floating badge */}
          <div className="about-snap__badge">
            <span className="about-snap__badge-value">15+</span>
            <span className="about-snap__badge-label">
              Years of
              <br />
              Excellence
            </span>
          </div>
          {/* Gold corner accent */}
          <div className="about-snap__corner" />
        </div>

        {/* ── RIGHT: text ── */}
        <div
          ref={rightRef}
          className={`about-snap__text anim-fade-right ${rightVisible ? "is-visible" : ""}`}
        >
          <p className="about-snap__eyebrow">
            <span className="about-snap__eyebrow-line" />
            Who We Are
          </p>

          <h2 className="about-snap__heading">
            Nagpur's Trusted
            <br />
            <span className="about-snap__heading--gold">
              Real Estate Partner
            </span>
          </h2>

          <div className="about-snap__divider" />

          <p className="about-snap__body">
            Bhagirath Realty has been shaping Nagpur's landscape for over 15
            years — delivering farm estates, premium residences, villas and
            commercial spaces that stand the test of time.
          </p>

          <p className="about-snap__body">
            We believe real estate is not just property — it's legacy. Every
            project we develop is built on trust, quality craftsmanship and a
            deep understanding of what families truly need.
          </p>

          <Link to="/about" className="about-snap__link">
            Our Story
            <span className="about-snap__link-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div
        ref={statsRef}
        className={`about-snap__stats anim-fade-up ${statsVisible ? "is-visible" : ""}`}
      >
        <div className="container about-snap__stats-inner">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`about-snap__stat anim-delay-${i + 1}`}
            >
              <span className="about-snap__stat-value">{s.value}</span>
              <span className="about-snap__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
