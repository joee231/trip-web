"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Star,
  Check,
  X,
  Phone,
  ChevronLeft,
  ChevronRight,
  Hotel,
  Utensils,
  Bus,
  MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { BookingPopup } from "@/components/booking-popup"

const itinerary = [
  {
    day: 1,
    title: "Arrival + Light Exploration",
    description: "Arrival at the hotel and check-in. Some rest, then a light evening outing to a café or a walk in Taksim or along the Bosphorus.",
    highlights: ["Hotel check-in", "Rest & refreshment", "Evening exploration"],
    note: "Easy day to recover from travel",
  },
  {
    day: 2,
    title: "Sapanca & Maşukiye Tour 🌿",
    description: "A full day exploring the natural beauty of Sapanca Lake and Maşukiye village.",
    highlights: [
      "Visit to the zoo",
      "Sapanca Lake - Turkey's largest freshwater lake",
      "Maşukiye village & waterfalls",
      "Grand cable car experience",
      "Mahmudiye & Kartepe visit",
      "Safari tour (ATV ride)",
      "Zipline experience",
      "Honey farms & Turkish delight shops",
    ],
    included: ["Transportation", "Lunch", "Arabic-speaking guide", "Hotel pickup/drop-off"],
    note: "Children without a seat are free (up to 4 years old)",
  },
  {
    day: 3,
    title: "Princes' Islands Tour",
    description: "A scenic cruise through the Bosphorus to the Princes' Islands via the Sea of Marmara.",
    highlights: [
      "Morning departure from hotel",
      "Bosphorus cruise with beautiful views",
      "Kınalıada Island visit",
      "Optional electric car tour",
      "Lunch in the Sea of Marmara",
      "Büyükada Island exploration",
      "Return via Eminönü area",
    ],
    included: ["Lunch", "Transportation", "Tour guide"],
  },
  {
    day: 4,
    title: "Bursa (Green Bursa) Tour 🌿",
    description: "Cross the Bosphorus and explore the historic city of Bursa.",
    highlights: [
      "Bosphorus bridge crossing",
      "Ferry ride to Bursa",
      "Famous Turkish delight shop",
      "Historic ancient tree",
      "Honey shop visit",
      "Cable car to Uludağ Mountain",
      "Lunch with scenic view",
      "Mountain summit activities",
      "Shopping mall visit",
    ],
    included: ["Transportation", "Ferry tickets", "Lunch", "Arabic-speaking guide", "Hotel pickup/drop-off"],
  },
  {
    day: 5,
    title: "Düzce Adventure Tour 🌲",
    description: "An action-packed day of adventure activities in the forests of Düzce.",
    highlights: [
      "Bosphorus Bridge crossing",
      "Meşelik Village visit",
      "Optional ATV (quad bike) tour",
      "Beautiful forest scenery",
      "Optional paragliding (15 min flight)",
      "Optional rafting in Düzce rivers",
      "Turkish sweets factory visit",
    ],
    included: ["Transportation", "Lunch", "Professional guide (Arabic/Turkish)"],
    note: "This tour runs every Sunday",
  },
  {
    day: 6,
    title: "Yalova & Thermal Baths Tour 🌿",
    description: "Relax and rejuvenate at the famous thermal baths of Yalova.",
    highlights: [
      "Ferry to Yalova with seagull feeding",
      "Optional zoo visit",
      "Safari tour",
      "Soap exhibition",
      "Termal thermal baths (55-65°C)",
      "Various hot springs (eyes, feet, inhalation)",
      "Lunch at famous Yalova restaurant",
      "Sudüşen Waterfalls visit",
    ],
    note: "Known for healing digestive, skin, and rheumatic conditions",
  },
  {
    day: 7,
    title: "Şile & Ağva Tour 🌊",
    description: "A coastal tour featuring hidden lakes, rivers, and the Black Sea coast.",
    highlights: [
      "Şile town visit",
      "Hidden Lake exploration",
      "Ağva River experience",
      "Black Sea Coast",
      "Historic Lighthouse",
      "Optional zoo entrance",
    ],
    included: ["Lunch", "Arabic-speaking guide"],
  },
]

const hotelImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%281%29-T67Dgc2P1d5b6mLcSPURzcVGvuw7eR.jpeg",
    alt: "Hampton by Hilton Exterior",
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

const hotelFeatures = [
  "~10 km from Istanbul Airport",
  "Daily complimentary buffet breakfast",
  "Free Wi-Fi throughout",
  "24-hour gym access",
  "Free secure parking",
  "Soundproof rooms",
  "Connecting rooms for families",
  "24-hour reception",
]

const included = [
  "6 nights accommodation at Hampton by Hilton",
  "Daily buffet breakfast",
  "All tours as per itinerary",
  "Transportation in air-conditioned vehicles",
  "Arabic-speaking tour guides",
  "Lunches during tours (as specified)",
  "Hotel pickup and drop-off",
  "All entrance fees (unless specified)",
]

const notIncluded = [
  "International flights",
  "Travel insurance",
  "Personal expenses",
  "Optional activities (ATV, paragliding, rafting)",
  "Dinners (unless specified)",
  "Tips for guides and drivers",
  "Visa fees",
]

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 2:00 PM or 3:00 PM depending on the reservation. Check-out is at 12:00 noon. The minimum age for check-in is usually 18 years old.",
  },
  {
    question: "What is the children policy?",
    answer: "Children are allowed at all ages. Children up to 11 years old often stay for free if they sleep on the beds in the room. Children aged 12 and above are counted as adults. Baby cribs for children 0-2 years are available free of charge subject to availability.",
  },
  {
    question: "Are the tours suitable for families?",
    answer: "Yes! All our tours are family-friendly. Children without a seat are free on most tours (up to 4 years old). The hotel also offers connecting rooms for families.",
  },
  {
    question: "What language do the guides speak?",
    answer: "All our tour guides are fluent in Arabic and Turkish, ensuring clear communication throughout your journey.",
  },
  {
    question: "Are optional activities extra?",
    answer: "Yes, activities like ATV rides, paragliding, rafting, and some electric car tours are optional and charged separately.",
  },
]

export function TripDetailContent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotelImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotelImages.length) % hotelImages.length)
  }

  const handleBookNow = () => {
    setIsBookingOpen(true)
  }

  return (
    <div>
      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        tripTitle="Turkey 7 Days / 6 Nights"
        price={125}
        currency="USD"
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPsnPKJVQLS0KqAf2ibzYbPoNFo54U.png"
          alt="Turkey Trip Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <Link href="/trips" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ChevronLeft className="h-5 w-5" />
              Back to Trips
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4">
              Turkey 7 Days / 6 Nights
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span>1 Jul - 7 Jul</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Istanbul, Turkey</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <span>7 Days / 6 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                <span>4.9 (128 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-foreground mb-4">Trip Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience the magic of Turkey with our premium 7-day package. From the bustling streets of Istanbul to the serene waters of Sapanca Lake, from the historic city of Bursa to the adventure-filled forests of Düzce, this trip offers a perfect blend of culture, nature, and excitement.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="border-none shadow-sm bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">7 Days</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <Hotel className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">3-Star</p>
                    <p className="text-xs text-muted-foreground">Hilton Hotel</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <Utensils className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">Included</p>
                    <p className="text-xs text-muted-foreground">Meals</p>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-sm bg-muted/50">
                  <CardContent className="p-4 text-center">
                    <Bus className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="text-sm font-medium text-foreground">Included</p>
                    <p className="text-xs text-muted-foreground">Transport</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-4">
                {itinerary.map((day, index) => (
                  <Card key={index} className="border-none shadow-md overflow-hidden">
                    <CardHeader className="bg-primary/5 pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                          {day.day}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{day.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Highlights</h4>
                          <ul className="space-y-1">
                            {day.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {day.included && (
                          <div>
                            <h4 className="text-sm font-semibold text-foreground mb-2">Included</h4>
                            <ul className="space-y-1">
                              {day.included.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Check className="h-4 w-4 text-secondary shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      {day.note && (
                        <p className="text-sm text-secondary mt-4 italic">📌 {day.note}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Hotel Section */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Your Accommodation</h2>
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative h-[300px] md:h-[400px]">
                  <Image
                    src={hotelImages[currentImageIndex].src}
                    alt={hotelImages[currentImageIndex].alt}
                    fill
                    className="object-cover transition-opacity"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {hotelImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all",
                          index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Hampton by Hilton</h3>
                  <p className="text-muted-foreground mb-4">
                    3-star hotel located in Arnavutköy district, very close to Istanbul&apos;s new IST airport. Perfect for families and transit travelers.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {hotelFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-secondary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">What&apos;s Included</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg text-secondary flex items-center gap-2">
                      <Check className="h-5 w-5" />
                      Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {included.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive flex items-center gap-2">
                      <X className="h-5 w-5" />
                      Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold font-serif text-foreground mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4 shadow-sm">
                    <AccordionTrigger className="text-left text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-none shadow-xl">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-center">Book This Trip</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Price per person/night</p>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold text-primary">$125</span>
                      <span className="text-muted-foreground">USD</span>
                    </div>
                    <p className="text-sm text-secondary font-medium mt-1">or 6,600 EGP</p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">7 Days / 6 Nights</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Dates</span>
                      <span className="font-medium text-foreground">1 Jul - 7 Jul</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-muted-foreground">Room Type</span>
                      <span className="font-medium text-foreground">Twin or King</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground">Group Size</span>
                      <span className="font-medium text-foreground">Small Groups</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-12 text-lg">
                      <a href="https://wa.me/201066578901?text=Hi!%20I%27m%20interested%20in%20the%20Turkey%207%20Days%20trip" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        Book via WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full h-12" asChild>
                      <a href="tel:01066578901" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground">
                    Contact us for group discounts and custom packages
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
