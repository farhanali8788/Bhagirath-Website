import React, { useState } from "react";
import "./Testimonials.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Panchtatva Land Owner",
    location: "Nagpur",
    quote:
      "Investing in Panchtatva was the best decision we made. The team at Bhagirath Realty guided us through every step — complete transparency, no surprises. The estate is exactly what was promised.",
    initials: "RS",
  },
  {
    id: 2,
    name: "Priya & Anil Deshmukh",
    role: "Residential Client",
    location: "Nagpur",
    quote:
      "We had been searching for the right property for years. Bhagirath Realty understood exactly what our family needed. Their professionalism and attention to detail is unmatched in Nagpur.",
    initials: "AD",
  },
  {
    id: 3,
    name: "Suresh Patel",
    role: "Commercial Investor",
    location: "Nagpur",
    quote:
      "From the first meeting to the final handover, the experience was seamless. Bhagirath Realty's knowledge of Nagpur's real estate market gave us confidence that our investment was in safe hands.",
    initials: "SP",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation(0.15);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  const prev = () =>
    setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () =>
    setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const t = testimonials[active];

  return (
    <section className="testimonials">
      {/* Large background quote mark */}
      <div className="testimonials__bg-quote">"</div>

      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`testimonials__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="testimonials__eyebrow">
            <span className="testimonials__eyebrow-line" />
            Client Stories
          </p>
          <h2 className="testimonials__heading">
            Words From{" "}
            <span className="testimonials__heading--gold">
              Families We've Served
            </span>
          </h2>
        </div>

        {/* Testimonial content */}
        <div
          ref={contentRef}
          className={`testimonials__content anim-scale-up ${contentVisible ? "is-visible" : ""}`}
        >
          {/* Quote */}
          <div className="testimonials__quote-wrap">
            <div className="testimonials__quote-icon">
              <svg
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 30V18C0 8 6 2 18 0L20 4C14 5.333 10.667 8.667 10 14H18V30H0ZM22 30V18C22 8 28 2 40 0L42 4C36 5.333 32.667 8.667 32 14H40V30H22Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <p className="testimonials__quote" key={t.id}>
              {t.quote}
            </p>
          </div>

          {/* Author */}
          <div className="testimonials__author">
            <div className="testimonials__avatar">{t.initials}</div>
            <div className="testimonials__author-info">
              <span className="testimonials__name">{t.name}</span>
              <span className="testimonials__role">
                {t.role} · {t.location}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonials__nav">
            {/* Dots */}
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === active ? "testimonials__dot--active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="testimonials__arrows">
              <button
                className="testimonials__arrow"
                onClick={prev}
                aria-label="Previous"
              >
                ←
              </button>
              <button
                className="testimonials__arrow"
                onClick={next}
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
