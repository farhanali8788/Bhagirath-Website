import React, { useState, useRef } from "react";
import "./Contact.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { META } from "../../data/altair";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation(0.05);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Wire up EmailJS here — same as Contact.jsx in main site
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section className="altair-contact" id="contact">
      <div className="altair-contact__glow" />

      <div
        ref={headerRef}
        className={`altair-contact__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <h2 className="altair-contact__tagline">
          Begin Your<br /><em>Ascent</em>
        </h2>
        <p className="altair-contact__sub">
          Schedule a private consultation or request the complete floor plan portfolio.
          Our team will be in touch within 24 hours.
        </p>
      </div>

      <div
        ref={formRef}
        className={`altair-contact__form-wrap anim-fade-up anim-delay-2 ${formVisible ? "is-visible" : ""}`}
      >
        {status === "sent" ? (
          <div className="altair-contact__success">
            <svg viewBox="0 0 50 50" fill="none" stroke="#C9A96E" strokeWidth="1.5" width="48">
              <circle cx="25" cy="25" r="22" /><path d="M14 26l7 7 15-16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3>Thank you</h3>
            <p>We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form className="altair-contact__form" onSubmit={handleSubmit}>
            <div className="altair-contact__row">
              <div className="altair-contact__field">
                <input
                  className="altair-contact__input"
                  type="text" name="name" placeholder="Your Name"
                  value={form.name} onChange={handleChange} required
                />
              </div>
              <div className="altair-contact__field">
                <input
                  className="altair-contact__input"
                  type="tel" name="phone" placeholder="Phone Number"
                  value={form.phone} onChange={handleChange} required
                />
              </div>
            </div>
            <div className="altair-contact__field">
              <input
                className="altair-contact__input"
                type="email" name="email" placeholder="Email Address"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="altair-contact__field">
              <select
                className="altair-contact__input altair-contact__select"
                name="interest" value={form.interest} onChange={handleChange} required
              >
                <option value="" disabled>Residence of Interest</option>
                <option value="4bhk">4 BHK</option>
                <option value="5bhk">5 BHK</option>
                <option value="duplex">4/5 BHK Duplex</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            <button
              type="submit"
              className="altair-contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Request Private Consultation"}
            </button>
          </form>
        )}
      </div>

      <div className="altair-contact__info">
        {[
          { label: "Call Us", val: META.phone, href: `tel:${META.phone}` },
          { label: "WhatsApp", val: "Chat with us", href: `https://wa.me/${META.whatsapp}` },
          { label: "Site Address", val: "Temple Road, Civil Lines, Nagpur" },
          { label: "RERA No.", val: META.rera },
        ].map((item) => (
          <div key={item.label} className="altair-contact__info-item">
            <span className="altair-contact__info-label">{item.label}</span>
            {item.href ? (
              <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="altair-contact__info-val altair-contact__info-link">
                {item.val}
              </a>
            ) : (
              <span className="altair-contact__info-val">{item.val}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
