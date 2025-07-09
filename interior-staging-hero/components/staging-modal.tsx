import type React from "react"
import { useState, useMemo, type Dispatch, type SetStateAction } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Palette, Sofa, Sparkles, Mail, User, Lock } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import ArtisticLoader from "./artistic-loader"
import { cn } from "@/lib/utils"

type StagingModalProps = {
  isOpen: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

type Step = "upload" | "loading" | "reveal"

export default function StagingModal({ isOpen, onOpenChange }: StagingModalProps) {
  const [step, setStep] = useState<Step>("upload")
  const [image, setImage] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [roomType, setRoomType] = useState("living-room")
  const [style, setStyle] = useState("modern")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const generatedImageUrl = useMemo(() => {
    return `/placeholder.svg?height=512&width=512&query=${style}+${roomType.replace("-", "+")}+interior+design`
  }, [roomType, style])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)
      setImageUrl(URL.createObjectURL(file))
    }
  }

  const handleGenerate = () => {
    if (!image) return
    setStep("loading")
    setTimeout(() => {
      setStep("reveal")
    }, 4000)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setIsSubmitted(true)
    }
  }

  const resetState = () => {
    setStep("upload")
    setImage(null)
    setImageUrl(null)
    setName("")
    setEmail("")
    setIsSubmitted(false)
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      resetState()
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
          >
            {step === "upload" && (
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Redefine <span className="text-brand-purple">Your Space</span>
                  </h2>
                  <div className="space-y-4">
                    <Select value={roomType} onValueChange={setRoomType}>
                      <SelectTrigger className="w-full bg-gray-500/5 border-gray-500/10 rounded-full h-12 text-base focus:ring-brand-purple/50">
                        <Sofa size={18} className="ml-2 mr-3 text-gray-500" />
                        <SelectValue placeholder="Select a room type" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={8}
                        className="w-[--radix-select-trigger-width] bg-white/95 backdrop-blur-xl border-black/10 text-gray-800 rounded-2xl"
                      >
                        <SelectItem value="living-room" className={selectItemClasses}>
                          Living Room
                        </SelectItem>
                        <SelectItem value="bedroom" className={selectItemClasses}>
                          Bedroom
                        </SelectItem>
                        <SelectItem value="kitchen" className={selectItemClasses}>
                          Kitchen
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={style} onValueChange={setStyle}>
                      <SelectTrigger className="w-full bg-gray-500/5 border-gray-500/10 rounded-full h-12 text-base focus:ring-brand-purple/50">
                        <Palette size={18} className="ml-2 mr-3 text-gray-500" />
                        <SelectValue placeholder="Select a style" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        sideOffset={8}
                        className="w-[--radix-select-trigger-width] bg-white/95 backdrop-blur-xl border-black/10 text-gray-800 rounded-2xl"
                      >
                        <SelectItem value="modern" className={selectItemClasses}>
                          Modern
                        </SelectItem>
                        <SelectItem value="minimalist" className={selectItemClasses}>
                          Minimalist
                        </SelectItem>
                        <SelectItem value="scandinavian" className={selectItemClasses}>
                          Scandinavian
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    onClick={handleGenerate}
                    disabled={!image}
                    className={cn(
                      "w-full relative overflow-hidden transition-all duration-500 ease-in-out rounded-full h-12 text-base font-semibold",
                      !image
                        ? "bg-gray-500/10 text-gray-400 cursor-not-allowed"
                        : "bg-brand-orange text-white hover:bg-brand-orange/90",
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Sparkles className="mr-2 h-5 w-5" /> Generate
                    </span>
                    {image && (
                      <span className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine" />
                    )}
                  </Button>
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
                        <p className="font-semibold">Click to upload</p>
                        <p className="text-sm">or drag and drop</p>
                      </div>
                    )}
                  </label>
                  <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                </div>
              </div>
            )}

            {step === "loading" && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <ArtisticLoader color="text-brand-purple" />
                <h3 className="text-2xl font-semibold mt-8 text-gray-900">Crafting your vision...</h3>
                <p className="text-gray-600 mt-2 mb-8 max-w-md text-center">
                  The best things take time. Enter your details to be notified when your new space is ready.
                </p>
                <form onSubmit={handleFormSubmit} className="w-full max-w-sm space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-12 h-12 bg-gray-500/5 border-gray-500/10 rounded-full"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-gray-500/5 border-gray-500/10 rounded-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-brand-orange text-white font-semibold hover:bg-brand-orange/90 rounded-full"
                  >
                    Notify Me & Unlock
                  </Button>
                </form>
              </div>
            )}

            {step === "reveal" && (
              <div className="w-full h-full flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <motion.img
                    layoutId="uploaded-image"
                    src={generatedImageUrl || "/placeholder.svg"}
                    alt="Generated interior design"
                    className="w-full h-full object-cover rounded-2xl"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                  />
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
                              <Lock size={24} className="text-gray-800" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 text-shadow-sm shadow-white/50">
                              Your Vision is Ready
                            </h3>
                            <p className="text-gray-700 mb-6 text-shadow-sm shadow-white/50">
                              Enter your details to instantly unlock your new space.
                            </p>
                            <form onSubmit={handleFormSubmit} className="w-full max-w-sm mx-auto space-y-3">
                              <Input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-11 bg-gray-500/10 border-gray-500/15 placeholder:text-gray-500 rounded-full text-center"
                                required
                              />
                              <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-11 bg-gray-500/10 border-gray-500/15 placeholder:text-gray-500 rounded-full text-center"
                                required
                              />
                              <Button
                                type="submit"
                                className="w-full h-11 bg-brand-orange text-white font-semibold hover:bg-brand-orange/90 rounded-full"
                              >
                                Unlock Image
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
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
