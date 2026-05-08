import { ArrowRight, MapPin, ChevronDown, Phone } from "lucide-react";
import "./Hero.css";
import heroPhoto from "/navkar-hero-bg.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-gradient" aria-hidden="true" />

      {/* Industrial texture overlay */}
      <div className="hero-texture" aria-hidden="true" />

      {/* Animated scan line */}
      <div className="hero-scan" aria-hidden="true" />

      {/* Bottom edge geometry */}
      <div className="hero-edge" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-left">
          <div className="hero-badges">
            <span className="badge-rera">RERA Approved</span>
            <span className="badge-nagpur">
              <MapPin size={12} /> Nagpur, Maharashtra
            </span>
          </div>

          <div className="hero-kicker">Commercial Industrial Development</div>

          <h1 className="hero-headline">
            Scale Your
            <br />
            <span className="headline-accent">Business</span>
            <br />
            <span className="headline-outline">Operations.</span>
          </h1>

          <p className="hero-sub">
            Premium godowns, warehouses & industrial spaces engineered for
            efficiency. Nagpur's most strategically located commercial township.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Industrial Plots</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Sq.Yd. Plots</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-number">NH-44</span>
              <span className="stat-label">Direct Access</span>
            </div>
          </div>

          <div className="hero-ctas">
            <a href="#contact" className="cta-primary">
              Book Site Visit
              <ArrowRight size={16} />
            </a>
            <a href="tel:+919876543210" className="cta-secondary">
              <Phone size={14} />
              Call Now
            </a>
          </div>
        </div>

        <div className="hero-right">
          {/* Industrial visual card */}
          <div className="hero-visual">
            <div className="visual-inner">
              {/* SVG Industrial Layout */}
              <img
                src={heroPhoto}
                alt="NAVKAR Industrial Township"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Floating info cards */}
            <div className="float-card float-1">
              <div className="float-icon">📍</div>
              <div>
                <div className="float-title">NH-44 Frontage</div>
                <div className="float-sub">National Highway Direct</div>
              </div>
            </div>

            <div className="float-card float-2">
              <div className="float-dot" />
              <div>
                <div className="float-title">MIDC Approved</div>
                <div className="float-sub">Industrial Zone</div>
              </div>
            </div>

            <div className="float-card float-3">
              <div className="float-icon">🏭</div>
              <div>
                <div className="float-title">50,000+ Sq.Ft.</div>
                <div className="float-sub">Total Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <ChevronDown size={20} />
        <span>Explore NAVKAR</span>
      </div>
    </section>
  );
}
