import type { Metadata } from "next"

// NOTE: confirm the canonical production domain — using the email domain for now.
const SITE = "https://www.coastalengineeringgroup.com"
const ORG_ID = `${SITE}/#organization`
const ORG_NAME = "Coastal Engineering Group"
const PHONE = "+1-845-328-3178"

// Mirrors LICENSED_STATES in /public/ceg/data.jsx — used for schema areaServed.
// Keep the two lists in sync. (Count pending client confirmation: 12 vs 13 / Ohio.)
const STATES = [
  "Maine", "New York", "Connecticut", "New Jersey", "Pennsylvania", "Delaware",
  "Maryland", "Virginia", "North Carolina", "South Carolina", "Georgia", "Florida", "Ohio",
]

type Faq = { q: string; a: string }

type ServiceSeo = {
  slug: string
  name: string
  serviceType: string
  metaTitle: string
  metaDescription: string
  schemaDescription: string
  faqs: Faq[]
}

export const SERVICE_SEO: Record<string, ServiceSeo> = {
  construction: {
    slug: "construction",
    name: "Marine Construction",
    serviceType: "Marine Construction",
    metaTitle: "Marine Construction Contractor | Eastern U.S. | Coastal Engineering Group",
    metaDescription:
      "Veteran-owned heavy marine construction — pile driving, seawalls & bulkheads, piers, bridge substructures, and underwater concrete. Self-performed with PE oversight across the Eastern Seaboard.",
    schemaDescription:
      "Heavy civil marine construction over and below the waterline — pile driving, bulkheads and seawalls, pier and wharf construction, bridge substructures, underwater concrete, and cofferdams. Self-performed with in-house Professional Engineer oversight for federal, state, energy, and commercial waterfronts on the U.S. East Coast.",
    faqs: [
      { q: "What does a marine construction contractor do?", a: "A marine construction contractor builds and rehabilitates structures over and below the waterline — piers, wharfs, seawalls, bulkheads, bridge substructures, and underwater concrete. Coastal Engineering Group self-performs this work with its own crews and equipment, directed by licensed Professional Engineers." },
      { q: "What areas does Coastal Engineering Group serve?", a: "Coastal Engineering Group works federal, state, energy, and commercial waterfronts from the Mid-Atlantic up the Eastern Seaboard, with Professional Engineers licensed across the East Coast from Maine to Florida." },
      { q: "Do you self-perform marine construction or subcontract it?", a: "We self-perform our core marine construction with our own crews, equipment, and PE oversight — eliminating the handoffs, change orders, and split accountability of multi-prime delivery." },
      { q: "What types of marine structures do you build?", a: "Pile foundations, steel and concrete bulkheads and seawalls, piers and wharfs, bridge substructures, underwater structural concrete and pile jackets, and cofferdams for dry below-waterline work." },
      { q: "Are you qualified for federal marine construction work?", a: "Yes. Coastal Engineering Group is a Veteran-Owned Small Business with USACE CQM and EM385 compliance, and a track record on NAVFAC and USACE waterfront projects." },
    ],
  },
  engineering: {
    slug: "engineering",
    name: "Marine Engineering",
    serviceType: "Marine Engineering",
    metaTitle: "Marine Engineering Firm | Waterfront PE Design | Coastal Engineering Group",
    metaDescription:
      "PE-stamped marine and coastal engineering — structural design, condition assessment, rehabilitation, permitting, and resilience planning. Licensed across the Eastern Seaboard.",
    schemaDescription:
      "Professional marine and coastal engineering — structural design of piers, wharfs, bulkheads and seawalls, above- and below-water condition assessment, rehabilitation design, permitting support, resilience planning, and dam and spillway engineering. PE-stamped deliverables backed by self-perform construction crews.",
    faqs: [
      { q: "What does a marine engineering firm do?", a: "A marine engineering firm designs and assesses waterfront structures — piers, wharfs, bulkheads, seawalls, and bridge substructures — and produces PE-stamped construction documents. Coastal Engineering Group pairs that design work with in-house self-perform construction." },
      { q: "Are your engineering deliverables PE-stamped?", a: "Yes. Drawings and reports are signed and sealed by licensed Professional Engineers, with PE registration across the Eastern Seaboard." },
      { q: "Can you both design and build a marine project?", a: "Yes. Because our engineers work alongside our construction crews, we can assess the structure, design the fix, and build it — a continuous chain of accountability from inspection to as-built." },
      { q: "What engineering services do you provide?", a: "Structural design, above- and below-water condition assessment, rehabilitation design, permitting support, coastal resilience planning, and dam safety and spillway engineering." },
    ],
  },
  dredging: {
    slug: "dredging",
    name: "Dredging",
    serviceType: "Dredging",
    metaTitle: "Dredging Contractor | Channels & Sediment | Coastal Engineering Group",
    metaDescription:
      "Mechanical and hydraulic dredging for navigation channels, berths, lake restoration, and beach renourishment — with environmental QC and turbidity monitoring built in. Eastern Seaboard.",
    schemaDescription:
      "Mechanical and hydraulic dredging and sediment management — maintenance and capital dredging of navigation channels and berths, environmental (contaminated-sediment) dredging, beach renourishment, debris removal, and lake and pond restoration, with turbidity monitoring and containment to protect sensitive aquatic environments.",
    faqs: [
      { q: "What kinds of dredging does Coastal Engineering Group perform?", a: "Maintenance and capital dredging of channels and berths, environmental dredging of contaminated sediment, beach renourishment, debris removal, and lake and pond restoration — using mechanical or hydraulic methods matched to the site." },
      { q: "How do you protect the environment during dredging?", a: "Our operations use turbidity monitoring, silt curtains, and controlled dredge-and-place methods, with disposal coordinated to permitted facilities, to keep impact on habitat and water quality to a minimum." },
      { q: "Do you handle federal navigation-channel dredging?", a: "Yes — we have federal navigation and USACE channel experience, with hydrographic pre- and post-surveys documenting authorized depths and quantities." },
      { q: "What areas does your dredging service cover?", a: "Federal, state, and commercial waterways across the Eastern Seaboard, from the Mid-Atlantic to the Southeast." },
    ],
  },
  "marine-services": {
    slug: "marine-services",
    name: "Marine Services",
    serviceType: "Marine Equipment and Vessel Support",
    metaTitle: "Marine Services & Equipment | Tugs, Barges, Cranes | Coastal Engineering Group",
    metaDescription:
      "Owned tugs, deck and crane barges, equipment rental, and marine logistics supporting our projects and third-party contractors up and down the East Coast.",
    schemaDescription:
      "Marine equipment and vessel support — tugboat services, deck barges, crane barges, marine equipment rental, marine logistics and port coordination, and vessel-based ROV support. An owned fleet that supports both Coastal Engineering Group projects and third-party marine contractors along the U.S. East Coast.",
    faqs: [
      { q: "What marine services and equipment do you provide?", a: "Tugboat services, deck barges, crane barges, marine equipment rental, marine logistics and port coordination, and vessel-based ROV support along the East Coast." },
      { q: "Can other contractors charter your marine equipment?", a: "Yes. Contractors without their own marine assets can charter our tugs, barges, and crane platforms — with experienced, licensed captains and crews available." },
      { q: "Do you own your marine fleet?", a: "Yes. Owning and operating the fleet means our marine support moves on our schedule rather than waiting on third-party charter availability." },
      { q: "Where do you provide marine support?", a: "Up and down the U.S. East Coast, with mobilization across the Eastern Seaboard." },
    ],
  },
}

export function serviceMetadata(key: string): Metadata {
  const s = SERVICE_SEO[key]
  if (!s) return {}
  const url = `${SITE}/services/${s.slug}`
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url,
      siteName: ORG_NAME,
      type: "website",
    },
  }
}

export function serviceJsonLd(key: string): object | null {
  const s = SERVICE_SEO[key]
  if (!s) return null
  const url = `${SITE}/services/${s.slug}`
  const areaServed = STATES.map((name) => ({ "@type": "State", name }))
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: ORG_NAME,
        url: SITE,
        telephone: PHONE,
        areaServed,
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: s.serviceType,
        description: s.schemaDescription,
        url,
        provider: { "@id": ORG_ID },
        areaServed,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: s.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: s.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }
}
