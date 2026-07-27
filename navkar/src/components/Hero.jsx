import { ArrowRight, MapPin, Phone } from "lucide-react";
import "./Hero.css";
import heroPhoto from "/image_1.webp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Full-width background image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroPhoto})` }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Bottom fade into page body */}
      <div className="hero-fade-bottom" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-inner">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">RERA Approved</span>
            <span className="eyebrow-location">
              <MapPin size={12} />
              Nagpur, Maharashtra
            </span>
          </div>

          {/* Project name */}
          <div className="hero-project-name">NAVKAR</div>

          {/* Headline */}
          <h1 className="hero-headline">
            CENTRAL INDIA’S FINEST INDUSTRIAL PARK
            <br />
            {/* <span className="headline-sub">
              Built for Scale. Built to Last.
            </span> */}
          </h1>

          {/* Description */}
          {/* <p className="hero-description">
            Premium godowns, warehouses &amp; industrial plots at Nagpur's most
            strategic location — direct NH-44 access, MIDC approved, ready for
            immediate possession.
          </p> */}

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#contact" className="cta-primary">
              Book a Site Visit
              <ArrowRight size={16} />
            </a>
            <a href="tel:+919112006081" className="cta-secondary">
              <Phone size={14} />
              +91 91120 06081
            </a>
          </div>

          {/* Minimal trust strip */}
          {/* <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-value">50+</span>
              <span className="trust-label">Industrial Plots</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-value">NH-44</span>
              <span className="trust-label">Direct Frontage</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-value">500+</span>
              <span className="trust-label">Sq.Yd. Plots</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
