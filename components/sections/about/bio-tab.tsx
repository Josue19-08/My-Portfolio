"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"

export function BioTab() {
  const { language } = useLanguage()

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-white/90">
          {language === "en" ? "My Story" : "Mi Historia"}
        </h3>

        <div className="space-y-4 text-white/60">
          {myInformation.bio[language].map((paragraph, index) => (
            <p key={index} className="leading-relaxed">{paragraph}</p>
          ))}
        </div>

        <blockquote className="border-l-4 border-blue-500/50 pl-4 my-6 italic text-white/80">
          {language === "en"
            ? "I believe in creating software that not only works flawlessly but also provides an exceptional user experience."
            : "Creo en crear software que no solo funcione perfectamente sino que también proporcione una experiencia de usuario excepcional."}
        </blockquote>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
        <Stat value="2019" label={language === "en" ? "Coding Since" : "Programando desde"} />
        <Stat value="22+" label={language === "en" ? "OSS Contributions" : "Contribuciones OSS"} />
        <Stat value="2024" label={language === "en" ? "Open Source Journey" : "Trayectoria Open Source"} />
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{value}</div>
      <div className="text-sm text-white/50 mt-1">{label}</div>
    </div>
  )
}