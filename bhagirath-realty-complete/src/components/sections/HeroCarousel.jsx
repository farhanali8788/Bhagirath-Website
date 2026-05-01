import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./HeroCarousel.css";
import projects from "../../data/projects";

// ── Per-slide content ──────────────────────────────────────────────
// Each slide has two sets of content:
//   projects → project-specific messaging (used on /projects page)
//   home     → brand-level messaging (used on / home page)
const slideContent = {
  panchtatva: {
    projects: {
      eyebrow: "Farm Estate — Kalmeshwar",
      heading: "Curated Farm Living",
      headingGold: "Beyond the City.",
      sub: "Panchtatva is a first-of-its-kind gated luxury farm estate near Nagpur — where nature, privacy, and premium living converge on ½-acre plots.",
      cta: {
        label: "Visit Panchtatva ↗",
        href: "https://panchtatva.bhagirathrealty.com",
        external: true,
      },
    },
    home: {
      eyebrow: "Managed FarmLands · Nagpur",
      heading: "Building Trust.",
      headingGold: "Delivering Quality.",
      sub: "Welcome to Sri Bhagirath Realty Private Limited, a real estate developer committed to delivering reliable and high-quality developments in Nagpur.",
      cta: { label: "Explore Projects", href: "/projects", external: false },
    },
  },
  altair: {
    projects: {
      eyebrow: "Residential — Wardha Road",
      heading: "Thoughtfully Designed",
      headingGold: "Comfortably Built.",
      sub: "Our residential spaces deliver comfort, functionality, and long-term value for families who deserve better.",
      cta: {
        label: "Visit Panchtatva ↗",
        href: "https://altair.bhagirathrealty.com",
        external: true,
      },
    },
    home: {
      eyebrow: "Residential Developments · Nagpur",
      heading: "Thoughtfully Designed.",
      headingGold: "Comfortably Built.",
      sub: "At Sri Bhagirath Realty Private Limited, we focus on creating residential spaces that offer comfort, functionality, and long-term value.",
      cta: { label: "Explore Projects", href: "/projects", external: false },
    },
  },
  navkar: {
    projects: {
      eyebrow: "Commercial — Hingna Road",
      heading: "Spaces that Support",
      headingGold: "Growth.",
      sub: "Our commercial developments are planned to provide businesses with well-located, efficient spaces in Nagpur's high-growth corridors.",
      cta: {
        label: "Visit Navkar ↗",
        href: "https://navkar.bhagirathrealty.com",
        external: true,
      },
    },
    home: {
      eyebrow: "Industrial Developments · Nagpur",
      heading: "Infrastructure Built",
      headingGold: "for Productivity.",
      sub: "Sri Bhagirath Realty also focuses on developing industrial spaces that support operational efficiency and long-term business needs.",
      cta: { label: "View All Projects", href: "/projects", external: false },
    },
  },
  // complex: {
  //   projects: {
  //     eyebrow: "Commercial — Hingna Road",
  //     heading: "Spaces that Support",
  //     headingGold: "Growth.",
  //     sub: "Our commercial developments are planned to provide businesses with well-located, efficient spaces in Nagpur's high-growth corridors.",
  //     cta: {
  //       label: "Visit Navkar ↗",
  //       href: "https://navkar.bhagirathrealty.com",
  //       external: true,
  //     },
  //   },
  //   home: {
  //     eyebrow: "Industrial Developments · Nagpur",
  //     heading: "Infrastructure Built",
  //     headingGold: "for Productivity.",
  //     sub: "Sri Bhagirath Realty also focuses on developing industrial spaces that support operational efficiency and long-term business needs.",
  //     cta: { label: "View All Projects", href: "/projects", external: false },
  //   },
  // },
};

const slides = projects.slice(0, 3); // Only show the first 3 projects in the carousel

// ── Props ──────────────────────────────────────────────────────────
// variant: "home" | "projects"
//   home     → "Explore Projects" secondary CTA that links to /projects
//   projects → "All Projects ↓"   secondary CTA that scrolls to #grid
const HeroCarousel = ({ variant = "projects" }) => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((index) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 500);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const content =
    slideContent[slide.id][variant === "home" ? "home" : "projects"];

  const secondaryCta =
    variant === "home"
      ? { label: "Book Consultation →", href: "/contact", external: false }
      : { label: "All Projects ↓", href: "/projects#grid", external: false };

  return (
    <section className="pj-carousel">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`pj-carousel__slide ${i === current ? "pj-carousel__slide--active" : ""}`}
        >
          <img src={s.image} alt={s.name} className="pj-carousel__img" />
          <div className="pj-carousel__overlay" />
        </div>
      ))}

      {/* Per-slide text */}
      <div className="container pj-carousel__body">
        <div
          className={`pj-carousel__content ${fading ? "pj-carousel__content--fade" : "pj-carousel__content--visible"}`}
        >
          <p className="pj-eyebrow">
            <span className="pj-eyebrow-line" />
            {content.eyebrow}
          </p>

          <h1 className="pj-carousel__heading">
            {content.heading}
            <br />
            <span className="pj-carousel__heading--gold">
              {content.headingGold}
            </span>
          </h1>

          <p className="pj-carousel__sub">{content.sub}</p>

          <div className="pj-carousel__actions">
            {/* Primary CTA — per slide */}
            {content.cta.external ? (
              <a
                href={content.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pj-carousel__btn-primary"
              >
                {content.cta.label}
              </a>
            ) : (
              <Link to={content.cta.href} className="pj-carousel__btn-primary">
                {content.cta.label}
              </Link>
            )}

            {/* Secondary CTA — varies by variant */}
            <Link to={secondaryCta.href} className="pj-carousel__btn-secondary">
              {secondaryCta.label}
            </Link>
          </div>

          {/* Slide counter */}
          <div className="pj-carousel__counter">
            <span className="pj-carousel__counter-current">0{current + 1}</span>
            <span className="pj-carousel__counter-sep">/</span>
            <span className="pj-carousel__counter-total">0{slides.length}</span>
          </div>
        </div>
      </div>

      {/* Vertical dot nav */}
      <div className="pj-carousel__dots">
        {slides.map((s, i) => (
          <button
            key={i}
            className={`pj-carousel__dot ${i === current ? "pj-carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.name}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="pj-carousel__arrows">
        <button
          className="pj-carousel__arrow"
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          className="pj-carousel__arrow"
          onClick={() => goTo((current + 1) % slides.length)}
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Progress bar */}
      <div className="pj-carousel__progress">
        <div key={current} className="pj-carousel__progress-bar" />
      </div>
    </section>
  );
};

export default HeroCarousel;
