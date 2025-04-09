"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Home() {
  const { t } = useLanguage()
  const [text, setText] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const lines = [t("home.terminal.line1"), t("home.terminal.line2"), t("home.terminal.line3"), t("home.terminal.line4")]

  useEffect(() => {
    if (lineIndex < lines.length) {
      const currentLine = lines[lineIndex]

      if (charIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setText((prev) => prev + currentLine[charIndex])
          setCharIndex(charIndex + 1)
        }, 50)

        return () => clearTimeout(timer)
      } else {
        setText(text + "\n")
        setLineIndex(lineIndex + 1)
        setCharIndex(0)
      }
    }
  }, [charIndex, lineIndex, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Efectos de luz */}
      <div className="hero-glow absolute top-10 left-20 opacity-70"></div>
      <div className="hero-glow orange absolute bottom-40 right-20 opacity-60"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="flex flex-col items-center lg:items-start gap-6 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-center lg:text-left hero-title font-heading">
            Josué Araya
          </h1>

          <h2 className="text-2xl md:text-3xl text-center lg:text-left text-primary hero-subtitle font-heading">
            {t("home.title")}
          </h2>

          <p className="text-lg text-muted-foreground text-center lg:text-left max-w-md">
            Creando soluciones digitales innovadoras con pasión por el código limpio y la experiencia de usuario.
          </p>

          <div className="flex gap-4 mt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white hero-button" onClick={scrollToAbout}>
              {t("home.button")}
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="hero-button"
              onClick={() => {
                const projectsSection = document.getElementById("projects")
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Ver Proyectos
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="terminal w-full max-w-2xl mx-auto lg:ml-auto">
            <div className="terminal-header">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-content">
              <pre>
                {text.split("\n").map((line, i) => (
                  <div key={i}>
                    {i === 0 && <span className="text-green-500">$ </span>}
                    {i > 0 && <span className="text-green-500">&gt; </span>}
                    {line}
                    {lineIndex === i && charIndex === line.length && showCursor && <span className="cursor"></span>}
                  </div>
                ))}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </div>
  )
}
