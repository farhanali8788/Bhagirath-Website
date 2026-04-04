import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import useScrollAnimation from "../hooks/useScrollAnimation";
import projects from "../data/projects";

const types = [
  "All",
  "Farm Estate / Plotted Land",
  "Residential Apartments",
  "Commercial",
];

// ══════════════════════════════════════════
//  PROJECT CARD
// ══════════════════════════════════════════
const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useScrollAnimation(0.08);
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      ref={ref}
      className={`pj-card anim-fade-up anim-delay-${(index % 3) + 1} ${visible ? "is-visible" : ""}`}
    >
      <div className="pj-card__img">
        <img src={project.image} alt={project.name} />
        <div className="pj-card__img-overlay" />
        <span
          className={`pj-card__badge pj-card__badge--${project.status.toLowerCase().replace(" ", "-")}`}
        >
          {project.status}
        </span>
        <span className="pj-card__type-tag">{project.type}</span>
      </div>

      <div className="pj-card__body">
        <div className="pj-card__main">
          <h2 className="pj-card__name">{project.name}</h2>
          <p className="pj-card__tagline">{project.tagline}</p>
          <p className="pj-card__location">
            <svg width="11" height="14" viewBox="0 0 12 14" fill="none">
              <path
                d="M6 0C3.24 0 1 2.24 1 5C1 8.75 6 14 6 14C6 14 11 8.75 11 5C11 2.24 8.76 0 6 0ZM6 6.5C5.17 6.5 4.5 5.83 4.5 5C4.5 4.17 5.17 3.5 6 3.5C6.83 3.5 7.5 4.17 7.5 5C7.5 5.83 6.83 6.5 6 6.5Z"
                fill="currentColor"
              />
            </svg>
            {project.location}
          </p>
        </div>

        <div
          className={`pj-card__details ${expanded ? "pj-card__details--open" : ""}`}
        >
          <p className="pj-card__desc">{project.description}</p>
          <div className="pj-highlights">
            {project.id === "panchtatva" && (
              <>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Plot Size</span>
                  <span className="pj-highlight__val">½ Acre Parcels</span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Type</span>
                  <span className="pj-highlight__val">Gated Farm Estate</span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Location</span>
                  <span className="pj-highlight__val">Kalmeshwar, Nagpur</span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Status</span>
                  <span className="pj-highlight__val">
                    Active — Units Available
                  </span>
                </div>
              </>
            )}
            {project.id === "project-2" && (
              <>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Unit Types</span>
                  <span className="pj-highlight__val">2 & 3 BHK</span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Location</span>
                  <span className="pj-highlight__val">Wardha Road, Nagpur</span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Amenities</span>
                  <span className="pj-highlight__val">
                    Clubhouse, Pool, Garden
                  </span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Status</span>
                  <span className="pj-highlight__val">
                    Upcoming — Pre-launch
                  </span>
                </div>
              </>
            )}
            {project.id === "project-4" && (
              <>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Space Types</span>
                  <span className="pj-highlight__val">Retail & Office</span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Location</span>
                  <span className="pj-highlight__val">Hingna Road, Nagpur</span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Footfall</span>
                  <span className="pj-highlight__val">
                    High-Growth Corridor
                  </span>
                </div>
                <div className="pj-highlight">
                  <span className="pj-highlight__label">Status</span>
                  <span className="pj-highlight__val">
                    Upcoming — Pre-launch
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="pj-card__footer">
          <button
            className="pj-card__expand-btn"
            onClick={() => setExpanded((p) => !p)}
          >
            {expanded ? "Show Less ↑" : "View Details ↓"}
          </button>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pj-card__cta pj-card__cta--gold"
            >
              Visit Site ↗
            </a>
          ) : (
            <Link to="/contact" className="pj-card__cta pj-card__cta--outline">
              Enquire Now
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

// ══════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hdRef, hdVisible] = useScrollAnimation(0.1);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <div className="pj-page">
      {/* Page hero — single image, matches About/Contact style */}
      <section className="pj-hero">
        <div className="pj-hero__bg">
          <img
            src="/images/projects-hero.webp"
            alt="Bhagirath Realty Projects"
          />
          <div className="pj-hero__overlay" />
        </div>
        <div className="container pj-hero__content">
          <p className="pj-eyebrow">
            <span className="pj-eyebrow-line" />
            Nagpur, Maharashtra
          </p>
          <h1 className="pj-hero__heading">
            Our <span className="pj-hero__heading--gold">Projects</span>
          </h1>
          <p className="pj-hero__sub">
            Farm estates, residences, villas and commercial developments —<br />
            each built on a foundation of trust and quality.
          </p>
        </div>
      </section>

      <section className="pj-grid-section" id="grid">
        <div className="container">
          <div
            ref={hdRef}
            className={`pj-grid-hd anim-fade-up ${hdVisible ? "is-visible" : ""}`}
          >
            <p className="pj-eyebrow pj-eyebrow--center">
              <span className="pj-eyebrow-line" />
              All Projects
              <span className="pj-eyebrow-line" />
            </p>
            <h2 className="pj-grid-heading">
              Developments That{" "}
              <span className="pj-grid-heading--gold">Define Nagpur</span>
            </h2>
          </div>

          <div
            className={`pj-filters anim-fade-up anim-delay-2 ${hdVisible ? "is-visible" : ""}`}
          >
            {types.map((t) => (
              <button
                key={t}
                className={`pj-filter ${activeFilter === t ? "pj-filter--active" : ""}`}
                onClick={() => setActiveFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="pj-grid">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="pj-cta">
        <div className="container pj-cta__inner">
          <h2 className="pj-cta__heading">
            Interested in a Project?
            <br />
            <span className="pj-cta__heading--gold">Let's Talk.</span>
          </h2>
          <Link to="/contact" className="pj-cta__btn">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
