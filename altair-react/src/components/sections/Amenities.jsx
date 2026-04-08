import React from "react";
import "./Amenities.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

/* ── Amenity data with Unsplash images ───────────────────────── */
const AMENITIES = [
  {
    id: "pool",
    name: "Heated Pool",
    desc: "Temperature-controlled, year-round luxury",
    floor: "27th Floor",
    img: "amenities/heated-pool.webp",
    icon: "pool",
  },
  {
    id: "spa",
    name: "Spa & Jacuzzi",
    desc: "Health through water — Sanitas per aqua",
    floor: "27th Floor",
    img: "amenities/spa-and-jacuzzi.webp",
    icon: "spa",
  },
  {
    id: "miniplex",
    name: "Miniplex",
    desc: "Private theatre — 40 plush seats",
    floor: "5th Floor",
    img: "amenities/miniplex.webp",
    icon: "theatre",
  },
  {
    id: "garden",
    name: "Sky Garden",
    desc: "Panoramic rooftop retreat",
    floor: "32nd Floor",
    img: "amenities/sky-garden.webp",
    icon: "garden",
  },
  {
    id: "gym",
    name: "Ultra-Modern Gym",
    desc: "State-of-the-art equipment",
    floor: "27th Floor",
    img: "amenities/gym.webp",
    icon: "gym",
  },
  {
    id: "banquet",
    name: "Grand Banquet",
    desc: "3,000 sq.ft · Up to 200 guests",
    floor: "5th Floor",
    img: "amenities/grand-banquet.webp",
    icon: "banquet",
  },
  {
    id: "kids",
    name: "Kids Crèche",
    desc: "Indoor play & learning space",
    floor: "5th Floor",
    img: "amenities/kids-creshe.webp",
    icon: "kids",
  },
  {
    id: "cowork",
    name: "Co-Working",
    desc: "Aesthetic private work suites",
    floor: "5th Floor",
    img: "amenities/co-working.webp",
    icon: "work",
  },
  {
    id: "lounge",
    name: "Gaming Lounge",
    desc: "Next-gen entertainment zone",
    floor: "5th Floor",
    img: "amenities/gaming-lounge.webp",
    icon: "gaming",
  },
];

const EXTRAS = [
  "Yoga Studio",
  "Saloon",
  "Steam & Sauna",
  "Guest Suites",
  "EV Parking",
  "Dedicated Service Lift",
  "Jogging Track",
  "Concierge",
];

/* ── SVG Icon Map ─────────────────────────────────────────────── */
const ICONS = {
  pool: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <path d="M3 16c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
      <path d="M3 12c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
      <path d="M9 4v5M15 4v5" strokeLinecap="round" />
      <path d="M7 6h10" strokeLinecap="round" />
    </svg>
  ),
  spa: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10" />
      <path d="M12 6c0 4-2 6-2 6h4s-2-2-2-6z" />
      <path d="M16 6s2 4 2 6" strokeLinecap="round" />
    </svg>
  ),
  theatre: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      <path d="M10 10l2-3 2 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  garden: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <path
        d="M12 2l2.5 7.5H22l-6 4.5 2 7-6.5-4.5L5.5 21l2-7-6-4.5h7.5z"
        strokeLinejoin="round"
      />
    </svg>
  ),
  gym: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <path
        d="M6 5v14M18 5v14M2 9h4M18 9h4M2 15h4M18 15h4M6 12h12"
        strokeLinecap="round"
      />
    </svg>
  ),
  banquet: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <path d="M3 11l19-9-9 19-2-8-8-2z" strokeLinejoin="round" />
    </svg>
  ),
  kids: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21v-2a6 6 0 0 1 12 0v2" strokeLinecap="round" />
      <path d="M9 12l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  work: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M12 12v4M10 14h4" strokeLinecap="round" />
    </svg>
  ),
  gaming: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      width="18"
      height="18"
    >
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <path d="M8 12h4M10 10v4M16 11h.01M18 13h.01" strokeLinecap="round" />
    </svg>
  ),
};

/* ── Component ────────────────────────────────────────────────── */
const Amenities = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation(0.04);

  /* Duplicate extras for seamless loop */
  const marqueeItems = [...EXTRAS, ...EXTRAS, ...EXTRAS];

  return (
    <section className="altair-amenities" id="amenities">
      <div className="altair-amenities__glow" aria-hidden="true" />

      {/* ── Header ── */}
      <header
        ref={headerRef}
        className={`altair-amenities__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <div className="altair-amenities__eyebrow">
          <span className="altair-amenities__eyebrow-line" />
          <span className="altair-amenities__label">
            Two Dedicated Floors · 5th &amp; 27th
          </span>
          <span className="altair-amenities__eyebrow-line" />
        </div>
        <h2 className="altair-amenities__title">
          Life Beyond <em>Four Walls</em>
        </h2>
      </header>

      {/* ── Bento Grid ── */}
      <div
        ref={gridRef}
        className={`altair-amenities__bento anim-fade-up anim-delay-2 ${gridVisible ? "is-visible" : ""}`}
      >
        {AMENITIES.map((a) => (
          <div key={a.id} className="altair-amenity-card">
            {/* Background image */}
            <img
              className="altair-amenity-card__img"
              src={a.img}
              alt={a.name}
              loading="lazy"
              draggable="false"
            />

            {/* Dark gradient overlay */}
            <div className="altair-amenity-card__overlay" />

            {/* Gold border on hover */}
            <div className="altair-amenity-card__border" />

            {/* Gold line bottom */}
            <div className="altair-amenity-card__gold-line" />

            {/* Icon badge top-right */}
            <div className="altair-amenity-card__icon-badge" aria-hidden="true">
              {ICONS[a.icon]}
            </div>

            {/* Text content */}
            <div className="altair-amenity-card__content">
              <span className="altair-amenity-card__floor-tag">{a.floor}</span>
              <p className="altair-amenity-card__name">{a.name}</p>
              <p className="altair-amenity-card__desc">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Marquee Extras ── */}
      <div className="altair-amenities__marquee-wrap" aria-hidden="true">
        <div className="altair-amenities__marquee">
          <div className="altair-amenities__marquee-inner">
            {marqueeItems.map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="altair-amenities__marquee-item"
              >
                <span>{item}</span>
                <div className="altair-amenities__marquee-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
