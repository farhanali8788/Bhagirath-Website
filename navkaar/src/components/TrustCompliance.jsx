import { ShieldCheck, FileText, Award, Check } from 'lucide-react';
import './TrustCompliance.css';

const approvals = [
  { icon: '📋', label: 'RERA Registered', desc: 'Fully registered under Maharashtra Real Estate Regulatory Authority' },
  { icon: '🏛️', label: 'Local Body NOC', desc: 'NMC / Gram Panchayat clearances in place' },
  { icon: '🏭', label: 'Industrial Zone Clearance', desc: 'Zoned for commercial + industrial use, MIDC compliant' },
  { icon: '🔥', label: 'Fire NOC', desc: 'Fire department approval for entire layout' },
  { icon: '🌊', label: 'Drainage Approval', desc: 'Municipal drainage connectivity approved' },
  { icon: '⚡', label: 'Power Sanction Letter', desc: 'MSEDCL power sanction for full development' },
];

const trustPoints = [
  'Clear title deed with no encumbrances',
  'All approvals obtained before launch',
  'Registered sale deed for every plot',
  'No litigation history on the land',
  'Dedicated legal helpdesk for buyers',
  'Bank loan eligible property',
];

export default function TrustCompliance() {
  return (
    <section className="trust" id="trust">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-left">
            <span className="section-tag">
              <ShieldCheck size={10} /> Legal & Compliance
            </span>
            <h2 className="trust-title">
              ZERO<br />
              <span className="orange">LEGAL RISK.</span>
            </h2>
            <div className="section-divider" />
            <p className="trust-desc">
              NAVKAAR is fully compliant and approved before you invest. Every clearance,
              every NOC, every registration — sorted. Your business starts on solid legal ground.
            </p>

            <ul className="trust-points">
              {trustPoints.map((t, i) => (
                <li key={i}>
                  <div className="trust-check">
                    <Check size={12} />
                  </div>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="developer-trust">
              <div className="dev-trust-left">
                <Award size={32} className="award-icon" />
                <div>
                  <div className="dev-trust-title">SB Rander Group</div>
                  <div className="dev-trust-sub">Trusted Developer · Nagpur</div>
                </div>
              </div>
              <div className="dev-trust-body">
                15+ years of real estate development in Nagpur. Multiple residential and
                commercial projects successfully delivered. Zero dispute record.
              </div>
            </div>
          </div>

          <div className="trust-right">
            <div className="approvals-title">
              <FileText size={14} />
              <span>APPROVALS & CLEARANCES</span>
            </div>
            <div className="approvals-grid">
              {approvals.map((a, i) => (
                <div key={i} className="approval-card">
                  <div className="approval-icon">{a.icon}</div>
                  <div>
                    <div className="approval-label">
                      <span className="approval-check">✓</span>
                      {a.label}
                    </div>
                    <div className="approval-desc">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="trust-cta-box">
              <div className="tcta-top">
                <ShieldCheck size={24} className="tcta-icon" />
                <div>
                  <div className="tcta-title">Verified & Bank Loan Eligible</div>
                  <div className="tcta-sub">All leading banks have approved NAVKAAR for home & commercial loans</div>
                </div>
              </div>
              <a href="#contact" className="tcta-btn">
                Request Legal Documents
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
