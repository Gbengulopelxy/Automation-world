// components/CaseStudies.tsx
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
import { ArrowRight } from "lucide-react"

// Sample data object
interface CaseStudy {
  id: string
  title: string
  thumbnail: string
  problem: string
  solution: string
  outcome: string
  metrics: string
  industry: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "E-Commerce Customer Support Automation",
    thumbnail: "/images/case-study-thumb-1.jpg", // Placeholder - replace with actual image
    problem: "A leading online retailer struggled with high customer support costs and slow response times during peak shopping seasons, leading to customer dissatisfaction.",
    solution: "Implemented AI-powered chatbots and voice agents that handle common inquiries, order tracking, and returns processing. Integrated with existing CRM and inventory systems for real-time updates.",
    outcome: "Significantly reduced support costs while improving customer satisfaction through instant, accurate responses available 24/7.",
    metrics: "Reduced manual tasks by 70%, 90% faster response time, 60% cost reduction",
    industry: "E-Commerce",
  },
  {
    id: "2",
    title: "Healthcare Appointment Scheduling System",
    thumbnail: "/images/case-study-thumb-2.jpg", // Placeholder - replace with actual image
    problem: "A healthcare network faced scheduling inefficiencies, high no-show rates, and staff overload from handling appointment calls manually during business hours.",
    solution: "Built an intelligent voice agent system that handles appointment scheduling, patient inquiries, medication reminders, and follow-up calls autonomously with HIPAA-compliant data handling.",
    outcome: "Streamlined appointment management, improved patient experience, and freed up staff time for direct patient care.",
    metrics: "50% reduction in no-shows, 24/7 availability, reduced manual scheduling by 75%",
    industry: "Healthcare",
  },
  {
    id: "3",
    title: "Financial Services Document Processing",
    thumbnail: "/images/case-study-thumb-3.jpg", // Placeholder - replace with actual image
    problem: "A fintech startup struggled with manual document processing for loan applications, resulting in slow turnaround times and high error rates that impacted customer satisfaction.",
    solution: "Deployed end-to-end AI solution for automated document processing, data extraction, risk assessment, and compliance checking. Integrated with existing banking systems and credit bureaus.",
    outcome: "Transformed loan processing workflow, enabling faster approvals while maintaining accuracy and regulatory compliance.",
    metrics: "75% faster processing, 99.5% accuracy, reduced manual tasks by 80%",
    industry: "Financial Services",
  },
]

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  const handleViewDetails = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy)
  }

  return (
    <>
      <section id="case-studies" className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Case Studies
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real results from real businesses we've transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card key={study.id} className="flex flex-col bg-[#1e293b] border border-slate-700/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs bg-primary/90 text-primary-foreground px-2 py-1 rounded">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Problem:</p>
                    <CardDescription className="text-sm">{study.problem}</CardDescription>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Solution:</p>
                    <CardDescription className="text-sm">{study.solution}</CardDescription>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm font-semibold text-primary">{study.metrics}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleViewDetails(study)}
                  >
                    View details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={!!selectedCaseStudy} onOpenChange={(open) => !open && setSelectedCaseStudy(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedCaseStudy && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                    {selectedCaseStudy.industry}
                  </span>
                </div>
                <DialogTitle className="text-2xl">{selectedCaseStudy.title}</DialogTitle>
                <DialogDescription className="text-base">
                  Complete case study details
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Thumbnail */}
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden">
                  <img
                    src={selectedCaseStudy.thumbnail}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                </div>

                {/* Problem */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">The Problem</h3>
                  <p className="text-muted-foreground">{selectedCaseStudy.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Solution</h3>
                  <p className="text-muted-foreground">{selectedCaseStudy.solution}</p>
                </div>

                {/* Outcome */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">The Outcome</h3>
                  <p className="text-muted-foreground">{selectedCaseStudy.outcome}</p>
                </div>

                {/* Metrics */}
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Key Results</h3>
                  <p className="text-primary font-semibold text-lg">{selectedCaseStudy.metrics}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
