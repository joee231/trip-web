"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Heart, Shield, Users, Award, Compass, Target, Eye } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  { value: 500, suffix: "+", label: "Happy Travelers" },
  { value: 50, suffix: "+", label: "Destinations" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We are driven by a genuine love for exploration and creating memorable experiences.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your safety and peace of mind are our top priorities on every journey.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description: "We treat every traveler like family, providing personalized attention and care.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in every detail, from planning to execution.",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 50
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function AboutContent() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Compass className="absolute top-10 right-10 w-40 h-40 animate-float" />
          <Globe className="absolute bottom-10 left-10 w-32 h-32 animate-float" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Nomara</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto italic font-serif">
            &quot;Born to Roam&quot;
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-blue-600 font-semibold mb-3">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-6">
                Creating Journeys That Matter
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Nomara, we believe travel is more than just visiting places — it&apos;s about transforming lives through experiences. Inspired by the idea of being &quot;Born to Roam,&quot; we create journeys that bring freedom, exploration, and excitement to every traveler.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded with a passion for adventure and a commitment to excellence, Nomara Travel has grown from a small local agency in Smouha, Alexandria, to a trusted name in travel services across Egypt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced travel professionals works tirelessly to craft unique itineraries, secure the best accommodations, and ensure every detail of your journey is perfect. From internal travel to international adventures and visa services, we&apos;re your partner in exploration.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bPsnPKJVQLS0KqAf2ibzYbPoNFo54U.png"
                      alt="Turkey Trip"
                      width={300}
                      height={400}
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15-iQciGsHEoU1yNYatVVhdtoZkx8YxQE.jpeg"
                      alt="Hotel Room"
                      width={300}
                      height={200}
                      className="w-full h-[180px] object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%282%29-EVtqasazSmFWKtjyJSNRhdqOIMxHVt.jpeg"
                      alt="Hotel Lobby"
                      width={300}
                      height={200}
                      className="w-full h-[180px] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-09%20at%2001.22.15%20%281%29-T67Dgc2P1d5b6mLcSPURzcVGvuw7eR.jpeg"
                      alt="Hampton by Hilton"
                      width={300}
                      height={250}
                      className="w-full h-[250px] object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-secondary flex items-center justify-center shadow-xl">
                <div className="text-center text-secondary-foreground">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To inspire and enable people to explore the world by providing exceptional travel experiences that are safe, affordable, and unforgettable. We aim to make quality travel accessible to everyone while maintaining the highest standards of service.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted travel partner in Egypt and the Middle East, known for creating life-changing travel experiences. We envision a world where everyone has the opportunity to explore, learn, and grow through travel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-secondary font-semibold mb-3">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground">
              These core values guide everything we do at Nomara Travel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <value.icon className="h-8 w-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-serif text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let us help you create memories that will last a lifetime. Contact us today to plan your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/trips">Explore Our Trips</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
