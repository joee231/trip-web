import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PricingPolicyContent } from "@/components/pricing-policy-content"

export const metadata = {
  title: "Pricing Policy | Nomara Travel",
  description: "Understand our transparent pricing policy. No hidden fees, clear terms, and flexible options.",
}

export default function PricingPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingPolicyContent />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
