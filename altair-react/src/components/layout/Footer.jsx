import React from "react";
import "./Footer.css";
import { META } from "../../data/altair";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="altair-footer">
      <div className="altair-footer__top-line" />
      <div className="container altair-footer__inner">
        <div className="altair-footer__brand">
          <div className="altair-footer__logo">
            <svg width="28" height="28" viewBox="0 0 60 60" fill="none">
              <path d="M30 5L36 22H54L40 32L46 49L30 39L14 49L20 32L6 22H24L30 5Z" stroke="#C9A96E" strokeWidth="1.5" />
            </svg>
            <span>ALTAIR</span>
          </div>
          <p className="altair-footer__tagline">
            The Brightest Star · {META.developer}
          </p>
          <p className="altair-footer__rera">MAHA RERA: {META.rera}</p>
        </div>
        <div className="altair-footer__links">
          <h4>Navigate</h4>
          <ul>
            {["about","amenities","residences","location","contact"].map((id) => (
              <li key={id}>
                <button onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="altair-footer__contact">
          <h4>Contact</h4>
          <ul>
            <li><span>Phone</span><a href={`tel:${META.phone}`}>{META.phone}</a></li>
            <li><span>WhatsApp</span><a href={`https://wa.me/${META.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with us</a></li>
            <li><span>Address</span><span>{META.address}</span></li>
          </ul>
        </div>
      </div>
      <div className="altair-footer__bottom">
        <div className="container altair-footer__bottom-inner">
          <p>© {year} {META.developer}. All Rights Reserved.</p>
          <p>Part of <strong>{META.group}</strong> · Est. {META.established}</p>
        </div>
      </div>
      <div className="altair-footer__disclaimer">
        <div className="container">
          <p>This is a conceptual presentation and not a legal offering. Pictorial depiction and details of buildings, layouts, specifications, design, dimension, etc. are tentative, indicative and subject to amendment, variation and modification by the company at its sole discretion without notice.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
