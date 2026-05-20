// Blueprint alternate body — engineering spec sheet aesthetic.
// Dark mode, blueprint grid, schematic linework, mono numerals,
// condensed display type, safety-orange accent.
// Replaces Markets, Projects, Careers, VOSB, Clients sections.

const { useState: useBS } = React;

// ── Section wrapper with spec-sheet header ──────────────────────────────
function BP_Section({ id, num, kicker, title, intro, children, dark, hairline }) {
  return (
    <section
      id={id}
      className={`bp-section ${dark ? "is-dark" : ""} ${hairline ? "has-hairline" : ""}`}
    >
      <div className="ceg-container">
        <div className="bp-section-head">
          <div className="bp-spec-tag">
            <span className="bp-spec-num">{num}</span>
            <span className="bp-spec-kicker">{kicker}</span>
          </div>
          <h2 className="bp-h2">{title}</h2>
          {intro && <p className="bp-section-intro">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

// ── §02 Sectors — schematic block cards with index + crosshairs ─────────
function BP_Sectors({ data }) {
  const [active, setActive] = useBS(0);
  const m = data.MARKETS[active];

  return (
    <BP_Section
      id="markets"
      num="SEC.02"
      kicker="OPERATIONAL SECTORS"
      title="Five sectors. One uniform spec."
      intro="We deliver under the same procurement standards across federal, state, energy, commercial, and industrial waterfronts. Pick a sector to see scope and active project count."
      dark
    >
      <div className="bp-sectors">
        <div className="bp-sectors-list">
          {data.MARKETS.map((mk, i) => (
            <button
              key={mk.key}
              className={`bp-sector-row ${active === i ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="bp-sector-idx">M-{String(i + 1).padStart(2, "0")}</span>
              <span className="bp-sector-name">{mk.name}</span>
              <span className="bp-sector-count">{mk.projects}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="square" />
              </svg>
            </button>
          ))}
        </div>

        <div className="bp-sector-display" key={m.key}>
          <div className="bp-display-corners" aria-hidden>
            <span /><span /><span /><span />
          </div>
          <div className="bp-display-meta">
            <span className="bp-mono">SECTOR · M-{String(active + 1).padStart(2, "0")}</span>
            <span className="bp-mono">REV · 2026.04</span>
          </div>
          <div className="bp-display-name">{m.name}</div>
          <div className="bp-display-detail">{m.detail}</div>
          <div className="bp-display-stat">
            <div className="bp-display-stat-v">{m.projects}</div>
            <div className="bp-display-stat-l">Active & completed projects in this sector</div>
          </div>
          <BP_SectorSchematic which={m.key} />
          <div className="bp-display-foot">
            <a href="#" className="bp-link">View sector capabilities</a>
            <span className="bp-mono">SHEET 1 OF 1</span>
          </div>
        </div>
      </div>
    </BP_Section>
  );
}

// schematic linework per sector
function BP_SectorSchematic({ which }) {
  // Highly stylized blueprint glyphs — line art, not literal
  const glyph = {
    federal: (
      <g stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="square">
        {/* naval pier with destroyer silhouette */}
        <line x1="20" y1="80" x2="380" y2="80" />
        <line x1="20" y1="84" x2="380" y2="84" />
        {[60, 110, 160, 210, 260, 310, 360].map(x => <line key={x} x1={x} y1="84" x2={x} y2="120" strokeWidth="1.6" />)}
        <path d="M40 60 L80 60 L100 50 L320 50 L340 60 L360 60 L360 78 L40 78 Z" />
        <rect x="180" y="32" width="60" height="18" />
        <line x1="210" y1="32" x2="210" y2="20" />
        <circle cx="210" cy="18" r="2" fill="currentColor" />
      </g>
    ),
    "state-local": (
      <g stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="square">
        {/* highway bridge */}
        <line x1="0" y1="80" x2="400" y2="80" />
        <path d="M40 80 L40 60 L120 60 L160 36 L240 36 L280 60 L360 60 L360 80" />
        <line x1="80" y1="60" x2="80" y2="80" />
        <line x1="200" y1="36" x2="200" y2="80" />
        <line x1="320" y1="60" x2="320" y2="80" />
        <line x1="0" y1="120" x2="400" y2="120" strokeDasharray="3 3" />
      </g>
    ),
    energy: (
      <g stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="square">
        {/* offshore wind triple */}
        {[100, 200, 300].map(x => (
          <g key={x}>
            <line x1={x} y1="20" x2={x} y2="100" strokeWidth="1.6" />
            <line x1={x} y1="20" x2={x + 28} y2="14" />
            <line x1={x} y1="20" x2={x - 18} y2="38" />
            <line x1={x} y1="20" x2={x + 6} y2="48" />
            <circle cx={x} cy="20" r="3" fill="currentColor" />
          </g>
        ))}
        <line x1="0" y1="100" x2="400" y2="100" />
        <line x1="0" y1="118" x2="400" y2="118" strokeDasharray="2 4" />
      </g>
    ),
    commercial: (
      <g stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="square">
        {/* container terminal w/ crane */}
        <line x1="0" y1="100" x2="400" y2="100" />
        {[40, 80, 120, 160, 200].map((x, i) => (
          <rect key={i} x={x} y="70" width="36" height="30" />
        ))}
        {[40, 80, 120, 160, 200].map((x, i) => (
          <rect key={"b" + i} x={x} y="40" width="36" height="30" />
        ))}
        <line x1="280" y1="100" x2="280" y2="20" strokeWidth="1.6" />
        <line x1="280" y1="20" x2="370" y2="20" />
        <line x1="370" y1="20" x2="370" y2="60" />
        <rect x="365" y="60" width="10" height="8" />
        <line x1="280" y1="60" x2="370" y2="60" strokeDasharray="3 3" />
      </g>
    ),
    industrial: (
      <g stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="square">
        {/* tank farm + pipe rack */}
        {[60, 130, 200, 270, 340].map((x, i) => (
          <ellipse key={i} cx={x} cy="80" rx="28" ry="32" />
        ))}
        <line x1="20" y1="120" x2="380" y2="120" />
        <line x1="0" y1="40" x2="400" y2="40" strokeDasharray="6 4" />
        <line x1="0" y1="32" x2="400" y2="32" strokeDasharray="6 4" />
      </g>
    ),
  };

  return (
    <svg className="bp-schematic" viewBox="0 0 400 140" role="img" aria-hidden>
      {glyph[which] || glyph.federal}
    </svg>
  );
}

// ── §03 Project register ───────────────────────────────────────────────
function BP_Register({ data }) {
  return (
    <BP_Section
      id="projects"
      num="SEC.03"
      kicker="PROJECT REGISTER"
      title="Built record."
      intro="Every line is a contract delivered. Mil-spec metadata; no marketing copy."
    >
      <div className="bp-register">
        <div className="bp-register-head">
          <span className="bp-mono">JOB&nbsp;#</span>
          <span className="bp-mono">DESIGNATION</span>
          <span className="bp-mono">CLIENT / AGENCY</span>
          <span className="bp-mono">LOC</span>
          <span className="bp-mono">YR</span>
          <span className="bp-mono">DIV</span>
        </div>
        {data.PROJECTS.map((p, i) => (
          <a key={p.title} href="#" className="bp-register-row">
            <span className="bp-mono bp-register-jobid">CEG-{String(2025001 + i)}</span>
            <span className="bp-register-name">
              {p.title}
              <span className="bp-register-blurb">{p.blurb}</span>
              {p.award && <span className="bp-register-award">★ {p.award}</span>}
            </span>
            <span className="bp-mono bp-register-client">{p.client}</span>
            <span className="bp-mono">{p.state}</span>
            <span className="bp-mono">{p.year}</span>
            <span className="bp-mono">{p.tag.toUpperCase().slice(0, 4)}</span>
          </a>
        ))}
      </div>
    </BP_Section>
  );
}

// ── §04 Capability ratings — hex-readout chart ─────────────────────────
function BP_Capability({ data }) {
  // Use DIVISIONS with synthetic capacity numbers (0-100) for visual interest
  const capacities = [
    { div: data.DIVISIONS[0], c: 96, hours: "12,400" },
    { div: data.DIVISIONS[1], c: 88, hours: "8,900" },
    { div: data.DIVISIONS[2], c: 92, hours: "14,200" },
    { div: data.DIVISIONS[3], c: 98, hours: "22,500" },
    { div: data.DIVISIONS[4], c: 84, hours: "9,700" },
  ];
  return (
    <BP_Section
      id="capability"
      num="SEC.04"
      kicker="CAPABILITY READOUT"
      title="Capacity, by division."
      intro="Annual deployable field hours and current utilization — measured, not estimated."
      dark
    >
      <div className="bp-capacity-grid">
        {capacities.map((row, i) => (
          <div key={row.div.key} className="bp-capacity-row">
            <div className="bp-capacity-num">D-0{i + 1}</div>
            <div className="bp-capacity-name">
              <div className="bp-capacity-name-h">{row.div.name}</div>
              <div className="bp-capacity-name-s">{row.div.services.slice(0, 3).join(" · ")}</div>
            </div>
            <div className="bp-capacity-bar-wrap">
              <div className="bp-capacity-bar-track">
                <div className="bp-capacity-bar-fill" style={{ width: `${row.c}%` }} />
                {/* tick marks */}
                {[20, 40, 60, 80].map(t => <span key={t} className="bp-capacity-tick" style={{ left: `${t}%` }} />)}
              </div>
              <div className="bp-capacity-readout">
                <span className="bp-mono">{row.c}%</span>
                <span className="bp-mono bp-capacity-readout-h">{row.hours} HR/YR</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BP_Section>
  );
}

// ── §05 Personnel — careers as field roster ────────────────────────────
function BP_Personnel({ data }) {
  const c = data.CAREERS;
  return (
    <BP_Section
      id="careers"
      num="SEC.05"
      kicker="PERSONNEL · FIELD ROSTER"
      title="We hire crews, not headcount."
      intro={c.lede}
    >
      <div className="bp-roster">
        <div className="bp-roster-head">
          <span className="bp-mono">REQ&nbsp;#</span>
          <span className="bp-mono">POSITION</span>
          <span className="bp-mono">DIVISION</span>
          <span className="bp-mono">DUTY STATION</span>
          <span className="bp-mono">STATUS</span>
        </div>
        {c.openRoles.map((r, i) => (
          <a key={r.title} href="#" className="bp-roster-row">
            <span className="bp-mono bp-roster-id">REQ-{String(2026010 + i)}</span>
            <span className="bp-roster-title">{r.title}</span>
            <span className="bp-mono bp-roster-div">{r.division}</span>
            <span className="bp-mono">{r.location}</span>
            <span className="bp-roster-status">
              <span className="bp-roster-dot" /> OPEN
            </span>
          </a>
        ))}
      </div>

      <div className="bp-personnel-perks">
        <div className="bp-mono bp-personnel-perks-h">STANDARD-ISSUE BENEFITS</div>
        <div className="bp-perk-grid">
          {c.benefits.map(b => (
            <div key={b.h} className="bp-perk">
              <div className="bp-perk-h">{b.h}</div>
              <div className="bp-perk-v">{b.v}</div>
            </div>
          ))}
        </div>
      </div>
    </BP_Section>
  );
}

// ── §06 Compliance & registry — VOSB + certs + clients ────────────────
function BP_Compliance({ data }) {
  return (
    <BP_Section
      id="veteran"
      num="SEC.06"
      kicker="COMPLIANCE · REGISTRY"
      title="Veteran-owned. Federal-grade."
      intro="The credentials we operate under and the agencies and authorities we operate for."
      dark
    >
      <div className="bp-compliance">
        <div className="bp-compliance-vosb">
          <div className="bp-vosb-mark" aria-hidden>
            <svg viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 3" />
              <text x="40" y="36" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill="currentColor">VOSB</text>
              <text x="40" y="50" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="2" fill="currentColor">VERIFIED</text>
            </svg>
          </div>
          <div className="bp-compliance-text">
            <div className="bp-mono bp-compliance-eyebrow">DESIGNATION</div>
            <div className="bp-compliance-h">Veteran-Owned Small Business</div>
            <p>Owned and operated by U.S. military veterans. SBA-recognized. Required on much of the federal work we pursue and a category we hold ourselves to internally.</p>
          </div>
        </div>

        <div className="bp-compliance-cert">
          <div className="bp-mono bp-compliance-eyebrow">CERTIFICATIONS</div>
          <ul className="bp-cert-grid">
            {data.CERTS.map(c => (
              <li key={c.abbr}>
                <span className="bp-cert-abbr">{c.abbr}</span>
                <span className="bp-cert-full">{c.full}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bp-compliance-clients">
          <div className="bp-mono bp-compliance-eyebrow">SELECTED PRINCIPALS</div>
          <ul className="bp-client-grid">
            {data.CLIENTS.map(c => <li key={c}><span className="bp-mono bp-client-dash">—</span>{c}</li>)}
          </ul>
        </div>
      </div>
    </BP_Section>
  );
}

function BlueprintBody({ theme, data }) {
  return (
    <>
      <BP_Sectors data={data} />
      <BP_Register data={data} />
      <BP_Capability data={data} />
      <BP_Personnel data={data} />
      <BP_Compliance data={data} />
    </>
  );
}

window.BlueprintBody = BlueprintBody;
