import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const timeline = [
  {
    year: "1946",
    title: "SB Rander Group Founded",
    desc: "The SB Rander Group was established — laying the foundation of a legacy built on integrity, quality and long-term value across multiple industries.",
  },
  {
    year: "1980s",
    title: "Diversification Begins",
    desc: "The Group diversified into Textiles, Commodities and Natural Stones, establishing its reputation for reliability and quality across sectors.",
  },
  {
    year: "2000s",
    title: "Infrastructure & Realty",
    desc: "Expanded into Infrastructure Development and Real Estate, bringing the same commitment to quality craftsmanship to Nagpur's growing landscape.",
  },
  {
    year: "2020",
    title: "Panchtatva Launch",
    desc: "Introduced Panchtatva — a first-of-its-kind gated luxury farm estate near Nagpur, redefining nature-integrated living on private ½-acre plots.",
  },
  {
    year: "2024",
    title: "Altair & Navkar",
    desc: "Launched Altair, a 32-floor luxury residential icon in Civil Lines, and Navkar — marking the Group's boldest and most ambitious development phase yet.",
  },
];

const team = [
  {
    name: "Mr. Ramesh Rander",
    role: "Director",
    initials: "RR",
    // Place photo at: public/images/team-ramesh-rander.jpg
    image: "/images/team-ramesh-rander.jpg",
    bio: "Leading the SB Rander Group with a vision rooted in integrity and long-term value, Mr. Ramesh Rander brings decades of business leadership across Textiles, Commodities and Realty.",
  },
  {
    name: "Mr. Dilip Shah",
    role: "Director",
    initials: "DS",
    // Place photo at: public/images/team-dilip-shah.jpg
    image: "/images/team-dilip-shah.jpg",
    bio: "Mr. Dilip Shah oversees strategic direction and development planning, ensuring every project meets the Group's uncompromising standards of quality and transparency.",
  },
  {
    name: "Mr. Naresh Bharut",
    role: "Director",
    initials: "NB",
    // Place photo at: public/images/team-naresh-bharut.jpg
    image: "/images/team-naresh-bharut.jpg",
    bio: "Mr. Naresh Bharut drives operations and client relations, building lasting relationships grounded in trust, open communication and consistent delivery.",
  },
];

const values = [
  {
    title: "Integrity",
    desc: "Every commitment we make is a commitment we keep — to our clients, partners and the communities we build in.",
  },
  {
    title: "Quality",
    desc: "We never compromise on materials, construction or design. Our buildings are built to serve families for generations.",
  },
  {
    title: "Transparency",
    desc: "No hidden costs, no vague timelines — our clients always know exactly where their investment stands.",
  },
  {
    title: "Legacy",
    desc: "We think beyond transactions. Every project is designed to create enduring value and a lasting Nagpur landmark.",
  },
];

const sectors = [
  { label: "Textiles", icon: "✦" },
  { label: "Commodities", icon: "✦" },
  { label: "Natural Stones", icon: "✦" },
  { label: "Infrastructure", icon: "✦" },
  { label: "Real Estate", icon: "✦" },
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
  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      ref={ref}
      className={`team-card anim-fade-up anim-delay-${index + 1} ${visible ? "is-visible" : ""}`}
    >
      {/* Photo */}
      <div className="team-card__photo-wrap">
        {member.image && !imgError ? (
          <img
            src={member.image}
            alt={member.name}
            className="team-card__photo"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="team-card__avatar">{member.initials}</div>
        )}
        <div className="team-card__photo-overlay" />
      </div>
      {/* Details */}
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <div className="team-card__divider" />
        <p className="team-card__bio">{member.bio}</p>
      </div>
    </div>
  );
};

const About = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);
  const [missionRef, missionVisible] = useScrollAnimation(0.15);
  const [missionHdRef, missionHdVisible] = useScrollAnimation(0.15);
  const [sectorsRef, sectorsVisible] = useScrollAnimation(0.1);
  const [tlHdRef, tlHdVisible] = useScrollAnimation(0.15);
  const [valHdRef, valHdVisible] = useScrollAnimation(0.15);
  const [teamHdRef, teamHdVisible] = useScrollAnimation(0.15);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.15);

  return (
    <div className="about-page">
      {/* ══ HERO ══ */}
      <section className="ab-hero">
        <div className="ab-hero__bg">
          <img src="/images/about-hero.webp" alt="Sri Bhagirath Realty" />
          <div className="ab-hero__overlay" />
        </div>
        <div className="container">
          <div
            ref={heroRef}
            className={`ab-hero__content anim-fade-up ${heroVisible ? "is-visible" : ""}`}
          >
            <p className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              Est. 1946 · SB Rander Group
            </p>
            <h1 className="ab-hero__heading">
              Building Trust.
              <br />
              <span className="ab-hero__heading--gold">
                Delivering Quality.
              </span>
            </h1>
            <p className="ab-hero__sub">
              Sri Bhagirath Realty Private Limited — a legacy of integrity,
              craftsmanship and enduring value in Nagpur.
            </p>
          </div>
        </div>
      </section>

      {/* ══ MISSION / WHO WE ARE ══ */}
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
              Sri Bhagirath Realty Private Limited is the real estate arm of the
              SB Rander Group — a diversified conglomerate established in 1946.
              With decades of business excellence across Textiles, Commodities,
              Natural Stones and Infrastructure, the Group brings institutional
              depth and genuine integrity to every development.
            </p>
            <p className="ab-body">
              We believe real estate is not just about property — it is about
              people and the legacies they leave behind. Every project we
              develop is built on trust, quality craftsmanship and a deep
              understanding of what families and businesses truly need.
            </p>

            {/* Sectors strip */}
            <div
              ref={sectorsRef}
              className={`ab-sectors anim-fade-up ${sectorsVisible ? "is-visible" : ""}`}
            >
              {sectors.map((s) => (
                <span key={s.label} className="ab-sector-pill">
                  {s.label}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={missionRef}
            className={`ab-mission__stats anim-fade-right ${missionVisible ? "is-visible" : ""}`}
          >
            {[
              { value: "1946", label: "Year Established" },
              { value: "5+", label: "Business Sectors" },
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
              <span className="ab-heading--gold">Since 1946</span>
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

      {/* ══ PROJECTS SNAPSHOT ══ */}
      <section className="ab-projects-snap">
        <div className="container">
          <div className="ab-projects-snap__inner">
            <div className="ab-projects-snap__text">
              <p className="ab-eyebrow">
                <span className="ab-eyebrow-line" />
                Our Portfolio
              </p>
              <h2 className="ab-heading">
                Developments That{" "}
                <span className="ab-heading--gold">Define Nagpur</span>
              </h2>
              <p className="ab-body">
                From gated farm estates to a 32-floor luxury icon — each project
                is a reflection of our commitment to quality, precision and
                enduring value.
              </p>
              <Link
                to="/projects#projects"
                className="ab-btn-primary ab-projects-snap__cta"
              >
                View All Projects
              </Link>
            </div>
            <div className="ab-projects-snap__cards">
              {[
                {
                  name: "Panchtatva",
                  type: "Farm Estate / Plotted Land",
                  location: "Kalmeshwar, Nagpur",
                  status: "Active",
                  href: "https://panchtatva.bhagirathrealty.com",
                  external: true,
                },
                {
                  name: "Altair",
                  type: "Residential — 32 Floors",
                  location: "Civil Lines, Nagpur",
                  status: "Active",
                  href: "https://altair.bhagirathrealty.com",
                  external: true,
                },
                {
                  name: "Navkar",
                  type: "Industrial",
                  location: "Nagpur",
                  status: "Active",
                  href: "https://navkar.bhagirathrealty.com",
                  external: true,
                },
                {
                  name: "Complex",
                  type: "Commercial",
                  location: "Wardhaman Nagar,Nagpur",
                  status: "Upcoming",
                  href: "../projects",
                  external: false,
                },
              ].map((p, i) => {
                const [ref, visible] = [null, true]; // inline animation via CSS
                return <ProjectSnapCard key={p.name} project={p} index={i} />;
              })}
            </div>
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
              A dedicated leadership team that brings expertise, integrity and
              passion to every project and every client relationship.
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
              <Link to="/contact#form" className="ab-btn-primary">
                Book a Consultation
              </Link>
              <Link to="/projects#projects" className="ab-btn-secondary">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// ── Project snap card (used inline above) ──
const ProjectSnapCard = ({ project, index }) => {
  const [ref, visible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`ab-proj-card anim-fade-up anim-delay-${index + 1} ${visible ? "is-visible" : ""}`}
    >
      <div className="ab-proj-card__top">
        <span
          className={`ab-proj-card__status ab-proj-card__status--${project.status.toLowerCase()}`}
        >
          {project.status}
        </span>
        <h3 className="ab-proj-card__name">{project.name}</h3>
        <p className="ab-proj-card__type">{project.type}</p>
        <p className="ab-proj-card__loc">
          <span className="ab-proj-card__dot" />
          {project.location}
        </p>
      </div>
      {project.external ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ab-proj-card__link"
        >
          Visit Site ↗
        </a>
      ) : (
        <Link to={project.href} className="ab-proj-card__link">
          Learn More →
        </Link>
      )}
    </div>
  );
};

export default About;
