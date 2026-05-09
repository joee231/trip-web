import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PaymentPolicyContent } from "@/components/payment-policy-content"

export const metadata = {
  title: "Payment Policy | Nomara Travel",
  description: "Understand our payment methods, deposit requirements, and secure booking process.",
}

export default function PaymentPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PaymentPolicyContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
