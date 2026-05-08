import { Layers, Check, ArrowRight } from "lucide-react";
import "./PlotOptions.css";

const plots = [
  {
    size: "500",
    unit: "Sq. Yd.",
    label: "Starter Unit",
    tag: "Best for Start-ups",
    color: "steel",
    features: [
      "Ideal for small traders & wholesalers",
      "Single truck dock",
      "Dedicated power meter",
      "Water & drainage connection",
    ],
    use: "Small warehousing, storage units, retail distribution",
  },
  {
    size: "1,000",
    unit: "Sq. Yd.",
    label: "Business Unit",
    tag: "Most Popular",
    color: "orange",
    features: [
      "Multi-truck loading capability",
      "Mezzanine floor provision",
      "Independent power & water",
      "Perimeter wall included",
    ],
    use: "Mid-size godowns, FMCG distribution, light manufacturing",
    highlight: true,
  },
  {
    size: "2,000+",
    unit: "Sq. Yd.",
    label: "Enterprise Unit",
    tag: "Custom Build",
    color: "steel",
    features: [
      "Multiple truck docks",
      "Custom warehouse design",
      "High-bay ceiling provision",
      "Dedicated admin block option",
    ],
    use: "Large-scale logistics, industrial manufacturing, 3PL operations",
  },
];

export default function PlotOptions() {
  return (
    <section className="plots" id="plots">
      <div className="plots-bg" aria-hidden="true" />
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <span className="section-tag" style={{ margin: "0 auto 16px" }}>
            <Layers size={10} /> Plot Options
          </span>
          <h2 className="plots-title">
            YOUR SCALE.
            <br />
            <span className="orange">YOUR SPACE.</span>
          </h2>
          <div className="section-divider center" />
          <p className="plots-sub">
            From starter godowns to enterprise warehouses — NAVKAR offers
            flexible plot configurations to match your business size and growth
            trajectory.
          </p>
        </div>

        <div className="plots-grid">
          {plots.map((p, i) => (
            <div
              key={i}
              className={`plot-card ${p.highlight ? "highlight" : ""}`}
            >
              {p.highlight && <div className="plot-badge">★ Most Popular</div>}
              <div className="plot-top">
                <div className="plot-size">
                  {p.size}
                  <span className="plot-unit"> {p.unit}</span>
                </div>
                <div className="plot-label">{p.label}</div>
                <span className="plot-tag">{p.tag}</span>
              </div>

              <div className="plot-visual">
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="120" fill="#0A1628" />
                  {/* Scale-based warehouse visual */}
                  {p.highlight ? (
                    <>
                      <rect
                        x="20"
                        y="20"
                        width="160"
                        height="80"
                        fill="#1E3050"
                        stroke="rgba(249,115,22,0.5)"
                        strokeWidth="2"
                      />
                      <rect
                        x="20"
                        y="20"
                        width="160"
                        height="14"
                        fill="#F97316"
                        opacity="0.7"
                      />
                      <rect
                        x="70"
                        y="80"
                        width="60"
                        height="20"
                        fill="#0A1628"
                      />
                      <rect
                        x="30"
                        y="38"
                        width="20"
                        height="12"
                        fill="rgba(251,191,36,0.3)"
                      />
                      <rect
                        x="90"
                        y="38"
                        width="20"
                        height="12"
                        fill="rgba(251,191,36,0.3)"
                      />
                      <rect
                        x="150"
                        y="38"
                        width="20"
                        height="12"
                        fill="rgba(251,191,36,0.3)"
                      />
                      <text
                        x="100"
                        y="68"
                        textAnchor="middle"
                        fill="rgba(249,115,22,0.7)"
                        fontSize="10"
                        fontFamily="Barlow Condensed"
                        fontWeight="700"
                        letterSpacing="2"
                      >
                        1,000 SQ. YD.
                      </text>
                    </>
                  ) : i === 0 ? (
                    <>
                      <rect
                        x="50"
                        y="30"
                        width="100"
                        height="70"
                        fill="#1E3050"
                        stroke="rgba(249,115,22,0.3)"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="50"
                        y="30"
                        width="100"
                        height="10"
                        fill="#F97316"
                        opacity="0.4"
                      />
                      <rect
                        x="80"
                        y="85"
                        width="40"
                        height="15"
                        fill="#0A1628"
                      />
                      <text
                        x="100"
                        y="62"
                        textAnchor="middle"
                        fill="rgba(249,115,22,0.5)"
                        fontSize="9"
                        fontFamily="Barlow Condensed"
                        letterSpacing="1"
                      >
                        500 SQ. YD.
                      </text>
                    </>
                  ) : (
                    <>
                      <rect
                        x="10"
                        y="15"
                        width="180"
                        height="90"
                        fill="#1E3050"
                        stroke="rgba(249,115,22,0.4)"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="10"
                        y="15"
                        width="180"
                        height="14"
                        fill="#F97316"
                        opacity="0.6"
                      />
                      <rect
                        x="30"
                        y="83"
                        width="30"
                        height="22"
                        fill="#0A1628"
                      />
                      <rect
                        x="80"
                        y="83"
                        width="40"
                        height="22"
                        fill="#0A1628"
                      />
                      <rect
                        x="140"
                        y="83"
                        width="30"
                        height="22"
                        fill="#0A1628"
                      />
                      <rect
                        x="20"
                        y="36"
                        width="20"
                        height="14"
                        fill="rgba(251,191,36,0.3)"
                      />
                      <rect
                        x="90"
                        y="36"
                        width="20"
                        height="14"
                        fill="rgba(251,191,36,0.3)"
                      />
                      <rect
                        x="160"
                        y="36"
                        width="20"
                        height="14"
                        fill="rgba(251,191,36,0.3)"
                      />
                      <text
                        x="100"
                        y="70"
                        textAnchor="middle"
                        fill="rgba(249,115,22,0.6)"
                        fontSize="10"
                        fontFamily="Barlow Condensed"
                        fontWeight="700"
                        letterSpacing="1"
                      >
                        2,000+ SQ. YD.
                      </text>
                    </>
                  )}
                </svg>
              </div>

              <ul className="plot-features">
                {p.features.map((f, j) => (
                  <li key={j}>
                    <Check size={13} className="check-icon" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="plot-use">
                <span className="use-label">Ideal For: </span>
                {p.use}
              </div>

              <a
                href="#contact"
                className={`plot-cta ${p.highlight ? "plot-cta-primary" : ""}`}
              >
                Enquire Now <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>

        <div className="custom-note">
          <div className="custom-icon">⚙️</div>
          <div>
            <div className="custom-title">Need a Custom Configuration?</div>
            <div className="custom-body">
              NAVKAR offers custom plot amalgamation and warehouse design-build
              options for enterprise clients. Talk to our team to structure the
              space your operations need.
            </div>
          </div>
          <a href="#contact" className="custom-cta">
            Discuss Custom <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
