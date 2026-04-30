import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Coastal Engineering Group — Heavy Marine Construction",
  description:
    "Veteran-owned, ADCI-certified marine contractor delivering integrated heavy-civil work across diving, engineering, dredging, construction, and marine services for NAVFAC, USACE, and the nation's port authorities.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — sourced from the original CEG index.html */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Playfair+Display:wght@400;500;600;700;800&family=Archivo:wght@400;500;600;700;800&family=Archivo+Narrow:wght@400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* CEG concept stylesheets */}
        <link rel="stylesheet" href="/ceg/styles.css" />
        <link rel="stylesheet" href="/ceg/drydock-body.css" />
        <link rel="stylesheet" href="/ceg/blueprint-body.css" />
      </head>
      <body className="antialiased" data-concept="tidemark">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
