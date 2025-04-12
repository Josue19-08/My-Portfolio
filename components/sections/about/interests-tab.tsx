"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"
import { BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function InterestsTab() {
  const { language } = useLanguage()

  return (
    <motion.div
      key="interests"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-primary">
        {language === "en" ? "Interests & Hobbies" : "Intereses y Pasatiempos"}
      </h3>

      <p className="text-muted-foreground mb-6">
        {language === "en"
          ? "Beyond coding, I'm passionate about various activities that keep me inspired and balanced."
          : "Más allá de la programación, me apasionan varias actividades que me mantienen inspirado y equilibrado."}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {myInformation.interests[language].map((interest, index) => (
          <motion.div
            key={index}
            className="border border-primary/20 rounded-lg p-4 text-center hover:bg-primary/5 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Badge variant="outline" className="mb-2">{interest}</Badge>
          </motion.div>
        ))}
      </div>


    </motion.div>
  )
}