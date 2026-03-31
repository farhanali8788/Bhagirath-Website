import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const timeline = [
  {
    year: "2008",
    title: "Founded",
    desc: "Bhagirath Realty was established in Nagpur with a simple vision — to deliver honest, quality real estate to families who deserve better.",
  },
  {
    year: "2012",
    title: "First Major Project",
    desc: "Launched our first large-scale residential development, setting the benchmark for quality construction and transparent dealings in the region.",
  },
  {
    year: "2016",
    title: "Expanding Portfolio",
    desc: "Diversified into commercial and plotted land developments, bringing the same commitment to quality across new property categories.",
  },
  {
    year: "2020",
    title: "Panchtatva Launch",
    desc: "Introduced Panchtatva — a first-of-its-kind gated luxury farm estate near Nagpur, redefining the concept of nature-integrated living.",
  },
  {
    year: "2024",
    title: "500+ Families",
    desc: "Crossed a landmark milestone of 500 families served, cementing our reputation as Nagpur's most trusted real estate partner.",
  },
];

const team = [
  {
    name: "Rajesh Bhagirath",
    role: "Founder & Managing Director",
    initials: "RB",
    bio: "With over 20 years in real estate, Rajesh founded Bhagirath Realty on the belief that every family deserves a home built with integrity.",
  },
  {
    name: "Anita Bhagirath",
    role: "Director — Operations",
    initials: "AB",
    bio: "Anita oversees all project operations ensuring every development is delivered on time, within budget and to the highest quality standards.",
  },
  {
    name: "Vikram Desai",
    role: "Head of Sales & Advisory",
    initials: "VD",
    bio: "Vikram leads our client advisory team, helping families navigate their real estate journey with clarity, patience and expertise.",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "Every commitment we make is a commitment we keep — to our clients, partners and communities.",
  },
  {
    title: "Quality",
    desc: "We never compromise on materials, construction or design. Our buildings are built to last generations.",
  },
  {
    title: "Transparency",
    desc: "No hidden costs, no vague timelines — our clients always know exactly where their investment stands.",
  },
  {
    title: "Legacy",
    desc: "We think beyond transactions. Every project we build is designed to create lasting value for families.",
  },
];

const TimelineItem = ({ item, index }) => {
  const [ref, visible] = useScrollAnimation(0.15);
  return (
    <div
      ref={ref}
      className={`tl-item ${index % 2 === 0 ? "tl-item--left" : "tl-item--right"} anim-fade-up anim-delay-${(index % 3) + 1} ${visible ? "is-visible" : ""}`}
    >
      <div className="tl-card">
        <span className="tl-year">{item.year}</span>
        <h3 className="tl-title">{item.title}</h3>
        <p className="tl-desc">{item.desc}</p>
      </div>
      <div className="tl-dot" />
    </div>
  );
};

const ValueCard = ({ value, index }) => {
  const [ref, visible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`value-card anim-scale-up anim-delay-${index + 1} ${visible ? "is-visible" : ""}`}
    >
      <span className="value-card__num">0{index + 1}</span>
      <h3 className="value-card__title">{value.title}</h3>
      <p className="value-card__desc">{value.desc}</p>
    </div>
  );
};

const TeamCard = ({ member, index }) => {
  const [ref, visible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`team-card anim-fade-up anim-delay-${index + 1} ${visible ? "is-visible" : ""}`}
    >
      <div className="team-card__avatar">{member.initials}</div>
      <h3 className="team-card__name">{member.name}</h3>
      <p className="team-card__role">{member.role}</p>
      <p className="team-card__bio">{member.bio}</p>
    </div>
  );
};

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [missionRef, missionVisible] = useScrollAnimation(0.15);
  const [missionHdRef, missionHdVisible] = useScrollAnimation(0.15);
  const [tlHdRef, tlHdVisible] = useScrollAnimation(0.15);
  const [valHdRef, valHdVisible] = useScrollAnimation(0.15);
  const [teamHdRef, teamHdVisible] = useScrollAnimation(0.15);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.15);

  return (
    <div className="about-page">
      {/* ══ HERO ══ */}
      <section className="ab-hero">
        <div className="ab-hero__bg">
          <img src="/images/about-hero.webp" alt="Bhagirath Realty" />
          <div className="ab-hero__overlay" />
        </div>
        <div className="container">
          <div
            ref={heroRef}
            className={`ab-hero__content anim-fade-up ${heroVisible ? "is-visible" : ""}`}
          >
            <p className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              Our Story
            </p>
            <h1 className="ab-hero__heading">
              15 Years of Building
              <br />
              <span className="ab-hero__heading--gold">Trust & Legacies</span>
            </h1>
            <p className="ab-hero__sub">
              From a single vision to Nagpur's most trusted real estate group —
              this is the Bhagirath story.
            </p>
          </div>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section className="ab-mission">
        <div className="container ab-mission__grid">
          <div
            ref={missionHdRef}
            className={`ab-mission__left anim-fade-left ${missionHdVisible ? "is-visible" : ""}`}
          >
            <p className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              Who We Are
            </p>
            <h2 className="ab-heading">
              More Than a{" "}
              <span className="ab-heading--gold">Real Estate Company</span>
            </h2>
            <p className="ab-body">
              Bhagirath Realty was founded on a belief that real estate is not
              just about property — it's about people. For over 15 years, we
              have helped hundreds of families find land, build homes and secure
              their futures in and around Nagpur.
            </p>
            <p className="ab-body">
              We bring together deep local knowledge, transparent processes and
              an uncompromising commitment to quality — delivering developments
              that stand the test of time and create lasting value for every
              client.
            </p>
          </div>

          <div
            ref={missionRef}
            className={`ab-mission__stats anim-fade-right ${missionVisible ? "is-visible" : ""}`}
          >
            {[
              { value: "15+", label: "Years in Real Estate" },
              { value: "500+", label: "Families Served" },
              { value: "3", label: "Active Projects" },
              { value: "100%", label: "Commitment to Quality" },
            ].map((s, i) => (
              <div key={s.label} className={`ab-stat anim-delay-${i + 1}`}>
                <span className="ab-stat__value">{s.value}</span>
                <span className="ab-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section className="ab-timeline">
        <div className="container">
          <div
            ref={tlHdRef}
            className={`ab-section-hd anim-fade-up ${tlHdVisible ? "is-visible" : ""}`}
          >
            <p className="ab-eyebrow ab-eyebrow--center">
              <span className="ab-eyebrow-line" />
              Our Journey
              <span className="ab-eyebrow-line" />
            </p>
            <h2 className="ab-heading ab-heading--center">
              A Legacy Built{" "}
              <span className="ab-heading--gold">Year by Year</span>
            </h2>
          </div>
          <div className="tl-track">
            <div className="tl-line" />
            {timeline.map((t, i) => (
              <TimelineItem key={t.year} item={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="ab-values">
        <div className="container">
          <div
            ref={valHdRef}
            className={`ab-section-hd anim-fade-up ${valHdVisible ? "is-visible" : ""}`}
          >
            <p className="ab-eyebrow ab-eyebrow--center">
              <span className="ab-eyebrow-line" />
              What We Stand For
              <span className="ab-eyebrow-line" />
            </p>
            <h2 className="ab-heading ab-heading--center">
              Our Core <span className="ab-heading--gold">Values</span>
            </h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section className="ab-team">
        <div className="container">
          <div
            ref={teamHdRef}
            className={`ab-section-hd anim-fade-up ${teamHdVisible ? "is-visible" : ""}`}
          >
            <p className="ab-eyebrow ab-eyebrow--center">
              <span className="ab-eyebrow-line" />
              The People Behind It
              <span className="ab-eyebrow-line" />
            </p>
            <h2 className="ab-heading ab-heading--center">
              Meet Our <span className="ab-heading--gold">Leadership</span>
            </h2>
            <p className="ab-section-sub">
              A dedicated team that brings expertise, integrity and passion to
              every project.
            </p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section className="ab-cta">
        <div className="container">
          <div
            ref={ctaRef}
            className={`ab-cta__inner anim-fade-up ${ctaVisible ? "is-visible" : ""}`}
          >
            <h2 className="ab-cta__heading">
              Ready to Start Your
              <br />
              <span className="ab-heading--gold">Real Estate Journey?</span>
            </h2>
            <div className="ab-cta__btns">
              <Link to="/contact" className="ab-btn-primary">
                Book a Consultation
              </Link>
              <Link to="/projects" className="ab-btn-secondary">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
