import { motion } from "framer-motion"
import { cn } from "../lib/utils"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

const Orb = ({ delay = 0, color }: { delay?: number; color: string }) => (
  <motion.div
    className={cn("w-3 h-3 rounded-full", color)}
    variants={item}
    transition={{
      duration: 0.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
      ease: "easeInOut",
      delay,
    }}
  />
)

export default function ArtisticLoader({ color = "bg-white" }: { color?: string }) {
  return (
    <motion.div
      className="flex items-center justify-center space-x-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <Orb color={color} />
      <Orb color={color} delay={0.1} />
      <Orb color={color} delay={0.2} />
      <Orb color={color} delay={0.3} />
      <Orb color={color} delay={0.4} />
    </motion.div>
  )
}
