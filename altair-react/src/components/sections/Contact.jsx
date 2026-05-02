import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { META } from "../../data/altair";

const FORMSPREE_ID = "YOUR_FORM_ID";

const generateCaptcha = () => {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { a, b, answer: a + b };
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    captchaInput: "",
    honeypot: "",
  });

  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaError, setCaptchaError] = useState(false);
  const [status, setStatus] = useState("idle");
  const [headerRef, headerVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation(0.05);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "captchaInput") setCaptchaError(false);
  };

  const downloadBrochure = () => {
    const a = document.createElement("a");
    a.href = "/brochure.pdf"; // ← swap with your actual path
    a.download = "Altair-Brochure.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.honeypot) {
      setStatus("sent");
      return;
    }

    if (parseInt(form.captchaInput, 10) !== captcha.answer) {
      setCaptchaError(true);
      setCaptcha(generateCaptcha());
      setForm((prev) => ({ ...prev, captchaInput: "" }));
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          interest: form.interest,
          _subject: `Altair Enquiry — ${form.interest.toUpperCase()} — ${form.name}`,
          _replyto: form.email,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        downloadBrochure();
      } else {
        const data = await res.json();
        console.error("Formspree error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="altair-contact" id="contact">
      <div className="altair-contact__glow" />

      <div
        ref={headerRef}
        className={`altair-contact__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <h2 className="altair-contact__tagline">
          Begin Your
          <br />
          <em>Ascent</em>
        </h2>
        <p className="altair-contact__sub">
          Fill in your details to receive the complete brochure and floor plan
          portfolio. Our team will also be in touch within 24 hours.
        </p>
      </div>

      <div
        ref={formRef}
        className={`altair-contact__form-wrap anim-fade-up anim-delay-2 ${formVisible ? "is-visible" : ""}`}
      >
        {status === "sent" ? (
          <div className="altair-contact__success">
            <svg
              viewBox="0 0 50 50"
              fill="none"
              stroke="#C9A96E"
              strokeWidth="1.5"
              width="48"
            >
              <circle cx="25" cy="25" r="22" />
              <path
                d="M14 26l7 7 15-16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3>Thank you</h3>
            <p>
              Your brochure is downloading. We'll be in touch within 24 hours.
            </p>
          </div>
        ) : (
          <form className="altair-contact__form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            <div className="altair-contact__row">
              <div className="altair-contact__field">
                <input
                  className="altair-contact__input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="altair-contact__field">
                <input
                  className="altair-contact__input"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  required
                />
              </div>
            </div>

            <div className="altair-contact__field">
              <input
                className="altair-contact__input"
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="altair-contact__field">
              <select
                className="altair-contact__input altair-contact__select"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Residence of Interest
                </option>
                <option value="4bhk">4 BHK</option>
                <option value="5bhk">5 BHK</option>
                <option value="duplex">4/5 BHK Duplex</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>

            <div className="altair-contact__field altair-contact__captcha-field">
              <label className="altair-contact__captcha-label">
                Verification: What is {captcha.a} + {captcha.b}?
              </label>
              <input
                className={`altair-contact__input altair-contact__captcha-input ${captchaError ? "altair-contact__input--error" : ""}`}
                type="number"
                name="captchaInput"
                placeholder="Your answer"
                value={form.captchaInput}
                onChange={handleChange}
                min="0"
                required
              />
              {captchaError && (
                <span className="altair-contact__captcha-error">
                  Incorrect — please try again
                </span>
              )}
            </div>

            {status === "error" && (
              <p className="altair-contact__error-msg">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            <button
              type="submit"
              className="altair-contact__submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending…"
                : "Request Brochure & Consultation"}
            </button>
          </form>
        )}
      </div>

      <div className="altair-contact__info">
        {[
          { label: "Call Us", val: META.phone, href: `tel:${META.phone}` },
          {
            label: "WhatsApp",
            val: "Chat with us",
            href: `https://wa.me/${META.whatsapp}`,
          },
          { label: "Site Address", val: "Temple Road, Civil Lines, Nagpur" },
          { label: "RERA No.", val: META.rera },
        ].map((item) => (
          <div key={item.label} className="altair-contact__info-item">
            <span className="altair-contact__info-label">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="altair-contact__info-val altair-contact__info-link"
              >
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
