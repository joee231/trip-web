"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const phoneNumber = "201066578901"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const fullMessage = name 
      ? `Hello! My name is ${name}.\n\n${message || "I'm interested in your travel packages."}`
      : message || "Hello! I'm interested in your travel packages."
    
    const confirmed = window.confirm(
      `Send Message to Nomara Travel?\n\n` +
      `Your message:\n"${fullMessage.substring(0, 100)}${fullMessage.length > 100 ? '...' : ''}"\n\n` +
      `Click OK to open WhatsApp.`
    )
    
    if (confirmed) {
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`,
        '_blank'
      )
      setIsOpen(false)
      setName("")
      setMessage("")
    }
  }

  const quickMessages = [
    "I want to book the Turkey 7 Days package",
    "I need help with visa services",
    "I want to know available trip dates",
  ]

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <Card className="shadow-2xl border-none">
            <CardHeader className="bg-[#25D366] text-white rounded-t-lg py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Nomara Travel</CardTitle>
                    <p className="text-xs opacity-90">Usually replies instantly</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="bg-muted/50 rounded-lg p-3 mb-4">
                <p className="text-sm text-foreground">
                  Hello! Welcome to Nomara Travel. How can we help you today?
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-sm"
                />
                <Textarea
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-sm resize-none"
                  rows={3}
                />
                
                <div className="flex flex-wrap gap-2">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setMessage(msg)}
                      className="text-xs bg-muted hover:bg-muted/80 px-2 py-1 rounded-full text-muted-foreground transition-colors"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <MessageCircle className="h-7 w-7" />
        )}
      </button>
    </>
  )
}
