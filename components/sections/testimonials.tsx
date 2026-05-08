"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    rating: 5,
    text: "An amazing experience with Nomara! The Turkey trip was perfectly organized, from the hotel to the tours. The guides were knowledgeable and friendly. Highly recommend!",
    avatar: "AH",
  },
  {
    name: "Sara Mohamed",
    location: "Alexandria, Egypt",
    rating: 5,
    text: "This was our family's first international trip and Nomara made it so easy. The kids loved every moment, especially the Princes' Islands tour. Thank you for the wonderful memories!",
    avatar: "SM",
  },
  {
    name: "Omar Khalil",
    location: "Giza, Egypt",
    rating: 5,
    text: "Professional service from start to finish. The itinerary was well-planned and gave us time to explore on our own. The hotel was exactly as described. Will definitely book again!",
    avatar: "OK",
  },
  {
    name: "Nour El-Din",
    location: "Mansoura, Egypt",
    rating: 5,
    text: "The Sapanca tour was breathtaking! The natural beauty combined with the excellent organization made this trip unforgettable. Nomara truly understands what travelers need.",
    avatar: "NE",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground">
            Don&apos;t just take our word for it — hear from the travelers who have experienced the Nomara difference.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-xl">
                    <CardContent className="p-8 md:p-12">
                      <Quote className="h-12 w-12 text-secondary/30 mb-6" />
                      <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentIndex(index)
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
