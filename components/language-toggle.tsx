"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  // Función para alternar entre español e inglés directamente
  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <Button variant="outline" size="icon" className="relative" onClick={toggleLanguage}>
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Toggle language</span>
      <div className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {language.toUpperCase()}
      </div>
    </Button>
  )
}
