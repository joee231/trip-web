"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
            Stay Updated with Travel Deals
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter and be the first to know about exclusive offers, new destinations, and travel tips.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-secondary">
              <CheckCircle className="h-6 w-6" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 px-4"
              />
              <Button type="submit" className="h-12 px-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
