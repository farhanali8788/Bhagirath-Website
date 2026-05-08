import { Building2, Users, Layers, ArrowRight } from "lucide-react";
import "./ProjectOverview.css";

const audiences = [
  {
    icon: "🏭",
    label: "Industrial Operators",
    desc: "Manufacturing, processing, assembly units",
  },
  {
    icon: "📦",
    label: "Traders & Wholesalers",
    desc: "Bulk storage, distribution centers",
  },
  {
    icon: "🚛",
    label: "Logistics Companies",
    desc: "Fleet parking, freight hubs, 3PL operators",
  },
  {
    icon: "💼",
    label: "Business Investors",
    desc: "Rental yield, capital appreciation play",
  },
];

const highlights = [
  { num: "50,000+", unit: "Sq.Ft.", label: "Total Development" },
  { num: "500", unit: "Sq.Yd.", label: "Starting Plot Size" },
  { num: "24/7", unit: "", label: "Operational Access" },
  { num: "100%", unit: "", label: "Compliance Cleared" },
];

export default function ProjectOverview() {
  return (
    <section className="overview" id="overview">
      <div className="container">
        <div className="overview-grid">
          {/* Left: Text */}
          <div className="overview-left">
            <span className="section-tag">
              <Building2 size={10} /> Project Overview
            </span>
            <h2 className="overview-title">
              WHAT IS
              <br />
              <span className="orange">NAVKAR?</span>
            </h2>
            <div className="section-divider" />

            <p className="overview-body">
              NAVKAR is a purpose-built commercial industrial township developed
              by
              <strong> SB Rander Group</strong> — one of Nagpur's trusted real
              estate developers. Designed ground-up for modern business
              operations, NAVKAR delivers plug-and-play godowns, warehouses, and
              industrial spaces across flexible plot sizes.
            </p>

            <p className="overview-body">
              This is not a generic industrial shed. NAVKAR is an engineered
              ecosystem — built for scale, efficiency, and long-term operational
              advantage.
            </p>

            <div className="dev-badge">
              <div className="dev-icon">SBR</div>
              <div>
                <div className="dev-name">SB Rander Group</div>
                <div className="dev-tagline">
                  Decades of trust. Built for Nagpur.
                </div>
              </div>
              <div className="dev-years">
                <span>15+</span>
                <small>Years</small>
              </div>
            </div>

            <a href="#contact" className="overview-cta">
              Download Project Brochure <ArrowRight size={14} />
            </a>
          </div>

          {/* Right: Stats + Audience */}
          <div className="overview-right">
            <div className="stats-bar">
              {highlights.map((h, i) => (
                <div key={i} className="stat-box">
                  <div className="stat-box-num">
                    {h.num}
                    <span className="stat-box-unit">{h.unit}</span>
                  </div>
                  <div className="stat-box-label">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="audience-section">
              <div className="audience-title">
                <Users size={14} />
                <span>WHO IS IT FOR?</span>
              </div>
              <div className="audience-grid">
                {audiences.map((a, i) => (
                  <div key={i} className="audience-card">
                    <div className="audience-icon">{a.icon}</div>
                    <div className="audience-label">{a.label}</div>
                    <div className="audience-desc">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual block */}
            <div className="overview-visual">
              <svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
                <rect width="440" height="160" fill="#0A1628" />
                {/* Warehouse silhouette */}
                {[0, 1, 2, 3].map((i) => (
                  <g key={i} transform={`translate(${i * 110}, 0)`}>
                    <rect
                      x="5"
                      y="40"
                      width="100"
                      height="110"
                      fill="#1E3050"
                      stroke="rgba(249,115,22,0.3)"
                      strokeWidth="1"
                    />
                    <polygon
                      points="5,40 55,10 105,40"
                      fill="#162840"
                      stroke="rgba(249,115,22,0.2)"
                      strokeWidth="1"
                    />
                    <rect
                      x="15"
                      y="40"
                      width="80"
                      height="8"
                      fill="#F97316"
                      opacity={0.4 + i * 0.15}
                    />
                    <rect
                      x="35"
                      y="100"
                      width="30"
                      height="50"
                      fill="#0A1628"
                    />
                    <rect
                      x="10"
                      y="55"
                      width="15"
                      height="10"
                      fill="rgba(251,191,36,0.3)"
                    />
                    <rect
                      x="30"
                      y="55"
                      width="15"
                      height="10"
                      fill="rgba(251,191,36,0.2)"
                    />
                    <rect
                      x="75"
                      y="55"
                      width="15"
                      height="10"
                      fill="rgba(251,191,36,0.3)"
                    />
                  </g>
                ))}
                {/* Ground line */}
                <rect
                  x="0"
                  y="148"
                  width="440"
                  height="12"
                  fill="rgba(249,115,22,0.1)"
                />
                <text
                  x="220"
                  y="157"
                  textAnchor="middle"
                  fill="rgba(249,115,22,0.5)"
                  fontSize="8"
                  fontFamily="Barlow Condensed"
                  letterSpacing="3"
                >
                  NAVKAR INDUSTRIAL TOWNSHIP
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
