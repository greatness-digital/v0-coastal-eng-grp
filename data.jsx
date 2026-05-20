// Shared content data for all three concepts
// Sourced from meeting notes + coastalengineeringllc.com

const DIVISIONS = [
  {
    key: "diving",
    name: "Commercial Diving",
    short: "Diving",
    blurb: "ADCI-certified inspection, repair, and salvage operations across federal and commercial waterfronts.",
    services: ["Underwater Inspection", "Pier & Wharf Repair", "Salvage & Recovery", "Hull Cleaning", "NDT & Welding"],
  },
  {
    key: "engineering",
    name: "Marine Engineering",
    short: "Engineering",
    blurb: "Design-build expertise for seawalls, bulkheads, piers, and coastal resilience infrastructure.",
    services: ["Structural Design", "Condition Assessment", "Permitting Support", "Resilience Planning"],
  },
  {
    key: "dredging",
    name: "Dredging",
    short: "Dredging",
    blurb: "Mechanical and hydraulic dredging — channels, berths, and beach renourishment for federal clients.",
    services: ["Maintenance Dredging", "Capital Dredging", "Environmental Dredging", "Beach Renourishment"],
  },
  {
    key: "construction",
    name: "Marine Construction",
    short: "Construction",
    blurb: "Heavy civil construction over and below the waterline — bridges, piers, wharfs, and seawalls.",
    services: ["Pile Driving", "Bulkheads & Seawalls", "Bridge Substructures", "Pier & Wharf Construction"],
  },
  {
    key: "marine-services",
    name: "Marine Services",
    short: "Marine Services",
    blurb: "Tugs, barges, and crane rentals supporting our own work and third-party marine contractors.",
    services: ["Tugboat Services", "Deck Barges", "Crane Barges", "Equipment Rental"],
  },
];

const MARKETS = [
  { key: "federal", name: "Federal", detail: "NAVFAC, USACE, Coast Guard", projects: 47 },
  { key: "state-local", name: "State & Local", detail: "DOTs, port authorities, municipal", projects: 32 },
  { key: "energy", name: "Energy", detail: "Offshore wind, LNG, transmission", projects: 18 },
  { key: "commercial", name: "Commercial", detail: "Marinas, terminals, private piers", projects: 24 },
  { key: "industrial", name: "Industrial", detail: "Heavy industry waterfront facilities", projects: 15 },
];

const PROJECTS = [
  {
    title: "Naval Station Norfolk — Pier 11 Rehabilitation",
    client: "NAVFAC Mid-Atlantic",
    market: "Federal",
    state: "VA",
    year: "2025",
    tag: "Construction",
    blurb: "Structural repairs and fender system replacement on an active berthing pier.",
    award: "NAVFAC Project Excellence",
  },
  {
    title: "Cape May Seawall Reinforcement",
    client: "USACE Philadelphia District",
    market: "Federal",
    state: "NJ",
    year: "2024",
    tag: "Construction",
    blurb: "1,800 LF of steel sheet pile bulkhead with cap and tieback system.",
  },
  {
    title: "Port of Baltimore Berth 4 Dredging",
    client: "Maryland Port Administration",
    market: "State & Local",
    state: "MD",
    year: "2024",
    tag: "Dredging",
    blurb: "Maintenance dredging to -50 ft MLLW with confined disposal.",
  },
  {
    title: "Delaware River Bridge Inspection",
    client: "DRJTBC",
    market: "State & Local",
    state: "PA",
    year: "2025",
    tag: "Diving",
    blurb: "Underwater inspection of substructure across four crossings.",
  },
  {
    title: "Atlantic Shores Offshore Wind",
    client: "Atlantic Shores OW",
    market: "Energy",
    state: "NJ",
    year: "2025",
    tag: "Marine Services",
    blurb: "Tug and barge support for cable lay vessel mobilization.",
  },
  {
    title: "Port Newark Container Terminal",
    client: "Port Authority NY/NJ",
    market: "Commercial",
    state: "NJ",
    year: "2023",
    tag: "Engineering",
    blurb: "Condition assessment and rehabilitation design for 2,400 LF of wharf.",
  },
  {
    title: "Mayport Naval Station Wharf Repair",
    client: "NAVFAC Southeast",
    market: "Federal",
    state: "FL",
    year: "2025",
    tag: "Diving",
    blurb: "Underwater pile inspection and concrete jacket repair on active wharf.",
  },
  {
    title: "Greenwood Lake Dam Rehabilitation",
    client: "Greenwood Lake Commission",
    market: "State & Local",
    state: "NY",
    year: "2024",
    tag: "Engineering",
    blurb: "Spillway redesign and embankment stabilization for aging dam structure.",
  },
];

// Derived: states where we've actually performed work — drives projects filter.
const STATES_WORKED = Array.from(new Set(PROJECTS.map(p => p.state))).sort();

const CERTS = [
  { abbr: "VOSB", full: "Veteran-Owned Small Business" },
  { abbr: "ADCI", full: "Association of Diving Contractors Intl." },
  { abbr: "SAM", full: "System for Award Management" },
  { abbr: "DBE", full: "Disadvantaged Business Enterprise" },
  { abbr: "ISO 9001", full: "Quality Management Certified" },
  { abbr: "OSHA 30", full: "Construction Safety Trained" },
];

const CLIENTS = [
  "NAVFAC", "U.S. Army Corps of Engineers", "U.S. Coast Guard",
  "Port Authority NY/NJ", "Maryland Port Admin.", "NJDOT",
  "DRJTBC", "Atlantic Shores OW", "Equinor",
];

const STATS = [
  { value: "27", label: "Years on the water" },
  { value: "180+", label: "Projects delivered" },
  { value: "$1.2B", label: "Construction value" },
  { value: "5", label: "Operating divisions" },
];

const NAV = {
  about: { label: "About", items: ["Our Story", "Leadership", "Veteran-Owned", "Safety & Quality", "Careers"] },
  markets: { label: "Markets", items: MARKETS.map(m => m.name) },
  services: { label: "Services", items: DIVISIONS.map(d => d.name) },
  projects: { label: "Projects", items: ["Featured Work", "Federal", "State & Local", "Energy", "Commercial"] },
  insights: { label: "Insights", items: ["News", "Press Releases", "Resilience Reports"] },
};

const CONTACT = {
  phone: "845-328-3178",
  email: "info@coastalengineeringgroup.com",
  hq: "Coastal Engineering Group",
  addressLine1: "Headquarters",
  addressLine2: "United States",
  hours: "Mon–Fri  7:00–17:00 ET",
  emergency: "24/7 Emergency Response",
};

// Careers — benefits + open roles teaser (JMT-leaning, talent-as-priority).
const CAREERS = {
  pitch: "Build the structures that hold the coast in place.",
  lede: "We're a veteran-owned marine contractor scaling fast across the Eastern Seaboard. We hire experienced field personnel and engineers who want ownership over their projects — and we keep them with real benefits, real advancement, and real work.",
  benefits: [
    { h: "Health & wellness", v: "Medical, dental, vision · 100% employer-paid options for divers and field crew." },
    { h: "Financial", v: "401(k) with company match · paid life and disability insurance." },
    { h: "Time off", v: "Generous PTO scaling with tenure · paid holidays · per-diem on travel." },
    { h: "Development", v: "ADCI dive certifications · OSHA training paid · tuition support." },
  ],
  openRoles: [
    { title: "Commercial Diver / Tender", division: "Diving", location: "Greenwood Lakes, NY", type: "Full-time" },
    { title: "Marine Project Manager", division: "Construction", location: "Jacksonville, FL", type: "Full-time" },
    { title: "Pile Driver / Heavy Equipment Operator", division: "Construction", location: "Field-based", type: "Full-time" },
    { title: "Coastal Structural Engineer", division: "Engineering", location: "Greenwood Lakes, NY", type: "Full-time" },
    { title: "Tugboat Captain", division: "Marine Services", location: "Mid-Atlantic", type: "Full-time" },
  ],
};

window.CEG_DATA = { DIVISIONS, MARKETS, PROJECTS, STATES_WORKED, CERTS, CLIENTS, STATS, NAV, CONTACT, CAREERS };
