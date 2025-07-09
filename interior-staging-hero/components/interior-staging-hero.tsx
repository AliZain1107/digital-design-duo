import { useState } from "react"
import { Button } from "@/components/ui/button"
import StagingModal from "@/components/staging-modal"
import { Sparkles } from "lucide-react"

export default function InteriorStagingHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-500 ease-in-out"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="container px-4 md:px-6 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">Design. Reimagined.</h1>
              <p className="text-lg md:text-xl text-gray-300">
                Experience the future of interior design. Upload a photo and let our AI transform your space with
                breathtaking realism.
              </p>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-300 rounded-full px-8 py-6 text-lg"
              >
                <Sparkles className="mr-3 h-5 w-5" />
                Stage Your Room
              </Button>
            </div>
          </div>
        </div>
      </div>
      <StagingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
