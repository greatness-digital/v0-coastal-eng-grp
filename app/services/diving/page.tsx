"use client"

import { useEffect, useRef, useState } from "react"

export const metadata = {
  title: "Commercial Diving Services | ADCI Certified | Coastal Engineering Group",
  description:
    "PE-led, ADCI certified commercial diving for underwater inspection, structural repair, bridge inspection, dam inspection, confined space, and hazmat operations. East Coast, 13 licensed states.",
}

const CDN_REACT     = "https://unpkg.com/react@18.3.1/umd/react.development.js"
const CDN_REACT_DOM = "https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"
const CDN_BABEL     = "https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"

const JSX_FILES = [
  "/ceg/data.jsx",
  "/ceg/themes.jsx",
  "/ceg/components.jsx",
  "/ceg/drydock-body.jsx",
  "/ceg/diving-app.jsx",
]

function loadExternalScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-ceg-src="${src}"]`)
    if (existing) {
      if (existing.dataset.cegLoaded === "1") { resolve(); return }
      existing.addEventListener("load", () => resolve(), { once: true })
      existing.addEventListener("error", reject, { once: true })
      return
    }
    const s = document.createElement("script")
    s.src = src; s.async = false; s.crossOrigin = "anonymous"; s.dataset.cegSrc = src
    s.addEventListener("load", () => { s.dataset.cegLoaded = "1"; resolve() }, { once: true })
    s.addEventListener("error", reject, { once: true })
    document.head.appendChild(s)
  })
}

async function runJsxFile(url: string): Promise<void> {
  const res = await fetch(url, { cache: "no-cache" })
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`)
  const source = await res.text()
  // @ts-expect-error — Babel loaded at runtime
  const out = window.Babel.transform(source, {
    presets: ["env", "react"],
    sourceType: "script",
    filename: url.split("/").pop() || "anonymous.jsx",
  })
  const s = document.createElement("script")
  s.dataset.cegJsx = url
  s.text = `//# sourceURL=${url}\n${out.code}`
  document.head.appendChild(s)
}

export default function CommercialDivingPage() {
  const mounted = useRef(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    let cancelled = false
    ;(async () => {
      try {
        await loadExternalScript(CDN_REACT)
        await loadExternalScript(CDN_REACT_DOM)
        await loadExternalScript(CDN_BABEL)
        for (const url of JSX_FILES) {
          if (cancelled) return
          await runJsxFile(url)
        }
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        if (!cancelled) setError(msg)
      }
    })()
    return () => { cancelled = true }
  }, [])

  return (
    <>
      {error && (
        <div role="alert" style={{ padding: 24, margin: 24, border: "1px solid #b00020",
          color: "#b00020", fontFamily: "ui-monospace, monospace", fontSize: 13, background: "#fff5f5" }}>
          <strong>Failed to mount Commercial Diving page:</strong> {error}
        </div>
      )}
      <div id="root" />
    </>
  )
}
