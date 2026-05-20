// Three distinct concepts. Each is a complete look — color, type, density, hero treatment.
// Not just color swaps; structural choices change too (handled in components via concept key).

const THEMES = {
  // ────────────────────────────────────────────────────────────
  // CONCEPT A — "TIDEMARK"
  // MSI-leaning. Clean, restrained, deep-navy professional.
  // Top nav with simple dropdowns. Photo-led hero with confident headline.
  // Optimist's read: looks like a 100-year firm.
  // ────────────────────────────────────────────────────────────
  tidemark: {
    name: "Tidemark",
    tagline: "Clean · Professional · MSI-leaning",
    description: "Deep navy and white. Restrained type. Square corners. Photo-led hero. Top-line nav with simple dropdowns.",
    nav: "simple",   // simple | mega | rail
    hero: "photo",   // photo | split | type
    density: "comfortable",
    colors: {
      bg: "#ffffff",
      surface: "#f5f7fa",
      surfaceAlt: "#eef1f5",
      ink: "#0a1828",
      inkSoft: "#3a4a5e",
      inkMute: "#6b7a8c",
      rule: "#d9dfe6",
      brand: "#0a2540",      // deep navy
      brandHi: "#13386a",
      brandSoft: "#e8eef5",
      accent: "#0a2540",     // monochrome accent
      onBrand: "#ffffff",
      heroOverlay: "linear-gradient(180deg, rgba(10,37,64,0.55) 0%, rgba(10,37,64,0.95) 100%)",
    },
    fonts: {
      display: "'Inter', system-ui, sans-serif",
      body: "'Poppins', system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, monospace",
    },
    type: {
      eyebrowSize: "12px",
      eyebrowSpacing: "0.18em",
      h1: "clamp(38px, 4.6vw, 64px)",
      h1Weight: 600,
      h1Lh: 1.08,
      h2: "clamp(32px, 3.6vw, 52px)",
      h2Weight: 600,
      body: "16px",
      bodyLh: 1.6,
    },
  },

  // ────────────────────────────────────────────────────────────
  // CONCEPT B — "DRYDOCK"
  // JMT-leaning editorial. Mega-menu, denser, more structured.
  // Serif headlines + clean sans body. Stats up front.
  // Reads like an established A/E firm with deep technical credibility.
  // ────────────────────────────────────────────────────────────
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

  // ────────────────────────────────────────────────────────────
  // CONCEPT C — "BLUEPRINT"
  // Bold engineering / industrial. Dark-mode hero, technical accents,
  // monospaced metadata, blueprint-grid background motifs.
  // Differentiates Coastal as the technically-credible specialist.
  // ────────────────────────────────────────────────────────────
  blueprint: {
    name: "Blueprint",
    tagline: "Industrial · Technical · Differentiated",
    description: "Dark-mode hero with blueprint-grid motifs. Mono metadata. Big condensed headlines. Square chips. Engineering swagger.",
    nav: "simple",
    hero: "type",
    density: "dramatic",
    colors: {
      bg: "#ffffff",
      surface: "#f4f5f7",
      surfaceAlt: "#e8eaee",
      ink: "#0b0f15",
      inkSoft: "#2a313c",
      inkMute: "#6c7480",
      rule: "#d6dae0",
      brand: "#0a2540",
      brandHi: "#0a2540",
      brandSoft: "#e6ecf3",
      accent: "#f0a020",     // construction-safety amber
      onBrand: "#ffffff",
      heroBg: "#0a1828",
      heroInk: "#ffffff",
      heroOverlay: "linear-gradient(180deg, rgba(10,24,40,0.55) 0%, rgba(10,24,40,0.95) 100%)",
    },
    fonts: {
      display: "'Archivo', 'Inter Tight', system-ui, sans-serif",
      displayCond: "'Archivo Narrow', 'Inter Tight', system-ui, sans-serif",
      body: "'IBM Plex Sans', system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, monospace",
    },
    type: {
      eyebrowSize: "11px",
      eyebrowSpacing: "0.28em",
      h1: "clamp(56px, 8vw, 132px)",
      h1Weight: 800,
      h1Lh: 0.95,
      h2: "clamp(36px, 4.4vw, 64px)",
      h2Weight: 700,
      body: "16px",
      bodyLh: 1.6,
    },
  },
};

window.CEG_THEMES = THEMES;
