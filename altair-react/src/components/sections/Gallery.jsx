import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Gallery.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ITEMS = [
  { id: "lobby", label: "Grand Entrance Lobby", caption: "Arrival Experience" },
  {
    id: "pool",
    label: "Temperature-Controlled Pool",
    caption: "27th Floor · Poolside",
  },
  { id: "spa", label: "Spa & Wellness", caption: "27th Floor · Wellness" },
  {
    id: "living",
    label: "4BHK Living / Dining",
    caption: "Residence Interior",
  },
  {
    id: "miniplex",
    label: "Private Theatre · 40 Seats",
    caption: "5th Floor · Miniplex",
  },
  { id: "sky", label: "Sky Garden · 32nd Floor", caption: "Rooftop Retreat" },
];

const AUTOPLAY_MS = 3500;

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const isHovering = useRef(false);
  const touchStartX = useRef(null);
  const [headerRef, headerVisible] = useScrollAnimation();
  const total = ITEMS.length;

  const goTo = useCallback(
    (index) => {
      setCurrent((index + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const startAutoplay = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isHovering.current) setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_MS);
  }, [total]);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(timerRef.current);
  }, [startAutoplay]);

  const handleArrow = (dir) => {
    dir === 1 ? next() : prev();
    startAutoplay();
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
      startAutoplay();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="altair-gallery"
      id="gallery"
      onMouseEnter={() => {
        isHovering.current = true;
      }}
      onMouseLeave={() => {
        isHovering.current = false;
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
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

      <div className="altair-gallery__stage-wrap">
        <div className="altair-gallery__stage">
          {ITEMS.map((item, i) => {
            const offset = (i - current + total) % total;
            let pos = "hidden";
            if (offset === 0) pos = "active";
            else if (offset === 1) pos = "next";
            else if (offset === 2) pos = "far-next";
            else if (offset === total - 1) pos = "prev";
            else if (offset === total - 2) pos = "far-prev";

            return (
              <div
                key={item.id}
                className={`altair-gallery__card altair-gallery__card--${pos}`}
                onClick={() => pos !== "active" && goTo(i)}
                aria-hidden={pos === "hidden"}
              >
                <img
                  src={`/images/gallery-${item.id}.webp`}
                  alt={item.label}
                  className="altair-gallery__img"
                  loading="lazy"
                  draggable="false"
                />
                <div className="altair-gallery__card-overlay">
                  <span className="altair-gallery__item-caption">
                    {item.caption}
                  </span>
                  <span className="altair-gallery__item-label">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="altair-gallery__arrow altair-gallery__arrow--prev"
          onClick={() => handleArrow(-1)}
          aria-label="Previous"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width="20"
            height="20"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="altair-gallery__arrow altair-gallery__arrow--next"
          onClick={() => handleArrow(1)}
          aria-label="Next"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width="20"
            height="20"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="altair-gallery__dots" role="tablist">
        {ITEMS.map((item, i) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={i === current}
            aria-label={item.label}
            className={`altair-gallery__dot ${i === current ? "altair-gallery__dot--active" : ""}`}
            onClick={() => {
              goTo(i);
              startAutoplay();
            }}
          />
        ))}
      </div>

      {/* Mobile-only caption below the slider */}
      <div className="altair-gallery__mobile-caption">
        <span className="altair-gallery__item-caption">
          {ITEMS[current].caption}
        </span>
        <span className="altair-gallery__item-label">
          {ITEMS[current].label}
        </span>
      </div>
    </section>
  );
};

export default Gallery;
