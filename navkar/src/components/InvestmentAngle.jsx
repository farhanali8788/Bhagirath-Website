import { TrendingUp, ArrowRight, BarChart2 } from "lucide-react";
import "./InvestmentAngle.css";

const reasons = [
  {
    num: "01",
    title: "Nagpur — India's Logistics Capital",
    body: "Strategically placed at India's geographic center. Every east–west and north–south freight route passes through Nagpur. Government's DMIC & freight corridor plans directly benefit this region.",
  },
  {
    num: "02",
    title: "Rising Demand, Limited Supply",
    body: "Tier-2 industrial space demand has surged 40%+ in 3 years. Quality warehouse & godown supply remains critically short. Early movers capture the best yields.",
  },
  {
    num: "03",
    title: "Rental Yield Potential",
    body: "Commercial industrial properties in Nagpur corridors are generating 8–12% annual rental yields — significantly higher than residential real estate.",
  },
  {
    num: "04",
    title: "Capital Appreciation Upside",
    body: "NH-44 corridor land prices have appreciated 3x in the last decade. NAVKAR's location puts your investment in the path of inevitable growth.",
  },
];

const megaProjects = [
  {
    icon: "🛣️",
    label: "DMIC Corridor",
    sub: "Delhi–Mumbai Industrial Corridor node",
  },
  {
    icon: "🏭",
    label: "Mihan SEZ",
    sub: "Multi-modal International Hub & Airport",
  },
  {
    icon: "🚄",
    label: "Nagpur Metro Phase 2",
    sub: "Expanding urban connectivity",
  },
  {
    icon: "🔄",
    label: "Samruddhi Expressway",
    sub: "Nagpur–Mumbai 6-lane access",
  },
  { icon: "📦", label: "MMLH Nagpur", sub: "Multi-Modal Logistics Hub" },
  {
    icon: "🌆",
    label: "Smart City Project",
    sub: "Urban infrastructure upgradation",
  },
];

export default function InvestmentAngle() {
  return (
    <section className="investment" id="investment">
      <div className="inv-bg" aria-hidden="true" />
      <div className="container">
        <div className="inv-header">
          <span className="section-tag">
            <TrendingUp size={10} /> Investment Perspective
          </span>
          <h2 className="inv-title">
            NAGPUR IS THE
            <br />
            <span className="orange">NEXT BIG</span>
            <br />
            LOGISTICS HUB.
          </h2>
          <div className="section-divider" />
        </div>

        <div className="inv-content">
          <div className="inv-left">
            <div className="inv-reasons">
              {reasons.map((r, i) => (
                <div key={i} className="inv-reason">
                  <div className="inv-reason-num">{r.num}</div>
                  <div>
                    <div className="inv-reason-title">{r.title}</div>
                    <div className="inv-reason-body">{r.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="inv-right">
            {/* Yield chart visual */}
            <div className="yield-card">
              <div className="yield-header">
                <BarChart2 size={16} className="icon-orange" />
                <span>PROJECTED RENTAL YIELD</span>
              </div>
              <div className="yield-bars">
                {[
                  {
                    label: "Residential",
                    val: 30,
                    pct: "3–4%",
                    color: "var(--grey)",
                  },
                  {
                    label: "Commercial Office",
                    val: 55,
                    pct: "5–7%",
                    color: "var(--steel-light)",
                  },
                  {
                    label: "Industrial / Godown",
                    val: 100,
                    pct: "8–12%",
                    color: "var(--orange)",
                  },
                ].map((b, i) => (
                  <div key={i} className="yield-bar-row">
                    <div className="yield-bar-label">{b.label}</div>
                    <div className="yield-bar-track">
                      <div
                        className="yield-bar-fill"
                        style={{ width: `${b.val}%`, background: b.color }}
                      />
                    </div>
                    <div className="yield-bar-pct" style={{ color: b.color }}>
                      {b.pct}
                    </div>
                  </div>
                ))}
              </div>
              <div className="yield-note">
                *Indicative figures based on Nagpur industrial corridor market
                data
              </div>
            </div>

            {/* Mega projects */}
            <div className="mega-section">
              <div className="mega-title">
                NAGPUR MEGA PROJECTS FUELING GROWTH
              </div>
              <div className="mega-grid">
                {megaProjects.map((m, i) => (
                  <div key={i} className="mega-card">
                    <span className="mega-icon">{m.icon}</span>
                    <div>
                      <div className="mega-label">{m.label}</div>
                      <div className="mega-sub">{m.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact" className="inv-cta">
              Explore Investment Opportunity
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom stat strip */}
        <div className="inv-strip">
          {[
            { val: "₹50K Cr+", label: "DMIC Investment in Region" },
            { val: "40%", label: "Warehouse Demand Growth (3 Yr)" },
            { val: "8–12%", label: "Industrial Rental Yield" },
            { val: "3×", label: "NH-44 Corridor Appreciation (10 Yr)" },
          ].map((s, i) => (
            <div key={i} className="inv-strip-item">
              <div className="inv-strip-val">{s.val}</div>
              <div className="inv-strip-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
