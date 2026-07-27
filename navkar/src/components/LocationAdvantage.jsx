import { useState } from "react";
import {
  Navigation,
  Clock,
  Truck,
  ArrowRight,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";
import "./LocationAdvantage.css";

const connections = [
  {
    icon: "🛣️",
    label: "NH-44 (Mumbai–Kolkata)",
    time: "0 min",
    note: "Direct frontage",
  },
  {
    icon: "✈️",
    label: "Dr. Babasaheb Ambedkar Airport",
    time: "25 min",
    note: "Nagpur International",
  },
  {
    icon: "🚂",
    label: "Nagpur Railway Junction",
    time: "20 min",
    note: "Pan-India connectivity",
  },
  {
    icon: "🏭",
    label: "MIDC Industrial Area",
    time: "15 min",
    note: "Industrial cluster",
  },
  {
    icon: "🔄",
    label: "Butibori Industrial Zone",
    time: "10 min",
    note: "Nearest logistics hub",
  },
  {
    icon: "🏙️",
    label: "Nagpur City Centre",
    time: "18 min",
    note: "Market access",
  },
  {
    icon: "🛤️",
    label: "Samruddhi Expressway",
    time: "8 min",
    note: "Mumbai corridor",
  },
  {
    icon: "📦",
    label: "Multi-Modal Logistics Hub",
    time: "12 min",
    note: "MMLH Nagpur",
  },
];

const advantages = [
  {
    title: "Zero Degree City",
    body: "Nagpur sits at India's geographic center — equidistant from all major metros. Every logistics route passes through here.",
  },
  {
    title: "Highway Junction",
    body: "Direct frontage on NH-44, one of India's busiest freight corridors. Trucks in and out — no city congestion.",
  },
  {
    title: "Rail + Air + Road",
    body: "Tri-modal connectivity. Nagpur's intermodal advantage makes it India's fastest-growing logistics node.",
  },
];

// ── Phase-I plot availability page (lead-gated) ──
const PHASE1_URL =
  "https://sribhagirathrealty.blindersoe.com/projects/plot-availability/2";
const PHASE2_URL =
  "https://sribhagirathrealty.blindersoe.com/projects/plot-availability/1";
// Same Formspree form used across the sites
const FORMSPREE_URL = "https://formspree.io/f/xykqpjlo";
// TODO: paste the Google Maps EMBED url (Share → Embed a map → copy the src)
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.0489470727407!2d79.2318198!3d21.141031299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c982cb445a25%3A0xed5dfbbd008de39a!2sNavkar%20Industrial%20and%20Logistics%20Park!5e1!3m2!1sen!2sin!4v1782893728017!5m2!1sen!2sin";

const phases = [
  { name: "Navkar I", status: "Completed", tone: "done" },
  { name: "Navkar II", status: "Ongoing", tone: "live" },
  { name: "Navkar III", status: "Upcoming", tone: "soon" },
];

export default function LocationAdvantage() {
  const [leadPhase, setLeadPhase] = useState(null); // 'I' | 'II' | null
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [err, setErr] = useState("");

  const submitLead = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[0-9+\-\s]{8,}$/.test(form.phone.trim())) {
      setErr("Please enter your name and a valid phone number.");
      return;
    }
    setErr("");
    setSending(true);
    const phaseLabel = leadPhase === "II" ? "Phase-II" : "Phase-I";
    const target = leadPhase === "II" ? PHASE2_URL : PHASE1_URL;
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          interest: `Navkar ${phaseLabel} plot availability`,
          _subject: `Navkar ${phaseLabel} Enquiry — ${form.name || "New Lead"}`,
        }),
      });
    } catch (_) {
      // even if the lead POST fails, we still let the visitor through
    }
    // redirect to the correct phase availability page in a new tab
    window.open(target, "_blank", "noopener");
    setSending(false);
    setLeadPhase(null);
    setForm({ name: "", phone: "" });
  };

  return (
    <section className="location" id="location">
      <div className="location-bg" aria-hidden="true" />

      <div className="container">
        <div className="location-header">
          <div className="location-header-left">
            <span className="section-tag">
              <Navigation size={10} /> Strategic Location
            </span>
            <h2 className="location-title">
              WHERE EVERY ROUTE
              <br />
              <span className="orange">CONNECTS.</span>
            </h2>
            <div className="section-divider" />
            <p className="location-desc">
              NAVKAR sits at Nagpur's prime logistics corridor — the crossroads
              of India. With NH-44 frontage, MIDC proximity, and multimodal
              access, your supply chain starts moving the moment you set up.
            </p>

            <div className="advantage-pills">
              {advantages.map((a, i) => (
                <div key={i} className="advantage-pill">
                  <div className="pill-num">0{i + 1}</div>
                  <div>
                    <div className="pill-title">{a.title}</div>
                    <div className="pill-body">{a.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="location-header-right">
            {/* SVG Map */}
            <div className="map-container">
              <div className="map-label">NAVKAR LOCATION MAP</div>
              <div className="map-embed">
                <iframe
                  title="Navkar Industrial & Logistics Park location"
                  src={MAP_EMBED_SRC}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="phase-availability">
                <div className="phase-av-title">PHASE AVAILABILITY</div>
                <div className="phase-list">
                  {phases.map((p) => (
                    <div key={p.name} className={`phase-row phase-${p.tone}`}>
                      <span className="phase-name">{p.name}</span>
                      <span className="phase-status">
                        <span className="phase-dot" />
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="phase-cta-group">
                  <button
                    className="phase-cta"
                    onClick={() => setLeadPhase("I")}
                  >
                    View Phase-I Availability <ArrowRight size={15} />
                  </button>
                  <button
                    className="phase-cta phase-cta-alt"
                    onClick={() => setLeadPhase("II")}
                  >
                    View Phase-II Availability <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connectivity Grid */}
        <div className="connectivity-title">
          <Clock size={16} className="icon-orange" />
          <span>TRAVEL TIME FROM NAVKAR</span>
        </div>
        <div className="connections-grid">
          {connections.map((c, i) => (
            <div key={i} className="connection-card">
              <div className="conn-icon">{c.icon}</div>
              <div className="conn-info">
                <div className="conn-label">{c.label}</div>
                <div className="conn-note">{c.note}</div>
              </div>
              <div className="conn-time">
                <span className="time-val">{c.time}</span>
                <span className="time-unit">drive</span>
              </div>
            </div>
          ))}
        </div>

        <div className="location-cta">
          <Truck size={18} />
          <span>
            Every logistics route converges at NAVKAR — your business stays
            ahead.
          </span>
          <a href="#contact" className="loc-cta-btn">
            Get Location Details <ArrowRight size={14} />
          </a>
        </div>
      </div>
      {leadPhase && (
        <div
          className="lead-overlay"
          onClick={() => !sending && setLeadPhase(null)}
        >
          <div className="lead-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="lead-close"
              aria-label="Close"
              onClick={() => setLeadPhase(null)}
            >
              <X size={18} />
            </button>
            <h3 className="lead-title">
              View Phase-{leadPhase} Plot Availability
            </h3>
            <p className="lead-sub">
              Enter your details to view live plot availability. Our team will
              also assist you personally.
            </p>
            <form onSubmit={submitLead} className="lead-form">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
              />
              {err && <span className="lead-err">{err}</span>}
              <button type="submit" className="lead-submit" disabled={sending}>
                {sending ? (
                  <>
                    <Loader2 size={16} className="spin" /> Please wait…
                  </>
                ) : (
                  <>
                    Continue to Availability <ArrowRight size={15} />
                  </>
                )}
              </button>
              <span className="lead-note">
                <CheckCircle2 size={12} /> Your details are shared only with our
                sales team.
              </span>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
