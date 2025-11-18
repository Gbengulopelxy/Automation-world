// components/ContactForm.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

interface FormData {
  fullName: string
  email: string
  company: string
  budget: string
  message: string
  honeypot: string // Hidden field for spam protection
}

interface FormErrors {
  fullName?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    honeypot: "", // Should remain empty - bots will fill this
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters"
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name as keyof FormErrors]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check - if filled, it's likely spam
    if (formData.honeypot) {
      console.warn("Honeypot field filled - potential spam submission")
      // Silently fail without showing error to user
      return
    }

    // Client-side validation
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // POST to /api/lead endpoint
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || undefined,
          budget: formData.budget || undefined,
          message: formData.message.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form")
      }

      // Success toast
      toast({
        variant: "success",
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        budget: "",
        message: "",
        honeypot: "",
      })
      setErrors({})
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="honeypot">Leave this field empty</Label>
                  <Input
                    id="honeypot"
                    name="honeypot"
                    type="text"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget</Label>
                  <Select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5-25k">$5,000 - $25,000</option>
                    <option value="25-100k">$25,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
