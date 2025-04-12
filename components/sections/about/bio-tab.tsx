"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"

export function BioTab() {
  const { language } = useLanguage()

  return (
    <motion.div
      key="bio"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-primary">
        {language === "en" ? "My Story" : "Mi Historia"}
      </h3>

      <div className="space-y-4 text-muted-foreground">
        {myInformation.bio[language].map((paragraph, index) => (
          <p key={index} className="leading-relaxed">{paragraph}</p>
        ))}
      </div>

      <blockquote className="border-l-4 border-primary pl-4 my-6 italic">
        {language === "en"
          ? "I believe in creating software that not only works flawlessly but also provides an exceptional user experience."
          : "Creo en crear software que no solo funcione perfectamente sino que también proporcione una experiencia de usuario excepcional."}
      </blockquote>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <Stat value="2019" label={language === "en" ? "Coding Since" : "Programando desde 2019"} />
        <Stat value="22+" label={language === "en" ? "OSS Contributions" : "Contribuciones en OSS"} />
        <Stat value="2024" label={language === "en" ? "Open Source Journey" : "Trayectoria Open Source"} />

      </div>
    </motion.div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}