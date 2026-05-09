import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GalleryContent } from "@/components/gallery-content"

export const metadata = {
  title: "Gallery | Nomara Travel",
  description: "Explore stunning photos from our travel experiences. From Turkey to beyond, see what awaits you.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <GalleryContent />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
