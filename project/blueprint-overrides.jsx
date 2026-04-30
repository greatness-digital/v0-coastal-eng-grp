// Blueprint-only overrides:
//   • BlueprintHeroBand    — full-bleed photo band that sits ABOVE the type hero
//   • BlueprintDivisions   — horizontal expanding-accordion replacement for Divisions
// Body-font swap is handled in blueprint-body.css.

const { useState: useBP, useRef: useBPRef } = React;

// ── Photo band above the type hero ─────────────────────────────────────
function BlueprintHeroBand({ data }) {
  return (
    <section className="bp-herobandwrap" aria-label="Coastal Engineering Group">
      <div className="bp-herobandwrap-grid" aria-hidden />
      <div className="bp-herobandwrap-photo">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2200&q=80"
          alt="Commercial diver descending alongside a steel pier structure"
          loading="eager"
        />
        <div className="bp-herobandwrap-scrim" aria-hidden />
      </div>
      <div className="ceg-container bp-herobandwrap-overlay">
        <div className="bp-herobandwrap-tl">
          <span className="bp-mono">DOC · CEG-WEB-2026.04</span>
          <span className="bp-mono">SHEET 01 / 06</span>
        </div>
        <div className="bp-herobandwrap-tr">
          <span className="bp-mono">VOSB · ADCI · NAVFAC PRE-QUAL</span>
        </div>
        <div className="bp-herobandwrap-bl">
          <div className="bp-herobandwrap-kicker">PROJECT REFERENCE</div>
          <div className="bp-herobandwrap-caption">
            Pier 11 Rehabilitation · Naval Station Norfolk
          </div>
          <div className="bp-herobandwrap-meta">
            38°50′N · 76°17′W · Crew of 24 · 487 piles · 2024
          </div>
        </div>
        <div className="bp-herobandwrap-br">
          <svg viewBox="0 0 80 80" className="bp-herobandwrap-stamp" aria-hidden>
            <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="40" cy="40" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
            <text x="40" y="36" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="700" fill="currentColor">FIELD</text>
            <text x="40" y="50" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="2" fill="currentColor">VERIFIED</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

// ── Divisions accordion ────────────────────────────────────────────────
// Schematic SVG illustrations per division (no photography).
function BPDivIllustration({ which }) {
  const stroke = "rgba(255,255,255,0.55)";
  const map = {
    diving: (
      <g fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="square">
        {/* helmet diver silhouette + bubbles + waterline */}
        <line x1="0" y1="80" x2="400" y2="80" />
        <line x1="0" y1="84" x2="400" y2="84" strokeDasharray="3 4" />
        <circle cx="200" cy="160" r="28" />
        <rect x="184" y="186" width="32" height="60" />
        <line x1="184" y1="200" x2="216" y2="200" />
        <line x1="172" y1="210" x2="184" y2="210" />
        <line x1="216" y1="210" x2="228" y2="210" />
        <path d="M194 250 L186 290 M206 250 L214 290" />
        {[160, 220, 180, 240].map((x, i) => (
          <circle key={i} cx={x} cy={120 - i * 14} r={3 - i * 0.4} />
        ))}
        <line x1="200" y1="132" x2="280" y2="40" strokeDasharray="2 4" />
        <circle cx="280" cy="40" r="6" />
      </g>
    ),
    engineering: (
      <g fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="square">
        {/* technical drawing — section detail of seawall */}
        <line x1="40" y1="40" x2="40" y2="280" />
        <line x1="40" y1="280" x2="360" y2="280" />
        {[80, 120, 160, 200, 240].map(y => (
          <g key={y}>
            <line x1="36" y1={y} x2="44" y2={y} />
            <text x="20" y={y + 3} fontFamily="JetBrains Mono, monospace" fontSize="6" fill={stroke}>{(y - 40) / 4}</text>
          </g>
        ))}
        <path d="M80 280 L80 140 L120 140 L120 100 L280 100 L280 140 L320 140 L320 280" />
        <path d="M120 140 L280 140" strokeDasharray="2 3" />
        <path d="M80 280 L320 280" strokeWidth="1.6" />
        {/* dimension lines */}
        <line x1="80" y1="60" x2="320" y2="60" />
        <line x1="80" y1="56" x2="80" y2="64" />
        <line x1="320" y1="56" x2="320" y2="64" />
        <text x="200" y="54" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill={stroke}>240'</text>
      </g>
    ),
    dredging: (
      <g fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="square">
        {/* dredge barge silhouette + sediment plume */}
        <line x1="0" y1="120" x2="400" y2="120" />
        <line x1="0" y1="124" x2="400" y2="124" strokeDasharray="3 4" />
        <path d="M120 90 L280 90 L300 120 L100 120 Z" />
        <line x1="200" y1="90" x2="200" y2="40" strokeWidth="1.4" />
        <line x1="200" y1="40" x2="240" y2="40" />
        <line x1="240" y1="40" x2="240" y2="60" />
        <rect x="234" y="60" width="12" height="10" />
        <line x1="240" y1="70" x2="200" y2="160" strokeDasharray="3 3" />
        <ellipse cx="180" cy="200" rx="80" ry="14" strokeDasharray="2 4" />
        <ellipse cx="180" cy="220" rx="100" ry="14" strokeDasharray="2 4" />
      </g>
    ),
    construction: (
      <g fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="square">
        {/* crane hoisting pile over pier */}
        <line x1="0" y1="240" x2="400" y2="240" />
        {[60, 110, 160, 210, 260, 310].map(x => (
          <line key={x} x1={x} y1="240" x2={x} y2="290" />
        ))}
        <line x1="0" y1="280" x2="400" y2="280" strokeDasharray="3 4" />
        <line x1="80" y1="240" x2="80" y2="40" strokeWidth="1.6" />
        <line x1="80" y1="40" x2="320" y2="40" />
        <line x1="320" y1="40" x2="320" y2="80" />
        <rect x="312" y="80" width="16" height="10" />
        <line x1="320" y1="90" x2="320" y2="180" strokeDasharray="3 3" />
        <rect x="304" y="180" width="32" height="80" />
        <path d="M80 40 L80 60 L120 40 L80 40 Z" />
      </g>
    ),
    "marine-services": (
      <g fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="square">
        {/* tugboat profile + tow line + barge silhouette */}
        <line x1="0" y1="180" x2="400" y2="180" />
        <line x1="0" y1="184" x2="400" y2="184" strokeDasharray="3 4" />
        {/* tug */}
        <path d="M40 180 L40 130 L100 130 L120 110 L160 110 L160 180 Z" />
        <rect x="60" y="80" width="40" height="30" />
        <line x1="120" y1="80" x2="120" y2="60" />
        <circle cx="120" cy="56" r="3" fill={stroke} />
        {/* tow line */}
        <path d="M160 140 Q220 130 280 145" strokeDasharray="3 4" />
        {/* barge */}
        <rect x="240" y="145" width="120" height="35" />
        <line x1="260" y1="145" x2="260" y2="180" />
        <line x1="280" y1="145" x2="280" y2="180" />
        <line x1="300" y1="145" x2="300" y2="180" />
        <line x1="320" y1="145" x2="320" y2="180" />
        <line x1="340" y1="145" x2="340" y2="180" />
      </g>
    ),
  };

  return (
    <svg className="bp-acc-illust" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="320" fill="#0a1828" />
      {/* faint grid */}
      <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map(x => <line key={"x" + x} x1={x} y1="0" x2={x} y2="320" />)}
        {[40, 80, 120, 160, 200, 240, 280].map(y => <line key={"y" + y} x1="0" y1={y} x2="400" y2={y} />)}
      </g>
      {map[which] || map.diving}
    </svg>
  );
}

function BlueprintDivisions({ data }) {
  const [active, setActive] = useBP(0);
  const timer = useBPRef(null);

  const setHover = (i) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(i), 120);
  };

  return (
    <section id="services" className="bp-section bp-acc-section has-hairline">
      <div className="ceg-container">
        <div className="bp-section-head">
          <div className="bp-spec-tag">
            <span className="bp-spec-num">SEC.01</span>
            <span className="bp-spec-kicker">DIVISIONS</span>
          </div>
          <h2 className="bp-h2">From the drawing board to the water column.</h2>
          <p className="bp-section-intro">
            Five integrated divisions under one VOSB. Hover any column to expand —
            services, scope, and a schematic of the work.
          </p>
        </div>

        <div
          className="bp-acc"
          onMouseLeave={() => clearTimeout(timer.current)}
        >
          {data.DIVISIONS.map((d, i) => (
            <div
              key={d.key}
              className={`bp-acc-col ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
            >
              <BPDivIllustration which={d.key} />
              <div className="bp-acc-scrim" aria-hidden />

              {/* Collapsed rail label */}
              <div className="bp-acc-rail">
                <span className="bp-mono bp-acc-rail-num">D-0{i + 1}</span>
                <span className="bp-acc-rail-name">{d.short || d.name}</span>
              </div>

              {/* Expanded body */}
              <div className="bp-acc-body">
                <div className="bp-acc-body-top">
                  <span className="bp-mono bp-acc-body-num">DIVISION · D-0{i + 1}</span>
                  <h3 className="bp-acc-body-h">{d.name}</h3>
                  <p className="bp-acc-body-blurb">{d.blurb}</p>
                </div>
                <div className="bp-acc-body-bot">
                  <div className="bp-mono bp-acc-body-services-h">SERVICES</div>
                  <ul className="bp-acc-body-services">
                    {d.services.map(s => (
                      <li key={s}><span className="bp-mono bp-acc-body-bullet">+</span>{s}</li>
                    ))}
                  </ul>
                  <a href="#" className="bp-link bp-acc-body-link">Capability sheet →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.BlueprintHeroBand = BlueprintHeroBand;
window.BlueprintDivisions = BlueprintDivisions;
