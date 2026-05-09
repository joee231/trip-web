import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TripsContent } from "@/components/trips-content"

export const metadata = {
  title: "Our Trips | Nomara Travel",
  description: "Explore our curated travel packages. From Turkey adventures to custom destinations, find your perfect journey.",
}

export default function TripsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TripsContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
