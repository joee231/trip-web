import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plane, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <Plane className="absolute top-20 right-1/4 w-20 h-20 text-white transform rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
            Let us help you create memories that will last a lifetime. Browse our curated travel packages or contact us for a custom itinerary tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 text-lg px-8"
            >
              <Link href="/trips">
                Explore Our Trips
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
