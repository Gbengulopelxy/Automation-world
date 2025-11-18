// components/Services.tsx
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Mic, 
  MessageSquare, 
  Globe, 
  Plug,
  Workflow,
  Zap,
  Network,
  Settings2
} from "lucide-react"
import Link from "next/link"

// Sample data object - excluding Automation (will be separate section)
const services = [
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
    <>
      {/* Dedicated Automation Section */}
      <section id="automation" className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#1e293b] border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                    <Workflow className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-white">Automation</CardTitle>
                    <p className="text-slate-400 mt-1">Intelligent Workflow Automation</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-slate-300 leading-relaxed mb-6">
                  Transform repetitive workflows with intelligent automation that reduces manual tasks by up to 80% while eliminating human error and boosting productivity. Our automation solutions integrate seamlessly with your existing systems, scaling effortlessly as your business grows.
                </CardDescription>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">Lightning Fast</p>
                      <p className="text-slate-400 text-xs">Execute tasks in milliseconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Network className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">Seamless Integration</p>
                      <p className="text-slate-400 text-xs">Works with your existing tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">Customizable</p>
                      <p className="text-slate-400 text-xs">Tailored to your needs</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="#case-studies"
                  className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-2 transition-colors"
                >
                  View automation case studies
                  <span aria-hidden="true">→</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section id="services" className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card 
                  key={service.title} 
                  className="flex flex-col bg-[#1e293b] border border-slate-700/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-4 border border-primary/30">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base mb-4 text-slate-300 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Link
                      href="#case-studies"
                      className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-1 transition-colors"
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
    </>
  )
}
