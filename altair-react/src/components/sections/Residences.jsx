import React, { useState } from "react";
import "./Residences.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { RESIDENCES } from "../../data/altair";

const Residences = () => {
  const [active, setActive] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation();
  const [panelRef, panelVisible] = useScrollAnimation(0.05);
  const res = RESIDENCES[active];

  return (
    <section className="altair-residences" id="residences">
      <div className="container">
        <div
          ref={headerRef}
          className={`altair-residences__header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <p className="altair-residences__label">Floor Plans &amp; Configurations</p>
          <h2 className="altair-residences__title">
            Choose Your <em>Sanctuary</em>
          </h2>
        </div>

        {/* Tabs */}
        <div className="altair-residences__tabs">
          {RESIDENCES.map((r, i) => (
            <button
              key={r.id}
              className={`altair-residences__tab ${active === i ? "altair-residences__tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          ref={panelRef}
          className={`altair-residences__panel anim-fade-up anim-delay-1 ${panelVisible ? "is-visible" : ""}`}
          key={res.id}
        >
          <div className="altair-residences__info">
            <p className="altair-residences__res-tag">{res.tag}</p>
            <h3 className="altair-residences__res-title">{res.label}</h3>
            <p className="altair-residences__res-desc">{res.desc}</p>
            <ul className="altair-residences__features">
              {res.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="altair-residences__visual">
            <div className="altair-residences__visual-inner">
              <img src={`/images/residence-${res.id}.jpg`} alt={res.label} className="altair-residences__img" />
              <div className="altair-residences__visual-fallback">
                <span className="altair-residences__visual-label-big">{res.label}</span>
              </div>
            </div>
            <div className="altair-residences__visual-badge">
              Design No. {res.designNo} · {res.area}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Residences;
