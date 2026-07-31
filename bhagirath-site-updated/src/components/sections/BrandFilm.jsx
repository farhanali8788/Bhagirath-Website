import React, { useState } from "react";
import "./BrandFilm.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// ── YouTube video ────────────────────────────────────────────────
// Paste ONLY the video ID (the part after "v=" in the YouTube URL).
// e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  "dQw4w9WgXcQ"
const YOUTUBE_ID = "fMvzlDYaQrs";

// Optional: use a custom poster image instead of YouTube's thumbnail.
// Leave as "" to use YouTube's own thumbnail automatically.
const CUSTOM_POSTER = "";

const BrandFilm = () => {
  const [playing, setPlaying] = useState(false);
  const [headRef, headVisible] = useScrollAnimation(0.15);
  const [videoRef, videoVisible] = useScrollAnimation(0.1);

  const poster =
    CUSTOM_POSTER || `https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

  return (
    <section className="brandfilm" id="brand-film">
      <div className="container">
        {/* ── Header ── */}
        <div
          ref={headRef}
          className={`brandfilm__head anim-fade-up ${headVisible ? "is-visible" : ""}`}
        >
          <p className="brandfilm__eyebrow">
            <span className="brandfilm__eyebrow-line" />
            Our Story
          </p>
          <h2 className="brandfilm__heading">
            The Bhagirath{" "}
            <span className="brandfilm__heading--gold">Brand Film</span>
          </h2>
          <p className="brandfilm__sub">
            Every piece of land has a purpose, and every Bhagirath Realty
            project is built to fulfil it. Through thoughtful planning and
            enduring design, we create destinations that deliver value today
            while leaving a meaningful legacy for tomorrow.
          </p>
        </div>

        {/* ── Video ── */}
        <div
          ref={videoRef}
          className={`brandfilm__frame anim-fade-up ${videoVisible ? "is-visible" : ""}`}
        >
          <div className="brandfilm__ratio">
            {playing ? (
              <iframe
                className="brandfilm__iframe"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Bhagirath Realty — Brand Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                className="brandfilm__poster"
                onClick={() => setPlaying(true)}
                aria-label="Play the Bhagirath Realty brand film"
              >
                <img src={poster} alt="Bhagirath Realty brand film" />
                <span className="brandfilm__scrim" />
                <span className="brandfilm__play">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="brandfilm__playlabel">Watch the film</span>
              </button>
            )}
          </div>
          {/* Corner accent, matching the site's visual language */}
          <span className="brandfilm__corner" />
        </div>
      </div>
    </section>
  );
};

export default BrandFilm;
