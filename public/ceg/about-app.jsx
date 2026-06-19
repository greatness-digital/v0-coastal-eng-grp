// CEG About Page

const { useState: useS, useEffect: useE, useRef: useR } = React;

// ─── About Page Data ─────────────────────────────────────────────────────────
const ABOUT_DATA = {
  hero: {
    eyebrow: "About Coastal Engineering Group",
    headline: "Built on Experience. Driven by Excellence.",
    lede: "For over two decades, Coastal Engineering Group has delivered complex marine construction and underwater infrastructure projects for clients who demand precision, safety, and results."
  },
  story: {
    headline: "Our Story",
    paragraphs: [
      "Coastal Engineering Group was founded with a clear mission: to bring together the best engineering minds and the most skilled dive crews under one roof. What started as a small team of veterans and engineers has grown into a full-service marine construction firm serving clients throughout the Eastern United States.",
      "Our founders recognized that too many marine projects suffered from the disconnect between design and execution. By integrating licensed professional engineers with ADCI-certified commercial divers, we eliminated the gaps that cause delays, cost overruns, and safety incidents.",
      "Today, we operate one of the largest fleets of dive support vessels on the East Coast and maintain offices strategically positioned to serve transportation authorities, port facilities, energy providers, and municipal clients from Maine to Florida."
    ]
  },
  leadership: [
    {
      name: "Michael Harrington",
      title: "Chief Executive Officer",
      image: "/assets/leadership-ceo.jpg",
      bio: "25+ years in marine construction. Former U.S. Navy diving officer. PE licensed in 12 states."
    },
    {
      name: "David Chen",
      title: "Chief Operating Officer",
      image: "/assets/leadership-coo.jpg",
      bio: "Former Army Corps of Engineers. Oversees all field operations and safety programs."
    },
    {
      name: "Sarah Mitchell, PE",
      title: "VP of Engineering",
      image: "/assets/leadership-vp-eng.jpg",
      bio: "Structural engineer specializing in marine infrastructure. 15+ years of bridge and waterfront design."
    },
    {
      name: "James Rodriguez",
      title: "Director of Diving Operations",
      image: "/assets/leadership-dive-ops.jpg",
      bio: "ADCI certified supervisor. 20+ years commercial diving experience. Former Navy diver."
    }
  ],
  veteran: {
    headline: "Veteran-Owned. Mission-Driven.",
    lede: "Coastal Engineering Group is a certified Service-Disabled Veteran-Owned Small Business (SDVOSB). Our military heritage shapes everything we do — from our commitment to safety and discipline to our focus on mission accomplishment.",
    points: [
      "Certified SDVOSB — eligible for federal set-aside contracts",
      "Leadership team includes veterans from Navy, Army, and Coast Guard",
      "Military values of integrity, accountability, and excellence",
      "Proven track record on DoD and federal agency projects"
    ]
  },
  cta: {
    headline: "Ready to discuss your project?",
    lede: "Our team is ready to bring engineering expertise and construction capability to your next marine infrastructure challenge.",
    buttonText: "Start a Conversation",
    buttonHref: "/request-a-bid"
  }
};

// ─── About Hero ──────────────────────────────────────────────────────────────
function AboutHero() {
  return (
    <section className="ceg-about-hero">
      <div className="ceg-container">
        <div className="ceg-about-hero-inner">
          <span className="ceg-eyebrow ceg-eyebrow-accent">{ABOUT_DATA.hero.eyebrow}</span>
          <h1 className="ceg-h1 serif">{ABOUT_DATA.hero.headline}</h1>
          <p className="ceg-about-hero-lede">{ABOUT_DATA.hero.lede}</p>
        </div>
      </div>
      <div className="ceg-about-hero-accent" aria-hidden="true" />
    </section>
  );
}

// ─── At a Glance ───────────────────────────────────────────────────────────────
// Consolidated who / what / where snapshot so a visitor gets the essentials
// without hunting across the Story, Veteran, and Leadership sections. Pulls
// credentials and key stats straight from shared data so they stay in sync.
function AboutGlance() {
  const data = window.CEG_DATA;
  return (
    <section id="glance" className="ceg-section ceg-about-glance">
      <div className="ceg-container">
        <div className="ceg-about-glance-grid">
          <div className="ceg-about-glance-col">
            <span className="ceg-about-glance-k">What we do</span>
            <p>
              Self-perform marine construction, engineering, dredging, and marine
              services — with commercial diving as a specialized in-house capability,
              all under one accountable team.
            </p>
          </div>
          <div className="ceg-about-glance-col">
            <span className="ceg-about-glance-k">Where we work</span>
            <p>
              Federal, state, energy, and commercial waterfronts from the
              Mid-Atlantic up the Eastern Seaboard — with professional engineers
              licensed across 13 states.
            </p>
          </div>
          <div className="ceg-about-glance-col">
            <span className="ceg-about-glance-k">Credentials</span>
            <div className="ceg-about-glance-certs">
              {data.CERTS.map((c) => (
                <span key={c.abbr} className="ceg-about-cert" title={c.full}>{c.abbr}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="ceg-about-glance-stats">
          {data.STATS.map((s, i) => (
            <div key={i} className="ceg-about-glance-stat">
              <span className="ceg-about-glance-stat-v">{s.value}</span>
              <span className="ceg-about-glance-stat-l">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Our Story ───────────────────────────────────────────────────────────────
function OurStory() {
  return (
    <section id="story" className="ceg-section ceg-about-story">
      <div className="ceg-container">
        <div className="ceg-about-story-layout">
          <div className="ceg-about-story-head">
            <div className="ceg-eyebrow">
              <span className="ceg-eyebrow-mark" />
              <span>Who We Are</span>
            </div>
            <h2 className="ceg-h2">{ABOUT_DATA.story.headline}</h2>
          </div>
          <div className="ceg-about-story-body">
            {ABOUT_DATA.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Leadership ──────────────────────────────────────────────────────────────
function Leadership() {
  return (
    <section id="leadership" className="ceg-section ceg-about-leadership">
      <div className="ceg-container">
        <div className="ceg-section-head">
          <div className="ceg-eyebrow">
            <span className="ceg-eyebrow-mark" />
            <span>Our Team</span>
          </div>
          <h2 className="ceg-h2">Leadership</h2>
          <p className="ceg-section-lede">
            Experienced professionals with deep expertise in marine construction, engineering, and commercial diving operations.
          </p>
        </div>
        <div className="ceg-leadership-grid">
          {ABOUT_DATA.leadership.map((leader, i) => (
            <div key={i} className="ceg-leader-card">
              <div className="ceg-leader-photo">
                <img src={leader.image} alt={leader.name} loading="lazy" />
              </div>
              <div className="ceg-leader-info">
                <h3 className="ceg-leader-name">{leader.name}</h3>
                <span className="ceg-leader-title">{leader.title}</span>
                <p className="ceg-leader-bio">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Veteran Owned ───────────────────────────────────────────────────────────
function VeteranOwned() {
  return (
    <section id="veteran-owned" className="ceg-section ceg-about-veteran">
      <div className="ceg-container">
        <div className="ceg-about-veteran-layout">
          <div className="ceg-about-veteran-content">
            <span className="ceg-eyebrow ceg-eyebrow-accent">SDVOSB Certified</span>
            <h2 className="ceg-h2 on-light">{ABOUT_DATA.veteran.headline}</h2>
            <p className="ceg-about-veteran-lede">{ABOUT_DATA.veteran.lede}</p>
            <ul className="ceg-about-veteran-points">
              {ABOUT_DATA.veteran.points.map((point, i) => (
                <li key={i}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ceg-about-veteran-badge">
            <div className="ceg-vosb-badge-large">
              <div className="ceg-vosb-badge-inner">
                <span className="ceg-vosb-badge-label">Certified</span>
                <span className="ceg-vosb-badge-title">SDVOSB</span>
                <span className="ceg-vosb-badge-sub">Service-Disabled Veteran-Owned Small Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ─────────────────────────────────────────────────────────────
function AboutCTA() {
  return (
    <section id="about-cta" className="ceg-section ceg-about-cta">
      <div className="ceg-container">
        <div className="ceg-about-cta-inner">
          <h2 className="ceg-h2">{ABOUT_DATA.cta.headline}</h2>
          <p className="ceg-about-cta-lede">{ABOUT_DATA.cta.lede}</p>
          <a href={ABOUT_DATA.cta.buttonHref} className="ceg-btn ceg-btn-primary ceg-btn-lg">
            {ABOUT_DATA.cta.buttonText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.333 8h9.334M9 4.667L12.667 8 9 11.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── About App ───────────────────────────────────────────────────────────────
function AboutApp() {
  const theme = window.CEG_THEMES.drydock;
  const data = window.CEG_DATA;
  const [mobileOpen, setMobileOpen] = useS(false);

  useE(() => {
    document.body.dataset.concept = "drydock";
    document.body.dataset.page = "about";
  }, []);

  const themeStyle = window.applyThemeVars(theme);

  return (
    <div className="ceg-app concept-drydock page-about" style={themeStyle}>
      <window.UtilityBar theme={theme} data={data} />
      <window.Nav theme={theme} data={data} conceptKey="drydock" onMobileOpen={() => setMobileOpen(true)} />
      <main>
        <AboutHero />
        <AboutGlance />
        <OurStory />
        <VeteranOwned />
        <Leadership />
        <AboutCTA />
      </main>
      <window.Footer theme={theme} data={data} />
      <window.MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} data={data} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AboutApp />);
