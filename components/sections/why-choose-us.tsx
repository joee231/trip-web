import Image from "next/image"
import { Check } from "lucide-react"

const reasons = [
  {
    title: "Expert Local Guides",
    description: "Arabic-speaking tour guides who know every hidden gem and cultural insight.",
  },
  {
    title: "Carefully Curated Experiences",
    description: "Each tour is designed to offer authentic and memorable experiences.",
  },
  {
    title: "All-Inclusive Packages",
    description: "Transportation, meals, and activities included for a worry-free journey.",
  },
  {
    title: "Flexible Booking",
    description: "Easy booking process with flexible payment options and cancellation policies.",
  },
  {
    title: "Premium Accommodations",
    description: "Handpicked hotels that offer comfort, convenience, and value.",
  },
  {
    title: "Family-Friendly Options",
    description: "Special accommodations and activities designed for families with children.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-secondary font-semibold mb-3">Why Nomara</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Why Travelers Choose Us
            </h2>
            <p className="text-lg opacity-90 mb-10 leading-relaxed">
              At Nomara, we don&apos;t just plan trips — we craft unforgettable journeys. Our commitment to excellence and passion for travel sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm opacity-80">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%282%29-EVtqasazSmFWKtjyJSNRhdqOIMxHVt.jpeg"
                    alt="Hotel Lobby"
                    width={300}
                    height={400}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15-iQciGsHEoU1yNYatVVhdtoZkx8YxQE.jpeg"
                    alt="Hotel Room"
                    width={300}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%283%29-lChllG5MUEwg6DabFqPTHJzLy5XLyy.jpeg"
                    alt="Hotel Building"
                    width={300}
                    height={300}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%281%29-T67Dgc2P1d5b6mLcSPURzcVGvuw7eR.jpeg"
                    alt="Hampton by Hilton"
                    width={300}
                    height={400}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card text-card-foreground rounded-xl shadow-2xl p-6 flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">98%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-xs text-muted-foreground">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
