import React from "react";
import "./BrandStrip.css";
import { META } from "../../data/altair";

const items = [
  META.developer,
  "SKA Consortium — Architects",
  `MAHA RERA · ${META.rera}`,
  "Temple Road, Civil Lines, Nagpur",
  META.phone,
];

const BrandStrip = () => (
  <div className="altair-strip">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        <span className="altair-strip__item">{item}</span>
        {i < items.length - 1 && <span className="altair-strip__sep" />}
      </React.Fragment>
    ))}
  </div>
);

export default BrandStrip;
