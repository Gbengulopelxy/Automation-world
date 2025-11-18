// components/Services.tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Sparkles, 
  Mic, 
  MessageSquare, 
  Globe, 
  Plug 
} from "lucide-react"
import Link from "next/link"

// Sample data object
const services = [
  {
    icon: Sparkles,
    title: "Automation",
    description: "Transform repetitive workflows with intelligent automation that reduces manual tasks by up to 80% while eliminating human error.",
  },
  {
    icon: Mic,
    title: "Voice Agents",
    description: "Deploy advanced voice AI agents that handle customer calls, support requests, and internal communications 24/7 seamlessly.",
  },
  {
    icon: MessageSquare,
    title: "Chatbot Development",
    description: "Build intelligent chatbots that understand context, provide instant responses, and scale your customer support effortlessly.",
  },
  {
    icon: Globe,
    title: "Website & Product Builds",
    description: "Create stunning AI-powered websites and products that adapt to user behavior and optimize conversion rates automatically.",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    description: "Seamlessly integrate AI capabilities into your existing systems with custom solutions tailored to your unique business needs.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Link
                    href="#case-studies"
                    className="text-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
