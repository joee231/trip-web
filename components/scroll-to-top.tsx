"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 left-6 z-50 flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
