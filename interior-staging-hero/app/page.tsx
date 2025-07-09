"use client"

import { Button } from "@/components/ui/button"
import StagingModal from "@/components/staging-modal"
import { useState } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-white text-gray-800">
      <header className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-brand-purple"
          >
            <path
              d="M12 2L14.5 9H22L16 13.5L18.5 21L12 16.5L5.5 21L8 13.5L2 9H9.5L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-bold text-xl">STYLY</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-brand-purple">
            Tarifs
          </a>
          <a href="#" className="hover:text-brand-purple">
            Styly Pro
          </a>
          <a href="#" className="hover:text-brand-purple">
            API
          </a>
          <Button className="bg-brand-orange text-white hover:bg-brand-orange/90 rounded-lg">Connexion</Button>
          <a href="#" className="text-sm">
            FR
          </a>
        </nav>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Design, <span className="text-brand-purple">sans limites.</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-purple mb-6">Conception 3D instantanée</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Téléchargez une photo et voyez votre espace vide devenir une pièce meublée et réaliste, propulsée par l'IA.
          Aucun outil. Aucun téléchargement. Juste des résultats.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-orange text-white hover:bg-brand-orange/90 rounded-lg px-8 py-6 text-lg"
          >
            Commencer l'essai gratuit
          </Button>
          <Button variant="outline" className="rounded-lg px-8 py-6 text-lg bg-transparent">
            Contactez-nous
          </Button>
        </div>
      </main>
      <StagingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  )
}
