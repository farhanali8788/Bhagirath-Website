import React from "react";
import "./Amenities.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { AMENITIES } from "../../data/altair";

const ICONS = {
  pool: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M5 27C5 20 39 20 39 27V37H5V27Z" /><path d="M14 27V20" /><path d="M30 27V20" /><circle cx="22" cy="16" r="4" />
    </svg>
  ),
  spa: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="6" y="14" width="32" height="24" rx="2" /><path d="M6 22h32" /><circle cx="22" cy="9" r="3" /><path d="M16 9h12" />
    </svg>
  ),
  theatre: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="6" y="9" width="32" height="22" rx="1" /><path d="M6 18h32M6 25h32M15 9v22M22 9v22M29 9v22" />
    </svg>
  ),
  garden: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M22 6l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
      <circle cx="22" cy="22" r="15" strokeDasharray="3 4" opacity="0.4" />
    </svg>
  ),
  gym: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="8" y="10" width="28" height="24" rx="1" /><path d="M8 19h28M16 10v24M28 10v24" />
    </svg>
  ),
  banquet: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M8 37V16l14-9 14 9v21" /><path d="M8 22h28" /><path d="M8 28h28" />
    </svg>
  ),
  kids: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="22" cy="15" r="6" /><path d="M10 38c0-6.6 5.4-12 12-12s12 5.4 12 12" /><path d="M16 30l6-4 6 4" />
    </svg>
  ),
  work: (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="5" y="11" width="15" height="22" rx="1" /><rect x="24" y="11" width="15" height="22" rx="1" />
      <path d="M20 22h4" /><path d="M8 17h9M8 22h9M8 27h6M27 17h9M27 22h9M27 27h6" />
    </svg>
  ),
};

const EXTRAS = [
  "Yoga Studio", "Gaming Lounge", "Saloon", "Steam & Sauna",
  "Guest Suites", "EV Parking", "Dedicated Service Lift", "Jogging Track",
];

const Amenities = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation(0.05);

  return (
    <section className="altair-amenities" id="amenities">
      <div className="altair-amenities__watermark" aria-hidden="true">ALTAIR</div>

      <div
        ref={headerRef}
        className={`altair-amenities__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <p className="altair-amenities__label">Two Dedicated Floors · 5th & 27th</p>
        <h2 className="altair-amenities__title">
          Life Beyond <em>Four Walls</em>
        </h2>
      </div>

      <div
        ref={gridRef}
        className={`altair-amenities__grid anim-fade-up anim-delay-2 ${gridVisible ? "is-visible" : ""}`}
      >
        {AMENITIES.map((a) => (
          <div key={a.id} className="altair-amenity-card">
            <div className="altair-amenity-card__bar" />
            <div className="altair-amenity-card__icon">{ICONS[a.icon]}</div>
            <p className="altair-amenity-card__name">{a.name}</p>
            <p className="altair-amenity-card__desc">{a.desc}</p>
            <p className="altair-amenity-card__floor">{a.floor}</p>
          </div>
        ))}
      </div>

      <div className="altair-amenities__extras">
        {EXTRAS.map((e, i) => (
          <React.Fragment key={e}>
            <span>{e}</span>
            {i < EXTRAS.length - 1 && <span className="altair-amenities__dot">·</span>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
