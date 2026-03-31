import React from "react";
import { Link } from "react-router-dom";
import "./ContactCTA.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const ContactCTA = () => {
  const [ref, visible] = useScrollAnimation(0.15);

  return (
    <section className="cta-section">
      {/* Background image with overlay */}
      <div className="cta-section__bg">
        <img src="/images/cta-bg.webp" alt="" />
        <div className="cta-section__overlay" />
      </div>

      <div className="container">
        <div
          ref={ref}
          className={`cta-section__inner anim-fade-up ${visible ? "is-visible" : ""}`}
        >
          <p className="cta-section__eyebrow">
            <span className="cta-section__eyebrow-line" />
            Get In Touch
            <span className="cta-section__eyebrow-line" />
          </p>

          <h2 className="cta-section__heading">
            Ready to Find Your
            <br />
            <span className="cta-section__heading--gold">
              Perfect Property?
            </span>
          </h2>

          <p className="cta-section__sub">
            Speak with our team today. We'll help you find the right project,
            answer every question and guide you through the entire process.
          </p>

          <div className="cta-section__actions">
            <Link to="/contact" className="cta-section__btn-primary">
              Book a Consultation
            </Link>
            <Link to="/projects" className="cta-section__btn-secondary">
              Explore Projects
            </Link>
          </div>

          {/* Contact info strip */}
          <div className="cta-section__strip">
            <div className="cta-section__strip-item">
              <span className="cta-section__strip-label">Call Us</span>
              <a href="tel:+919999999999" className="cta-section__strip-value">
                +91 99999 99999
              </a>
            </div>
            <div className="cta-section__strip-divider" />
            <div className="cta-section__strip-item">
              <span className="cta-section__strip-label">Email Us</span>
              <a
                href="mailto:info@bhagirathrealty.com"
                className="cta-section__strip-value"
              >
                info@bhagirathrealty.com
              </a>
            </div>
            <div className="cta-section__strip-divider" />
            <div className="cta-section__strip-item">
              <span className="cta-section__strip-label">Visit Us</span>
              <span className="cta-section__strip-value">
                Nagpur, Maharashtra
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
