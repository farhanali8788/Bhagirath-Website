import React from "react";
import "./About.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { META } from "../../data/altair";

const About = () => {
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <section className="altair-about" id="about">
      <div className="altair-about__visual">
        <div className="altair-about__visual-inner">
          {/* <svg
            viewBox="0 0 300 300"
            width="260"
            fill="none"
            className="altair-about__emblem"
          >
            <circle
              cx="150"
              cy="150"
              r="120"
              stroke="#C9A96E"
              strokeWidth="0.6"
              opacity="0.3"
            />
            <circle
              cx="150"
              cy="150"
              r="90"
              stroke="#C9A96E"
              strokeWidth="0.4"
              opacity="0.2"
            />
            <path
              d="M150 30L166 82H220L176 114L192 166L150 134L108 166L124 114L80 82H134L150 30Z"
              stroke="#C9A96E"
              strokeWidth="1.25"
              fill="rgba(201,169,110,0.06)"
            />
            <path
              d="M150 60L161 94H197L169 114L180 148L150 128L120 148L131 114L103 94H139L150 60Z"
              stroke="#C9A96E"
              strokeWidth="0.6"
              opacity="0.5"
            />
            <line
              x1="150"
              y1="30"
              x2="150"
              y2="270"
              stroke="#C9A96E"
              strokeWidth="0.25"
              opacity="0.25"
            />
            <line
              x1="30"
              y1="150"
              x2="270"
              y2="150"
              stroke="#C9A96E"
              strokeWidth="0.25"
              opacity="0.25"
            />
          </svg> */}
          <img
            src="/images/cosmos-image.webp"
            alt="Altair"
            className="altair-about__visual-img"
          />
          <div className="altair-about__visual-overlay" />
        </div>
      </div>

      <div
        ref={rightRef}
        className={`altair-about__content anim-fade-right ${rightVisible ? "is-visible" : ""}`}
      >
        <p className="altair-about__label">
          {META.developer} · {META.group}
        </p>
        <h2 className="altair-about__title">
          Named After
          <br />
          the <em>Cosmos</em>
        </h2>
        <p className="altair-about__body">
          Altair is named after the brightest star in the Aquila constellation —
          a reflection of the brilliance we envision for our residents. Much
          like the vast cosmos, Altair has landscaped more than half an acre of
          green spaces, with vehicular traffic restricted from the podium,
          creating spacious pedestrian walkways and jogging tracks for unhurried
          leisure.
        </p>
        <p className="altair-about__body">
          Established in {META.established}, the SB Rander Group has
          consistently grown and diversified across Textiles, Commodities,
          Natural Stones, Infrastructure Development, and Realty — led today by
          Mr. Ramesh Rander, Mr. Dilip Shah, and Mr. Naresh Bharut.
        </p>

        <div className="altair-about__stats">
          {[
            { val: "MAHA RERA", sub: META.rera },
            { val: "Civil Lines", sub: "Nagpur — 440001" },
            { val: "32 Floors", sub: "Tower Height" },
            { val: `Since ${META.established}`, sub: "SB Rander Group" },
          ].map((s) => (
            <div key={s.val} className="altair-about__stat">
              <span className="altair-about__stat-val">{s.val}</span>
              <span className="altair-about__stat-key">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
