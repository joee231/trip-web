import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DollarSign, Percent, Calendar, Shield, AlertCircle, CheckCircle, XCircle, Plane, Star } from "lucide-react"

const pricingIncludes = [
  "Special 10% discount on all package prices for bookings made until the end of August only",
  "Accommodation in a 3-star hotel near the airport with breakfast included",
  "Round-trip flight tickets with EgyptAir",
  "Turkey e-Visa",
  "Airport transfers and transportation between the hotel and attractions",
  "English-speaking tour guide",
  "Entrance fees for attractions included in the itinerary only",
]

const pricingExcludes = [
  "Optional activities and personal expenses",
  "Turkey Visa through VoyaVisa (if applicable)",
  "Tips for guides, drivers, and hotel staff",
  "Travel insurance (recommended)",
  "Any meals not specified in the itinerary",
  "Any services not mentioned in the inclusions",
]

const cancellationPolicy = [
  {
    period: "30+ days before departure",
    refund: "Full refund minus administrative fees (5%)",
  },
  {
    period: "15-29 days before departure",
    refund: "70% refund",
  },
  {
    period: "7-14 days before departure",
    refund: "50% refund",
  },
  {
    period: "Less than 7 days before departure",
    refund: "No refund",
  },
  {
    period: "No-show",
    refund: "No refund",
  },
]

const faqs = [
  {
    question: "Are prices per person or per group?",
    answer: "All prices are quoted per person unless specifically stated otherwise. Group discounts may be available for parties of 6 or more travelers.",
  },
  {
    question: "Do children get discounts?",
    answer: "Children up to 11 years old often stay free when sharing beds with parents. Children 12 and above are charged as adults. Baby cribs (0-2 years) are available free of charge subject to availability.",
  },
  {
    question: "Are prices in EGP or USD?",
    answer: "We accept payments in both Egyptian Pounds (EGP) and US Dollars (USD). Prices are typically quoted in USD with the EGP equivalent provided at current exchange rates.",
  },
  {
    question: "What if exchange rates change after booking?",
    answer: "Once you have paid in full, your price is locked in regardless of currency fluctuations. For deposits, the remaining balance may be subject to exchange rate adjustments.",
  },
  {
    question: "What about flight price increases?",
    answer: "The customer shall bear any increase in flight prices as a result of availability, exchange rates, or seasonal changes. We recommend booking early to lock in the best rates.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. We believe in transparent pricing. All mandatory costs are included in the quoted price. Optional activities and personal expenses are clearly listed as exclusions.",
  },
]

export function PricingPolicyContent() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Pricing Policy</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We believe in transparent, fair pricing. Here&apos;s everything you need to know about our pricing structure.
          </p>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-secondary-foreground" />
              <div>
                <h3 className="text-xl font-bold text-secondary-foreground">Special Offer: 10% OFF</h3>
                <p className="text-secondary-foreground/80">On all package bookings until the end of August!</p>
              </div>
            </div>
            <Button asChild variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <Link href="/trips">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Transparent Pricing</h3>
                <p className="text-sm text-muted-foreground">No hidden fees or surprises</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Percent className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">10% Discount</h3>
                <p className="text-sm text-muted-foreground">Book before end of August</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">EgyptAir Flights</h3>
                <p className="text-sm text-muted-foreground">Round-trip included</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">E-Visa Included</h3>
                <p className="text-sm text-muted-foreground">Turkey visa processing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included/Excluded */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              What&apos;s Included in Our Prices
            </h2>
            <p className="text-muted-foreground">
              Understanding what&apos;s covered helps you plan your budget effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-secondary/10">
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="h-5 w-5" />
                  Included in Price
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {pricingIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-destructive/10">
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <XCircle className="h-5 w-5" />
                  Not Included in Price
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {pricingExcludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Note */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="p-4 bg-amber-50 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">Important Note:</p>
                <p>The customer shall bear any increase in flight prices as a result of availability, exchange rates, or seasonal changes. We recommend booking early to secure the best rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-secondary font-semibold mb-3">Refunds</span>
              <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
                Cancellation & Refund Policy
              </h2>
              <p className="text-muted-foreground">
                We understand plans can change. Here&apos;s our fair cancellation policy.
              </p>
            </div>

            <Card className="border-none shadow-xl overflow-hidden">
              <div className="divide-y">
                {cancellationPolicy.map((policy, index) => (
                  <div key={index} className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                        {index + 1}
                      </div>
                      <span className="font-medium text-foreground">{policy.period}</span>
                    </div>
                    <span className={`font-semibold ${policy.refund.includes("No refund") ? "text-destructive" : "text-secondary"}`}>
                      {policy.refund}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">Important Notes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cancellations must be submitted in writing via email or WhatsApp</li>
                  <li>Refunds are processed within 7-14 business days</li>
                  <li>Flight cancellation fees are subject to airline policies</li>
                  <li>Special promotions may have different cancellation terms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-secondary font-semibold mb-3">FAQ</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Pricing Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4 shadow-sm bg-card">
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-serif text-foreground mb-4">
            Have Questions About Pricing?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is happy to provide detailed quotes and answer any questions about our pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/payment-policy">Payment Policy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
