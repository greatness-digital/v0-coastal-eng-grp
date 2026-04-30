// CEG Homepage — main app composition + concept toggle.

const { useState: useS, useEffect: useE } = React;

function ConceptToggle({ active, onChange, themes }) {
  return (
    <div className="ceg-concept-toggle">
      <div className="ceg-container ceg-concept-toggle-row">
        <div className="ceg-concept-toggle-label">
          <span className="ceg-concept-toggle-pulse" />
          <span>Homepage Concept · Draft 01 · Apr 2026</span>
        </div>
        <div className="ceg-concept-toggle-tabs">
          {Object.entries(themes).map(([key, t]) => (
            <button
              key={key}
              className={`ceg-concept-toggle-tab ${active === key ? "is-active" : ""}`}
              onClick={() => onChange(key)}
            >
              <span className="ceg-concept-toggle-tab-name">{t.name}</span>
              <span className="ceg-concept-toggle-tab-desc">{t.tagline}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const themes = window.CEG_THEMES;
  const data = window.CEG_DATA;
  const [conceptKey, setConceptKey] = useS("tidemark");
  const [mobileOpen, setMobileOpen] = useS(false);

  useE(() => {
    document.body.dataset.concept = conceptKey;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [conceptKey]);

  // Measure the concept toggle bar and expose its height so the sticky nav
  // can offset itself and the two sticky bars stack instead of overlapping.
  useE(() => {
    const measure = () => {
      const el = document.querySelector(".ceg-concept-toggle");
      const h = el ? el.getBoundingClientRect().height : 0;
      document.documentElement.style.setProperty("--toggle-h", `${h}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const theme = themes[conceptKey];
  const themeStyle = window.applyThemeVars(theme);

  return (
    <>
      <ConceptToggle active={conceptKey} onChange={setConceptKey} themes={themes} />
      <div className={`ceg-app concept-${conceptKey}`} style={themeStyle}>
        <window.UtilityBar theme={theme} data={data} />
        <window.Nav theme={theme} data={data} conceptKey={conceptKey} onMobileOpen={() => setMobileOpen(true)} />
        <main>
          <window.Hero theme={theme} data={data} conceptKey={conceptKey} />
          {conceptKey === "blueprint" ? (
            <window.BlueprintDivisions data={data} />
          ) : (
            <window.Divisions theme={theme} data={data} />
          )}
          {conceptKey === "drydock" ? null : conceptKey === "blueprint" ? (
            <window.BlueprintBody theme={theme} data={data} />
          ) : (
            <>
              <window.Markets theme={theme} data={data} />
              <window.Projects theme={theme} data={data} />
              <window.Careers theme={theme} data={data} />
              <window.VOSBBand theme={theme} data={data} />
              <window.ClientsStrip theme={theme} data={data} />
            </>
          )}
          {conceptKey !== "drydock" && (
            <window.ContactBand theme={theme} data={data} />
          )}
        </main>
        <window.Footer theme={theme} data={data} />
        <window.MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} data={data} />
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
