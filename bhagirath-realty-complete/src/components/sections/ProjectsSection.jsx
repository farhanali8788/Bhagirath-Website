import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectsSection.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import projects from "../../data/projects";

const types = [
  "All",
  "Farm Estate / Plotted Land",
  "Residential Apartments",
  "Commercial",
];

const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`proj-card anim-fade-up anim-delay-${(index % 3) + 1} ${visible ? "is-visible" : ""}`}
    >
      {/* Image */}
      <div className="proj-card__img">
        <img src={project.image} alt={project.name} />
        <div className="proj-card__overlay" />
        {/* Status badge */}
        <span
          className={`proj-card__status proj-card__status--${project.status.toLowerCase().replace(" ", "-")}`}
        >
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="proj-card__body">
        <p className="proj-card__type">{project.type}</p>
        <h3 className="proj-card__name">{project.name}</h3>
        <p className="proj-card__tagline">{project.tagline}</p>
        <p className="proj-card__location">
          <span className="proj-card__location-dot" />
          {project.location}
        </p>

        {/* CTA */}
        <div className="proj-card__footer">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-card__btn proj-card__btn--gold"
            >
              Visit Site
            </a>
          ) : (
            <Link
              to={`/projects/${project.id}`}
              className="proj-card__btn proj-card__btn--outline"
            >
              Learn More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [headerRef, headerVisible] = useScrollAnimation(0.15);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section className="proj-section">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`proj-section__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="proj-section__eyebrow">
            <span className="proj-section__eyebrow-line" />
            Our Portfolio
          </p>
          <h2 className="proj-section__heading">
            Projects That{" "}
            <span className="proj-section__heading--gold">
              Define Excellence
            </span>
          </h2>
          <p className="proj-section__sub">
            From gated farm estates to premium residences — each development is
            a statement of quality and vision.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`proj-filters anim-fade-up anim-delay-2 ${headerVisible ? "is-visible" : ""}`}
        >
          {types.map((t) => (
            <button
              key={t}
              className={`proj-filter-btn ${activeFilter === t ? "proj-filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proj-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* View all */}
        <div
          className={`proj-section__cta anim-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <Link to="/projects" className="proj-section__all-btn">
            View All Projects
            <span className="proj-section__all-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
