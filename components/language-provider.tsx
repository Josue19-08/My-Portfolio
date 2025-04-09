"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "home.title": "Software Developer",
    "home.terminal.line1": "Hello World! I am Josué Araya",
    "home.terminal.line2": "A passionate software developer",
    "home.terminal.line3": "Specialized in web development",
    "home.terminal.line4": "Let's build something amazing together!",
    "home.button": "About Me",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contributions": "OSS Contributions",
    "nav.techStack": "Tech Stack",
    "nav.about": "About Me",
    "nav.timeline": "Timeline",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "about.englishLevel": "English Level: Fluent",
    "projects.title": "Projects",
    "contributions.title": "Open Source Contributions",
    "techStack.title": "Tech Stack",
    "about.title": "About Me",
    "timeline.title": "Timeline",
    "blog.title": "Blog",
    "contact.title": "Contact",
  },
  es: {
    "home.title": "Desarrollador de Software",
    "home.terminal.line1": "¡Hola Mundo! Soy Josué Araya",
    "home.terminal.line2": "Un desarrollador de software apasionado",
    "home.terminal.line3": "Especializado en desarrollo web",
    "home.terminal.line4": "¡Construyamos algo increíble juntos!",
    "home.button": "Sobre Mí",
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.contributions": "Contribuciones OSS",
    "nav.techStack": "Tecnologías",
    "nav.about": "Sobre Mí",
    "nav.timeline": "Cronología",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "about.englishLevel": "Nivel de Inglés: Fluido",
    "projects.title": "Proyectos",
    "contributions.title": "Contribuciones Open Source",
    "techStack.title": "Tecnologías",
    "about.title": "Sobre Mí",
    "timeline.title": "Cronología",
    "blog.title": "Blog",
    "contact.title": "Contacto",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
