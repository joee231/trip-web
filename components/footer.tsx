import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Our Trips" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const services = [
  { href: "/trips", label: "Internal Travel" },
  { href: "/trips", label: "External Travel" },
  { href: "/visa", label: "Visa Services" },
  { href: "/trips", label: "Group Tours" },
  { href: "/trips", label: "Custom Packages" },
]

const policies = [
  { href: "/pricing-policy", label: "Pricing Policy" },
  { href: "/payment-policy", label: "Payment Policy" },
  { href: "/visa", label: "E-Visa Guide" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b2igUidoMsv2qME7KiKXvY4SodbQ8I.png"
                alt="Nomara Travel"
                width={70}
                height={70}
                className="h-16 w-16 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h2 className="text-2xl font-bold font-serif">Nomara</h2>
                <p className="text-sm opacity-80">Born to Roam</p>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              At Nomara, we believe travel is more than just visiting places. Inspired by the idea of being &quot;Born to Roam&quot;, we create journeys that bring freedom, exploration, and excitement to every traveler.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:01066578901" className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>01066578901</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@reservationnomara.com" className="flex items-start gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>www.reservationnomara.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>Smouha, Alexandria, Egypt</span>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              {policies.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Nomara Travel. All rights reserved.</p>
            <p>Designed with passion for travelers</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
