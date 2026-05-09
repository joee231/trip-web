"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Play } from "lucide-react"

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPsnPKJVQLS0KqAf2ibzYbPoNFo54U.png",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt="Travel destination"
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Born to Roam
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Discover the World<br />
            <span className="text-secondary">One Journey</span> at a Time
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            At Nomara, we believe travel is more than just visiting places — we create journeys that bring freedom, exploration, and excitement to every traveler.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8"
            >
              <Link href="/trips">
                Explore Trips
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#0F4C5C] text-[#0F4C5C] hover:bg-[#0F4C5C] hover:text-white text-lg px-8"
            >
              <Link href="/about">
                <Play className="mr-2 h-5 w-5" />
                Our Story
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">500+</div>
              <div className="text-sm opacity-80">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">50+</div>
              <div className="text-sm opacity-80">Destinations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
