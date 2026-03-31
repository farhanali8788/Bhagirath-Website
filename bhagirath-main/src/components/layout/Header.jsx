import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.css";

const projects = [
  { label: "Panchtatva", url: "https://panchtatva.bhagirathrealty.com" },
  { label: "Navkar", url: "https://navkar.bhagirathrealty.com" },
  { label: "Altair", url: "https://altair.bhagirathrealty.com" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileProj, setMobileProj] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  // Close dropdown when route changes
  useEffect(() => {
    setDropOpen(false);
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`header ${scrolled ? "header--scrolled" : ""} ${menuOpen ? "header--menu-open" : ""}`}
      >
        <div className="container header-inner">
          <Link to="/" className="logo" onClick={close}>
            <img
              src="/logo-icon.png"
              alt="SB Rander Group"
              className="logo-img"
            />
            <div className="logo-text">
              <span className="logo-sri">SRI</span>
              <span className="logo-main">BHAGIRATH</span>
              <span className="logo-sub">REALTY</span>
            </div>
          </Link>

          <nav className="nav-desktop">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              About
            </NavLink>

            {/* Projects dropdown */}
            <div
              className={`nav-dropdown ${dropOpen ? "nav-dropdown--open" : ""}`}
              ref={dropRef}
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button
                className="nav-link nav-dropdown__trigger"
                aria-expanded={dropOpen}
              >
                Projects
                <svg
                  className="nav-dropdown__caret"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div className="nav-dropdown__menu" role="menu">
                <div className="nav-dropdown__inner">
                  {projects.map((p) => (
                    <a
                      key={p.label}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-dropdown__item"
                      role="menuitem"
                    >
                      <span className="nav-dropdown__item-label">
                        {p.label}
                      </span>
                      <svg
                        className="nav-dropdown__item-arrow"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 10L10 2M10 2H4M10 2v6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </nav>

          <Link to="/contact" className="btn-gold desktop-only">
            Book Consultation
          </Link>

          <button
            className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="bar bar-top" />
            <span className="bar bar-mid" />
            <span className="bar bar-bot" />
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <nav className="mobile-nav">
            <NavLink
              to="/"
              end
              className="mobile-nav-link"
              style={{ animationDelay: "0.08s" }}
              onClick={close}
            >
              <span className="mobile-nav-num">01</span>Home
            </NavLink>

            <NavLink
              to="/about"
              className="mobile-nav-link"
              style={{ animationDelay: "0.16s" }}
              onClick={close}
            >
              <span className="mobile-nav-num">02</span>About
            </NavLink>

            {/* Mobile Projects accordion */}
            <div
              className="mobile-nav-accordion"
              style={{ animationDelay: "0.24s" }}
            >
              <button
                className="mobile-nav-link mobile-nav-link--btn"
                onClick={() => setMobileProj((p) => !p)}
              >
                <span className="mobile-nav-num">03</span>
                Projects
                <svg
                  className={`mobile-nav-caret ${mobileProj ? "mobile-nav-caret--open" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div
                className={`mobile-proj-list ${mobileProj ? "mobile-proj-list--open" : ""}`}
              >
                {projects.map((p) => (
                  <a
                    key={p.label}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-proj-item"
                    onClick={close}
                  >
                    {p.label}
                    <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
                      <path
                        d="M2 10L10 2M10 2H4M10 2v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <NavLink
              to="/contact"
              className="mobile-nav-link"
              style={{ animationDelay: "0.32s" }}
              onClick={close}
            >
              <span className="mobile-nav-num">04</span>Contact
            </NavLink>
          </nav>

          <div className="mobile-menu-footer">
            <Link to="/contact" className="btn-gold-full" onClick={close}>
              Book Consultation
            </Link>
            <p className="mobile-tagline">Building Legacies, Not Just Homes.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
