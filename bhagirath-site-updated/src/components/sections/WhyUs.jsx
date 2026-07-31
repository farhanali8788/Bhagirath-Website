import React from "react";
import "./WhyUs.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const pillars = [
  {
    number: "01",
    title: "Trust & Transparency",
    description:
      "Every transaction at Bhagirath Realty is built on complete transparency — clear documentation, honest pricing and no hidden surprises.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4L4 12V20C4 28.4 11.2 36.2 20 38C28.8 36.2 36 28.4 36 20V12L20 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13 20L18 25L27 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Quality Craftsmanship",
    description:
      "From land development to construction, we uphold the highest standards — sourcing premium materials and working with experienced professionals.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4L24.5 14.5L36 16.2L27.5 24.5L29.5 36L20 31L10.5 36L12.5 24.5L4 16.2L15.5 14.5L20 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Prime Locations",
    description:
      "Each project is strategically located — well connected to Nagpur's key corridors while offering the privacy and serenity our clients deserve.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 4C14.5 4 10 8.5 10 14C10 22 20 36 20 36C20 36 30 22 30 14C30 8.5 25.5 4 20 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="20" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Long-Term Value",
    description:
      "We develop with the future in mind — every property in our portfolio is designed to appreciate in value and serve families for generations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 30L14 20L20 26L28 14L34 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 14H34V20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const PillarCard = ({ pillar, index }) => {
  const [ref, visible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`whyus-card anim-fade-up anim-delay-${index + 1} ${visible ? "is-visible" : ""}`}
    >
      <div className="whyus-card__top">
        <span className="whyus-card__number">{pillar.number}</span>
        <div className="whyus-card__icon">{pillar.icon}</div>
      </div>
      <h3 className="whyus-card__title">{pillar.title}</h3>
      <p className="whyus-card__desc">{pillar.description}</p>
      <div className="whyus-card__line" />
    </div>
  );
};

const WhyUs = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.15);

  return (
    <section className="whyus">
      {/* Background texture */}
      <div className="whyus__bg-grid" />

      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`whyus__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="whyus__eyebrow">
            <span className="whyus__eyebrow-line" />
            Why Choose Us
          </p>
          <h2 className="whyus__heading">
            The Bhagirath
            <br />
            <span className="whyus__heading--gold">Difference</span>
          </h2>
          <p className="whyus__sub">
            Four pillars that have guided every project we've built and every
            family we've served.
          </p>
        </div>

        {/* Cards */}
        <div className="whyus__grid">
          {pillars.map((p, i) => (
            <PillarCard key={p.number} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
