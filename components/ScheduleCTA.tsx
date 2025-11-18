// components/ScheduleCTA.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "lucide-react"

interface ScheduleCTAProps {
  /** External calendar link (e.g., Calendly URL) */
  calendarLink?: string
  /** Modal title */
  modalTitle?: string
  /** Modal description */
  modalDescription?: string
}

export default function ScheduleCTA({
  calendarLink = "https://calendly.com/echoworks-ai/consultation",
  modalTitle = "Schedule a Meeting",
  modalDescription = "Choose your preferred date and time for a free 30-minute consultation.",
}: ScheduleCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBookMeeting = () => {
    if (calendarLink) {
      // Open external calendar link (e.g., Calendly)
      window.open(calendarLink, "_blank", "noopener,noreferrer")
    } else {
      // Open modal with date picker placeholder
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <Card className="border-2 border-primary">
        <CardHeader>
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Prefer to talk directly?</CardTitle>
          <CardDescription>
            Schedule a free 30-minute consultation call with our AI experts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-6">
            During the call, we'll discuss your business needs, explore AI
            opportunities, and provide a customized solution roadmap—all
            with no obligation.
          </p>
          <Button
            onClick={handleBookMeeting}
            className="w-full"
            size="lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book meeting
          </Button>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            Available Monday - Friday, 9 AM - 6 PM EST
          </p>
        </CardContent>
      </Card>

      {/* Modal with Date Picker Placeholder */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogDescription>{modalDescription}</DialogDescription>
          </DialogHeader>

          <div className="py-6">
            {/* Date Picker Placeholder */}
            <div className="space-y-4">
              <div className="p-8 border-2 border-dashed border-muted rounded-lg text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Date picker integration placeholder
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  To implement a full date picker, you can use libraries like:
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 text-left max-w-xs mx-auto">
                  <li>• react-day-picker</li>
                  <li>• @radix-ui/react-popover + react-day-picker</li>
                  <li>• Embed Calendly widget directly</li>
                </ul>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    onClick={() => window.open(calendarLink, "_blank")}
                  >
                    Or open calendar link
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Confirm Selection
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

