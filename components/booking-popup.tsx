"use client"

import { useState } from "react"
import { X, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BookingPopupProps {
  isOpen: boolean
  onClose: () => void
  tripTitle: string
  price: number
  currency: string
}

export function BookingPopup({ isOpen, onClose, tripTitle, price, currency }: BookingPopupProps) {
  const [step, setStep] = useState<"form" | "success">("form")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("success")
  }

  const handleClose = () => {
    setStep("form")
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      specialRequests: "",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in duration-300">
      <Card className="w-full max-w-md shadow-2xl border-none animate-in zoom-in-95 duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b pb-4">
          <CardTitle className="text-xl">Book Your Trip</CardTitle>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </CardHeader>

        <CardContent className="pt-6">
          {step === "form" ? (
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-foreground mb-1">{tripTitle}</h3>
                <p className="text-sm text-muted-foreground">
                  {price.toLocaleString()} {currency} per person
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+20 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-foreground mb-1">
                    Special Requests (optional)
                  </label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Let us know any special requests or dietary restrictions..."
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    className="text-sm resize-none"
                    rows={3}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  >
                    Continue Booking
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  You will be redirected to{" "}
                  <a
                    href="https://www.reservationnomara.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    www.reservationnomara.com
                  </a>
                  {" "}to complete your booking.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Booking Submitted!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you, {formData.fullName}! Your booking request has been received.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                We will send you a confirmation email shortly and redirect you to complete your booking at our reservation portal.
              </p>
              <Button
                onClick={handleClose}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Done
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full mt-2"
              >
                <a href="https://www.reservationnomara.com" target="_blank" rel="noopener noreferrer">
                  Go to Reservation Portal
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
