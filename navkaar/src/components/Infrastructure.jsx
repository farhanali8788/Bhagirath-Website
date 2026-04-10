import './Infrastructure.css';

const features = [
  {
    icon: '🛣️',
    title: '30-Ft Wide Internal Roads',
    desc: 'Built for truck movement. Dual-lane internal roads allow simultaneous entry & exit — zero choke points.',
    tag: 'Logistics Ready',
  },
  {
    icon: '⚡',
    title: 'High-Tension Power Supply',
    desc: 'Dedicated transformer + 24×7 power availability. Industrial-grade supply for heavy machinery and cold storage.',
    tag: 'Power Assured',
  },
  {
    icon: '💧',
    title: 'Water & Drainage Systems',
    desc: 'Underground drainage network, borewell backup, and rainwater management built to industrial standards.',
    tag: 'Infrastructure Ready',
  },
  {
    icon: '🏗️',
    title: 'Loading / Unloading Docks',
    desc: 'Dedicated dock zones per plot. Designed for container trucks and heavy commercial vehicles.',
    tag: 'Operational Ease',
  },
  {
    icon: '🔌',
    title: 'Plug & Play Readiness',
    desc: 'All utilities at plot boundary — power, water, drainage, telecom. Move in. Set up. Operate.',
    tag: 'Day-1 Operable',
  },
  {
    icon: '📡',
    title: 'Fiber & Telecom Ready',
    desc: 'High-speed internet infrastructure with telecom ducting pre-laid. Connect your operations immediately.',
    tag: 'Connected',
  },
  {
    icon: '🚒',
    title: 'Fire Safety Infrastructure',
    desc: 'Fire hydrant network, extinguisher points, and fire NOC compliant layout across the development.',
    tag: 'Safety Certified',
  },
  {
    icon: '💡',
    title: 'Street Lighting & Signage',
    desc: 'LED street lights along all internal roads. Operational clarity through professional site signage.',
    tag: 'Operational',
  },
];

export default function Infrastructure() {
  return (
    <section className="infra" id="infrastructure">
      <div className="infra-bg" aria-hidden="true" />
      <div className="container">
        <div className="infra-header">
          <div>
            <span className="section-tag">Infrastructure & Features</span>
            <h2 className="infra-title">
              BUILT FOR<br />
              <span className="orange">HEAVY OPERATIONS.</span>
            </h2>
            <div className="section-divider" />
          </div>
          <div className="infra-header-right">
            <p className="infra-sub">
              NAVKAAR is engineered for operational efficiency from day one.
              Every infrastructure element is designed with commercial logistics in mind —
              not retrofitted afterthoughts.
            </p>
            <div className="infra-stamp">
              <span className="stamp-label">100% Plug & Play</span>
              <span className="stamp-sub">All utilities at plot boundary</span>
            </div>
          </div>
        </div>

        <div className="infra-grid">
          {features.map((f, i) => (
            <div key={i} className="infra-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="infra-card-top">
                <div className="infra-icon">{f.icon}</div>
                <span className="infra-tag">{f.tag}</span>
              </div>
              <div className="infra-card-title">{f.title}</div>
              <div className="infra-card-desc">{f.desc}</div>
              <div className="infra-card-bar" />
            </div>
          ))}
        </div>

        {/* Visual infrastructure diagram */}
        <div className="infra-diagram">
          <div className="diagram-label">NAVKAAR INFRASTRUCTURE CROSS-SECTION</div>
          <svg viewBox="0 0 900 180" xmlns="http://www.w3.org/2000/svg">
            <rect width="900" height="180" fill="#0A1628"/>
            {/* Road */}
            <rect x="0" y="120" width="900" height="40" fill="#1A2E4A"/>
            <line x1="0" y1="140" x2="900" y2="140" stroke="#F97316" strokeWidth="1.5" strokeDasharray="30,20"/>
            {/* Plots on each side */}
            {[0,1,2,3,4].map(i => (
              <g key={i}>
                <rect x={10 + i * 175} y="20" width="160" height="95" fill="#1E3050" stroke="rgba(249,115,22,0.3)" strokeWidth="1"/>
                <rect x={10 + i * 175} y="20" width="160" height="12" fill="#F97316" opacity="0.5"/>
                {/* Loading dock */}
                <rect x={50 + i * 175} y="112" width="40" height="8" fill="#F97316" opacity="0.6"/>
              </g>
            ))}
            {/* Labels */}
            <text x="450" y="175" textAnchor="middle" fill="rgba(249,115,22,0.5)" fontSize="9" fontFamily="Barlow Condensed" letterSpacing="3">30-FT INTERNAL ROAD — TRUCK MOVEMENT CORRIDOR</text>
            {/* Power lines */}
            <line x1="0" y1="5" x2="900" y2="5" stroke="rgba(251,191,36,0.3)" strokeWidth="2"/>
            <text x="450" y="14" textAnchor="middle" fill="rgba(251,191,36,0.4)" fontSize="8" fontFamily="Barlow Condensed" letterSpacing="2">POWER INFRASTRUCTURE LINE</text>
            {/* Truck */}
            <g transform="translate(380, 122)">
              <rect x="0" y="2" width="50" height="15" fill="#F97316" rx="1" opacity="0.8"/>
              <rect x="36" y="0" width="14" height="10" fill="#FB923C" rx="1"/>
              <circle cx="10" cy="19" r="5" fill="#0A1628" stroke="#F97316" strokeWidth="1.5"/>
              <circle cx="42" cy="19" r="5" fill="#0A1628" stroke="#F97316" strokeWidth="1.5"/>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
