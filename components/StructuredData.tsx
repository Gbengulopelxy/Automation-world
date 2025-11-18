// components/StructuredData.tsx
/**
 * JSON-LD Structured Data for SEO
 * 
 * Provides rich snippets for search engines:
 * - Organization schema
 * - WebSite schema
 * - BreadcrumbList schema (optional)
 */

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EchoWorks AI",
    url: "https://echoworks.ai",
    logo: "https://echoworks.ai/images/logo.png",
    description: "Leading AI agency specializing in automation, voice agents, chatbots, and end-to-end AI solutions.",
    sameAs: [
      "https://twitter.com/echoworksai",
      "https://linkedin.com/company/echoworksai",
      "https://facebook.com/echoworksai",
      "https://instagram.com/echoworksai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "Customer Service",
      email: "contact@echoworks.ai",
      availableLanguage: ["English"],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EchoWorks AI",
    url: "https://echoworks.ai",
    description: "Transform your business with AI solutions including automation, voice agents, chatbots, and custom AI integrations.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://echoworks.ai/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Solutions and Automation Services",
    provider: {
      "@type": "Organization",
      name: "EchoWorks AI",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Automation Services",
        },
        {
          "@type": "OfferCatalog",
          name: "Voice Agents",
        },
        {
          "@type": "OfferCatalog",
          name: "Chatbot Development",
        },
        {
          "@type": "OfferCatalog",
          name: "Website & Product Builds",
        },
        {
          "@type": "OfferCatalog",
          name: "Custom AI Integrations",
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}

