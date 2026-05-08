import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { VisaContent } from "@/components/visa-content"

export const metadata = {
  title: "E-Visa Services | Nomara Travel",
  description: "Hassle-free visa processing and e-visa assistance for your international journeys. Let us handle the paperwork.",
}

export default function VisaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VisaContent />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  )
}
