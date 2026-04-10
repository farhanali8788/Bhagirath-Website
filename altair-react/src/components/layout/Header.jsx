import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const NAV_LINKS = [
    { label: "About", id: "about" },
    { label: "Amenities", id: "amenities" },
    { label: "Residences", id: "residences" },
    { label: "Location", id: "location" },
  ];

  return (
    <>
      <header
        className={`altair-header ${scrolled ? "altair-header--scrolled" : ""} ${menuOpen ? "altair-header--menu-open" : ""}`}
      >
        <div className="container altair-header__inner">
          <button
            className="altair-logo"
            onClick={() => scrollTo("hero")}
            aria-label="Altair Home"
          >
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none">
              <path
                d="M30 5L36 22H54L40 32L46 49L30 39L14 49L20 32L6 22H24L30 5Z"
                fill="none"
                stroke="#C9A96E"
                strokeWidth="1.5"
              />
              <path
                d="M30 15L34 27H47L37 34L41 46L30 39L19 46L23 34L13 27H26L30 15Z"
                fill="rgba(201,169,110,0.12)"
                stroke="#C9A96E"
                strokeWidth="0.5"
              />
            </svg>
            <span className="altair-logo__text">ALTAIR</span>
          </button>

          <nav className="altair-nav">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                className="altair-nav__link"
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className="altair-header__cta"
            onClick={() => scrollTo("contact")}
          >
            Book Visit
          </button>

          <button
            className={`altair-hamburger ${menuOpen ? "altair-hamburger--open" : ""}`}
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="altair-bar altair-bar--top" />
            <span className="altair-bar altair-bar--mid" />
            <span className="altair-bar altair-bar--bot" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`altair-mobile-menu ${menuOpen ? "altair-mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="altair-mobile-menu__inner">
          <nav className="altair-mobile-nav">
            {NAV_LINKS.map((l, i) => (
              <button
                key={l.id}
                className="altair-mobile-nav__link"
                style={{ animationDelay: `${0.08 + i * 0.08}s` }}
                onClick={() => scrollTo(l.id)}
              >
                <span className="altair-mobile-nav__num">0{i + 1}</span>
                {l.label}
              </button>
            ))}
          </nav>
          <div className="altair-mobile-menu__footer">
            <button
              className="altair-mobile-cta"
              onClick={() => scrollTo("contact")}
            >
              Book Consultation
            </button>
            <p className="altair-mobile-tagline">The Brightest Star</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
