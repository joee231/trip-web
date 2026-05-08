"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Star, Users, ChevronRight } from "lucide-react"

const trips = [
  {
    id: "turkey-7-days",
    title: "Turkey 7 Days / 6 Nights",
    destination: "Istanbul, Turkey",
    duration: "7 Days / 6 Nights",
    dates: "1 Jul - 7 Jul",
    price: 125,
    currency: "USD",
    priceEGP: 6600,
    rating: 4.9,
    reviews: 128,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPsnPKJVQLS0KqAf2ibzYbPoNFo54U.png",
    highlights: ["Sapanca Lake", "Princes' Islands", "Bursa Tour", "Thermal Baths"],
    badge: "Best Seller",
  },
]

const dayTrips = [
  {
    id: "blue-mosque-hagia-sophia",
    title: "Blue Mosque & Hagia Sophia Tour",
    destination: "Istanbul, Turkey",
    duration: "Full Day",
    price: 6800,
    currency: "EGP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.16-LuyTzhQaWY1NiiCcjmSu7FHhbHMTSc.jpeg",
    secondaryImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15-ux1uZ3zhSvQulkCgLLGywu2c68eVlf.jpeg",
    description: "Explore the beautiful Sultan Ahmed Mosque (Blue Mosque), known for its six minarets and stunning blue Iznik tiles, then visit the historic Hagia Sophia, the iconic masterpiece that combines Byzantine and Islamic architecture.",
    highlights: ["Blue Mosque", "Hagia Sophia", "Historic Istanbul"],
    badge: "Popular",
  },
  {
    id: "topkapi-palace",
    title: "Topkapi Palace Tour",
    destination: "Istanbul, Turkey",
    duration: "Half Day",
    price: 4700,
    currency: "EGP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-5iKKDbMuE4MbRHHkqX716VlFDDnwaG.jpeg",
    description: "Visit the famous Topkapi Palace, the main residence of the Ottoman sultans for nearly 400 years. Discover the luxurious halls, the Harem section, and valuable historical artifacts while enjoying stunning views of the Bosphorus.",
    highlights: ["Ottoman Palace", "Harem Section", "Bosphorus Views"],
    badge: "Historic",
  },
  {
    id: "dolmabahce-palace",
    title: "Dolmabahce Palace Tour",
    destination: "Istanbul, Turkey",
    duration: "Half Day",
    price: 2700,
    currency: "EGP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-7JHX56k0LMjG9WdRGKjsQfUk6SPdw5.jpeg",
    description: "Visit the magnificent Dolmabahce Palace, the luxurious 19th-century residence of the Ottoman sultans. Famous for its elegant European-style decoration and stunning location overlooking the Bosphorus Strait.",
    highlights: ["European Architecture", "Bosphorus Views", "Royal Luxury"],
    badge: "Elegant",
    hours: "Tuesday-Sunday: 09:00 AM - 04:00 PM",
    note: "Booking is available for guests aged 18 years or older.",
  },
]

const upcomingDestinations = [
  {
    name: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    status: "Coming Soon",
  },
  {
    name: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    status: "Coming Soon",
  },
  {
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    status: "Coming Soon",
  },
]

export function TripsContent() {
  const handleBookNow = (tripTitle: string, price: number, currency: string) => {
    const confirmed = window.confirm(
      `Confirm Reservation\n\n` +
      `Trip: ${tripTitle}\n` +
      `Price: ${price.toLocaleString()} ${currency} per person\n\n` +
      `Click OK to proceed to WhatsApp and complete your booking.`
    )
    
    if (confirmed) {
      const message = `Hello! I would like to book the "${tripTitle}" tour.\n\nPrice: ${price.toLocaleString()} ${currency}\n\nPlease confirm availability and booking details.`
      window.open(`https://wa.me/201066578901?text=${encodeURIComponent(message)}`, '_blank')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Travel Packages</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover our carefully curated travel experiences. Each trip is designed to offer authentic adventures and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-serif text-foreground">Featured Packages</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>Small group tours available</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <Card key={trip.id} className="group border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {trip.badge && (
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {trip.badge}
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 text-foreground px-2 py-1 rounded-full text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{trip.rating}</span>
                    <span className="text-muted-foreground">({trip.reviews})</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-secondary text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{trip.destination}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{trip.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trip.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{trip.dates}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">From</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-primary">${trip.price}</span>
                        <span className="text-sm text-muted-foreground">/night</span>
                      </div>
                    </div>
                    <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Link href={`/trips/${trip.id}`}>
                        View Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold mb-3">Istanbul Tours</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Day Trip Experiences
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore Istanbul&apos;s most iconic landmarks with our expertly guided day trips. Perfect for travelers who want to experience the best of the city.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTrips.map((trip) => (
              <Card key={trip.id} className="group border-none shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {trip.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {trip.badge}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-secondary text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{trip.destination}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{trip.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{trip.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {trip.highlights.map((highlight, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {trip.hours && (
                    <div className="text-xs text-muted-foreground mb-2">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {trip.hours}
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>{trip.duration}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Price</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-primary">{trip.price.toLocaleString()}</span>
                        <span className="text-sm text-muted-foreground">{trip.currency}</span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleBookNow(trip.title, trip.price, trip.currency)}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold mb-3">Coming Soon</span>
            <h2 className="text-3xl font-bold font-serif text-foreground mb-4">
              Upcoming Destinations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re constantly expanding our travel offerings. Stay tuned for these exciting new destinations!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingDestinations.map((dest, index) => (
              <Card key={index} className="group border-none shadow-md overflow-hidden">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                      <p className="text-sm opacity-80">{dest.country}</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-secondary/80 rounded-full text-xs font-semibold">
                        {dest.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-xl bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                Looking for a Custom Package?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Can&apos;t find exactly what you&apos;re looking for? Contact us and we&apos;ll create a personalized travel package just for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <a href="https://wa.me/201066578901" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
