// CEG — Shared Services template. One data-driven page that renders any of the
// non-diving service divisions (construction, engineering, dredging, marine
// services) from SERVICE_PAGES, reusing the fed-*/div-* styling established by
// the Commercial Diving page so all service pages share one visual language.
//
// The active service is chosen by window.__CEG_SERVICE, set by each route
// (app/services/<key>/page.tsx) before this file runs — the same pattern the
// project-detail page uses with window.__CEG_SLUG.

const { useState: useSS, useEffect: useSE, useRef: useSR } = React;

// Reusable line-icon paths (Heroicons-style, stroked).
const ICON = {
  structure:  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  layers:     "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  grid:       "M3 10h18M3 14h18M10 3v18M14 3v18",
  doc:        "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  wrench:     "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  waves:      "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M3 12h.01M3 8h.01M3 16h.01",
  anchor:     "M12 8a2 2 0 100-4 2 2 0 000 4zm0 0v13m0 0a8 8 0 01-8-8h2m6 8a8 8 0 008-8h-2",
  truck:      "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1",
  bolt:       "M13 10V3L4 14h7v7l9-11h-7z",
  shield:     "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  map:        "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  beaker:     "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  ship:       "M3 13l1.5 5.5a2 2 0 001.92 1.5h11.16a2 2 0 001.92-1.5L21 13M3 13l9-4 9 4M3 13h18M12 3v6",
};

// ─── Page content ──────────────────────────────────────────────────────────
const SERVICE_PAGES = {
  construction: {
    page: "construction",
    heroImg: "/assets/marine-construction.jpg",
    eyebrow: "Services / Marine Construction",
    h1: ["Heavy Marine Construction,", "Over and Below the Waterline."],
    lede: "Coastal Engineering Group self-performs heavy civil marine construction — bridges, piers, wharfs, seawalls, and bulkheads — with our own crews, equipment, and PE oversight on every structural element.",
    heroCta: "Request a Bid →",
    stats: [
      { value: "Self-Perform", sub: "Own crews and equipment — no subcontracted core work" },
      { value: "PE Oversight", sub: "Licensed engineers on every structural build" },
      { value: "13 States", sub: "Licensed across the Eastern Seaboard" },
    ],
    why: {
      eyebrow: "The Difference",
      h2: "We Build What We Engineer.",
      body: [
        "Most marine builders hand structural questions back to a separate design firm. We don't. Our construction crews work alongside in-house Professional Engineers, so design intent carries straight through to the field.",
        "That integration removes the handoffs, change orders, and split accountability that drive marine projects over budget. One company owns the work from drawing to as-built.",
      ],
      cards: [
        { title: "Single Accountability", body: "Engineering and construction under one roof means no finger-pointing between designer and builder — one team owns the outcome." },
        { title: "Built to the Drawing", body: "PE oversight in the field ensures what gets built matches what was engineered, with QA/QC documented at every milestone." },
      ],
    },
    servicesHead: { h2: "Full-Scope Marine Construction", sub: "Hover any capability to see typical scope and applications." },
    services: [
      { title: "Pile Driving", desc: "Timber, steel, and concrete", icon: ICON.structure, tooltip: "Installation of timber, steel H-pile, pipe pile, and prestressed concrete piles for bridge substructures, piers, and waterfront foundations. Template-guided driving with PE-verified bearing capacity." },
      { title: "Bulkheads & Seawalls", desc: "Shoreline protection", icon: ICON.layers, tooltip: "New construction and replacement of steel sheet pile, vinyl, and concrete bulkheads and seawalls. Tieback systems, scour protection, and cap construction for shoreline stabilization." },
      { title: "Pier & Wharf Construction", desc: "Berthing structures", icon: ICON.grid, tooltip: "Construction and rehabilitation of piers, wharfs, and dock structures — deck framing, pile caps, fender systems, and utility supports for commercial and federal berthing." },
      { title: "Bridge Substructures", desc: "Foundations & supports", icon: ICON.doc, tooltip: "Marine bridge substructure work including pile foundations, pier columns, footings, and abutments. Coordination with traffic-maintenance plans for active crossings." },
      { title: "Underwater Concrete", desc: "Tremie & jacket repair", icon: ICON.wrench, tooltip: "Tremie concrete placement, pile jacket repair, and underwater structural concrete work. Certified procedures with PE divers directing placement and verifying conditions in real time." },
      { title: "Cofferdams", desc: "Dry-work enclosures", icon: ICON.shield, tooltip: "Design and installation of cofferdams and dewatering systems to create dry working conditions for below-waterline construction and repair." },
    ],
    certs: ["VOSB", "USACE CQM", "EM385", "OSHA 10/30", "ISO 9001", "ASCE Waterfront", "AWS Welding", "PE-Stamped"],
    projectSlugs: ["mayport-naval-station-wharf-repair", "port-newark-container-terminal", "greenwood-lake-dam-rehabilitation"],
    projectsHead: { eyebrow: "Recent Work", h2: "Built to Perform Under Load" },
    intro: {
      eyebrow: "Overview",
      h2: "Heavy Marine Construction, Self-Performed",
      body: [
        "Coastal Engineering Group is a veteran-owned heavy marine construction contractor working the waterfronts of the U.S. East Coast. We build and rehabilitate the structures that hold the coast in place — piers and wharfs, seawalls and bulkheads, bridge substructures, and underwater concrete — over and below the waterline.",
        "What sets our marine construction apart is integration. Our field crews work under licensed Professional Engineers, and we self-perform the core work with our own equipment rather than subcontracting it out. Design intent carries straight through to the field, and one accountable team owns the project from the drawing board to the as-built — removing the handoffs and change orders that drive marine work over budget.",
      ],
    },
    whereCopy: "Coastal Engineering Group self-performs marine construction for federal, state, energy, and commercial clients across the Eastern Seaboard. Our Professional Engineers are licensed in:",
    faqs: [
      { q: "What does a marine construction contractor do?", a: "A marine construction contractor builds and rehabilitates structures over and below the waterline — piers, wharfs, seawalls, bulkheads, bridge substructures, and underwater concrete. Coastal Engineering Group self-performs this work with its own crews and equipment, directed by licensed Professional Engineers." },
      { q: "What areas does Coastal Engineering Group serve?", a: "Coastal Engineering Group works federal, state, energy, and commercial waterfronts from the Mid-Atlantic up the Eastern Seaboard, with Professional Engineers licensed across the East Coast from Maine to Florida." },
      { q: "Do you self-perform marine construction or subcontract it?", a: "We self-perform our core marine construction with our own crews, equipment, and PE oversight — eliminating the handoffs, change orders, and split accountability of multi-prime delivery." },
      { q: "What types of marine structures do you build?", a: "Pile foundations, steel and concrete bulkheads and seawalls, piers and wharfs, bridge substructures, underwater structural concrete and pile jackets, and cofferdams for dry below-waterline work." },
      { q: "Are you qualified for federal marine construction work?", a: "Yes. Coastal Engineering Group is a Veteran-Owned Small Business with USACE CQM and EM385 compliance, and a track record on NAVFAC and USACE waterfront projects." },
    ],
    cta: { h2: "Have a Marine Construction Project?", lede: "Self-performed, PE-overseen, and deployed across 13 states. Tell us your scope and we'll respond within 24 hours.", trust: ["VOSB", "PE Oversight", "USACE CQM", "EM385", "100% Safety Record"] },
  },

  engineering: {
    page: "engineering",
    heroImg: "/assets/marine-engineering.jpg",
    eyebrow: "Services / Marine Engineering",
    h1: ["Professional Engineering", "for the Waterfront."],
    lede: "PE-stamped design, condition assessment, and rehabilitation engineering for seawalls, piers, bridges, and coastal resilience infrastructure — licensed across 13 states and backed by crews who build what we draw.",
    heroCta: "Request a Proposal →",
    stats: [
      { value: "13 Licensed States", sub: "PE registration across the Eastern Seaboard" },
      { value: "PE-Stamped", sub: "Signed and sealed deliverables" },
      { value: "Design-Build", sub: "Engineering paired with self-perform construction" },
    ],
    why: {
      eyebrow: "The Difference",
      h2: "Engineering That Knows How It Gets Built.",
      body: [
        "Design that ignores constructability creates change orders. Because our engineers work alongside the crews who execute the work, our drawings reflect what can actually be built in the water column — not just what's theoretically sound.",
        "From condition assessment through PE-stamped construction documents, we deliver design that's grounded in field reality and ready to procure.",
      ],
      cards: [
        { title: "Constructable Design", body: "Drawings informed by self-perform construction experience — fewer RFIs, fewer change orders, faster procurement." },
        { title: "Assessment to As-Built", body: "We can assess the structure, design the fix, and build it — a continuous chain of accountability from inspection to completion." },
      ],
    },
    servicesHead: { h2: "Marine & Coastal Engineering", sub: "Hover any capability to see typical scope and applications." },
    services: [
      { title: "Structural Design", desc: "Waterfront structures", icon: ICON.doc, tooltip: "Design of piers, wharfs, bulkheads, seawalls, and bridge substructures. Load analysis, material selection, and PE-stamped construction documents ready for procurement." },
      { title: "Condition Assessment", desc: "Above & below water", icon: ICON.map, tooltip: "Comprehensive structural condition assessment combining topside survey with PE-led underwater inspection. Defect mapping, remaining-life evaluation, and prioritized repair recommendations." },
      { title: "Rehabilitation Design", desc: "Repair & restoration", icon: ICON.wrench, tooltip: "Rehabilitation engineering for aging waterfront infrastructure — repair details, capacity restoration, and phased construction documents that keep facilities in service." },
      { title: "Permitting Support", desc: "Regulatory coordination", icon: ICON.shield, tooltip: "Permit drawings and coordination with USACE, state DEP/DEC, and local agencies. Environmental documentation and regulatory liaison through approval." },
      { title: "Resilience Planning", desc: "Coastal adaptation", icon: ICON.layers, tooltip: "Coastal resilience and adaptation planning — sea-level-rise analysis, scour and flood evaluation, and hardening strategies for vulnerable waterfront assets." },
      { title: "Dam & Spillway Engineering", desc: "ASDSO-aligned", icon: ICON.beaker, tooltip: "Dam safety inspection, spillway hydraulic analysis, and embankment stabilization design coordinated through state dam-safety permitting." },
    ],
    certs: ["PE — 13 States", "VOSB", "ASCE", "ASDSO", "NHI / FHWA", "ISO 9001", "QA/QC", "NBIS"],
    projectSlugs: ["port-newark-container-terminal", "greenwood-lake-dam-rehabilitation", "delaware-river-bridge-inspection"],
    projectsHead: { eyebrow: "Recent Work", h2: "Design Grounded in Field Reality" },
    intro: {
      eyebrow: "Overview",
      h2: "Engineering That Knows How It Gets Built",
      body: [
        "Coastal Engineering Group is a marine and coastal engineering firm serving the U.S. East Coast. We provide PE-stamped structural design, condition assessment, and rehabilitation engineering for piers, wharfs, bulkheads, seawalls, bridges, and coastal resilience infrastructure.",
        "Because our engineers work alongside the crews who build the work, our drawings reflect what can actually be constructed in the water column — not just what's theoretically sound. From above- and below-water condition assessment through PE-stamped construction documents, we deliver design grounded in field reality and ready to procure.",
      ],
    },
    whereCopy: "Coastal Engineering Group delivers PE-stamped marine and coastal engineering across the Eastern Seaboard. Our Professional Engineers are licensed in:",
    faqs: [
      { q: "What does a marine engineering firm do?", a: "A marine engineering firm designs and assesses waterfront structures — piers, wharfs, bulkheads, seawalls, and bridge substructures — and produces PE-stamped construction documents. Coastal Engineering Group pairs that design work with in-house self-perform construction." },
      { q: "Are your engineering deliverables PE-stamped?", a: "Yes. Drawings and reports are signed and sealed by licensed Professional Engineers, with PE registration across the Eastern Seaboard." },
      { q: "Can you both design and build a marine project?", a: "Yes. Because our engineers work alongside our construction crews, we can assess the structure, design the fix, and build it — a continuous chain of accountability from inspection to as-built." },
      { q: "What engineering services do you provide?", a: "Structural design, above- and below-water condition assessment, rehabilitation design, permitting support, coastal resilience planning, and dam safety and spillway engineering." },
    ],
    cta: { h2: "Need PE-Stamped Marine Engineering?", lede: "Licensed in 13 states, with self-perform crews to build what we design. Tell us your project and we'll respond within 24 hours.", trust: ["PE — 13 States", "VOSB", "ASCE", "ASDSO", "ISO 9001"] },
  },

  dredging: {
    page: "dredging",
    heroImg: "/assets/dredging.jpg",
    eyebrow: "Services / Dredging",
    h1: ["Precision Dredging", "& Sediment Management."],
    lede: "Mechanical and hydraulic dredging for navigation channels, berths, lake restoration, and beach renourishment — careful, methodical operations that protect sensitive aquatic environments.",
    heroCta: "Request a Bid →",
    stats: [
      { value: "Mechanical & Hydraulic", sub: "The right method for each site" },
      { value: "Environmental QC", sub: "Turbidity monitoring and containment" },
      { value: "Federal Experience", sub: "USACE and navigation-channel work" },
    ],
    why: {
      eyebrow: "The Approach",
      h2: "Move the Sediment. Protect the Water.",
      body: [
        "Dredging done carelessly damages the very environment it's meant to maintain. Our operations are planned around the aquatic ecosystem — controlled placement, turbidity monitoring, and containment that keep impact to a minimum.",
        "Whether it's a maintenance cut on a federal channel or restoration of a recreational lake, we match the method to the site and document conditions throughout.",
      ],
      cards: [
        { title: "Method-Matched", body: "Mechanical for confined or debris-laden sites, hydraulic for volume and distance — selected to fit the project, not the equipment on hand." },
        { title: "Environmentally Careful", body: "Turbidity monitoring, silt curtains, and controlled dredge-and-place methods protect sensitive habitat and keep regulators satisfied." },
      ],
    },
    servicesHead: { h2: "Dredging & Debris Removal", sub: "Hover any capability to see typical scope and applications." },
    services: [
      { title: "Maintenance Dredging", desc: "Channels & berths", icon: ICON.waves, tooltip: "Restoration of authorized depths in navigation channels, berths, and marina basins. Hydrographic pre- and post-survey with documented quantities." },
      { title: "Capital Dredging", desc: "New depth & widening", icon: ICON.layers, tooltip: "New-depth and channel-widening dredging for capital improvement projects, including hard-material removal and shoreline development support." },
      { title: "Environmental Dredging", desc: "Contaminated sediment", icon: ICON.shield, tooltip: "Precision removal of contaminated sediment with containment, turbidity control, and dewatering. Coordinated disposal to permitted facilities." },
      { title: "Beach Renourishment", desc: "Sediment placement", icon: ICON.map, tooltip: "Sand recovery and placement for beach renourishment and dune restoration, with grain-size matching and survey-verified placement volumes." },
      { title: "Debris Removal", desc: "Obstructions & wreckage", icon: ICON.wrench, tooltip: "Removal of submerged debris, obstructions, and wreckage from channels and berths. Diver-assisted rigging and crane-barge recovery." },
      { title: "Lake & Pond Restoration", desc: "Sediment & dredge spoil", icon: ICON.beaker, tooltip: "Restoration dredging for recreational lakes and ponds — sediment removal, dredge-spoil management, and aquatic-environment protection." },
    ],
    certs: ["VOSB", "USACE", "EM385", "OSHA 10/30", "Environmental Compliance", "Turbidity Monitoring", "Hydrographic Survey"],
    projectSlugs: ["freshwater-utility-cable-relocation", "greenwood-lake-dam-rehabilitation", "atlantic-shores-offshore-wind"],
    projectsHead: { eyebrow: "Recent Work", h2: "Methodical, Documented, Protective" },
    intro: {
      eyebrow: "Overview",
      h2: "Precision Dredging & Sediment Management",
      body: [
        "Coastal Engineering Group provides mechanical and hydraulic dredging and sediment management across the U.S. East Coast — restoring navigation channels and berths, dredging contaminated sediment, renourishing beaches, removing debris, and restoring lakes and ponds.",
        "Dredging done carelessly damages the very environment it's meant to maintain. We plan operations around the aquatic ecosystem — controlled placement, turbidity monitoring, and containment that keep impact to a minimum — and document conditions throughout with hydrographic pre- and post-surveys.",
      ],
    },
    whereCopy: "Coastal Engineering Group performs dredging and sediment work for federal, state, and commercial clients across the Eastern Seaboard. Our Professional Engineers are licensed in:",
    faqs: [
      { q: "What kinds of dredging does Coastal Engineering Group perform?", a: "Maintenance and capital dredging of channels and berths, environmental dredging of contaminated sediment, beach renourishment, debris removal, and lake and pond restoration — using mechanical or hydraulic methods matched to the site." },
      { q: "How do you protect the environment during dredging?", a: "Our operations use turbidity monitoring, silt curtains, and controlled dredge-and-place methods, with disposal coordinated to permitted facilities, to keep impact on habitat and water quality to a minimum." },
      { q: "Do you handle federal navigation-channel dredging?", a: "Yes — we have federal navigation and USACE channel experience, with hydrographic pre- and post-surveys documenting authorized depths and quantities." },
      { q: "What areas does your dredging service cover?", a: "Federal, state, and commercial waterways across the Eastern Seaboard, from the Mid-Atlantic to the Southeast." },
    ],
    cta: { h2: "Have a Dredging or Sediment Project?", lede: "Mechanical and hydraulic capability with environmental QC built in. Tell us your scope and we'll respond within 24 hours.", trust: ["VOSB", "USACE", "EM385", "Environmental QC", "100% Safety Record"] },
  },

  "marine-services": {
    page: "marine-services",
    heroImg: "/assets/marine-services.jpg",
    eyebrow: "Services / Marine Services",
    h1: ["Marine Equipment", "& Vessel Support."],
    lede: "Tugs, barges, and crane rentals supporting our own projects and third-party marine contractors up and down the East Coast — full marine logistics capability, when and where you need it.",
    heroCta: "Request Equipment →",
    stats: [
      { value: "Tugs & Barges", sub: "Owned fleet, ready to mobilize" },
      { value: "Crane Support", sub: "Crane barges for marine lifts" },
      { value: "East Coast", sub: "Mobilization up and down the seaboard" },
    ],
    why: {
      eyebrow: "The Capability",
      h2: "The Fleet Behind the Work.",
      body: [
        "Marine construction is only as reliable as the equipment supporting it. We own and operate the tugs, barges, and crane platforms our projects depend on — which means schedule control instead of scrambling for third-party charters.",
        "That same fleet is available to other marine contractors who need vessel support, crane barges, or marine logistics for their own work.",
      ],
      cards: [
        { title: "Schedule Control", body: "Owning the fleet means our marine support moves on our timeline — no waiting on third-party charter availability or weather-window conflicts." },
        { title: "Available to Others", body: "Contractors without their own marine assets can charter our tugs, barges, and crane platforms with experienced captains and crews." },
      ],
    },
    servicesHead: { h2: "Marine Services & Equipment", sub: "Hover any capability to see typical scope and applications." },
    services: [
      { title: "Tugboat Services", desc: "Towing & positioning", icon: ICON.ship, tooltip: "Tug support for towing, positioning, and escort of barges and marine vessels. Experienced captains coordinating directly with project operations and port authorities." },
      { title: "Deck Barges", desc: "Material & equipment", icon: ICON.layers, tooltip: "Deck barges for transport and staging of materials, equipment, and crews. Stable working platforms for over-water construction and inspection." },
      { title: "Crane Barges", desc: "Marine lifts", icon: ICON.anchor, tooltip: "Crane barge platforms for marine lifts — pile handling, precast placement, debris recovery, and heavy rigging over the water." },
      { title: "Equipment Rental", desc: "Marine plant", icon: ICON.truck, tooltip: "Rental of marine plant and equipment to support construction and inspection operations, with or without crew, on East Coast projects." },
      { title: "Marine Logistics", desc: "Port coordination", icon: ICON.map, tooltip: "Marine logistics management — port coordination, mobilization planning, vessel scheduling, and weather-window sequencing for complex over-water operations." },
      { title: "ROV Support", desc: "Vessel-based inspection", icon: ICON.beaker, tooltip: "Vessel-based ROV deployment for inspection of areas inaccessible to divers, integrated with our marine support platforms." },
    ],
    certs: ["VOSB", "USCG", "EM385", "OSHA 10/30", "Licensed Captains", "Marine Insurance"],
    projectSlugs: ["atlantic-shores-offshore-wind", "freshwater-utility-cable-relocation", "mayport-naval-station-wharf-repair"],
    projectsHead: { eyebrow: "Recent Work", h2: "Marine Support That Keeps Schedule" },
    intro: {
      eyebrow: "Overview",
      h2: "The Fleet Behind the Work",
      body: [
        "Coastal Engineering Group owns and operates the marine equipment its projects depend on — tugs, deck barges, crane barges, and supporting plant — and makes that fleet available to other marine contractors up and down the U.S. East Coast.",
        "Marine construction is only as reliable as the equipment supporting it. Owning the fleet means schedule control instead of scrambling for third-party charters, and experienced licensed captains who coordinate directly with project operations, port authorities, and weather windows.",
      ],
    },
    whereCopy: "Coastal Engineering Group mobilizes marine equipment and vessel support up and down the U.S. East Coast. Our Professional Engineers are licensed in:",
    faqs: [
      { q: "What marine services and equipment do you provide?", a: "Tugboat services, deck barges, crane barges, marine equipment rental, marine logistics and port coordination, and vessel-based ROV support along the East Coast." },
      { q: "Can other contractors charter your marine equipment?", a: "Yes. Contractors without their own marine assets can charter our tugs, barges, and crane platforms — with experienced, licensed captains and crews available." },
      { q: "Do you own your marine fleet?", a: "Yes. Owning and operating the fleet means our marine support moves on our schedule rather than waiting on third-party charter availability." },
      { q: "Where do you provide marine support?", a: "Up and down the U.S. East Coast, with mobilization across the Eastern Seaboard." },
    ],
    cta: { h2: "Need Tugs, Barges, or Crane Support?", lede: "Owned fleet, licensed captains, East Coast mobilization. Tell us your project and we'll respond within 24 hours.", trust: ["VOSB", "USCG", "Licensed Captains", "EM385", "100% Safety Record"] },
  },
};

// ─── Tooltip-enabled service card (mirrors the diving page) ───────────────────
function SvcCard({ svc }) {
  const [open, setOpen] = useSS(false);
  const ref = useSR(null);
  useSE(() => {
    if (!open) return;
    function handler(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  return (
    <div
      ref={ref}
      className={`div-service-card ${open ? "is-active" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      role="button"
      aria-expanded={open}
    >
      <div className="div-service-icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d={svc.icon} />
        </svg>
      </div>
      <div className="div-service-title">{svc.title}</div>
      <div className="div-service-desc">{svc.desc}</div>
      <div className="div-tooltip" role="tooltip" aria-hidden={!open}>
        <p>{svc.tooltip}</p>
      </div>
    </div>
  );
}

function SvcHero({ d }) {
  return (
    <section className="div-hero svc-hero">
      <div className="svc-hero-photo" aria-hidden="true" style={{ backgroundImage: `url('${d.heroImg}')` }} />
      <div className="ceg-container">
        <div className="div-hero-inner">
          <div className="ceg-eyebrow fed-eyebrow">
            <span className="ceg-eyebrow-mark" />
            <span>{d.eyebrow}</span>
          </div>
          <h1 className="div-hero-h1">{d.h1[0]}<br />{d.h1[1]}</h1>
          <p className="div-hero-lede">{d.lede}</p>
          <a href="/request-a-bid" className="fed-btn fed-btn-primary">{d.heroCta}</a>
        </div>
      </div>
    </section>
  );
}

function SvcStatBand({ stats }) {
  return (
    <div className="div-stat-band">
      <div className="ceg-container">
        <div className="div-stat-band-inner">
          {stats.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="div-stat-band-divider" aria-hidden="true" />}
              <div className="div-stat-band-item">
                <span className="div-stat-band-value">{s.value}</span>
                <span className="div-stat-band-sub">{s.sub}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function SvcWhy({ why }) {
  return (
    <section className="fed-section div-why">
      <div className="ceg-container">
        <div className="div-why-grid">
          <div className="div-why-text">
            <div className="ceg-eyebrow fed-eyebrow-blue">
              <span className="ceg-eyebrow-mark" />
              <span>{why.eyebrow}</span>
            </div>
            <h2 className="fed-h2 fed-dark div-why-h2">{why.h2}</h2>
            {why.body.map((p, i) => (<p key={i} className="div-why-body">{p}</p>))}
          </div>
          <div className="div-why-cards">
            {why.cards.map((c, i) => (
              <div key={i} className="div-stat-card">
                <h3 className="div-stat-card-title">{c.title}</h3>
                <p className="div-stat-card-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SvcServices({ head, services }) {
  return (
    <section className="fed-section div-services">
      <div className="ceg-container">
        <div className="fed-section-head">
          <div className="ceg-eyebrow fed-eyebrow">
            <span className="ceg-eyebrow-mark" />
            <span>What We Do</span>
          </div>
          <h2 className="fed-h2 fed-light">{head.h2}</h2>
          <p className="fed-subhead-light">{head.sub}</p>
        </div>
        <div className="div-services-grid">
          {services.map((svc) => (<SvcCard key={svc.title} svc={svc} />))}
        </div>
      </div>
    </section>
  );
}

function SvcCerts({ certs }) {
  return (
    <div className="div-cert-strip">
      <div className="ceg-container">
        <div className="div-cert-label">Certifications & Qualifications</div>
        <div className="div-cert-pills">
          {certs.map((c) => (<span key={c} className="div-cert-pill">{c}</span>))}
        </div>
      </div>
    </div>
  );
}

// Pulls real projects out of shared data so cards link to genuine case studies.
function SvcProjects({ head, slugs, photo }) {
  const all = (window.CEG_DATA && window.CEG_DATA.PROJECTS) || [];
  const projects = slugs.map((s) => all.find((p) => p.slug === s)).filter(Boolean);
  if (!projects.length) return null;
  return (
    <section id="projects" className="fed-section div-projects">
      {photo && <div className="svc-projects-photo" aria-hidden="true" style={{ backgroundImage: `url('${photo}')` }} />}
      <div className="ceg-container">
        <div className="fed-section-head">
          <div className="ceg-eyebrow fed-eyebrow">
            <span className="ceg-eyebrow-mark" />
            <span>{head.eyebrow}</span>
          </div>
          <h2 className="fed-h2 fed-light">{head.h2}</h2>
        </div>
        <div className="fed-projects-grid">
          {projects.map((p) => (
            <a key={p.slug} href={`/projects/${p.slug}`} className="fed-project-card div-project-card">
              <div className="fed-project-media">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <span className="fed-project-badge">{p.client} · {p.state}</span>
              <h3 className="fed-project-title">{p.title}</h3>
              <p className="fed-project-body">{p.blurb}</p>
              <div className="fed-project-footer">
                <div className="fed-project-tags">
                  <span className="div-project-tag">{p.market}</span>
                  <span className="div-project-tag">{p.tag}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="/projects/featured-work" className="div-view-all">View All Projects →</a>
        </div>
      </div>
    </section>
  );
}

function SvcCTA({ cta }) {
  return (
    <section className="fed-cta">
      <div className="ceg-container">
        <div className="fed-cta-inner">
          <h2 className="fed-cta-h2">{cta.h2}</h2>
          <p className="fed-cta-lede">{cta.lede}</p>
          <div className="fed-cta-btns">
            <a href="/request-a-bid" className="fed-btn fed-btn-white">Start a Project →</a>
            <a href="tel:8453283178" className="fed-btn fed-btn-outline-white">Call 845-328-3178</a>
          </div>
          <div className="fed-cta-trust">
            {cta.trust.map((t, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="fed-dot">·</span>}
                <span>{t}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Overview (crawlable intro prose) ────────────────────────────────────────
function SvcOverview({ intro }) {
  if (!intro) return null;
  return (
    <section className="fed-section svc-overview">
      <div className="ceg-container">
        <div className="svc-prose">
          <div className="ceg-eyebrow fed-eyebrow-blue">
            <span className="ceg-eyebrow-mark" />
            <span>{intro.eyebrow}</span>
          </div>
          <h2 className="fed-h2 fed-dark">{intro.h2}</h2>
          {intro.body.map((p, i) => (<p key={i} className="svc-prose-p">{p}</p>))}
        </div>
      </div>
    </section>
  );
}

// ─── Where We Work (geo relevance) ───────────────────────────────────────────
function SvcWhere({ copy }) {
  const states = (window.CEG_DATA && window.CEG_DATA.LICENSED_STATES) || [];
  if (!copy || !states.length) return null;
  return (
    <section className="fed-section svc-where">
      <div className="ceg-container">
        <div className="fed-section-head">
          <div className="ceg-eyebrow fed-eyebrow-blue">
            <span className="ceg-eyebrow-mark" />
            <span>Where We Work</span>
          </div>
          <h2 className="fed-h2 fed-dark">Licensed Across {states.length} States</h2>
          <p className="fed-subhead-muted">{copy}</p>
        </div>
        <div className="svc-where-grid">
          {states.map((s) => (
            <div key={s.abbr} className="svc-where-item">
              <span className="svc-where-abbr">{s.abbr}</span>
              <span className="svc-where-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ (native accordion, mirrors FAQPage JSON-LD) ─────────────────────────
function SvcFaq({ faqs }) {
  if (!faqs || !faqs.length) return null;
  return (
    <section className="fed-section svc-faq">
      <div className="ceg-container">
        <div className="fed-section-head">
          <div className="ceg-eyebrow fed-eyebrow-blue">
            <span className="ceg-eyebrow-mark" />
            <span>FAQ</span>
          </div>
          <h2 className="fed-h2 fed-dark">Frequently Asked Questions</h2>
        </div>
        <div className="svc-faq-list">
          {faqs.map((f, i) => (
            <details key={i} className="svc-faq-item">
              <summary className="svc-faq-q">{f.q}</summary>
              <p className="svc-faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App Root ────────────────────────────────────────────────────────────────
function ServiceApp() {
  const theme = window.CEG_THEMES.drydock;
  const data = window.CEG_DATA;
  const key = window.__CEG_SERVICE;
  const d = SERVICE_PAGES[key];
  const [mobileOpen, setMobileOpen] = useSS(false);

  useSE(() => {
    document.body.dataset.concept = "drydock";
    document.body.dataset.page = `service-${key || "unknown"}`;
  }, [key]);

  if (!d) {
    return (
      <div className="ceg-app concept-drydock" style={window.applyThemeVars(theme)}>
        <window.UtilityBar theme={theme} data={data} />
        <window.Nav theme={theme} data={data} conceptKey="drydock" onMobileOpen={() => setMobileOpen(true)} />
        <main>
          <section className="fed-section">
            <div className="ceg-container" style={{ padding: "80px 0", textAlign: "center" }}>
              <h1 className="fed-h2 fed-dark">Service not found</h1>
              <p><a href="/" className="div-view-all">Return home →</a></p>
            </div>
          </section>
        </main>
        <window.Footer theme={theme} data={data} />
        <window.MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} data={data} />
      </div>
    );
  }

  return (
    <div className={`ceg-app concept-drydock page-service page-service-${key}`} style={window.applyThemeVars(theme)}>
      <window.UtilityBar theme={theme} data={data} />
      <window.Nav theme={theme} data={data} conceptKey="drydock" onMobileOpen={() => setMobileOpen(true)} />
      <main>
        <SvcHero d={d} />
        <SvcStatBand stats={d.stats} />
        <SvcOverview intro={d.intro} />
        <SvcWhy why={d.why} />
        <SvcServices head={d.servicesHead} services={d.services} />
        <SvcCerts certs={d.certs} />
        <SvcWhere copy={d.whereCopy} />
        <SvcProjects head={d.projectsHead} slugs={d.projectSlugs} photo={d.heroImg} />
        <SvcFaq faqs={d.faqs} />
        <SvcCTA cta={d.cta} />
      </main>
      <window.Footer theme={theme} data={data} />
      <window.MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} data={data} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ServiceApp />);
