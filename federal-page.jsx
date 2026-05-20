// Federal market page — Coastal Engineering Group
// Tidemark concept: Inter display, Poppins body, deep navy, square corners.

// ─── Federal Hero ─────────────────────────────────────────────────────────────
function FederalHero({ data }) {
  const agencies = [
    "NAVFAC Mid-Atlantic", "NAVFAC Southeast", "USACE Philadelphia District",
    "U.S. Coast Guard", "Port Authority NY/NJ",
  ];
  return (
    <section className="ceg-hero hero-photo">
      <div className="ceg-hero-media">
        <div className="ceg-photo">
          <img
            src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?auto=format&fit=crop&w=1800&q=80"
            alt="U.S. Navy vessel moored at active berthing pier"
            className="ceg-photo-img"
            loading="eager"
          />
        </div>
        <div className="ceg-hero-scrim" />
      </div>
      <div className="ceg-container">
        <div className="ceg-hero-inner">
          <Eyebrow mark>Federal Markets · NAVFAC · USACE · USCG</Eyebrow>
          <h1 className="ceg-h1">
            Proven performance on<br />
            the nation's most demanding<br />
            waterfront contracts.
          </h1>
          <p className="ceg-hero-lede">
            From naval pier rehabilitation to deep-channel dredging, we self-perform
            the full scope of federal marine construction — under one accountable,
            veteran-owned prime.
          </p>
          <div className="ceg-hero-ctas">
            <Btn href="#past-performance" variant="primary">View past performance</Btn>
            <Btn href="#contact" variant="ghost">Request a bid</Btn>
          </div>
        </div>
      </div>
      <div className="ceg-hero-foot">
        <div className="ceg-container ceg-hero-foot-row">
          <span className="ceg-hero-foot-eyebrow">Agency clients</span>
          <div className="ceg-hero-foot-clients">
            {agencies.map((a) => (
              <span key={a} className="ceg-hero-foot-client">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Quick-facts callout ──────────────────────────────────────────────────────
function FederalFacts() {
  const facts = [
    { label: "Designation",          value: "VOSB",      sub: "SBA & VA recognized" },
    { label: "NAVFAC status",        value: "Pre-Qual",  sub: "Multiple IDIQs" },
    { label: "Federal projects",     value: "47+",       sub: "Completed & active" },
    { label: "Largest single award", value: "$28M",      sub: "NAVFAC Mid-Atlantic" },
    { label: "Emergency response",   value: "24 / 7",    sub: "365 days / year" },
    { label: "Years on the water",   value: "27",        sub: "Est. 1998" },
  ];
  return (
    <div className="fed-facts" aria-label="Key qualifications at a glance">
      <div className="ceg-container fed-facts-grid">
        {facts.map((f) => (
          <div key={f.label} className="fed-fact">
            <div className="fed-fact-label">{f.label}</div>
            <div className="fed-fact-value">{f.value}</div>
            <div className="fed-fact-sub">{f.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Intro section ────────────────────────────────────────────────────────────
function FederalIntro() {
  const points = [
    "Self-performance across diving, construction, dredging, and marine services",
    "VOSB set-aside eligibility for NAVFAC and USACE opportunities",
    "Bonded and insured for federal prime contract delivery",
    "24/7 emergency response for critical naval and port infrastructure",
  ];
  return (
    <section className="ceg-section fed-intro">
      <div className="ceg-container fed-intro-grid">
        <div className="fed-intro-text">
          <Eyebrow mark>How we operate</Eyebrow>
          <h2 className="ceg-h2">One company.<br />Every phase of federal marine work.</h2>
          <p className="ceg-section-lede">
            The federal waterfront doesn't allow for split accountability. Our five
            integrated divisions let us self-perform the full scope — eliminating handoffs,
            schedule risk, and the coordination overhead of multi-prime delivery.
          </p>
          <ul className="fed-intro-points">
            {points.map((p) => (
              <li key={p}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7.5l3 3L12 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="fed-callout">
            <div className="fed-callout-label">Deep dive</div>
            <div className="fed-callout-h">How federal set-asides work for VOSB contractors</div>
            <p className="fed-callout-body">
              VOSB status lets us compete on contracts reserved exclusively for veteran-owned
              firms — and to team as a preferred partner on large NAVFAC procurements.
              <a href="#certifications"> See our certifications →</a>
            </p>
          </div>

          <Btn href="#contact" variant="primary">Discuss your project</Btn>
        </div>
        <div className="fed-intro-photo">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Marine construction crew operating crane on federal pier project"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Pillars ──────────────────────────────────────────────────────────────────
function FederalPillars() {
  const pillars = [
    {
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
      alt: "Bridge substructure engineering and assessment",
      eyebrow: "Pre-qualification & teaming",
      h: "NAVFAC and USACE ready on day one.",
      body: "We hold current pre-qualifications with NAVFAC and USACE districts across the Mid-Atlantic and Southeast. Our VOSB status enables direct teaming arrangements and set-aside eligibility on VA-eligible work.",
    },
    {
      img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=900&q=80",
      alt: "ADCI-certified commercial diver performing underwater inspection",
      eyebrow: "Self-performance",
      h: "We own the equipment. We run the crews.",
      body: "No subcontracted diving, no third-party barge charters, no outsourced pile driving. Every scope item is self-performed by our five divisions, with company-owned cranes, barges, and dive systems on every job.",
    },
    {
      img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=900&q=80",
      alt: "Active naval pier undergoing rehabilitation work",
      eyebrow: "Mission-critical delivery",
      h: "Operational around your schedule, not ours.",
      body: "Naval and port infrastructure stays active while we work. Sequenced work windows, advance coordination with host activities, and no single points of failure keep federal missions uninterrupted.",
    },
  ];
  return (
    <section className="ceg-section fed-pillars">
      <div className="ceg-container">
        <div className="ceg-section-head">
          <Eyebrow mark>What sets us apart</Eyebrow>
          <h2 className="ceg-h2">Built for the demands of federal contracting.</h2>
        </div>
        <div className="fed-pillars-grid">
          {pillars.map((p) => (
            <article key={p.h} className="fed-pillar">
              <div className="fed-pillar-img">
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
              <div className="fed-pillar-body">
                <Eyebrow>{p.eyebrow}</Eyebrow>
                <h3 className="fed-pillar-h">{p.h}</h3>
                <p className="fed-pillar-p">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Past performance ─────────────────────────────────────────────────────────
function FederalProjects({ data }) {
  const projects = data.PROJECTS.filter((p) => p.market === "Federal");

  const photoFor = (p) =>
    p.tag === "Diving"         ? "diver"  :
    p.tag === "Dredging"       ? "dredge" :
    p.tag === "Marine Services"? "barge"  :
    p.tag === "Engineering"    ? "bridge" : "seawall";

  return (
    <section id="past-performance" className="ceg-section fed-projects">
      <div className="ceg-container">
        <div className="ceg-section-head ceg-section-head-row">
          <div>
            <Eyebrow mark>Past performance</Eyebrow>
            <h2 className="ceg-h2">Federal work, delivered.</h2>
          </div>
          <p className="ceg-section-lede">
            A selection of completed and active federal contracts across NAVFAC, USACE,
            and Coast Guard clients — each self-performed under a single prime.
          </p>
        </div>

        <div className="fed-projects-grid">
          {projects.map((p) => (
            <a key={p.title} href="#" className="ceg-project-card">
              <div className="ceg-project-media">
                <PlaceholderPhoto kind={photoFor(p)} />
                <div className="ceg-project-tag">{p.tag}</div>
              </div>
              <div className="ceg-project-body">
                <div className="ceg-project-meta">
                  <span>{p.client}</span>
                  <span>·</span><span>{p.state}</span>
                  <span>·</span><span>{p.year}</span>
                  {p.award && <><span>·</span><span className="ceg-project-award">★ {p.award}</span></>}
                </div>
                <div className="ceg-project-title">{p.title}</div>
                <div className="ceg-project-client">{p.client}</div>
                <p className="ceg-project-blurb">{p.blurb}</p>
                <div className="ceg-project-cta">
                  Read case study
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="fed-callout">
          <div className="fed-callout-label">Need more detail?</div>
          <div className="fed-callout-h">Request our full past-performance package</div>
          <p className="fed-callout-body">
            We can provide a formatted CPARs summary, project data sheets, and agency
            references for any active procurement.
            <a href="#contact"> Contact our opportunity team →</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Certifications ───────────────────────────────────────────────────────────
function FederalCerts({ data }) {
  return (
    <section id="certifications" className="ceg-section ceg-vosb">
      <div className="ceg-container ceg-vosb-grid">
        <div className="ceg-vosb-text">
          <Eyebrow>Certifications &amp; compliance</Eyebrow>
          <h2 className="ceg-h2 on-brand">Veteran-owned. Federally verified.</h2>
          <p className="ceg-vosb-lede">
            Our VOSB certification is recognized by the SBA and Department of Veterans
            Affairs — enabling direct award on eligible set-aside contracts and preferred
            teaming arrangements on large federal procurements.
          </p>
          <div className="ceg-hero-ctas">
            <Btn href="#contact" variant="onbrand">Request our SAM profile</Btn>
            <Btn href="#contact" variant="ghost-onbrand">Download capability statement</Btn>
          </div>
        </div>
        <div className="ceg-vosb-certs">
          {data.CERTS.map((c) => (
            <div key={c.abbr} className="ceg-cert">
              <div className="ceg-cert-abbr">{c.abbr}</div>
              <div className="ceg-cert-full">{c.full}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page shell ───────────────────────────────────────────────────────────────
function FederalPage() {
  const data = window.CEG_DATA;
  const theme = window.CEG_THEMES.tidemark;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.dataset.concept = "tidemark";
  }, []);

  return (
    <div className="ceg-app concept-tidemark" style={window.applyThemeVars(theme)}>
      <UtilityBar theme={theme} data={data} />
      <Nav
        theme={theme}
        data={data}
        conceptKey="tidemark"
        onMobileOpen={() => setMobileOpen(true)}
      />
      <main>
        <FederalHero data={data} />
        <FederalFacts />
        <FederalIntro />
        <FederalPillars />
        <FederalProjects data={data} />
        <FederalCerts data={data} />
        <ContactBand theme={theme} data={data} />
      </main>
      <Footer theme={theme} data={data} />
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        data={data}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FederalPage />);
