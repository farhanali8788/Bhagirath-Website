import React from "react";
import "./Location.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { META, LOCATION_HIGHLIGHTS } from "../../data/altair";

const Location = () => {
  const [contentRef, contentVisible] = useScrollAnimation();
  const [mapRef, mapVisible] = useScrollAnimation();

  return (
    <section className="altair-location" id="location">
      <div
        ref={contentRef}
        className={`altair-location__content anim-fade-left ${contentVisible ? "is-visible" : ""}`}
      >
        <p className="altair-location__label">Address &amp; Connectivity</p>
        <h2 className="altair-location__title">
          At the Heart of<br /><em>Civil Lines</em>
        </h2>
        <p className="altair-location__body">
          {META.address}. The prestigious Civil Lines neighbourhood offers unmatched access to the city's finest institutions, hospitals, and business districts.
        </p>
        <ul className="altair-location__highlights">
          {LOCATION_HIGHLIGHTS.map((h) => (
            <li key={h}>
              <span className="altair-location__dot" />
              {h}
            </li>
          ))}
        </ul>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(META.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="altair-location__map-link"
        >
          View on Google Maps
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div
        ref={mapRef}
        className={`altair-location__map anim-fade-right ${mapVisible ? "is-visible" : ""}`}
      >
        <div className="altair-location__map-placeholder">
          <svg viewBox="0 0 120 140" width="90" fill="none">
            <circle cx="60" cy="52" r="30" stroke="#C9A96E" strokeWidth="1.25" opacity="0.5" />
            <path
              d="M60 82 C60 82 30 105 30 122 C30 139 90 139 90 122 C90 105 60 82 60 82Z"
              fill="rgba(201,169,110,0.06)" stroke="#C9A96E" strokeWidth="0.75" opacity="0.4"
            />
            <circle cx="60" cy="52" r="8" fill="rgba(201,169,110,0.25)" stroke="#C9A96E" strokeWidth="1" />
            <circle cx="60" cy="52" r="3" fill="#C9A96E" opacity="0.7" />
            <circle cx="60" cy="52" r="14" stroke="#C9A96E" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.3" />
          </svg>
          <p>Civil Lines, Nagpur</p>
          <span>Temple Road · 440001</span>
        </div>
      </div>
    </section>
  );
};

export default Location;
