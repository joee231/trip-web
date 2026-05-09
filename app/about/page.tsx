import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AboutContent } from "@/components/about-content"

export const metadata = {
  title: "About Us | Nomara Travel",
  description: "Learn about Nomara Travel - Born to Roam. Discover our story, mission, and why travelers trust us for their journeys.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
