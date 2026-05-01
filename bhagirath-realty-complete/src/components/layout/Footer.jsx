import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="17"
        height="17"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourpage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="17"
        height="17"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/yourcompany",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="17"
        height="17"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [col1Ref, col1Visible] = useScrollAnimation(0.1);
  const [col2Ref, col2Visible] = useScrollAnimation(0.1);
  const [col3Ref, col3Visible] = useScrollAnimation(0.1);
  const [col4Ref, col4Visible] = useScrollAnimation(0.1);

  return (
    <footer className="footer-a">
      <div className="footer-a__top-line" />

      <div className="container footer-a__grid">
        {/* Brand */}
        <div
          ref={col1Ref}
          className={`footer-a__col footer-a__col--brand anim-fade-up ${col1Visible ? "is-visible" : ""}`}
        >
          <Link to="/" className="footer-a__logo">
            <img
              src="../../../logo-icon.png"
              alt="SB Rander Group"
              className="footer-a__logo-img"
            />
            <img
              src="../../../text.png"
              alt="SB Rander Group"
              className="footer-a__logo-text"
            />
          </Link>
          <p className="footer-a__tagline">
            Building legacies across Nagpur — farm estates, residences, villas
            and commercial developments.
          </p>
          <div className="footer-a__socials">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="footer-a__social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div
          ref={col2Ref}
          className={`footer-a__col anim-fade-up anim-delay-2 ${col2Visible ? "is-visible" : ""}`}
        >
          <h4 className="footer-a__col-heading">Navigate</h4>
          <ul className="footer-a__links">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "footer-a__link footer-a__link--active"
                      : "footer-a__link"
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div
          ref={col3Ref}
          className={`footer-a__col anim-fade-up anim-delay-3 ${col3Visible ? "is-visible" : ""}`}
        >
          <h4 className="footer-a__col-heading">Our Projects</h4>
          <ul className="footer-a__links">
            <li>
              <a
                href="https://panchtatva.bhagirathrealty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-a__link"
              >
                Panchtatva ↗
              </a>
            </li>
            <li>
              <Link to="/projects" className="footer-a__link">
                Altair
              </Link>
            </li>
            <li>
              <Link to="/projects" className="footer-a__link">
                Navkar
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div
          ref={col4Ref}
          className={`footer-a__col anim-fade-up anim-delay-4 ${col4Visible ? "is-visible" : ""}`}
        >
          <h4 className="footer-a__col-heading">Contact</h4>
          <ul className="footer-a__contact-list">
            <li>
              <span className="footer-a__contact-label">Phone</span>
              <a href="tel:+919999999999" className="footer-a__contact-value">
                +91 99999 99999
              </a>
            </li>
            <li>
              <span className="footer-a__contact-label">Email</span>
              <a
                href="mailto:info@bhagirathrealty.com"
                className="footer-a__contact-value"
              >
                info@bhagirathrealty.com
              </a>
            </li>
            <li>
              <span className="footer-a__contact-label">Office</span>
              <span className="footer-a__contact-value">
                Sri Bhagirath Reality Pvt. Ltd. <br /> Sarvodaya Cloth Market,
                Gandhibagh, Nagpur - 440002
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-a__bottom">
        <div className="container footer-a__bottom-inner">
          <p className="footer-a__copyright">
            © {new Date().getFullYear()} Sri Bhagirath Realty Pvt. Ltd. All
            Rights Reserved.
          </p>
          <p className="footer-a__credit">
            Part of <span className="footer-a__parent">SB Rander Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
