// components/Testimonials.tsx
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

// Sample data object
interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  logo?: string // Placeholder for company logo
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Inc.",
    content: "EchoWorks AI transformed our customer support operations. We've seen a 70% reduction in response time and our customer satisfaction scores are at an all-time high. Their team is incredibly professional and the AI solutions are cutting-edge.",
    logo: "/images/logos/techflow.svg", // Placeholder - replace with actual logo
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    role: "CTO",
    company: "HealthCare Solutions",
    content: "The voice agent system they built for us handles thousands of appointment calls daily. It's been a game-changer for our operations. The ROI was visible within the first month of deployment.",
    logo: "/images/logos/healthcare-solutions.svg", // Placeholder - replace with actual logo
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "Operations Director",
    company: "Global Retail Group",
    content: "Working with EchoWorks AI was seamless from start to finish. Their chatbot implementation exceeded our expectations, and the automation they set up saved us hundreds of hours per month. Highly recommend!",
    logo: "/images/logos/global-retail.svg", // Placeholder - replace with actual logo
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Auto-rotate every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <Card className="border-2">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                          <div className="flex-grow">
                            <p className="text-lg mb-6 text-foreground italic">
                              "{testimonial.content}"
                            </p>
                            <div className="border-t pt-4 flex items-center justify-between">
                              <div>
                                <p className="font-semibold text-foreground">
                                  {testimonial.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.role}, {testimonial.company}
                                </p>
                              </div>
                              {/* Company Logo Placeholder */}
                              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                                {testimonial.logo ? (
                                  <img
                                    src={testimonial.logo}
                                    alt={testimonial.company}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement
                                      target.style.display = "none"
                                    }}
                                  />
                                ) : (
                                  <span className="text-xs text-muted-foreground text-center px-2">
                                    {testimonial.company.substring(0, 2).toUpperCase()}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stacked List */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-2">
              <CardContent className="pt-6">
                <Quote className="h-6 w-6 text-primary mb-4" />
                <p className="text-sm mb-4 text-foreground italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  {/* Company Logo Placeholder */}
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    {testimonial.logo ? (
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                        }}
                      />
                    ) : (
                      <span className="text-xs text-muted-foreground text-center px-2">
                        {testimonial.company.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
