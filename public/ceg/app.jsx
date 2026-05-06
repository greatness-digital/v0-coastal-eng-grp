// CEG Homepage — Drydock concept (final selection).

const { useState: useS, useEffect: useE } = React;

function App() {
  const theme = window.CEG_THEMES.drydock;
  const data = window.CEG_DATA;
  const [mobileOpen, setMobileOpen] = useS(false);

  useE(() => {
    document.body.dataset.concept = "drydock";
  }, []);

  const themeStyle = window.applyThemeVars(theme);

  return (
    <div className="ceg-app concept-drydock" style={themeStyle}>
      <window.UtilityBar theme={theme} data={data} />
      <window.Nav theme={theme} data={data} conceptKey="drydock" onMobileOpen={() => setMobileOpen(true)} />
      <main>
        <window.Hero theme={theme} data={data} conceptKey="drydock" />
        <window.Divisions theme={theme} data={data} />
      </main>
      <window.Footer theme={theme} data={data} />
      <window.MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} data={data} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
