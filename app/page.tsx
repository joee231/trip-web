import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HeroSection } from "@/components/sections/hero"
import { FeaturedTripSection } from "@/components/sections/featured-trip"
import { ServicesSection } from "@/components/sections/services"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { NewsletterSection } from "@/components/sections/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedTripSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
