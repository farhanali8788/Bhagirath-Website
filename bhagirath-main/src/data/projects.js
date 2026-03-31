// ─────────────────────────────────────────
//  src/data/projects.js
//  Single source of truth for all projects.
//  Both themes read from here.
// ─────────────────────────────────────────

const projects = [
  {
    id: "panchtatva",
    name: "Panchtatva",
    tagline: "A Gated Luxury Farm Estate",
    type: "Farm Estate / Plotted Land",
    status: "Active",
    location: "Village Nimbhori, Kalmeshwar, Nagpur",
    description:
      "Half-acre private land parcels in a fully developed nature community. Gated boundaries, curated landscaping, and serene countryside living near Nagpur.",
    image: "/projects/panchtatva.jpg",
    link: "https://panchtatva.bhagirathrealty.com", // subdomain
    featured: true,
  },
  {
    id: "project-2",
    name: "Bhagirath Heights",
    tagline: "Premium Residential Apartments",
    type: "Residential Apartments",
    status: "Upcoming",
    location: "Wardha Road, Nagpur",
    description:
      "Thoughtfully designed 2 & 3 BHK apartments with modern amenities, open landscaped spaces, and excellent connectivity to the city centre.",
    image: "/projects/bhagirath-heights.webp",
    link: null, // no subdomain yet
    featured: true,
  },
  // {
  //   id: "project-3",
  //   name: "Bhagirath Villas",
  //   tagline: "Exclusive Villas & Bungalows",
  //   type: "Villas / Bungalows",
  //   status: "Upcoming",
  //   location: "Kamptee Road, Nagpur",
  //   description:
  //     "Spacious independent villas with private gardens, premium finishes and gated community infrastructure for those who demand the finest.",
  //   image: "/projects/bhagirath-villas.jpg",
  //   link: null,
  //   featured: false,
  // },
  {
    id: "project-4",
    name: "Bhagirath Commerce Park",
    tagline: "Modern Commercial Spaces",
    type: "Commercial",
    status: "Upcoming",
    location: "Hingna Road, Nagpur",
    description:
      "Purpose-built commercial spaces designed for retail, offices and mixed-use developments at a high-footfall growth corridor of Nagpur.",
    image: "/projects/bhagirath-commerce.webp",
    link: null,
    featured: false,
  },
];

export default projects;
