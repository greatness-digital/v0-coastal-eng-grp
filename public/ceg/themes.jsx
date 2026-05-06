// Drydock theme — editorial, authoritative, JMT-leaning.
// Serif display + clean sans body. Mega-menus. Stats-led hero.

const THEMES = {
  drydock: {
    name: "Drydock",
    tagline: "Editorial · Authoritative · JMT-leaning",
    description: "Serif display + clean sans body. Mega-menus. Stats-led hero. Denser layout. Slate ink with navy accents.",
    nav: "mega-centered",
    hero: "stats",
    density: "dense",
    colors: {
      bg: "#fbfaf7",
      surface: "#f3f1eb",
      surfaceAlt: "#e9e5db",
      ink: "#161a20",
      inkSoft: "#2e3540",
      inkMute: "#5a6473",
      rule: "#c9c4b5",
      brand: "#13386a",
      brandHi: "#1f4d8a",
      brandSoft: "#dde5f0",
      accent: "#a8421c",     // brick/safety accent — used sparingly
      onBrand: "#ffffff",
      heroOverlay: "linear-gradient(135deg, rgba(19,56,106,0.95) 0%, rgba(19,56,106,0.78) 100%)",
    },
    fonts: {
      display: "'Playfair Display', 'Source Serif 4', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, monospace",
    },
    type: {
      eyebrowSize: "11px",
      eyebrowSpacing: "0.22em",
      h1: "clamp(48px, 6.8vw, 96px)",
      h1Weight: 500,
      h1Lh: 1.0,
      h2: "clamp(34px, 4vw, 56px)",
      h2Weight: 500,
      body: "16px",
      bodyLh: 1.65,
    },
  },
};

window.CEG_THEMES = THEMES;
