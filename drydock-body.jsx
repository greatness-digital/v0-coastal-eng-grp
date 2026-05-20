// Drydock alternate body — editorial broadsheet treatment.
// Renders an entirely different layout for the middle of the page when the
// Drydock concept is selected. Uses the SAME data as the standard layout.
//
// Order of sections (replaces Markets, Projects, Careers, VOSB, Clients):
//   1. Masthead          — newspaper-style folio + dateline + lede
//   2. Markets table     — ruled "by-the-numbers" table
//   3. Featured dispatch — drop-cap article on a flagship project
//   4. Project ledger    — full project list as a printed register
//   5. The Yard          — careers as a help-wanted column
//   6. Colophon          — VOSB + clients as a printed colophon strip

const { useState: useDS } = React;

function DD_Masthead({ data }) {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric"
  });
  return (
    <section className="dd-masthead">
      <div className="ceg-container">
        <div className="dd-masthead-top">
          <span>Vol. XXVII · No. 04</span>
          <span className="dd-masthead-title">THE WATERLINE</span>
          <span>{today}</span>
        </div>
        <div className="dd-masthead-rule dd-rule-double" />
        <div className="dd-masthead-deck">
          <div className="dd-masthead-deck-text">
            <span className="dd-kicker">Quarterly dispatch from the field</span>
            <h2 className="dd-display">
              A working record of the structures, channels, and crews that
              keep the East Coast operational.
            </h2>
            <div className="dd-masthead-byline">
              The Waterline is our quarterly company brief — a single page
              of recent work, project numbers, and open positions. Filed
              from Greenwood Lakes, NY · Jacksonville, FL · and points
              between.
            </div>
          </div>
          <figure className="dd-masthead-figure">
            <svg className="dd-engraving" viewBox="0 0 480 300" role="img" aria-label="Cross-section of a pier, waterline, and dredged channel">
              <defs>
                <pattern id="dd-hatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="0.7" />
                </pattern>
                <pattern id="dd-hatch-dense" patternUnits="userSpaceOnUse" width="3" height="3" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="3" stroke="currentColor" strokeWidth="0.9" />
                </pattern>
                <pattern id="dd-stipple" patternUnits="userSpaceOnUse" width="6" height="6">
                  <circle cx="1.5" cy="1.5" r="0.6" fill="currentColor" />
                  <circle cx="4.5" cy="4.5" r="0.6" fill="currentColor" />
                </pattern>
              </defs>
              {/* Sky / cartouche border */}
              <rect x="0.5" y="0.5" width="479" height="299" fill="none" stroke="currentColor" strokeWidth="1" />
              <rect x="6" y="6" width="468" height="288" fill="none" stroke="currentColor" strokeWidth="0.5" />

              {/* Sky stipple */}
              <rect x="6" y="6" width="468" height="120" fill="url(#dd-stipple)" opacity="0.35" />

              {/* Waterline label */}
              <line x1="6" y1="126" x2="474" y2="126" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <text x="14" y="121" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="2" fill="currentColor">MLLW · WATERLINE</text>

              {/* Water body */}
              <rect x="6" y="126" width="468" height="120" fill="url(#dd-hatch)" opacity="0.45" />

              {/* Dredged channel cut */}
              <path d="M 6 246 L 6 200 L 110 200 L 130 232 L 350 232 L 370 200 L 474 200 L 474 246 Z" fill="url(#dd-hatch-dense)" opacity="0.7" />
              <path d="M 110 200 L 130 232 L 350 232 L 370 200" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <text x="220" y="226" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1.5" fill="currentColor" textAnchor="middle">DREDGED CHANNEL · −50 FT</text>

              {/* Seabed */}
              <line x1="6" y1="246" x2="474" y2="246" stroke="currentColor" strokeWidth="1.2" />

              {/* Pier deck */}
              <rect x="60" y="100" width="360" height="14" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <line x1="60" y1="107" x2="420" y2="107" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              <text x="240" y="93" fontFamily="Playfair Display, serif" fontSize="11" fontStyle="italic" fill="currentColor" textAnchor="middle">Pier Deck</text>

              {/* Piles */}
              {[80, 130, 180, 230, 280, 330, 380].map(x => (
                <g key={x}>
                  <line x1={x} y1="114" x2={x} y2="270" stroke="currentColor" strokeWidth="1.6" />
                  <line x1={x - 4} y1="114" x2={x - 4} y2="270" stroke="currentColor" strokeWidth="0.5" />
                  <line x1={x + 4} y1="114" x2={x + 4} y2="270" stroke="currentColor" strokeWidth="0.5" />
                  {/* embed in seabed */}
                  <rect x={x - 5} y="246" width="10" height="24" fill="url(#dd-hatch-dense)" opacity="0.6" />
                </g>
              ))}

              {/* Bollard */}
              <rect x="48" y="86" width="14" height="14" fill="currentColor" />
              <rect x="50" y="82" width="10" height="6" fill="currentColor" />

              {/* Crane silhouette */}
              <g stroke="currentColor" strokeWidth="1.4" fill="none">
                <line x1="200" y1="100" x2="200" y2="22" />
                <line x1="200" y1="22" x2="290" y2="40" />
                <line x1="200" y1="38" x2="288" y2="40" />
                <line x1="285" y1="40" x2="285" y2="78" />
                <rect x="280" y="78" width="12" height="8" fill="currentColor" />
                <line x1="200" y1="60" x2="285" y2="60" strokeWidth="0.5" strokeDasharray="2 2" />
              </g>

              {/* Sun / compass mark */}
              <g transform="translate(420 40)" stroke="currentColor" fill="none" strokeWidth="0.8">
                <circle r="14" />
                <line x1="0" y1="-20" x2="0" y2="20" />
                <line x1="-20" y1="0" x2="20" y2="0" />
                <text y="-23" fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="middle" fill="currentColor">N</text>
              </g>
            </svg>
            <figcaption>
              Fig. 01 — Typical pier cross-section: deck, bearing piles,
              waterline, and dredged approach channel.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function DD_MarketsTable({ data }) {
  const totalProjects = data.MARKETS.reduce((a, m) => a + m.projects, 0);
  return (
    <section id="markets" className="dd-section dd-markets">
      <div className="ceg-container">
        <header className="dd-section-head">
          <span className="dd-section-num">§ 01</span>
          <div>
            <div className="dd-eyebrow">By the numbers</div>
            <h3 className="dd-h2">Where we work</h3>
          </div>
          <p className="dd-section-lede">
            Five markets, one delivery model. Project counts reflect the
            last decade of completed and active work across our operating
            divisions.
          </p>
        </header>

        <table className="dd-table">
          <thead>
            <tr>
              <th className="dd-col-num">#</th>
              <th>Market</th>
              <th>Typical clients</th>
              <th className="dd-col-num">Projects</th>
              <th className="dd-col-num">Share</th>
            </tr>
          </thead>
          <tbody>
            {data.MARKETS.map((m, i) => {
              const pct = ((m.projects / totalProjects) * 100).toFixed(0);
              return (
                <tr key={m.key}>
                  <td className="dd-col-num">{String(i + 1).padStart(2, "0")}</td>
                  <td className="dd-table-name">{m.name}</td>
                  <td className="dd-table-detail">{m.detail}</td>
                  <td className="dd-col-num">{m.projects}</td>
                  <td className="dd-col-num">
                    <span className="dd-share">
                      <span className="dd-share-bar" style={{ width: `${pct}%` }} />
                      <span className="dd-share-num">{pct}%</span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td className="dd-table-name">Total</td>
              <td />
              <td className="dd-col-num"><strong>{totalProjects}</strong></td>
              <td className="dd-col-num">100%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

function DD_FeaturedDispatch({ data }) {
  const featured = data.PROJECTS[0];
  return (
    <section className="dd-section dd-dispatch">
      <div className="ceg-container">
        <header className="dd-section-head">
          <span className="dd-section-num">§ 02</span>
          <div>
            <div className="dd-eyebrow">Featured dispatch</div>
            <h3 className="dd-h2">{featured.title}</h3>
          </div>
          <div className="dd-dispatch-meta">
            <div><span>Client</span>{featured.client}</div>
            <div><span>Location</span>{featured.state} · {featured.market}</div>
            <div><span>Filed</span>{featured.year}</div>
            <div><span>Division</span>{featured.tag}</div>
          </div>
        </header>

        <div className="dd-rule-double" />

        <div className="dd-article">
          <p className="dd-article-lead">
            <span className="dd-dropcap">P</span>
            {featured.blurb} The work proceeded across the active berthing
            envelope, with operations sequenced around the Navy's deployment
            schedule and continuous coordination with the host activity.
            Field crews from our diving and construction divisions delivered
            the work without interruption to ongoing fleet movements.
          </p>
          <p>
            Our scope included structural pile repairs, fender system
            replacement, and electrical service upgrades along the entire
            length of the pier. Underwater inspection preceded each work
            window, with NDT verification of every weld below the splash
            zone. Construction was self-performed using company-owned
            barges, cranes, and deck-mounted pile drivers — eliminating
            third-party scheduling risk on a critical-path federal job.
          </p>
          <p>
            {featured.award ? (
              <>The project was recognized with the <em>{featured.award}</em> award and
              has since served as a benchmark for similar rehabilitation work
              across the Mid-Atlantic region.</>
            ) : (
              <>The project completed on schedule and within budget, and now
              serves as a reference for similar work across the region.</>
            )}
          </p>
        </div>

        <div className="dd-dispatch-foot">
          <a href="#projects" className="dd-link">Read the full project register →</a>
          <span className="dd-tag">{featured.tag}</span>
        </div>
      </div>
    </section>
  );
}

function DD_ProjectLedger({ data }) {
  const [filter, setFilter] = useDS("All");
  const filters = ["All", ...Array.from(new Set(data.PROJECTS.map(p => p.market)))];
  const rows = filter === "All" ? data.PROJECTS : data.PROJECTS.filter(p => p.market === filter);

  return (
    <section id="projects" className="dd-section dd-ledger">
      <div className="ceg-container">
        <header className="dd-section-head">
          <span className="dd-section-num">§ 03</span>
          <div>
            <div className="dd-eyebrow">Project register</div>
            <h3 className="dd-h2">The ledger</h3>
          </div>
          <p className="dd-section-lede">
            A printed list of recent work. Filterable, sortable in spirit,
            and intentionally without marketing copy. The award column is
            blank where no award was given — and we leave it blank.
          </p>
        </header>

        <div className="dd-ledger-filters">
          <span className="dd-filter-label">Filter ·</span>
          {filters.map(f => (
            <button
              key={f}
              className={`dd-filter ${filter === f ? "is-active" : ""}`}
              onClick={() => setFilter(f)}
            >{f}</button>
          ))}
          <span className="dd-filter-count">
            Showing {rows.length} of {data.PROJECTS.length}
          </span>
        </div>

        <ol className="dd-ledger-list">
          {rows.map((p, i) => (
            <li key={p.title} className="dd-ledger-row">
              <div className="dd-ledger-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="dd-ledger-body">
                <div className="dd-ledger-title">{p.title}</div>
                <div className="dd-ledger-blurb">{p.blurb}</div>
                <div className="dd-ledger-meta">
                  <span>{p.client}</span>
                  <span>·</span>
                  <span>{p.state}</span>
                  <span>·</span>
                  <span>{p.year}</span>
                  {p.award && (<><span>·</span><em className="dd-award">★ {p.award}</em></>)}
                </div>
              </div>
              <div className="dd-ledger-tag">{p.tag}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DD_TheYard({ data }) {
  const c = data.CAREERS;
  return (
    <section id="careers" className="dd-section dd-yard">
      <div className="ceg-container">
        <header className="dd-section-head dd-section-head-onbrand">
          <span className="dd-section-num">§ 04</span>
          <div>
            <div className="dd-eyebrow">Help wanted</div>
            <h3 className="dd-h2">The Yard</h3>
          </div>
          <p className="dd-section-lede">
            {c.lede}
          </p>
        </header>

        <div className="dd-yard-grid">
          <aside className="dd-yard-side">
            <div className="dd-eyebrow dd-eyebrow-onbrand">What we offer</div>
            <ul className="dd-yard-benefits">
              {c.benefits.map(b => (
                <li key={b.h}>
                  <strong>{b.h}.</strong> {b.v}
                </li>
              ))}
            </ul>
          </aside>

          <div className="dd-yard-list">
            <div className="dd-yard-list-head">
              <span>Open positions</span>
              <span>{c.openRoles.length} active</span>
            </div>
            {c.openRoles.map((r, i) => (
              <a key={r.title} href="#" className="dd-yard-role">
                <div className="dd-yard-role-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="dd-yard-role-body">
                  <div className="dd-yard-role-title">{r.title}</div>
                  <div className="dd-yard-role-meta">
                    {r.division} · {r.location} · {r.type}
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DD_Colophon({ data }) {
  return (
    <section id="veteran" className="dd-section dd-colophon">
      <div className="ceg-container">
        <header className="dd-section-head">
          <span className="dd-section-num">§ 05</span>
          <div>
            <div className="dd-eyebrow">Colophon</div>
            <h3 className="dd-h2">Who we are, in print</h3>
          </div>
        </header>

        <div className="dd-colophon-grid">
          <div className="dd-colophon-block">
            <div className="dd-colophon-eyebrow">Ownership</div>
            <div className="dd-colophon-h">Veteran-Owned Small Business</div>
            <p className="dd-colophon-body">
              Coastal Engineering Group is owned and operated by U.S. military
              veterans. Our VOSB designation is recognized by the SBA and the
              Department of Veterans Affairs, and is required on much of the
              federal work we pursue.
            </p>
          </div>

          <div className="dd-colophon-block">
            <div className="dd-colophon-eyebrow">Certifications</div>
            <ul className="dd-cert-list">
              {data.CERTS.map(c => (
                <li key={c.abbr}>
                  <span className="dd-cert-abbr">{c.abbr}</span>
                  <span className="dd-cert-full">{c.full}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dd-colophon-block dd-colophon-clients">
            <div className="dd-colophon-eyebrow">Selected clients</div>
            <ul className="dd-client-list">
              {data.CLIENTS.map(c => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DrydockBody({ theme, data }) {
  return (
    <>
      <DD_Masthead data={data} />
      <DD_MarketsTable data={data} />
      <DD_FeaturedDispatch data={data} />
      <DD_ProjectLedger data={data} />
      <DD_TheYard data={data} />
      <DD_Colophon data={data} />
    </>
  );
}

window.DrydockBody = DrydockBody;
