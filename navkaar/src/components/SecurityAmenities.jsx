import { Shield, Users } from 'lucide-react';
import './SecurityAmenities.css';

const security = [
  { icon: '🔒', label: 'Gated Development', desc: 'Single controlled entry/exit with boom barriers' },
  { icon: '📹', label: 'CCTV Surveillance', desc: '360° camera coverage across all zones' },
  { icon: '👮', label: '24×7 Security Guards', desc: 'Round-the-clock uniformed security personnel' },
  { icon: '💡', label: 'Perimeter Lighting', desc: 'High-mast lights across boundary walls' },
  { icon: '🚨', label: 'Emergency Response', desc: 'Fire & medical emergency protocol in place' },
  { icon: '📋', label: 'Vehicle Log System', desc: 'Entry/exit register with vehicle tracking' },
];

const amenities = [
  { icon: '🚻', label: 'Common Restrooms', desc: 'Separate facilities for staff across zones' },
  { icon: '🍽️', label: 'Worker Canteen Area', desc: 'Dedicated eating zone for workforce' },
  { icon: '🅿️', label: 'Vehicle Parking', desc: 'Separate parking for 2-wheelers, 4-wheelers & trucks' },
  { icon: '🏥', label: 'First Aid Point', desc: 'Medical first-aid station within premises' },
  { icon: '💧', label: 'Drinking Water Supply', desc: 'Purified water points throughout development' },
  { icon: '🌿', label: 'Green Buffer Zone', desc: 'Landscaped buffer for a cleaner work environment' },
];

export default function SecurityAmenities() {
  return (
    <section className="security" id="security">
      <div className="container">
        <div className="security-grid">
          {/* Security */}
          <div className="security-col">
            <span className="section-tag">
              <Shield size={10} /> Security & Safety
            </span>
            <h2 className="sec-title">
              GATED.<br />
              <span className="orange">GUARDED.</span><br />
              SECURE.
            </h2>
            <div className="section-divider" />
            <p className="sec-desc">
              Your assets, inventory, and operations are protected by a multi-layered
              security infrastructure built to commercial standards.
            </p>
            <div className="sec-grid">
              {security.map((s, i) => (
                <div key={i} className="sec-card">
                  <div className="sec-icon">{s.icon}</div>
                  <div className="sec-label">{s.label}</div>
                  <div className="sec-desc-small">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="vertical-divider" />

          {/* Amenities */}
          <div className="amenities-col">
            <span className="section-tag">
              <Users size={10} /> Worker Amenities
            </span>
            <h2 className="sec-title">
              FUNCTIONAL.<br />
              <span className="orange">WORKFORCE</span><br />
              READY.
            </h2>
            <div className="section-divider" />
            <p className="sec-desc">
              A productive workforce needs basic operational comfort. NAVKAAR provides
              clean, functional amenities — built for work, not luxury.
            </p>
            <div className="sec-grid">
              {amenities.map((a, i) => (
                <div key={i} className="sec-card">
                  <div className="sec-icon">{a.icon}</div>
                  <div className="sec-label">{a.label}</div>
                  <div className="sec-desc-small">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
