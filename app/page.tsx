"use client"

import { useEffect, useRef, useState } from "react"

// CEG Homepage — mounts the original React 18 + Babel-standalone marine
// engineering concept site inside a Next.js shell. The original .jsx and .css
// source files live in /public/ceg/ and are loaded on the client, exactly like
// the original index.html does. We use babel-standalone to transform each .jsx
// file at runtime and execute it as a top-level <script>, so its top-level
// `function` declarations become globals — that's how the site's modules
// (UtilityBar, Nav, Hero, applyThemeVars, etc.) wire themselves together via
// `window.<Name>` references in app.jsx.

const CDN_REACT = "https://unpkg.com/react@18.3.1/umd/react.development.js"
const CDN_REACT_DOM = "https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"
const CDN_BABEL = "https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"

// Order matters: data → themes → components → drydock-body → app.
// app.jsx mounts <App /> into #root.
const JSX_FILES = [
  "/ceg/data.jsx",
  "/ceg/themes.jsx",
  "/ceg/components.jsx",
  "/ceg/drydock-body.jsx",
  "/ceg/app.jsx",
]

function loadExternalScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // If already injected, resolve immediately
    const existing = document.querySelector<HTMLScriptElement>(`script[data-ceg-src="${src}"]`)
    if (existing) {
      if (existing.dataset.cegLoaded === "1") {
        resolve()
        return
      }
      existing.addEventListener("load", () => resolve(), { once: true })
      existing.addEventListener("error", reject, { once: true })
      return
    }
    const s = document.createElement("script")
    s.src = src
    s.async = false
    s.crossOrigin = "anonymous"
    s.dataset.cegSrc = src
    s.addEventListener(
      "load",
      () => {
        s.dataset.cegLoaded = "1"
        resolve()
      },
      { once: true },
    )
    s.addEventListener("error", reject, { once: true })
    document.head.appendChild(s)
  })
}

async function runJsxFile(url: string): Promise<void> {
  // Fetch the raw .jsx source, transform with babel-standalone, then inject
  // the transpiled code as an inline <script> so its top-level declarations
  // land on the global scope (just like the original index.html does with
  // <script type="text/babel" src="...">).
  const res = await fetch(url, { cache: "no-cache" })
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  const source = await res.text()

  // @ts-expect-error — Babel is loaded at runtime via UMD
  const Babel = window.Babel
  if (!Babel) throw new Error("Babel not loaded")
  const out = Babel.transform(source, {
    presets: ["env", "react"],
    sourceType: "script",
    filename: url.split("/").pop() || "anonymous.jsx",
  })

  const s = document.createElement("script")
  s.dataset.cegJsx = url
  s.text = `//# sourceURL=${url}\n${out.code}`
  document.head.appendChild(s)
}

export default function Home() {
  const mounted = useRef(false)
  const [error, setError] = useState<string | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    let cancelled = false
    ;(async () => {
      try {
        // 1. Load React + ReactDOM UMD + Babel-standalone in order
        await loadExternalScript(CDN_REACT)
        await loadExternalScript(CDN_REACT_DOM)
        await loadExternalScript(CDN_BABEL)

        // 2. Transpile + execute each .jsx file in order. The last file
        //    (app.jsx) calls ReactDOM.createRoot(#root).render(<App />).
        for (const url of JSX_FILES) {
          if (cancelled) return
          await runJsxFile(url)
        }

        if (!cancelled) setReady(true)
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        console.log("[v0] CEG mount error:", msg)
        if (!cancelled) setError(msg)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      {!ready && !error && (
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            color: "#0a2540",
            fontFamily:
              '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            zIndex: 9999,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                width: 22,
                height: 1,
                background: "#0a2540",
                display: "inline-block",
              }}
            />
            <span>Loading Coastal Engineering Group</span>
          </div>
        </div>
      )}
      {error && (
        <div
          role="alert"
          style={{
            padding: 24,
            margin: 24,
            border: "1px solid #b00020",
            color: "#b00020",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: 13,
            background: "#fff5f5",
          }}
        >
          <strong>Failed to mount CEG site:</strong> {error}
        </div>
      )}
      {/* The original app.jsx mounts into this root div. */}
      <div id="root" />
    </>
  )
}
