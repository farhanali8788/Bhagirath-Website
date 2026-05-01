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
    type: "Managed FarmLands ",
    status: "Active",
    location: "Village Nimbhori, Kalmeshwar, Nagpur",
    description:
      "Half-acre private land parcels in a fully developed nature community. Gated boundaries, curated landscaping, and serene countryside living near Nagpur.",
    image: "/home-page-images/panchtatva-hero-bg.png",
    link: "https://panchtatva.bhagirathrealty.com", // subdomain
    featured: true,
  },
  {
    id: "altair",
    name: "Altair",
    tagline: "The Brightest Star — 32-Floor Luxury Tower",
    type: "Residential ",
    status: "Active",
    location: "Temple Road, Civil Lines, Nagpur",
    description:
      "Thoughtfully designed 2 & 3 BHK apartments with modern amenities, open landscaped spaces, and excellent connectivity to the city centre.",
    image: "/home-page-images/altair-hero-bg.png",
    link: "https://altair.bhagirathrealty.com", // no subdomain yet
    featured: true,
  },

  {
    id: "navkar",
    name: "Navkar",
    tagline: "Modern Commercial Spaces",
    type: "Industrial ",
    status: "Active",
    location: " Nagpur",
    description:
      "Purpose-built commercial spaces designed for retail, offices and mixed-use developments at a high-footfall growth corridor of Nagpur.",
    image: "/home-page-images/navkar-hero-bg.png",
    link: "https://altair.bhagirathrealty.com",
    featured: false,
  },
  {
    id: "complex",
    name: "Bhagirath Complex",
    tagline: "Office Space",
    type: "Commercial ",
    status: "Upcoming",
    location: " Wardhaman Nagar, Nagpur",
    description:
      "Spacious independent villas with private gardens, premium finishes and gated community infrastructure for those who demand the finest.",
    image: "/images/hero-bg-a.webp",
    link: null,
    featured: false,
  },
  // {
  //   id: "oasis",
  //   name: "Navkar Oasis",
  //   tagline: "",
  //   type: "Plotted development ",
  //   status: "Upcoming",
  //   location: " Nagpur",
  //   description:
  //     "Spacious independent villas with private gardens, premium finishes and gated community infrastructure for those who demand the finest.",
  //   image: "/images/hero.webp",
  //   link: null,
  //   featured: false,
  // },
];

export default projects;
