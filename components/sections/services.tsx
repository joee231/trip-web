import { Card, CardContent } from "@/components/ui/card"
import { Plane, Globe, FileText, Users, Shield, Clock } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Internal Travel",
    description: "Explore the hidden gems within your country with our carefully curated domestic travel packages.",
  },
  {
    icon: Globe,
    title: "External Travel",
    description: "Venture beyond borders and discover new cultures with our international travel experiences.",
  },
  {
    icon: FileText,
    title: "Visa Services",
    description: "Hassle-free visa processing and e-visa assistance for your international journeys.",
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Join like-minded travelers on our guided group tours for unforgettable shared experiences.",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Travel with peace of mind with our comprehensive travel insurance options.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist you during your journey.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Our Travel Services
          </h2>
          <p className="text-muted-foreground">
            From planning to execution, we handle every detail of your journey to ensure a seamless and memorable travel experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
