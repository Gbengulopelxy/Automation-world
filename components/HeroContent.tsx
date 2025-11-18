// components/HeroContent.tsx
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

interface HeroContentProps {
  /** Headline variant (1, 2, or 3) */
  headlineVariant?: 1 | 2 | 3
  /** Custom headline text (overrides variant if provided) */
  customHeadline?: string
  /** Subheadline text */
  subheadline?: string
  /** Primary CTA click handler */
  onPrimaryCtaClick?: () => void
  /** Secondary CTA click handler */
  onSecondaryCtaClick?: () => void
}

const headlineVariants = {
  1: "Transform Your Business with AI",
  2: "The Future of Business is Intelligent",
  3: "Unlock Your Potential with AI-Powered Solutions",
}

export default function HeroContent({
  headlineVariant = 1,
  customHeadline,
  subheadline = "Automation, voice agents, chatbots, and end-to-end AI solutions that drive real results",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: HeroContentProps) {
  const headline = customHeadline || headlineVariants[headlineVariant]

  const handlePrimaryClick = () => {
    if (onPrimaryCtaClick) {
      onPrimaryCtaClick()
    } else {
      // Default behavior: scroll to contact section
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleSecondaryClick = () => {
    if (onSecondaryCtaClick) {
      onSecondaryCtaClick()
    } else {
      // Default behavior: scroll to pricing section
      const pricingSection = document.getElementById("pricing")
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
        {headline}
      </h1>
      {subheadline && (
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
          {subheadline}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg"
          onClick={handlePrimaryClick}
          aria-label="Get a free consultation to discuss your AI needs"
        >
          <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
          Get a free consult
          <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm"
          onClick={handleSecondaryClick}
          aria-label="View our pricing plans and packages"
        >
          View pricing
        </Button>
      </div>
    </div>
  )
}

