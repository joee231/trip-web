import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CreditCard, Banknote, Smartphone, Shield, Lock, CheckCircle, ArrowRight, AlertCircle } from "lucide-react"

const paymentMethods = [
  {
    icon: Banknote,
    title: "Cash Payment",
    description: "Pay in cash at our office in Smouha, Alexandria. Available in EGP or USD.",
  },
  {
    icon: CreditCard,
    title: "Visa Card",
    description: "We accept Visa credit and debit cards for secure payments.",
  },
  {
    icon: Smartphone,
    title: "InstaPay",
    description: "Quick and convenient mobile payments accepted for deposits and balances.",
  },
]

const bookingProcess = [
  {
    step: 1,
    title: "Select Your Trip",
    description: "Browse our packages and choose your perfect travel experience.",
  },
  {
    step: 2,
    title: "Contact Us",
    description: "Reach out via WhatsApp, phone, or email to confirm availability.",
  },
  {
    step: 3,
    title: "Pay Deposit",
    description: "A deposit is required to confirm the booking.",
  },
  {
    step: 4,
    title: "Receive Confirmation",
    description: "Get your booking confirmation and detailed itinerary.",
  },
  {
    step: 5,
    title: "Pay Balance",
    description: "Full payment must be completed before the travel date.",
  },
  {
    step: 6,
    title: "Travel!",
    description: "Enjoy your amazing journey with Nomara Travel.",
  },
]

const securityFeatures = [
  "All transactions are encrypted and secure",
  "We never store your full payment details",
  "Official receipts provided for all payments",
  "Licensed and registered travel agency",
  "Refund protection as per our policy",
]

const faqs = [
  {
    question: "What is the required deposit amount?",
    answer: "A deposit is required to confirm the booking. The exact amount depends on the package and travel dates. Our team will advise you on the specific deposit required for your chosen trip.",
  },
  {
    question: "When is the final payment due?",
    answer: "Full payment must be completed before the travel date. We recommend paying at least 7 days before departure to ensure smooth processing of all arrangements.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Cash, Visa cards, and InstaPay. All payment methods are secure and you will receive official receipts for every transaction.",
  },
  {
    question: "What about cancellation charges?",
    answer: "Cancellation charges may apply according to the cancellation policy. Please refer to our Pricing Policy page for detailed cancellation terms and refund information.",
  },
  {
    question: "Will I receive a receipt for my payment?",
    answer: "Yes, we provide official receipts for all payments. You will receive both digital and printed receipts upon request.",
  },
  {
    question: "Is my payment secure?",
    answer: "Absolutely. We use secure payment methods and never store sensitive payment information. All transactions are encrypted and protected.",
  },
]

export function PaymentPolicyContent() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Payment Policy</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Secure, flexible payment options for your peace of mind. Multiple methods accepted for your convenience.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-secondary font-semibold mb-3">Options</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Accepted Payment Methods
            </h2>
            <p className="text-muted-foreground">
              Choose the payment method that&apos;s most convenient for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-secondary font-semibold mb-3">How It Works</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Booking & Payment Process
            </h2>
            <p className="text-muted-foreground">
              A simple, straightforward process from selection to departure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookingProcess.map((item, index) => (
                <Card key={index} className="border-none shadow-md relative">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                  {index < bookingProcess.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 -translate-y-1/2 text-muted-foreground hidden lg:block" />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Payment Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle>Deposit Requirements</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">A deposit is required to confirm booking</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">Deposit secures your spot and room allocation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">Amount varies by package type</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">Contact us for exact deposit amount</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg">
                <CardTitle>Balance Payment</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">Full payment must be completed before travel date</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">Payment reminders sent via WhatsApp</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">Late payments may affect your booking</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground">Cash, Visa, and InstaPay accepted</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cancellation Notice */}
          <div className="max-w-5xl mx-auto mt-8">
            <div className="p-4 bg-amber-50 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
              <div className="text-sm text-amber-800">
                <p className="font-semibold mb-1">Cancellation Notice:</p>
                <p>Cancellation charges may apply according to the cancellation policy. Please review our <Link href="/pricing-policy" className="underline font-semibold">Pricing Policy</Link> for detailed cancellation terms before booking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Secure Payments</h3>
                    <p className="text-muted-foreground">Your financial security is our priority</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Lock className="h-4 w-4 text-secondary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-secondary font-semibold mb-3">FAQ</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Payment Questions
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-serif text-foreground mb-4">
            Ready to Book Your Adventure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start planning your journey today. Contact us to check availability and secure your booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/trips">Browse Trips</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
