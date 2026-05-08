import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader,
} from "lucide-react";
import "./CTASection.css";

const interestedIn = [
  "Godown / Warehouse",
  "Industrial Plot",
  "Investment / Rental",
  "Site Visit",
  "Custom Build",
];

const budgets = [
  "Under ₹50 Lakhs",
  "₹50L – ₹1 Cr",
  "₹1 Cr – ₹2 Cr",
  "₹2 Cr – ₹5 Cr",
  "₹5 Cr+",
];

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Valid 10-digit number required";
    if (!form.interest) e.interest = "Please select your interest";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleChange = (field, val) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg" aria-hidden="true" />
      <div className="cta-top-bar" />

      <div className="container">
        <div className="cta-grid">
          {/* Left: Info */}
          <div className="cta-left">
            <span className="section-tag">Get In Touch</span>
            <h2 className="cta-title">
              SECURE YOUR
              <br />
              <span className="orange">INDUSTRIAL</span>
              <br />
              SPACE TODAY.
            </h2>
            <div className="section-divider" />
            <p className="cta-body">
              Limited plots. High demand. Don't wait for prices to rise. Connect
              with our team for a site visit, project details, or pricing.
            </p>

            <div className="cta-contact-list">
              <a href="tel:+919112006081" className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="contact-label">Call / WhatsApp</div>
                  <div className="contact-val">+91 91120 06081</div>
                  <div className="contact-val">+91 91120 06008</div>
                </div>
              </a>
              <a
                href="mailto:info@bhagirathrealty.com"
                className="contact-item"
              >
                <div className="contact-item-icon">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="contact-label">Email Us</div>
                  <div className="contact-val">navkar@sbrander.com</div>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="contact-label">Site Location</div>
                  <div className="contact-val">
                    NH-44 Corridor, Nagpur, Maharashtra
                  </div>
                </div>
              </div>
            </div>

            <div className="visit-card">
              <div className="visit-badge">📅 FREE SITE VISIT</div>
              <div className="visit-body">
                Our team will arrange a guided site visit at your convenience.
                See the scale, location, and infrastructure firsthand.
              </div>
              <div className="visit-timing">Mon – Sat | 10:00 AM – 6:00 PM</div>
            </div>

            {/* Trust markers */}
            <div className="trust-markers">
              {[
                "RERA Approved",
                "No Brokerage",
                "Direct Developer",
                "Instant Response",
              ].map((t, i) => (
                <div key={i} className="trust-marker">
                  <CheckCircle size={12} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="cta-right">
            <div className="form-card">
              <div className="form-header">
                <div className="form-title">REQUEST PROJECT DETAILS</div>
                <div className="form-sub">
                  Fill in your details — we'll call back within 2 hours
                </div>
              </div>

              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <CheckCircle size={40} />
                  </div>
                  <div className="success-title">Thank You!</div>
                  <div className="success-body">
                    Your enquiry has been received. Our team will contact you
                    within 2 hours to discuss NAVKAR and arrange your site
                    visit.
                  </div>
                  <div className="success-ref">
                    Reference: NK-{Math.floor(Math.random() * 90000) + 10000}
                  </div>
                </div>
              ) : (
                <form className="lead-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className={`form-field ${errors.name ? "error" : ""}`}>
                      <label>Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                      {errors.name && (
                        <span className="field-error">{errors.name}</span>
                      )}
                    </div>
                    <div
                      className={`form-field ${errors.phone ? "error" : ""}`}
                    >
                      <label>Mobile Number *</label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                      {errors.phone && (
                        <span className="field-error">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>

                  <div
                    className={`form-field ${errors.interest ? "error" : ""}`}
                  >
                    <label>I am interested in *</label>
                    <div className="chip-group">
                      {interestedIn.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={`chip ${form.interest === opt ? "active" : ""}`}
                          onClick={() => handleChange("interest", opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    {errors.interest && (
                      <span className="field-error">{errors.interest}</span>
                    )}
                  </div>

                  <div className="form-field">
                    <label>Investment Budget</label>
                    <div className="chip-group">
                      {budgets.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className={`chip ${form.budget === opt ? "active" : ""}`}
                          onClick={() => handleChange("budget", opt)}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Additional Message</label>
                    <textarea
                      placeholder="Tell us about your requirement — space size, use case, timeline..."
                      rows={3}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="form-submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader size={16} className="spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div className="form-disclaimer">
                    🔒 Your information is 100% confidential. No spam. Direct
                    developer contact only.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
