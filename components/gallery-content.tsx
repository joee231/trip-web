"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPsnPKJVQLS0KqAf2ibzYbPoNFo54U.png",
    alt: "Turkey Trip Banner",
    category: "Turkey",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%281%29-T67Dgc2P1d5b6mLcSPURzcVGvuw7eR.jpeg",
    alt: "Hampton by Hilton Hotel",
    category: "Hotels",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%282%29-EVtqasazSmFWKtjyJSNRhdqOIMxHVt.jpeg",
    alt: "Hotel Lobby",
    category: "Hotels",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15-iQciGsHEoU1yNYatVVhdtoZkx8YxQE.jpeg",
    alt: "Hotel Room",
    category: "Hotels",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%283%29-lChllG5MUEwg6DabFqPTHJzLy5XLyy.jpeg",
    alt: "Hotel Building",
    category: "Hotels",
  },
]

const categories = ["All", "Turkey", "Hotels"]

export function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = "auto"
  }

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Gallery</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            A visual journey through our travel experiences. See the beautiful destinations and luxurious accommodations that await you.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                  <p className="text-white/70 text-sm">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] mx-4">
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="font-medium">{filteredImages[lightboxIndex].alt}</p>
            <p className="text-sm opacity-70">{lightboxIndex + 1} / {filteredImages.length}</p>
          </div>
        </div>
      )}
    </div>
  )
}
