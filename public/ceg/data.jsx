// Shared content data for all three concepts
// Sourced from meeting notes + coastalengineeringllc.com

const CAPABILITIES = [
  {
    key: "diving",
    badge: "CAP-01",
    title: "Commercial Diving",
    body: "PE-certified divers performing underwater inspections, structural repairs, and confined-space operations. Our divers aren't just certified — they're licensed engineers.",
    link: "Explore Diving →",
    icon: "diving",
  },
  {
    key: "engineering",
    badge: "CAP-02",
    title: "Marine Engineering",
    body: "Professional engineering services across structures, marine systems, and waterfront infrastructure. PE-stamped drawings and QA/QC delivered in 13 licensed states.",
    link: "Explore Engineering →",
    icon: "engineering",
  },
  {
    key: "construction",
    badge: "CAP-03",
    title: "Marine Construction",
    body: "Heavy marine construction including seawalls, piers, underwater concrete, welding, and structural repairs. Built to perform in demanding coastal and freshwater environments.",
    link: "Explore Construction →",
    icon: "construction",
  },
  {
    key: "dredging",
    badge: "CAP-04",
    title: "Dredging & Debris Removal",
    body: "Precision dredging for navigation channels, lake restoration, and sediment management. Careful, methodical operations protecting sensitive aquatic environments.",
    link: "Explore Dredging →",
    icon: "dredging",
  },
  {
    key: "marine-services",
    badge: "CAP-05",
    title: "Marine Services & Equipment",
    body: "ROV inspection, tugboats, barges, and crane rentals supporting marine construction operations up and down the East Coast. Full capability, when and where you need it.",
    link: "Explore Marine Services →",
    icon: "marine",
  },
];

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
    slug: "railroad-bridge-inspection",
    title: "Railroad Bridge Inspection Over Open Water",
    client: "CSX Transportation",
    market: "Commercial",
    state: "NY",
    year: "2024",
    tag: "Diving",
    blurb: "Underwater inspection of timber pile substructure on active overwater railroad bridge crossing.",
    image: "/assets/railroad-bridge-inspection.jpg",
    scope: ["Timber pile inspection", "Underwater photography & defect mapping", "Structural condition report", "PE-stamped assessment", "Priority repair recommendations"],
    scopeStats: [{ value: "47", label: "Piles Inspected" }, { value: "3", label: "Span Crossings" }, { value: "10 days", label: "Report Turnaround" }],
    challenge: "CSX needed a structural assessment of an active overwater railroad bridge while maintaining daily freight operations. Standard above-water inspection couldn't evaluate submerged timber pile condition, and any work stoppage on this crossing carried significant operational cost.",
    approach: "CEG deployed a two-person ADCI dive team led by a PE diver for direct underwater structural inspection of all submerged pile elements. Underwater photography and defect mapping was conducted on each pile, with real-time engineering evaluation performed in-water — no footage review lag.",
    outcome: "PE-stamped condition report delivered within 10 business days with zero disruption to rail operations. Priority repair items were identified, documented, and presented with engineered repair options — giving CSX what they needed to plan their next maintenance cycle.",
  },
  {
    slug: "freshwater-utility-cable-relocation",
    title: "Freshwater Utility Cable Relocation",
    client: "Public Service Electric & Gas",
    market: "Utility",
    state: "PA",
    year: "2024",
    tag: "Diving",
    blurb: "Underwater installation and relocation of 3 miles of high-voltage transmission cable across Conowingo Lake.",
    image: "/assets/cable-relocation.jpg",
    scope: ["Submarine cable route survey", "Cable trench excavation", "High-voltage cable installation", "Backfill & environmental restoration", "As-built documentation"],
    scopeStats: [{ value: "3 mi", label: "Cable Relocated" }, { value: "0", label: "Service Interruptions" }, { value: "2024", label: "Completion" }],
    challenge: "PSE&G required relocation of high-voltage transmission cable under a freshwater reservoir without disrupting power delivery to downstream customers or disturbing the lake's sensitive ecology. The crossing depth and water clarity required precision placement over three miles.",
    approach: "CEG performed a full route survey before mobilization, identifying optimal cable trench positioning to avoid existing infrastructure. Dive teams executed precision trench excavation and cable lay using controlled placement methods that minimized bottom disturbance and turbidity impact.",
    outcome: "Three miles of high-voltage submarine cable successfully relocated on schedule with zero service interruptions. Environmental monitoring throughout the project confirmed no measurable impact to the reservoir ecosystem. As-built survey delivered to PSE&G for their records.",
  },
  {
    slug: "port-of-baltimore-water-tank-repair",
    title: "Port of Baltimore Water Tank Repair",
    client: "Baltimore City Department of Public Works",
    market: "State & Local",
    state: "MD",
    year: "2023",
    tag: "Diving",
    blurb: "In-tank commercial dive operation for internal coating inspection, structural assessment, and weld repairs on a 1.5 million gallon elevated storage tank.",
    image: "/assets/water-tank-repair.jpg",
    scope: ["Internal coating inspection", "Structural assessment", "Weld repair", "Cathodic protection evaluation", "PE-stamped report", "AWWA compliance documentation"],
    scopeStats: [{ value: "1.5M gal", label: "Tank Capacity" }, { value: "0", label: "Service Outage Days" }, { value: "AWWA", label: "Compliance Standard" }],
    challenge: "Baltimore City needed internal inspection and repairs on an elevated storage tank serving the Port without taking it out of service — a process that would normally require draining, cleaning, confined space entry under atmospheric conditions, and weeks of downtime.",
    approach: "CEG dive teams entered the active tank under potable water conditions, completing a full internal inspection, weld repair, and cathodic protection assessment without interrupting service. All materials used were certified for potable water contact.",
    outcome: "Tank returned to uninterrupted service with all repairs complete. PE-stamped report delivered to the City documenting conditions, repairs, and recommended maintenance intervals. No service disruption throughout the operation.",
  },
  {
    slug: "delaware-river-bridge-inspection",
    title: "Delaware River Bridge Inspection",
    client: "DRJTBC",
    market: "State & Local",
    state: "PA",
    year: "2025",
    tag: "Diving",
    blurb: "Underwater inspection of substructure across four crossings.",
    image: "/assets/diver-helmet.jpg",
    scope: ["Level 2 NBIS underwater inspection", "Scour evaluation", "Fathometric survey", "PE-stamped reports", "NHI/FHWA certified inspection teams"],
    scopeStats: [{ value: "4", label: "Bridge Crossings" }, { value: "L2", label: "NBIS Inspection" }, { value: "NHI/FHWA", label: "Certification" }],
    challenge: "The Delaware River Joint Toll Bridge Commission required NBIS-compliant Level 2 underwater inspections across four bridge crossings under active traffic with varying water depths and visibility conditions.",
    approach: "CEG deployed NHI/FHWA certified PE divers for all four crossings, executing Level 2 underwater inspections per NBIS standards. Scour evaluation and fathometric surveys were completed concurrently to maximize mobilization efficiency.",
    outcome: "All four crossings inspected, documented, and reported with full NBIS compliance. PE-stamped reports delivered to DRJTBC within the required timeframe, meeting their regulatory reporting obligations.",
  },
  {
    slug: "atlantic-shores-offshore-wind",
    title: "Atlantic Shores Offshore Wind",
    client: "Atlantic Shores OW",
    market: "Energy",
    state: "NJ",
    year: "2025",
    tag: "Marine Services",
    blurb: "Tug and barge support for cable lay vessel mobilization.",
    image: "/assets/marine-services.jpg",
    scope: ["Tug mobilization & positioning", "Deck barge support", "Cable lay vessel escort", "Port coordination", "Marine logistics management"],
    scopeStats: [{ value: "2", label: "Tugs Deployed" }, { value: "Offshore NJ", label: "Work Area" }, { value: "2025", label: "Active" }],
    challenge: "Atlantic Shores required reliable tug and marine logistics support for cable lay vessel operations in the NJ offshore wind development area, with port-to-site coordination demanding tight scheduling and vessel positioning precision.",
    approach: "CEG provided dedicated tug and deck barge support integrated with the cable lay vessel's operational schedule. Our captains coordinated directly with vessel operations to maintain positioning, respond to weather windows, and ensure safe port transits.",
    outcome: "Cable lay vessel mobilization completed on schedule with no operational delays attributable to marine support logistics. Ongoing support contract continues through project completion.",
  },
  {
    slug: "port-newark-container-terminal",
    title: "Port Newark Container Terminal",
    client: "Port Authority NY/NJ",
    market: "Commercial",
    state: "NJ",
    year: "2023",
    tag: "Engineering",
    blurb: "Condition assessment and rehabilitation design for 2,400 LF of wharf.",
    image: "/assets/marine-engineering.jpg",
    scope: ["Underwater structural assessment", "Above-water condition survey", "Rehabilitation design", "PE-stamped drawings", "Construction document package", "Permitting support"],
    scopeStats: [{ value: "2,400 LF", label: "Wharf Assessed" }, { value: "13", label: "Licensed States" }, { value: "PE-Stamped", label: "Deliverables" }],
    challenge: "The Port Authority needed a comprehensive condition assessment and rehabilitation design package for a high-throughput container terminal wharf — with findings reliable enough to directly support a capital repair procurement.",
    approach: "CEG engineers conducted both underwater and above-water structural assessment across the full 2,400 LF, evaluating pile condition, fender systems, deck structure, and utility systems. The assessment fed directly into a PE-stamped rehabilitation design package.",
    outcome: "Full condition assessment and rehabilitation design delivered on schedule. PE-stamped construction documents provided a ready-to-bid package that the Port Authority used to procure the repair contract directly.",
  },
  {
    slug: "mayport-naval-station-wharf-repair",
    title: "Mayport Naval Station Wharf Repair",
    client: "NAVFAC Southeast",
    market: "Federal",
    state: "FL",
    year: "2025",
    tag: "Diving",
    blurb: "Underwater pile inspection and concrete jacket repair on active wharf.",
    image: "/assets/diver-city.jpg",
    scope: ["Underwater pile inspection", "Concrete jacket repair", "EM385 safety compliance", "Underwater QC dive team", "PE-stamped documentation", "NAVFAC project coordination"],
    scopeStats: [{ value: "EM385", label: "Safety Standard" }, { value: "NAVFAC SE", label: "Client" }, { value: "Active Wharf", label: "Environment" }],
    challenge: "NAVFAC Southeast required pile inspection and concrete repair on an active Navy wharf at Mayport Naval Station — an operational facility where work had to be sequenced around vessel berthing schedules and base access protocols.",
    approach: "CEG coordinated closely with base operations to sequence work windows around active berthing. Our EM385-compliant dive team performed all underwater inspection and concrete jacket repairs with a full-time PE diver lead maintaining direct coordination with the NAVFAC COR.",
    outcome: "All repair work completed within the approved work windows with no operational disruption to the station. PE-stamped as-built documentation delivered to NAVFAC within 30 days of project completion.",
  },
  {
    slug: "greenwood-lake-dam-rehabilitation",
    title: "Greenwood Lake Dam Rehabilitation",
    client: "Greenwood Lake Commission",
    market: "State & Local",
    state: "NY",
    year: "2024",
    tag: "Engineering",
    blurb: "Spillway redesign and embankment stabilization for aging dam structure.",
    image: "/assets/federal-project-dam.jpg",
    scope: ["Dam safety inspection", "Spillway hydraulic analysis", "Spillway redesign", "Embankment stabilization design", "PE-stamped drawings", "NYSDEC permit coordination"],
    scopeStats: [{ value: "ASDSO", label: "Certified Inspection" }, { value: "PE-Stamped", label: "Design Package" }, { value: "NYSDEC", label: "Permitted" }],
    challenge: "The Greenwood Lake Dam required rehabilitation to address spillway deterioration and embankment stability concerns flagged in a dam safety inspection — with design and permitting complexity driven by the structure's age, the lake's recreational use, and state dam safety regulations.",
    approach: "CEG performed a full ASDSO-compliant dam safety inspection before advancing to design. The spillway was redesigned to meet current hydraulic standards, and an embankment stabilization plan was developed and coordinated through NYSDEC permitting.",
    outcome: "PE-stamped design package completed and permitted through NYSDEC. The Commission received a fully coordinated construction document set ready for contractor procurement.",
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
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Safety Record" },
  { value: "ADCI", label: "Certified" },
  { value: "VOSB", label: "Verified" },
];

const NAV = {
  about: { label: "About", items: [
    { label: "Our Story",      href: "/about#story" },
    { label: "Leadership",     href: "/about#leadership" },
    { label: "Veteran-Owned",  href: "/about#veteran" },
    { label: "Safety & Quality", href: "/safety-quality" },
    { label: "Careers",        href: "#careers" },
  ]},
  markets: { label: "Markets", items: MARKETS.map(m => ({ label: m.name, href: `/markets/${m.key}` })) },
  services: { label: "Services", items: [
    { label: "Commercial Diving",   href: "/services/diving" },
    { label: "Marine Engineering",  href: "#" },
    { label: "Marine Construction", href: "#" },
    { label: "Dredging",            href: "#" },
    { label: "Marine Services",     href: "#" },
  ]},
  projects: { label: "Projects", items: [
    { label: "Featured Work",   href: "/projects/featured-work" },
    { label: "Federal",         href: "#" },
    { label: "State & Local",   href: "#" },
    { label: "Energy",          href: "#" },
    { label: "Commercial",      href: "#" },
  ]},
  insights: { label: "Insights", items: [
    { label: "News",               href: "/insights/news" },
    { label: "Press Releases",     href: "#" },
    { label: "Resilience Reports", href: "#" },
  ]},
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

window.CEG_DATA = { CAPABILITIES, DIVISIONS, MARKETS, PROJECTS, STATES_WORKED, CERTS, CLIENTS, STATS, NAV, CONTACT, CAREERS };
