import React, { useRef } from "react";
import "./Gallery.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ITEMS = [
  { id: "lobby",    label: "Grand Entrance Lobby",         caption: "Arrival Experience" },
  { id: "pool",     label: "Temperature-Controlled Pool",  caption: "27th Floor · Poolside" },
  { id: "spa",      label: "Spa & Wellness",               caption: "27th Floor · Wellness" },
  { id: "living",   label: "4BHK Living / Dining",         caption: "Residence Interior" },
  { id: "miniplex", label: "Private Theatre · 40 Seats",   caption: "5th Floor · Miniplex" },
  { id: "sky",      label: "Sky Garden · 32nd Floor",      caption: "Rooftop Retreat" },
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const [headerRef, headerVisible] = useScrollAnimation();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 400, behavior: "smooth" });
    }
  };

  return (
    <section className="altair-gallery" id="gallery">
      <div className="container">
        <div
          ref={headerRef}
          className={`altair-gallery__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="altair-gallery__label">Interiors &amp; Amenities</p>
          <h2 className="altair-gallery__title">
            Life Inside <em>Altair</em>
          </h2>
        </div>
      </div>

      <div className="altair-gallery__track-wrap">
        <div className="altair-gallery__track" ref={scrollRef}>
          {ITEMS.map((item) => (
            <div key={item.id} className="altair-gallery__item">
              <img src={`/images/gallery-${item.id}.jpg`} alt={item.label} className="altair-gallery__img" />
              <div className="altair-gallery__item-overlay">
                <span className="altair-gallery__item-caption">{item.caption}</span>
                <span className="altair-gallery__item-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="altair-gallery__arrow altair-gallery__arrow--prev" onClick={() => scroll(-1)} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="altair-gallery__arrow altair-gallery__arrow--next" onClick={() => scroll(1)} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="altair-gallery__hint">
        <span>← Scroll to explore →</span>
      </div>
    </section>
  );
};

export default Gallery;
