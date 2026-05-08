"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/trips", label: "Trips" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:01066578901" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>01066578901</span>
            </a>
            <a href="mailto:info@reservationnomara.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>www.reservationnomara.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Smouha, Alexandria</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass shadow-lg py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b2igUidoMsv2qME7KiKXvY4SodbQ8I.png"
                alt="Nomara Travel"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary font-serif">Nomara</h1>
                <p className="text-xs text-muted-foreground">Born to Roam</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/trips">Book Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary font-medium py-2 border-b border-border transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-4">
                <Link href="/trips" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Now
                </Link>
              </Button>
              <div className="mt-4 pt-4 border-t border-border space-y-3 text-sm text-muted-foreground">
                <a href="tel:01066578901" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>01066578901</span>
                </a>
                <a href="mailto:info@reservationnomara.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>www.reservationnomara.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Smouha, Alexandria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
