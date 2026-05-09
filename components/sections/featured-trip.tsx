"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Star, ChevronRight, Plane } from "lucide-react"
import { BookingPopup } from "@/components/booking-popup"

const tripHighlights = [
  "Sapanca Lake & Maşukiye Tour",
  "Princes' Islands Cruise",
  "Bursa Green City Tour",
  "Düzce Adventure Activities",
  "Yalova Thermal Baths",
  "Şile & Ağva Coastal Tour",
]

const hotelImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%281%29-T67Dgc2P1d5b6mLcSPURzcVGvuw7eR.jpeg",
    alt: "Hampton by Hilton Hotel Exterior",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%282%29-EVtqasazSmFWKtjyJSNRhdqOIMxHVt.jpeg",
    alt: "Hotel Lobby",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15-iQciGsHEoU1yNYatVVhdtoZkx8YxQE.jpeg",
    alt: "Hotel Room",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%283%29-lChllG5MUEwg6DabFqPTHJzLy5XLyy.jpeg",
    alt: "Hotel Building",
  },
]

export function FeaturedTripSection() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <section className="py-20 bg-muted/30">
      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tripTitle="Turkey 7 Days / 6 Nights"
        price={125}
        currency="USD"
      />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-3">Featured Package</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Turkiye Adventure
          </h2>
          <p className="text-muted-foreground">
            Experience the magic of Turkey with our premium 7-day package featuring stunning landscapes, rich culture, and unforgettable adventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Trip Image & Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPsnPKJVQLS0KqAf2ibzYbPoNFo54U.png"
                alt="Turkiye Trip Banner"
                width={800}
                height={500}
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">
                Best Seller
              </div>
              <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 text-foreground px-3 py-1.5 rounded-full">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground text-sm">(128 reviews)</span>
              </div>
            </div>

            {/* Hotel Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {hotelImages.map((img, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden aspect-square group cursor-pointer">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Trip Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-secondary mb-2">
                <Plane className="h-5 w-5" />
                <span className="font-semibold">Istanbul, Turkey</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-4">
                7 Days / 6 Nights Turkey Experience
              </h3>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-secondary" />
                  <span>1 Jul - 7 Jul</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>7 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>Small Groups</span>
                </div>
              </div>
            </div>

            {/* Trip Highlights */}
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Trip Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tripHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hotel Info */}
            <Card className="border-none shadow-md bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%281%29-T67Dgc2P1d5b6mLcSPURzcVGvuw7eR.jpeg"
                      alt="Hampton by Hilton"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hampton by Hilton</h4>
                    <p className="text-sm text-muted-foreground mb-2">3-Star Hotel • Near Istanbul Airport</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>✓ Free Breakfast</span>
                      <span>✓ Free WiFi</span>
                      <span>✓ 24h Gym</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <div className="flex items-end justify-between p-6 bg-card rounded-xl shadow-md">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">$125</span>
                  <span className="text-muted-foreground">/ night / person</span>
                </div>
                <p className="text-sm text-secondary font-medium mt-1">or 6,600 EGP</p>
              </div>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => setIsBookingOpen(true)}
              >
                Book Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
