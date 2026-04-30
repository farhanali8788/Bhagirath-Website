import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Location", href: "#location" },
    { label: "Overview", href: "#overview" },
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Plot Options", href: "#plots" },
    { label: "Investment", href: "#investment" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner container">
        <div className="navbar-brand">
          <div className="brand-badge">
            <img src="logo-icon.png" alt="Navkaar Logo" />
          </div>
          <div className="brand-text">
            <span className="brand-name">NAVKAAR</span>
            {/* <span className="brand-sub">by SB Rander Group</span> */}
          </div>
        </div>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="tel:+919876543210" className="nav-phone">
            <Phone size={14} />
            <span>+91 98765 43210</span>
          </a>
          <a href="#contact" className="nav-cta">
            Book Site Visit <ChevronRight size={14} />
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                <ChevronRight size={14} /> {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Book Site Visit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
