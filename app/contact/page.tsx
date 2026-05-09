import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ContactContent } from "@/components/contact-content"

export const metadata = {
  title: "Contact Us | Nomara Travel",
  description: "Get in touch with Nomara Travel. We're here to help you plan your perfect journey.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
