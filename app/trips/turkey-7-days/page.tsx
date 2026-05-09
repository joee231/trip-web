import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TripDetailContent } from "@/components/trip-detail-content"

export const metadata = {
  title: "Turkey 7 Days / 6 Nights | Nomara Travel",
  description: "Experience the best of Turkey with our premium 7-day package including Istanbul, Sapanca, Bursa, and more.",
}

export default function TurkeyTripPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <TripDetailContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
