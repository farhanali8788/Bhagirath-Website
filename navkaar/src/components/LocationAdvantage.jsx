import { Navigation, Clock, Truck, ArrowRight } from 'lucide-react';
import './LocationAdvantage.css';

const connections = [
  { icon: '🛣️', label: 'NH-44 (Mumbai–Kolkata)', time: '0 min', note: 'Direct frontage' },
  { icon: '✈️', label: 'Dr. Babasaheb Ambedkar Airport', time: '25 min', note: 'Nagpur International' },
  { icon: '🚂', label: 'Nagpur Railway Junction', time: '20 min', note: 'Pan-India connectivity' },
  { icon: '🏭', label: 'MIDC Industrial Area', time: '15 min', note: 'Industrial cluster' },
  { icon: '🔄', label: 'Butibori Industrial Zone', time: '10 min', note: 'Nearest logistics hub' },
  { icon: '🏙️', label: 'Nagpur City Centre', time: '18 min', note: 'Market access' },
  { icon: '🛤️', label: 'Samruddhi Expressway', time: '8 min', note: 'Mumbai corridor' },
  { icon: '📦', label: 'Multi-Modal Logistics Hub', time: '12 min', note: 'MMLH Nagpur' },
];

const advantages = [
  { title: 'Zero Degree City', body: 'Nagpur sits at India\'s geographic center — equidistant from all major metros. Every logistics route passes through here.' },
  { title: 'Highway Junction', body: 'Direct frontage on NH-44, one of India\'s busiest freight corridors. Trucks in and out — no city congestion.' },
  { title: 'Rail + Air + Road', body: 'Tri-modal connectivity. Nagpur\'s intermodal advantage makes it India\'s fastest-growing logistics node.' },
];

export default function LocationAdvantage() {
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
              WHERE EVERY ROUTE<br />
              <span className="orange">CONNECTS.</span>
            </h2>
            <div className="section-divider" />
            <p className="location-desc">
              NAVKAAR sits at Nagpur's prime logistics corridor — the crossroads of India.
              With NH-44 frontage, MIDC proximity, and multimodal access, your supply chain
              starts moving the moment you set up.
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
              <div className="map-label">NAVKAAR LOCATION MAP</div>
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="map-svg">
                {/* Background */}
                <rect width="400" height="400" fill="#0A1628"/>

                {/* Grid */}
                <defs>
                  <pattern id="mapgrid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#mapgrid)"/>

                {/* Highway NH-44 (diagonal) */}
                <path d="M 0 280 Q 200 200 400 120" stroke="#F97316" strokeWidth="5" fill="none" opacity="0.9"/>
                <path d="M 0 290 Q 200 210 400 130" stroke="rgba(249,115,22,0.2)" strokeWidth="12" fill="none"/>
                <text x="30" y="305" fill="rgba(249,115,22,0.8)" fontSize="10" fontFamily="Barlow Condensed" fontWeight="700" letterSpacing="1">NH-44</text>

                {/* Samruddhi Expressway */}
                <path d="M 400 160 Q 280 180 200 200 Q 100 220 0 180" stroke="#FBBF24" strokeWidth="3" fill="none" strokeDasharray="6,4"/>
                <text x="280" y="172" fill="rgba(251,191,36,0.7)" fontSize="8" fontFamily="Barlow Condensed" letterSpacing="1">SAMRUDDHI EXPWY</text>

                {/* Ring Road */}
                <ellipse cx="200" cy="230" rx="100" ry="70" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4,3"/>

                {/* City block indicators */}
                <rect x="140" y="185" width="60" height="45" fill="rgba(100,116,139,0.15)" stroke="rgba(100,116,139,0.3)" strokeWidth="1" rx="1"/>
                <text x="170" y="213" textAnchor="middle" fill="rgba(148,163,184,0.6)" fontSize="8" fontFamily="Barlow Condensed">NAGPUR CITY</text>

                {/* MIDC */}
                <rect x="290" y="240" width="50" height="40" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.3)" strokeWidth="1" rx="1"/>
                <text x="315" y="265" textAnchor="middle" fill="rgba(249,115,22,0.7)" fontSize="7" fontFamily="Barlow Condensed" letterSpacing="1">MIDC</text>

                {/* Airport */}
                <g transform="translate(80, 120)">
                  <circle cx="0" cy="0" r="15" fill="rgba(251,191,36,0.08)" stroke="rgba(251,191,36,0.4)" strokeWidth="1"/>
                  <text x="0" y="4" textAnchor="middle" fill="rgba(251,191,36,0.8)" fontSize="12">✈</text>
                  <text x="0" y="24" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="7" fontFamily="Barlow Condensed" letterSpacing="1">AIRPORT</text>
                </g>

                {/* Railway */}
                <path d="M 50 300 L 350 300" stroke="rgba(148,163,184,0.4)" strokeWidth="3" strokeDasharray="8,4"/>
                <path d="M 50 300 L 350 300" stroke="rgba(148,163,184,0.2)" strokeWidth="8" fill="none"/>
                <text x="200" y="320" textAnchor="middle" fill="rgba(148,163,184,0.5)" fontSize="8" fontFamily="Barlow Condensed" letterSpacing="2">RAILWAY LINE</text>

                {/* NAVKAAR marker */}
                <g transform="translate(220, 215)">
                  <circle cx="0" cy="0" r="18" fill="rgba(249,115,22,0.2)" stroke="var(--orange)" strokeWidth="2">
                    <animate attributeName="r" values="18;26;18" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="0" cy="0" r="10" fill="#F97316"/>
                  <text x="0" y="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Barlow Condensed">NK</text>
                  <text x="0" y="34" textAnchor="middle" fill="white" fontSize="9" fontFamily="Barlow Condensed" fontWeight="700" letterSpacing="2">NAVKAAR</text>
                </g>

                {/* Distance lines */}
                <line x1="220" y1="215" x2="80" y2="130" stroke="rgba(249,115,22,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
                <line x1="220" y1="215" x2="315" y2="255" stroke="rgba(249,115,22,0.2)" strokeWidth="1" strokeDasharray="3,3"/>

                {/* Legend */}
                <rect x="0" y="360" width="400" height="40" fill="rgba(15,31,61,0.8)"/>
                <line x1="20" y1="380" x2="50" y2="380" stroke="#F97316" strokeWidth="3"/>
                <text x="55" y="384" fill="rgba(249,115,22,0.8)" fontSize="8" fontFamily="Barlow Condensed">NATIONAL HIGHWAY</text>
                <line x1="160" y1="380" x2="190" y2="380" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4,2"/>
                <text x="195" y="384" fill="rgba(251,191,36,0.8)" fontSize="8" fontFamily="Barlow Condensed">EXPRESSWAY</text>
                <circle cx="290" cy="380" r="5" fill="#F97316"/>
                <text x="300" y="384" fill="rgba(249,115,22,0.8)" fontSize="8" fontFamily="Barlow Condensed">NAVKAAR</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Connectivity Grid */}
        <div className="connectivity-title">
          <Clock size={16} className="icon-orange" />
          <span>TRAVEL TIME FROM NAVKAAR</span>
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
          <span>Every logistics route converges at NAVKAAR — your business stays ahead.</span>
          <a href="#contact" className="loc-cta-btn">
            Get Location Details <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
