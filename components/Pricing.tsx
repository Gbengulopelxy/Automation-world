// components/Pricing.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Check } from "lucide-react"

// Sample data object
interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$2,999",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "Basic chatbot implementation",
      "Up to 1,000 interactions/month",
      "Email support",
      "2 integrations",
      "Basic analytics dashboard",
      "Setup and onboarding",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$7,999",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Advanced chatbot + voice agent",
      "Up to 10,000 interactions/month",
      "Priority support (4-hour response)",
      "5 integrations",
      "Advanced analytics & reporting",
      "Custom AI model training",
      "Dedicated account manager",
      "Quarterly strategy reviews",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Complete AI transformation for large organizations",
    features: [
      "End-to-end AI solutions",
      "Unlimited interactions",
      "24/7 dedicated support",
      "Unlimited integrations",
      "Custom AI development",
      "White-label solutions",
      "On-site training & consultation",
      "SLA guarantee",
      "Dedicated AI team",
    ],
    cta: "Contact for Enterprise",
  },
]

export default function Pricing() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)

  const handleContactEnterprise = () => {
    // Scroll to contact section or handle navigation
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section id="pricing" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col ${
                  tier.popular
                    ? "border-2 border-primary shadow-lg scale-105"
                    : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="mt-2">
                    {tier.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.price !== "Custom" && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  {tier.name === "Enterprise" ? (
                    <Button
                      variant={tier.popular ? "default" : "outline"}
                      className="w-full"
                      size="lg"
                      onClick={handleContactEnterprise}
                    >
                      {tier.cta}
                    </Button>
                  ) : (
                    <Button
                      variant={tier.popular ? "default" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      {tier.cta}
                    </Button>
                  )}

                  <Button
                    variant="ghost"
                    className="w-full text-primary"
                    onClick={() => setIsPricingModalOpen(true)}
                  >
                    View pricing details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View Pricing Details Modal */}
          <Dialog open={isPricingModalOpen} onOpenChange={setIsPricingModalOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Detailed Pricing Information</DialogTitle>
                <DialogDescription>
                  Comprehensive breakdown of all pricing tiers and features
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 mt-4">
                {pricingTiers.map((tier) => (
                  <div key={tier.name} className="border-b last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{tier.name}</h3>
                      <div>
                        <span className="text-2xl font-bold">{tier.price}</span>
                        {tier.price !== "Custom" && (
                          <span className="text-muted-foreground">/month</span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{tier.description}</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {tier.name === "Starter" && (
                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Additional Info:</strong> Monthly reports included. Setup support for 2 weeks. Standard response time: 24-48 hours.
                        </p>
                      </div>
                    )}
                    {tier.name === "Growth" && (
                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Additional Info:</strong> Real-time analytics. Priority setup with dedicated specialist. Quarterly strategy reviews. API access included.
                        </p>
                      </div>
                    )}
                    {tier.name === "Enterprise" && (
                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Additional Info:</strong> Custom SLA terms. Dedicated AI team. On-site deployment available. Monthly executive briefings. All features fully customizable.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  All plans include a 14-day free trial. No credit card required.{" "}
                  <a href="#contact" className="text-primary hover:underline">
                    Contact us
                  </a>{" "}
                  for custom enterprise solutions.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
