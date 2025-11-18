// components/Pricing.tsx - REPLACED WITH "HOW IT WORKS" SECTION
"use client"

import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Search, 
  Code, 
  Rocket,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const steps: Step[] = [
  {
    number: 1,
    title: "Book a Call",
    description: "Schedule a free 30-minute strategy call with our AI experts. We'll discuss your business needs, challenges, and explore how AI can transform your operations.",
    icon: Calendar,
  },
  {
    number: 2,
    title: "Discovery & Planning",
    description: "We conduct a deep dive into your workflows, systems, and goals. Our team creates a customized roadmap tailored to your specific requirements and timeline.",
    icon: Search,
  },
  {
    number: 3,
    title: "Build & Test",
    description: "We develop your AI solution using cutting-edge technology, test it thoroughly in your environment, and iterate based on your feedback until it's perfect.",
    icon: Code,
  },
  {
    number: 4,
    title: "Launch & Scale",
    description: "We deploy your solution seamlessly, provide comprehensive training, and offer ongoing support to ensure your AI agents deliver maximum value as you scale.",
    icon: Rocket,
  },
]

export default function Pricing() {
  const handleBookCall = () => {
    // Scroll to contact section or open calendar
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback to calendar link
      window.open(process.env.NEXT_PUBLIC_CALENDAR_URL || "https://calendly.com/echoworks-ai/consultation", "_blank")
    }
  }

  return (
    <section id="how-it-works" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From initial consultation to deployment, we guide you through every step of your AI transformation
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={step.number}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Step Content Card */}
                    <div className={`flex-1 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                      <div className="bg-[#1e293b] border border-slate-700/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 flex-shrink-0">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                                STEP {step.number}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                              {step.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Number Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-[#0f172a] shadow-lg">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-primary/50" />
                      )}
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Your AI Agent?
              </h3>
              <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                Start your transformation today with a free strategy call. No obligation, just insights and a clear path forward.
              </p>
              <Button
                onClick={handleBookCall}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-slate-400 mt-4">
                Available Monday - Friday, 9 AM - 6 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
