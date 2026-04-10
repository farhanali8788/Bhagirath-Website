import { ArrowRight, MapPin, ChevronDown, Phone } from 'lucide-react';
import './Hero.css';

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
            Scale Your<br />
            <span className="headline-accent">Business</span><br />
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
              <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" className="industrial-svg">
                {/* Background */}
                <rect width="500" height="380" fill="#0F1F3D"/>

                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="500" height="380" fill="url(#grid)"/>

                {/* Main road horizontal */}
                <rect x="0" y="175" width="500" height="28" fill="#1A2E4A" rx="0"/>
                <line x1="0" y1="189" x2="500" y2="189" stroke="#F97316" strokeWidth="1.5" strokeDasharray="20,15"/>

                {/* Road vertical */}
                <rect x="220" y="0" width="28" height="380" fill="#1A2E4A"/>
                <line x1="234" y1="0" x2="234" y2="380" stroke="#F97316" strokeWidth="1" strokeDasharray="15,10"/>

                {/* Warehouses - Top Left quadrant */}
                <rect x="20" y="30" width="90" height="60" fill="#1E3050" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" rx="1"/>
                <rect x="25" y="35" width="80" height="8" fill="#F97316" opacity="0.6"/>
                <rect x="20" y="35" width="6" height="50" fill="#F97316" opacity="0.3"/>

                <rect x="125" y="30" width="75" height="60" fill="#1E3050" stroke="rgba(249,115,22,0.3)" strokeWidth="1" rx="1"/>
                <rect x="130" y="35" width="65" height="8" fill="#2C3E57" opacity="0.8"/>

                <rect x="20" y="105" width="180" height="55" fill="#162840" stroke="rgba(249,115,22,0.2)" strokeWidth="1" rx="1"/>
                <text x="110" y="138" textAnchor="middle" fill="rgba(249,115,22,0.7)" fontSize="10" fontFamily="Barlow Condensed" fontWeight="700" letterSpacing="2">WAREHOUSE ZONE</text>

                {/* Warehouses - Top Right quadrant */}
                <rect x="260" y="30" width="100" height="75" fill="#1E3050" stroke="rgba(249,115,22,0.5)" strokeWidth="2" rx="1"/>
                <rect x="265" y="35" width="90" height="10" fill="#F97316" opacity="0.8"/>
                <text x="310" y="82" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="1">GODOWN A</text>

                <rect x="375" y="30" width="105" height="75" fill="#1E3050" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" rx="1"/>
                <rect x="380" y="35" width="95" height="10" fill="#F97316" opacity="0.6"/>
                <text x="427" y="82" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="1">GODOWN B</text>

                <rect x="260" y="120" width="220" height="40" fill="#162840" stroke="rgba(249,115,22,0.2)" strokeWidth="1" rx="1"/>
                <text x="370" y="145" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="2">LOADING / UNLOADING ZONE</text>

                {/* Bottom Left quadrant */}
                <rect x="20" y="215" width="85" height="70" fill="#1E3050" stroke="rgba(249,115,22,0.3)" strokeWidth="1" rx="1"/>
                <rect x="25" y="220" width="75" height="10" fill="#2C3E57"/>

                <rect x="115" y="215" width="90" height="70" fill="#1E3050" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" rx="1"/>
                <rect x="120" y="220" width="80" height="10" fill="#F97316" opacity="0.5"/>

                <rect x="20" y="298" width="185" height="62" fill="#162840" stroke="rgba(249,115,22,0.2)" strokeWidth="1" rx="1"/>
                <text x="112" y="334" textAnchor="middle" fill="rgba(249,115,22,0.5)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="2">INDUSTRIAL PLOTS</text>

                {/* Bottom Right quadrant */}
                <rect x="260" y="215" width="110" height="55" fill="#1E3050" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" rx="1"/>
                <rect x="265" y="220" width="100" height="10" fill="#F97316" opacity="0.7"/>
                <text x="315" y="252" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="1">GODOWN C</text>

                <rect x="382" y="215" width="98" height="55" fill="#1E3050" stroke="rgba(249,115,22,0.3)" strokeWidth="1" rx="1"/>

                <rect x="260" y="282" width="220" height="78" fill="#1E3050" stroke="rgba(249,115,22,0.3)" strokeWidth="1" rx="1"/>
                <text x="370" y="326" textAnchor="middle" fill="rgba(249,115,22,0.6)" fontSize="10" fontFamily="Barlow Condensed" fontWeight="700" letterSpacing="2">COMMERCIAL COMPLEX</text>

                {/* Truck icon on road */}
                <g className="truck-icon" transform="translate(60, 175)">
                  <rect x="0" y="4" width="32" height="15" fill="#F97316" rx="1"/>
                  <rect x="22" y="0" width="10" height="10" fill="#FB923C" rx="1"/>
                  <circle cx="6" cy="22" r="4" fill="#0F1F3D" stroke="#F97316" strokeWidth="1.5"/>
                  <circle cx="26" cy="22" r="4" fill="#0F1F3D" stroke="#F97316" strokeWidth="1.5"/>
                </g>

                {/* Compass/North indicator */}
                <g transform="translate(460, 355)">
                  <circle cx="0" cy="0" r="16" fill="rgba(8,20,42,0.8)" stroke="rgba(249,115,22,0.5)" strokeWidth="1"/>
                  <polygon points="0,-10 3,-3 0,0 -3,-3" fill="#F97316"/>
                  <polygon points="0,10 3,3 0,0 -3,3" fill="rgba(255,255,255,0.3)"/>
                  <text x="0" y="-13" textAnchor="middle" fill="var(--orange)" fontSize="6" fontFamily="Barlow Condensed" fontWeight="700">N</text>
                </g>

                {/* Labels */}
                <text x="10" y="372" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Barlow Condensed" letterSpacing="1">NAVKAAR INDUSTRIAL TOWNSHIP — NAGPUR</text>
              </svg>
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
        <span>Explore NAVKAAR</span>
      </div>
    </section>
  );
}
