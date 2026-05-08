import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <div className="footer-badge">NK</div>
              <div>
                <div className="footer-name">NAVKAR</div>
                <div className="footer-sub">by SB Rander Group</div>
              </div>
            </div>
            <p className="footer-tagline">
              Premium commercial industrial spaces engineered for operational
              scale. Godowns · Warehouses · Industrial Plots — Nagpur.
            </p>
            <div className="footer-contacts">
              <a href="tel:+919112006081" className="footer-contact">
                <Phone size={13} /> +91 91120 06081
              </a>
              <a href="tel:+919112006008" className="footer-contact">
                <Phone size={13} /> +91 91120 06008
              </a>
              <a
                href="mailto:info@bhagirathrealty.com"
                className="footer-contact"
              >
                <Mail size={13} /> info@bhagirathrealty.com
              </a>
              <div className="footer-contact">
                <MapPin size={13} /> NH-44 Corridor, Nagpur, MH
              </div>
            </div>
          </div>

          <div className="footer-links-col">
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {[
                "Location Advantage",
                "Project Overview",
                "Infrastructure",
                "Plot Options",
                "Trust & Compliance",
                "Investment Angle",
                "Book Site Visit",
              ].map((l, i) => (
                <li key={i}>
                  <a href="#contact">
                    <ArrowRight size={11} /> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <div className="footer-col-title">Developer</div>
            <ul className="footer-links">
              {[
                "About SB Rander Group",
                "Completed Projects",
                "Ongoing Projects",
                "Media & Press",
                "Career",
                "Contact Us",
              ].map((l, i) => (
                <li key={i}>
                  <a href="#contact">
                    <ArrowRight size={11} /> {l}
                  </a>
                </li>
              ))}
            </ul>
            <div className="footer-col-title" style={{ marginTop: "24px" }}>
              Main Website
            </div>
            <a
              href="https://bhagirathrealty.com"
              target="_blank"
              rel="noopener noreferrer"
              className="parent-link"
            >
              bhagirathrealty.com →
            </a>
          </div>

          <div className="footer-cta-col">
            <div className="footer-col-title">Ready to Scale?</div>
            <p className="footer-cta-body">
              Limited industrial plots available. Secure your commercial space
              before prices rise.
            </p>
            <a href="#contact" className="footer-cta-btn">
              Book Site Visit <ArrowRight size={14} />
            </a>
            <div className="footer-badges">
              <div className="f-badge">RERA</div>
              <div className="f-badge">NOC Approved</div>
              <div className="f-badge">Bank Eligible</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            © 2024 NAVKAR · SB Rander Group. All rights reserved.
          </div>
          <div className="footer-bottom-right">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">RERA Details</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>

        <div className="footer-disclaimer">
          This is a marketing communication. All specifications, features, and
          pricing are indicative and subject to change. Please refer to the
          registered sale agreement for final details. RERA Registration No.:
          [Registration Pending]. Images used are for representational purposes
          only.
        </div>
      </div>
    </footer>
  );
}
