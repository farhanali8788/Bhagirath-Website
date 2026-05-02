import React, { useState } from "react";
import "./Contact.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

// ── Formspree ─────────────────────────────────────────────────────
// Replace YOUR_FORM_ID with your actual Formspree form ID
// e.g. https://formspree.io/f/abcd1234  →  FORM_ID = "abcd1234"
const FORMSPREE_ID = "YOUR_FORM_ID";
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

// ── WhatsApp ──────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919112006081"; // replace with real number
const WHATSAPP_MESSAGE =
  "Hello, I'd like to enquire about a project at Sri Bhagirath Realty.";

const projects = [
  "Panchtatva — Farm Estate",
  "Altair — Apartments",
  "Navkar — Commercial",
  "General Enquiry",
];

const officeHours = [
  { day: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
  { day: "Saturday", time: "10:00 AM – 5:00 PM" },
  { day: "Sunday", time: "By Appointment Only" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [touched, setTouched] = useState({});

  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [leftRef, leftVisible] = useScrollAnimation(0.1);
  const [rightRef, rightVisible] = useScrollAnimation(0.1);
  const [mapRef, mapVisible] = useScrollAnimation(0.1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((p) => ({ ...p, [e.target.name]: true }));
  };

  const isValid =
    formData.name && formData.phone && formData.email && formData.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          project: formData.project || "Not specified",
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          project: "",
          message: "",
        });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="ct-page">
      {/* ══ HERO ══ */}
      <section className="ct-hero">
        <div className="ct-hero__bg">
          <img src="/images/about-hero.webp" alt="Contact Bhagirath Realty" />
          <div className="ct-hero__overlay" />
        </div>
        <div className="container">
          <div
            ref={heroRef}
            className={`ct-hero__content anim-fade-up ${heroVisible ? "is-visible" : ""}`}
          >
            <p className="ct-eyebrow">
              <span className="ct-eyebrow-line" />
              Get In Touch
            </p>
            <h1 className="ct-hero__heading">
              Let's Start Your
              <br />
              <span className="ct-hero__heading--gold">
                Real Estate Journey.
              </span>
            </h1>
            <p className="ct-hero__sub">
              Speak with our team, visit our office or drop us a message — we're
              here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section className="ct-main">
        <div className="container ct-main__grid">
          {/* ── LEFT: Info ── */}
          <div
            ref={leftRef}
            className={`ct-info anim-fade-left ${leftVisible ? "is-visible" : ""}`}
          >
            <div className="ct-info__block">
              <h3 className="ct-info__heading">Contact Details</h3>
              <ul className="ct-info__list">
                <li className="ct-info__item">
                  <span className="ct-info__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.05 1.22 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z" />
                    </svg>
                  </span>
                  <div>
                    <span className="ct-info__label">Phone</span>
                    <a href="tel:+9191120 06081" className="ct-info__value">
                      +91 91120 06081
                    </a>
                    <a href="tel:+9191120 06008" className="ct-info__value">
                      +91 91120 06008
                    </a>
                  </div>
                </li>
                <li className="ct-info__item">
                  <span className="ct-info__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <span className="ct-info__label">Email</span>
                    <a
                      href="mailto:info@bhagirathrealty.com"
                      className="ct-info__value"
                    >
                      info@bhagirathrealty.com
                    </a>
                  </div>
                </li>
                <li className="ct-info__item">
                  <span className="ct-info__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <span className="ct-info__label">Office</span>
                    <span className="ct-info__value">
                      Flat No. 3, Chandrashekhar Housing Society,
                      <br />
                      Temple Road, Sita Kunj, Civil Lines,
                      <br />
                      Nagpur, Maharashtra 440001
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Office hours */}
            <div className="ct-info__block">
              <h3 className="ct-info__heading">Office Hours</h3>
              <ul className="ct-hours">
                {officeHours.map((h) => (
                  <li key={h.day} className="ct-hours__item">
                    <span className="ct-hours__day">{h.day}</span>
                    <span className="ct-hours__time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ct-whatsapp"
            >
              <span className="ct-whatsapp__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="22"
                  height="22"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <div className="ct-whatsapp__text">
                <span className="ct-whatsapp__label">
                  Chat with us instantly
                </span>
                <span className="ct-whatsapp__sub">Available on WhatsApp</span>
              </div>
              <span className="ct-whatsapp__arrow">→</span>
            </a>
          </div>

          {/* ── RIGHT: Form ── */}
          <div
            ref={rightRef}
            className={`ct-form-wrap anim-fade-right ${rightVisible ? "is-visible" : ""}`}
          >
            <div className="ct-form-card">
              <h2 className="ct-form-card__heading">Send Us a Message</h2>
              <p className="ct-form-card__sub">
                We typically respond within 24 hours.
              </p>

              {status === "success" ? (
                <div className="ct-form__success">
                  <div className="ct-form__success-icon">
                    <svg viewBox="0 0 52 52" fill="none" width="48" height="48">
                      <circle
                        cx="26"
                        cy="26"
                        r="24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M14 26l8 8 16-16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    className="ct-form__reset"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="ct-form" noValidate>
                  {/* Name */}
                  <div
                    className={`ct-field ${touched.name && !formData.name ? "ct-field--error" : ""}`}
                  >
                    <label className="ct-field__label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your full name"
                      className="ct-field__input"
                    />
                    {touched.name && !formData.name && (
                      <span className="ct-field__err">
                        Please enter your name
                      </span>
                    )}
                  </div>

                  {/* Phone + Email */}
                  <div className="ct-form__row">
                    <div
                      className={`ct-field ${touched.phone && !formData.phone ? "ct-field--error" : ""}`}
                    >
                      <label className="ct-field__label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+91 XXXXX XXXXX"
                        className="ct-field__input"
                      />
                      {touched.phone && !formData.phone && (
                        <span className="ct-field__err">
                          Please enter your phone
                        </span>
                      )}
                    </div>
                    <div
                      className={`ct-field ${touched.email && !formData.email ? "ct-field--error" : ""}`}
                    >
                      <label className="ct-field__label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your@email.com"
                        className="ct-field__input"
                      />
                      {touched.email && !formData.email && (
                        <span className="ct-field__err">
                          Please enter your email
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project dropdown */}
                  <div className="ct-field">
                    <label className="ct-field__label">Enquiring About</label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="ct-field__input ct-field__select"
                    >
                      <option value="">Select a project</option>
                      {projects.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div
                    className={`ct-field ${touched.message && !formData.message ? "ct-field--error" : ""}`}
                  >
                    <label className="ct-field__label">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      rows={5}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell us what you're looking for..."
                      className="ct-field__input ct-field__textarea"
                    />
                    {touched.message && !formData.message && (
                      <span className="ct-field__err">
                        Please enter a message
                      </span>
                    )}
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <div className="ct-form__status ct-form__status--error">
                      Something went wrong. Please try again or WhatsApp us
                      directly.
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`ct-form__submit ${status === "sending" ? "ct-form__submit--loading" : ""}`}
                    disabled={status === "sending" || !isValid}
                  >
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ MAP ══ */}
      <section
        ref={mapRef}
        className={`ct-map anim-fade-up ${mapVisible ? "is-visible" : ""}`}
      >
        <div className="ct-map__header container">
          <p className="ct-eyebrow">
            <span className="ct-eyebrow-line" />
            Find Us
          </p>
          <h2 className="ct-map__heading">
            Visit Our <span className="ct-map__heading--gold">Office</span>
          </h2>
        </div>
        <div className="ct-map__embed">
          <iframe
            title="Bhagirath Realty Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0856132610143!2d79.07677532923802!3d21.14899093322911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1003bcd4b95%3A0x61c24799112b9b01!2sShri%20Bhagirath%20realty%20Pvt.%20Ltd..!5e0!3m2!1sen!2sin!4v1772620919534!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
