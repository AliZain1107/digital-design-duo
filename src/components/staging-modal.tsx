import type React from "react"
import { useState, useMemo, type Dispatch, type SetStateAction, useEffect } from "react"
import { Dialog, DialogContent } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Upload, Palette, Sofa, Sparkles, Mail, User, Lock, CheckCircle, AlertCircle } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import ArtisticLoader from "./artistic-loader"
import { cn } from "../lib/utils"
import { useLanguage } from "../lib/i18n"
import { InteriorRevealVideo } from "../components/InteriorRevealVideo"
import { sendUserGenerationEmail } from "../services/email.service"

type StagingModalProps = {
  isOpen: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

type Step = "upload" | "loading" | "reveal" | "video-complete" | "limit-reached"

// API configuration
const API_URL = import.meta.env.VITE_STYLY_API_URL || "https://api.styly.io"
const API_KEY = import.meta.env.VITE_STYLY_API_KEY || ""

// Storage key for tracking generations
const GENERATION_COUNT_KEY = "styly_staging_generations"
const GENERATION_LIMIT = 1

export default function StagingModal({ isOpen, onOpenChange }: StagingModalProps) {
  const { language } = useLanguage()
  const [step, setStep] = useState<Step>("upload")
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [roomType, setRoomType] = useState("living room")
  const [style, setStyle] = useState("modern")
  const [colorTheme, setColorTheme] = useState("original")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [processingTime, setProcessingTime] = useState<number | null>(null)
  const [jobId, setJobId] = useState<string | null>(null)
  const [isGenerationComplete, setIsGenerationComplete] = useState(false)

  // Check generation limit on mount
  useEffect(() => {
    const count = localStorage.getItem(GENERATION_COUNT_KEY)
    console.log('[Mount] Generation count from localStorage:', count, 'Limit:', GENERATION_LIMIT)
    if (count && parseInt(count) >= GENERATION_LIMIT) {
      console.log('[Mount] Setting step to limit-reached')
      setStep("limit-reached")
    }
  }, [])

  // Debug step changes
  useEffect(() => {
    console.log('[Step Change] New step:', step)
    console.log('[Step Change] Current localStorage count:', localStorage.getItem(GENERATION_COUNT_KEY))
  }, [step])

  // Auto-transition to reveal when generation completes if user already submitted
  useEffect(() => {
    if (isGenerationComplete && isSubmitted && generatedImageUrl && imageUrl && step === "loading") {
      console.log('[StagingModal] Auto-transitioning to reveal (generation complete + form submitted)')
      setStep("reveal")
    }
  }, [isGenerationComplete, isSubmitted, generatedImageUrl, imageUrl, step])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError(language === 'fr' ? "L'image ne doit pas dépasser 10MB" : "Image must be less than 10MB")
        return
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError(language === 'fr' ? "Veuillez sélectionner une image" : "Please select an image file")
        return
      }
      
      setError(null)
      setImage(file)
      setImageUrl(URL.createObjectURL(file))
    }
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64String = reader.result as string
        // Remove data URL prefix (e.g., "data:image/jpeg;base64,")
        const base64Data = base64String.split(',')[1]
        resolve(base64Data)
      }
      reader.onerror = error => reject(error)
    })
  }

  const pollJobStatus = async (jobId: string): Promise<string> => {
    const pollInterval = 2000 // 2 seconds
    const maxAttempts = 60 // 2 minutes max
    let attempts = 0

    while (attempts < maxAttempts) {
      try {
        const response = await fetch(`${API_URL}/jobs/${jobId}`, {
          headers: {
            "X-API-Key": API_KEY
          }
        })

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const job = await response.json()
        console.log('Job status:', job.status, 'Job data:', job)

        if (job.status === 'completed' && job.result) {
          // Calculate processing time from timestamps
          if (job.started_at && job.completed_at) {
            const startTime = new Date(job.started_at).getTime()
            const endTime = new Date(job.completed_at).getTime()
            const processingTimeSeconds = (endTime - startTime) / 1000
            setProcessingTime(processingTimeSeconds)
          }
          
          // Handle both string and object result formats
          console.log('Result type:', typeof job.result, 'Result:', job.result)
          
          if (typeof job.result === 'string') {
            return job.result
          } else if (job.result && typeof job.result === 'object') {
            // Handle nested result object
            if (job.result.result) {
              // Also capture the time_taken if available
              if (job.result.time_taken) {
                setProcessingTime(job.result.time_taken)
              }
              return job.result.result
            } else if (job.result.output) {
              return job.result.output
            } else if (job.result.image) {
              return job.result.image
            }
          }
          
          console.error('Unexpected result format:', job.result)
          throw new Error('Invalid result format from API')
        } else if (job.status === 'failed') {
          throw new Error(job.error_message || job.error || 'Generation failed')
        }

        // Wait before next poll
        await new Promise(resolve => setTimeout(resolve, pollInterval))
        attempts++
      } catch (error) {
        console.error('Polling error:', error)
        throw error
      }
    }

    throw new Error('Generation timeout')
  }

  const handleGenerate = async () => {
    if (!image || !API_KEY) {
      setError(language === 'fr' ? "Configuration manquante" : "Missing configuration")
      return
    }

    // Check generation limit
    const currentCount = parseInt(localStorage.getItem(GENERATION_COUNT_KEY) || "0")
    if (currentCount >= GENERATION_LIMIT) {
      setStep("limit-reached")
      return
    }

    setStep("loading")
    setError(null)

    try {
      // Convert image to base64
      const base64Image = await fileToBase64(image)

      // Room-specific positive prompts
      const roomPrompts: Record<string, string> = {
        "living room": "beautiful modern interior design, comfortable sofa, coffee table, area rug, accent chair, canvas painting on the wall, potted plant, floor lamp, throw pillows, side table",
        "bedroom": "beautiful modern interior design, comfortable bed, nightstands, area rug, canvas painting on the wall, dresser, table lamps, window curtains, decorative pillows",
        "kitchen": "beautiful modern interior design, kitchen island, bar stools, pendant lights, stainless steel appliances, backsplash, wooden cabinets, countertops, potted herbs",
        "bathroom": "beautiful modern interior design, vanity with sink, mirror, towel rack, bath mat, shower curtain or glass door, wall art, storage cabinet, decorative plants",
        "dining room": "beautiful modern interior design, dining table, dining chairs, chandelier or pendant light, area rug, sideboard or buffet, wall art, centerpiece, window treatments"
      }

      // Prepare API request
      const requestBody = {
        base64_image: base64Image,
        room_type: roomType,
        style: style,
        color_theme: colorTheme,
        positive: roomPrompts[roomType] || "high quality, professional staging, beautiful furniture, well-lit, inviting atmosphere"
      }

      // Make async API call
      const response = await fetch(`${API_URL}/models/flux-staging/predict?async=true`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY
        },
        body: JSON.stringify(requestBody)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `API error: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.job_id) {
        setJobId(data.job_id)
        
        // Poll for result
        const result = await pollJobStatus(data.job_id)
        
        // Convert base64 result to image URL
        const imageUrl = `data:image/png;base64,${result}`
        setGeneratedImageUrl(imageUrl)
        
        // Update generation count
        const newCount = currentCount + 1
        localStorage.setItem(GENERATION_COUNT_KEY, String(newCount))
        console.log('[Generate] Updated generation count:', newCount, 'Limit:', GENERATION_LIMIT)
        
        // Mark generation as complete but stay in loading step
        console.log('[StagingModal] Generation complete, waiting for form submission')
        setIsGenerationComplete(true)
      } else {
        throw new Error('No job ID received')
      }
    } catch (error) {
      console.error('Generation error:', error)
      setError(
        language === 'fr' 
          ? `Erreur lors de la génération: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
          : `Generation error: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
      setStep("upload")
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setIsSubmitted(true)
      
      // Send email notification
      try {
        await sendUserGenerationEmail({
          name,
          email,
          roomType,
          style,
          colorTheme,
          generatedAt: new Date().toISOString(),
          language
        })
        console.log('[StagingModal] Email notification sent successfully')
      } catch (error) {
        console.error('[StagingModal] Failed to send email notification:', error)
      }
      
      // If generation is complete, proceed to reveal
      if (isGenerationComplete && generatedImageUrl && imageUrl) {
        console.log('[StagingModal] Form submitted with generation complete, transitioning to reveal')
        setStep("reveal")
      } else {
        console.log('[StagingModal] Form submitted but generation not complete yet')
      }
      // If generation is not complete yet, the form submission is recorded
      // and we'll automatically proceed when generation completes
    }
  }

  const resetState = () => {
    setStep("upload")
    setImage(null)
    setImageUrl(null)
    setName("")
    setEmail("")
    setIsSubmitted(false)
    setError(null)
    setGeneratedImageUrl(null)
    setJobId(null)
    setProcessingTime(null)
    setIsGenerationComplete(false)
  }

  const handleOpenChange = (open: boolean) => {
    console.log('[handleOpenChange] Dialog open:', open)
    if (!open) {
      // Check if limit reached before resetting
      const count = localStorage.getItem(GENERATION_COUNT_KEY)
      const parsedCount = count ? parseInt(count) : 0
      console.log('[handleOpenChange] Generation count:', count, 'Parsed:', parsedCount, 'Limit:', GENERATION_LIMIT)
      if (parsedCount >= GENERATION_LIMIT) {
        console.log('[handleOpenChange] Keeping step as limit-reached')
        setStep("limit-reached")
      } else {
        console.log('[handleOpenChange] Resetting state')
        resetState()
      }
    }
    onOpenChange(open)
  }

  const selectItemClasses = "rounded-lg focus:bg-gray-500/10 hover:bg-gray-500/10"

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-4xl w-[90vw] h-[80vh] p-0 bg-white/95 backdrop-blur-2xl border border-black/5 text-gray-800 flex overflow-hidden rounded-3xl shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-full h-full"
            onAnimationComplete={() => console.log('[AnimatePresence] Animation complete for step:', step)}
          >
            {step === "upload" && (
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                    {language === 'fr' ? 'Redéfinissez' : 'Redefine'} <span className="text-brand-purple">{language === 'fr' ? 'Votre Espace' : 'Your Space'}</span>
                  </h2>
                  
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                      <AlertCircle className="text-red-500" size={20} />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <Select value={roomType} onValueChange={setRoomType}>
                      <SelectTrigger className="w-full bg-white/30 backdrop-blur-sm border-white/20 rounded-full h-12 text-base focus:ring-brand-purple/50">
                        <Sofa size={18} className="ml-2 mr-3 text-gray-500" />
                        <SelectValue placeholder="Select a room type" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={8}
                        className="w-[--radix-select-trigger-width] bg-white/60 backdrop-blur-xl border-white/20 text-gray-800 rounded-2xl shadow-lg"
                      >
                        <SelectItem value="living room" className={selectItemClasses}>
                          {language === 'fr' ? 'Salon' : 'Living Room'}
                        </SelectItem>
                        <SelectItem value="bedroom" className={selectItemClasses}>
                          {language === 'fr' ? 'Chambre' : 'Bedroom'}
                        </SelectItem>
                        <SelectItem value="kitchen" className={selectItemClasses}>
                          {language === 'fr' ? 'Cuisine' : 'Kitchen'}
                        </SelectItem>
                        <SelectItem value="bathroom" className={selectItemClasses}>
                          {language === 'fr' ? 'Salle de bain' : 'Bathroom'}
                        </SelectItem>
                        <SelectItem value="dining room" className={selectItemClasses}>
                          {language === 'fr' ? 'Salle à manger' : 'Dining Room'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={style} onValueChange={setStyle}>
                      <SelectTrigger className="w-full bg-white/30 backdrop-blur-sm border-white/20 rounded-full h-12 text-base focus:ring-brand-purple/50">
                        <Palette size={18} className="ml-2 mr-3 text-gray-500" />
                        <SelectValue placeholder="Select a style" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={8}
                        className="w-[--radix-select-trigger-width] bg-white/60 backdrop-blur-xl border-white/20 text-gray-800 rounded-2xl shadow-lg"
                      >
                        <SelectItem value="modern" className={selectItemClasses}>
                          {language === 'fr' ? 'Moderne' : 'Modern'}
                        </SelectItem>
                        <SelectItem value="scandinavian" className={selectItemClasses}>
                          {language === 'fr' ? 'Scandinave' : 'Scandinavian'}
                        </SelectItem>
                        <SelectItem value="coastal" className={selectItemClasses}>
                          {language === 'fr' ? 'Côtier' : 'Coastal'}
                        </SelectItem>
                        <SelectItem value="industrial" className={selectItemClasses}>
                          {language === 'fr' ? 'Industriel' : 'Industrial'}
                        </SelectItem>
                        <SelectItem value="minimalist" className={selectItemClasses}>
                          {language === 'fr' ? 'Minimaliste' : 'Minimalist'}
                        </SelectItem>
                        <SelectItem value="traditional" className={selectItemClasses}>
                          {language === 'fr' ? 'Traditionnel' : 'Traditional'}
                        </SelectItem>
                        <SelectItem value="contemporary" className={selectItemClasses}>
                          {language === 'fr' ? 'Contemporain' : 'Contemporary'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Select value={colorTheme} onValueChange={setColorTheme}>
                      <SelectTrigger className="w-full bg-white/30 backdrop-blur-sm border-white/20 rounded-full h-12 text-base focus:ring-brand-purple/50">
                        <Palette size={18} className="ml-2 mr-3 text-gray-500" />
                        <SelectValue placeholder="Select a color theme" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={8}
                        className="w-[--radix-select-trigger-width] bg-white/60 backdrop-blur-xl border-white/20 text-gray-800 rounded-2xl shadow-lg"
                      >
                        <SelectItem value="original" className={selectItemClasses}>
                          {language === 'fr' ? 'Original' : 'Original'}
                        </SelectItem>
                        <SelectItem value="white" className={selectItemClasses}>
                          {language === 'fr' ? 'Blanc' : 'White'}
                        </SelectItem>
                        <SelectItem value="grey" className={selectItemClasses}>
                          {language === 'fr' ? 'Gris' : 'Grey'}
                        </SelectItem>
                        <SelectItem value="brown" className={selectItemClasses}>
                          {language === 'fr' ? 'Marron' : 'Brown'}
                        </SelectItem>
                        <SelectItem value="blue" className={selectItemClasses}>
                          {language === 'fr' ? 'Bleu' : 'Blue'}
                        </SelectItem>
                        <SelectItem value="green" className={selectItemClasses}>
                          {language === 'fr' ? 'Vert' : 'Green'}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button
                    onClick={handleGenerate}
                    disabled={!image || !API_KEY}
                    className={cn(
                      "w-full relative overflow-hidden transition-all duration-500 ease-in-out rounded-full h-12 text-base font-semibold",
                      !image || !API_KEY
                        ? "bg-gray-500/10 text-gray-400 cursor-not-allowed"
                        : "bg-brand-orange text-white hover:bg-brand-orange/90",
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Sparkles className="mr-2 h-5 w-5" /> 
                      {language === 'fr' ? 'Générer' : 'Generate'}
                    </span>
                    {image && API_KEY && (
                      <span className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine" />
                    )}
                  </Button>
                  
                  {!API_KEY && (
                    <p className="text-xs text-gray-500 text-center">
                      {language === 'fr' 
                        ? "Configuration API manquante. Contactez l'administrateur."
                        : "API configuration missing. Contact administrator."}
                    </p>
                  )}
                </div>
                
                <div className="w-full md:w-1/2 bg-gray-500/5 p-4 flex items-center justify-center">
                  <label
                    htmlFor="file-upload"
                    className="w-full h-full border-2 border-dashed border-gray-500/20 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-brand-purple/50 hover:bg-brand-purple/5 transition-all duration-300"
                  >
                    {imageUrl ? (
                      <motion.img
                        layoutId="uploaded-image"
                        src={imageUrl || "/placeholder.svg"}
                        alt="Uploaded room"
                        className="w-full h-full object-cover rounded-2xl"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <Upload size={48} className="mx-auto mb-4" />
                        <p className="font-semibold">
                          {language === 'fr' ? 'Cliquez pour télécharger' : 'Click to upload'}
                        </p>
                        <p className="text-sm">
                          {language === 'fr' ? 'ou glissez-déposez' : 'or drag and drop'}
                        </p>
                        <p className="text-xs mt-2 text-gray-400">
                          {language === 'fr' ? 'Max 10MB • JPG, PNG' : 'Max 10MB • JPG, PNG'}
                        </p>
                      </div>
                    )}
                  </label>
                  <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                </div>
              </div>
            )}

            {step === "loading" && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                {!isGenerationComplete && <ArtisticLoader color="bg-brand-purple" />}
                {isGenerationComplete && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="p-4 bg-green-100 rounded-full mb-8"
                  >
                    <CheckCircle size={48} className="text-green-600" />
                  </motion.div>
                )}
                <motion.h3 
                  key={isGenerationComplete ? "ready" : "loading"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-semibold mt-8 text-gray-900"
                >
                  {isGenerationComplete
                    ? (language === 'fr' ? 'Votre design est prêt!' : 'Your design is ready!')
                    : (language === 'fr' ? 'Création de votre vision...' : 'Crafting your vision...')
                  }
                </motion.h3>
                <motion.p 
                  key={isGenerationComplete ? "unlock" : "wait"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mt-2 mb-8 max-w-md text-center"
                >
                  {isGenerationComplete
                    ? (language === 'fr' 
                        ? "Remplissez le formulaire ci-dessous pour débloquer et voir votre nouvel espace transformé."
                        : "Fill in the form below to unlock and view your transformed space.")
                    : (language === 'fr' 
                        ? "Les meilleures choses prennent du temps. Entrez vos coordonnées pour être notifié lorsque votre nouvel espace sera prêt."
                        : "The best things take time. Enter your details to be notified when your new space is ready.")
                  }
                </motion.p>
                <form onSubmit={handleFormSubmit} className="w-full max-w-sm space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type="text"
                      placeholder={language === 'fr' ? "Nom" : "Name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-12 h-12 bg-gray-500/5 border-gray-500/10 rounded-full"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type="email"
                      placeholder={language === 'fr' ? "Email" : "Email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-gray-500/5 border-gray-500/10 rounded-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-brand-orange text-white font-semibold hover:bg-brand-orange/90 rounded-full disabled:opacity-50"
                    disabled={!name || !email || isSubmitted}
                  >
                    {isSubmitted 
                      ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle size={20} />
                          {isGenerationComplete 
                            ? (language === 'fr' ? 'Préparation...' : 'Preparing...')
                            : (language === 'fr' ? 'Enregistré! En attente...' : 'Saved! Waiting...')
                          }
                        </span>
                      )
                      : isGenerationComplete 
                        ? (language === 'fr' ? 'Débloquer la vidéo' : 'Unlock Video')
                        : (language === 'fr' ? 'Me notifier et débloquer' : 'Notify Me & Unlock')
                    }
                  </Button>
                </form>
                
                {isSubmitted && !isGenerationComplete && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-600 mt-4 flex items-center gap-2"
                  >
                    <CheckCircle size={16} />
                    {language === 'fr' 
                      ? "Informations enregistrées! La vidéo se lancera automatiquement."
                      : "Information saved! Video will start automatically."}
                  </motion.p>
                )}
                
                {jobId && (
                  <p className="text-xs text-gray-400 mt-4">
                    Job ID: {jobId}
                  </p>
                )}
              </div>
            )}

            {step === "reveal" && generatedImageUrl && imageUrl && (
              <div className="w-full h-full">
                <InteriorRevealVideo
                  beforeImage={imageUrl}
                  afterImage={generatedImageUrl}
                  roomType={roomType}
                  style={style}
                  onVideoEnd={() => {
                    console.log('[onVideoEnd] Called - Starting transition logic')
                    // Check generation count to determine next step
                    const count = localStorage.getItem(GENERATION_COUNT_KEY)
                    const parsedCount = count ? parseInt(count) : 0
                    console.log('[onVideoEnd] Generation count:', count, 'Parsed:', parsedCount, 'Limit:', GENERATION_LIMIT, 'isSubmitted:', isSubmitted)
                    console.log('[onVideoEnd] Current step:', step)
                    console.log('[onVideoEnd] generatedImageUrl exists:', !!generatedImageUrl)
                    
                    // If they've reached their generation limit, always show CTA
                    if (parsedCount >= GENERATION_LIMIT) {
                      console.log('[onVideoEnd] Count >= Limit, setting step to limit-reached')
                      setStep("limit-reached")
                    } else {
                      // Otherwise show video-complete
                      console.log('[onVideoEnd] Count < Limit, setting step to video-complete')
                      setStep("video-complete")
                    }
                  }}
                />
              </div>
            )}

            {step === "video-complete" && generatedImageUrl && (
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <motion.img
                    src={generatedImageUrl}
                    alt="Generated interior design"
                    className="w-full h-full object-cover rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {processingTime && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-gray-600">
                      {language === 'fr' ? 'Temps de traitement' : 'Processing time'}: {processingTime.toFixed(1)}s
                    </div>
                  )}
                  
                  <AnimatePresence>
                    {!isSubmitted && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 backdrop-blur-xl bg-white/30" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-center flex flex-col items-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5, ease: "circOut" }}
                          >
                            <div className="p-3 bg-black/5 rounded-full border border-black/10 mb-4">
                              <CheckCircle size={24} className="text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 text-shadow-sm shadow-white/50">
                              {language === 'fr' ? 'Votre vision est prête' : 'Your Vision is Ready'}
                            </h3>
                            <p className="text-gray-700 mb-6 text-shadow-sm shadow-white/50">
                              {language === 'fr' 
                                ? "Entrez vos coordonnées pour débloquer instantanément votre nouvel espace."
                                : "Enter your details to instantly unlock your new space."}
                            </p>
                            <form onSubmit={handleFormSubmit} className="w-full max-w-sm mx-auto space-y-3">
                              <Input
                                type="text"
                                placeholder={language === 'fr' ? "Nom" : "Name"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-11 bg-gray-500/10 border-gray-500/15 placeholder:text-gray-500 rounded-full text-center"
                                required
                              />
                              <Input
                                type="email"
                                placeholder={language === 'fr' ? "Email" : "Email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 bg-gray-500/10 border-gray-500/15 placeholder:text-gray-500 rounded-full text-center"
                                required
                              />
                              <Button
                                type="submit"
                                className="w-full h-11 bg-brand-orange text-white font-semibold hover:bg-brand-orange/90 rounded-full"
                              >
                                {language === 'fr' ? 'Débloquer l\'image' : 'Unlock Image'}
                              </Button>
                            </form>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {step === "limit-reached" && (
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="max-w-md text-center">
                  <div className="p-4 bg-purple-100 rounded-full border border-purple-200 mb-6 inline-block">
                    <Sparkles size={32} className="text-brand-purple" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">
                    {language === 'fr' ? 'Vous avez adoré ?' : 'Loved what you saw?'}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {language === 'fr' 
                      ? "Vous avez utilisé votre génération gratuite. Créez un compte pour continuer à transformer vos espaces avec des générations illimitées."
                      : "You've used your free generation. Create an account to continue transforming your spaces with unlimited generations."}
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href="https://app.styly.io/signup"
                      className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:-translate-y-1"
                    >
                      {language === 'fr' ? 'Commencer l\'essai gratuit' : 'Start Free Trial'}
                    </a>
                    
                    <div className="text-sm text-gray-500">
                      <p className="font-semibold mb-2">
                        {language === 'fr' ? 'Inclus dans l\'essai gratuit :' : 'Included in free trial:'}
                      </p>
                      <ul className="space-y-1">
                        <li>✨ {language === 'fr' ? '50 générations gratuites' : '50 free generations'}</li>
                        <li>🎨 {language === 'fr' ? 'Tous les styles disponibles' : 'All styles available'}</li>
                        <li>⚡ {language === 'fr' ? 'Traitement prioritaire' : 'Priority processing'}</li>
                        <li>💾 {language === 'fr' ? 'Téléchargements HD' : 'HD downloads'}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleOpenChange(false)}
                    className="mt-6 text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    {language === 'fr' ? 'Fermer' : 'Close'}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}