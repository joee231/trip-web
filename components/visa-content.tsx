"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FileText, CheckCircle, Clock, Globe, Shield, AlertCircle, ArrowRight, MessageCircle, XCircle, Building2 } from "lucide-react"

const eVisaEligibility = [
  "Applicants 15 years old or younger",
  "Applicants 45 years old or older",
]

const eVisaAdvantages = [
  "Fully issued online (no embassy visit needed)",
  "Processing time: 1 hour to 24 hours",
  "Simple process with no complicated documents",
  "Valid for up to 180 days",
  "Maximum stay: up to 30 days",
]

const alternativeRequirements = [
  "Valid Schengen visa or residency",
  "OR valid USA visa or residency",
  "OR valid UK visa or residency",
]

const embassyDocuments = [
  "Job proof / employment letter",
  "Bank statement",
  "Travel insurance",
  "Flight reservation",
  "Hotel booking",
]

const faqs = [
  {
    question: "What is an e-Visa?",
    answer: "An e-Visa (electronic visa) is an official document that allows you to enter Turkey. It is issued electronically and linked to your passport number, eliminating the need for a physical visa stamp or embassy visit.",
  },
  {
    question: "Who is eligible for the Turkey e-Visa?",
    answer: "The e-Visa is easily available for applicants 15 years old or younger, and applicants 45 years old or older. Those between 15-45 years must have a valid Schengen, USA, or UK visa/residency.",
  },
  {
    question: "How long does the e-Visa process take?",
    answer: "The Turkey e-Visa typically takes between 1 hour to 24 hours to process. We recommend applying at least a few days before your travel date for peace of mind.",
  },
  {
    question: "What if I am not eligible for e-Visa?",
    answer: "Applicants between 15 and 45 years old without a valid Schengen/USA/UK visa must apply through the Turkish Embassy. Processing takes 1 to 3 weeks and requires additional documentation.",
  },
  {
    question: "What documents do I need for embassy visa?",
    answer: "Embassy visa requires: job proof/employment letter, bank statement, travel insurance, flight reservation, and hotel booking. The approximate fee is $208.",
  },
]

export function VisaContent() {
  const handleApplyNow = () => {
    const confirmed = window.confirm(
      `Apply for Turkey E-Visa\n\n` +
      `E-Visa Fee: 2,500 EGP\n\n` +
      `Requirements:\n` +
      `- Passport valid for at least 6 months\n` +
      `- Age 15 or younger, OR 45 or older\n` +
      `- OR valid Schengen/USA/UK visa\n\n` +
      `Click OK to proceed to WhatsApp.`
    )
    
    if (confirmed) {
      const message = `Hello! I would like to apply for a Turkey e-Visa.\n\nPlease let me know the requirements and next steps.`
      window.open(`https://wa.me/201066578901?text=${encodeURIComponent(message)}`, '_blank')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Turkey E-Visa Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fast, easy, and hassle-free Turkey e-Visa processing. Get your visa in as little as 1 hour!
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1-24 Hours</h3>
                <p className="text-sm text-muted-foreground">Processing Time</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">2,500 EGP</h3>
                <p className="text-sm text-muted-foreground">E-Visa Fee</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">180 Days</h3>
                <p className="text-sm text-muted-foreground">Visa Validity</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">30 Days</h3>
                <p className="text-sm text-muted-foreground">Maximum Stay</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-Visa Eligibility */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Easy E-Visa */}
            <Card className="border-none shadow-xl">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Easy E-Visa Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  The online visa is available easily for:
                </p>
                <div className="space-y-3 mb-6">
                  {eVisaEligibility.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-muted rounded-lg mb-6">
                  <p className="text-sm font-semibold text-foreground mb-2">General Requirement:</p>
                  <p className="text-sm text-muted-foreground">Passport must be valid for at least 6 months</p>
                </div>

                <h4 className="font-semibold text-foreground mb-3">E-Visa Advantages:</h4>
                <div className="space-y-2">
                  {eVisaAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{advantage}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">E-Visa Fee</p>
                      <p className="text-2xl font-bold text-secondary">2,500 EGP</p>
                    </div>
                    <Button 
                      onClick={handleApplyNow}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alternative Requirements */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-amber-50">
                  <CardTitle className="flex items-center gap-2 text-amber-800">
                    <AlertCircle className="h-5 w-5" />
                    For Ages 15-45
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    If you are between 15 and 45 years old, you must have ONE of the following:
                  </p>
                  <div className="space-y-3">
                    {alternativeRequirements.map((req, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                        <span className="text-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="bg-destructive/10">
                  <CardTitle className="flex items-center gap-2 text-destructive">
                    <Building2 className="h-5 w-5" />
                    Embassy Visa (If Not Eligible for E-Visa)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Applicants between 15 and 45 years old without a valid Schengen/USA/UK visa must apply through the Turkish Embassy.
                  </p>
                  
                  <div className="p-4 bg-muted rounded-lg mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Approximate Fee:</span>
                      <span className="font-bold text-foreground">~$208</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Processing Time:</span>
                      <span className="font-medium text-foreground">1-3 weeks</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-foreground mb-3">Required Documents:</h4>
                  <div className="space-y-2">
                    {embassyDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FileText className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-secondary font-semibold mb-3">How It Works</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              E-Visa Application Process
            </h2>
            <p className="text-muted-foreground">
              Simple steps to get your Turkey e-Visa
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Contact Us", desc: "Reach out via WhatsApp or phone" },
                { step: 2, title: "Submit Info", desc: "Provide passport details" },
                { step: 3, title: "Make Payment", desc: "Pay the 2,500 EGP fee" },
                { step: 4, title: "Receive Visa", desc: "Get e-Visa in 1-24 hours" },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-md text-center relative">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                  {index < 3 && (
                    <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground hidden md:block" />
                  )}
                </Card>
              ))}
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
              Frequently Asked Questions
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
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-xl bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                Ready to Apply for Your Turkey Visa?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Contact us today and get your e-Visa processed in as little as 1 hour. Our team is ready to assist you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={handleApplyNow}
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <a href="https://wa.me/201066578901" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
