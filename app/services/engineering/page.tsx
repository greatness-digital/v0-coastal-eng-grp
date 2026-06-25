import type { Metadata } from "next"
import ServiceClient from "../ServiceClient"
import { serviceMetadata, serviceJsonLd } from "../service-seo"

const SERVICE_KEY = "engineering"

export const metadata: Metadata = serviceMetadata(SERVICE_KEY)

export default function MarineEngineeringPage() {
  const jsonLd = serviceJsonLd(SERVICE_KEY)
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ServiceClient serviceKey={SERVICE_KEY} />
    </>
  )
}
