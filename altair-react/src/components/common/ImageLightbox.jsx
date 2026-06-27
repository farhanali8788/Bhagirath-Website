import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import "./ImageLightbox.css";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.5;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

/* ── Modal (always rendered via portal to document.body) ──────── */
const LightboxModal = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const stageRef = useRef(null);
  const scaleRef = useRef(1);
  const posRef = useRef({ x: 0, y: 0 });
  const dragStart = useRef(null);
  const posAtDragStart = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);

  // Keep refs in sync for imperative handlers
  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  const doZoom = useCallback((delta) => {
    setScale((prev) => {
      const next = clamp(prev + delta, MIN_SCALE, MAX_SCALE);
      if (next <= MIN_SCALE) setPos({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const doReset = useCallback(() => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, []);

  /* Body scroll lock */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /* Keyboard */
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") doZoom(ZOOM_STEP);
      if (e.key === "-") doZoom(-ZOOM_STEP);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, doZoom]);

  /* Wheel zoom — must be non-passive to preventDefault */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const h = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
      setScale((prev) => {
        const next = clamp(prev + delta, MIN_SCALE, MAX_SCALE);
        if (next <= MIN_SCALE) setPos({ x: 0, y: 0 });
        return next;
      });
    };
    el.addEventListener("wheel", h, { passive: false });
    return () => el.removeEventListener("wheel", h);
  }, []);

  /* Touch — non-passive for pinch & pan */
  const touchStart = useRef(null);
  const posAtTouch = useRef({ x: 0, y: 0 });
  const pinchStart = useRef(null);
  const scaleAtPinch = useRef(1);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onStart = (e) => {
      if (e.touches.length === 1) {
        touchStart.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
        posAtTouch.current = { ...posRef.current };
      }
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchStart.current = Math.hypot(dx, dy);
        scaleAtPinch.current = scaleRef.current;
      }
    };

    const onMove = (e) => {
      e.preventDefault();
      if (
        e.touches.length === 1 &&
        scaleRef.current > 1 &&
        touchStart.current
      ) {
        const dx = e.touches[0].clientX - touchStart.current.x;
        const dy = e.touches[0].clientY - touchStart.current.y;
        setPos({ x: posAtTouch.current.x + dx, y: posAtTouch.current.y + dy });
      }
      if (e.touches.length === 2 && pinchStart.current) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        setScale(
          clamp(
            scaleAtPinch.current * (dist / pinchStart.current),
            MIN_SCALE,
            MAX_SCALE,
          ),
        );
      }
    };

    const onEnd = () => {
      touchStart.current = null;
      pinchStart.current = null;
      if (scaleRef.current <= MIN_SCALE) setPos({ x: 0, y: 0 });
    };

    el.addEventListener("touchstart", onStart, { passive: false });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd);
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
    };
  }, []);

  /* Mouse drag */
  const onMouseDown = (e) => {
    if (scaleRef.current <= 1) return;
    e.preventDefault();
    dragging.current = true;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posAtDragStart.current = { ...posRef.current };
  };

  const onMouseMove = (e) => {
    if (!dragging.current || !dragStart.current) return;
    setPos({
      x: posAtDragStart.current.x + (e.clientX - dragStart.current.x),
      y: posAtDragStart.current.y + (e.clientY - dragStart.current.y),
    });
  };

  const onMouseUp = () => {
    dragging.current = false;
    setIsDragging(false);
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      className="lb-overlay"
      onClick={onBackdropClick}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Controls bar */}
      <div className="lb-controls" onClick={(e) => e.stopPropagation()}>
        <button
          className="lb-btn"
          onClick={() => doZoom(-ZOOM_STEP)}
          disabled={scale <= MIN_SCALE}
          aria-label="Zoom out"
          title="Zoom out (−)"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35M8 11h6" strokeLinecap="round" />
          </svg>
        </button>

        <span className="lb-zoom-label">{Math.round(scale * 100)}%</span>

        <button
          className="lb-btn"
          onClick={() => doZoom(ZOOM_STEP)}
          disabled={scale >= MAX_SCALE}
          aria-label="Zoom in"
          title="Zoom in (+)"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35M11 8v6M8 11h6" strokeLinecap="round" />
          </svg>
        </button>

        {scale > 1 && (
          <button
            className="lb-btn lb-btn--reset"
            onClick={doReset}
            aria-label="Reset zoom"
            title="Reset"
          >
            Reset
          </button>
        )}

        <button
          className="lb-btn lb-btn--close"
          onClick={onClose}
          aria-label="Close (Esc)"
          title="Close (Esc)"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Stage — no overflow:hidden, wheel events reach this div */}
      <div
        ref={stageRef}
        className="lb-stage"
        onMouseDown={onMouseDown}
        style={{
          cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="lb-img"
          draggable="false"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transition: isDragging ? "none" : "transform 0.15s ease",
          }}
        />
      </div>

      {alt && (
        <div className="lb-caption" onClick={(e) => e.stopPropagation()}>
          {alt}
        </div>
      )}
    </div>,
    document.body,
  );
};

/* ── Wrapper — wraps any trigger element ─────────────────────── */
const ImageLightbox = ({ src, alt = "", children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="lb-trigger"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View ${alt} in fullscreen`}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
      >
        {children}
        <div className="lb-trigger__hint" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Expand</span>
        </div>
      </div>
      {open && (
        <LightboxModal src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default ImageLightbox;
