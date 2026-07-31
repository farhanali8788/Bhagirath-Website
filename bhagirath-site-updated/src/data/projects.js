// ─────────────────────────────────────────
//  src/data/projects.js
//  Single source of truth for all projects.
//  Both themes read from here.
// ─────────────────────────────────────────

const projects = [
  {
    id: "panchtatva",
    name: "Panchtatva",
    tagline: "A Managed Farmlands",
    type: "Managed FarmLands",
    status: "Active",
    location: "Village Nimbhori, Kalmeshwar, Nagpur",
    description:
      "Half-acre private land parcels in a fully developed nature community. Gated boundaries, curated landscaping, and serene countryside living near Nagpur.",
    image: "/home-page-images/panchtatva-hero-bg.png",
    link: "https://panchtatva.bhagirathrealty.com", // subdomain
    featured: true,
    highlights: [
      { label: "Plot Size", value: "½ Acre Parcels" },
      { label: "Type", value: "Gated Farm Estate" },
      { label: "Location", value: "Kalmeshwar, Nagpur" },
      { label: "Status", value: "Active — Units Available" },
    ],
  },
  {
    id: "altair",
    name: "Altair",
    tagline: "The Brightest Star — 32-Floor Luxury Tower",
    type: "Residential",
    status: "Active",
    location: "Temple Road, Civil Lines, Nagpur",
    description:
      "Thoughtfully designed 2 & 3 BHK apartments with modern amenities, open landscaped spaces, and excellent connectivity to the city centre.",
    image: "/home-page-images/altair-hero-bg.png",
    link: "https://altair.bhagirathrealty.com", // no subdomain yet
    featured: true,
    highlights: [
      { label: "Tower Height", value: "32 Floors" },
      { label: "Unit Types", value: "2 & 3 BHK" },
      { label: "Location", value: "Temple Road, Civil Lines, Nagpur" },
      { label: "Status", value: "Active — Units Available" },
    ],
  },

  {
    id: "navkar",
    name: "Navkar",
    tagline: "Industrial & Logistics Park",
    type: "Industrial",
    status: "Active",
    location: "NH-44 Corridor, Nagpur",
    description:
      "Godowns, warehouses and industrial plots engineered for scale, with direct NH-44 frontage and close proximity to MIDC — built for manufacturers, traders, wholesalers and logistics operators.",
    image: "/home-page-images/navkar-hero-bg.png",
    link: "https://navkar.bhagirathrealty.com",
    featured: false,
    highlights: [
      { label: "Plot Sizes", value: "15,000 – 50,000+ Sq.Ft." },
      { label: "Space Types", value: "Godowns, Warehouses & Industrial Plots" },
      { label: "Location", value: "NH-44 Corridor, Nagpur" },
      { label: "Status", value: "Active — RERA Approved" },
    ],
  },
  {
    id: "complex",
    name: "Bhagirath Complex",
    tagline: "Office Space",
    type: "Commercial",
    status: "Upcoming",
    location: "Wardhaman Nagar, Nagpur",
    description:
      "An upcoming commercial development in Wardhaman Nagar offering retail and office spaces designed for modern business needs in Nagpur.",
    image: "/images/hero-bg-a.webp",
    link: null,
    featured: false,
    highlights: [
      { label: "Space Type", value: "Retail & Office" },
      { label: "Location", value: "Wardhaman Nagar, Nagpur" },
      { label: "Status", value: "Upcoming" },
    ],
  },
  // {
  //   id: "oasis",
  //   name: "Navkar Oasis",
  //   tagline: "",
  //   type: "Plotted development",
  //   status: "Upcoming",
  //   location: "Nagpur",
  //   description:
  //     "Spacious independent villas with private gardens, premium finishes and gated community infrastructure for those who demand the finest.",
  //   image: "/images/hero.webp",
  //   link: null,
  //   featured: false,
  // },
];

export default projects;
