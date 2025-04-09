"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language/language-provider"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Twitter, Send, Phone, Code, ExternalLink } from "lucide-react"
import Image from "next/image"
import { homeData } from "@/data/home"

export function Home() {
  const { t, language } = useLanguage()
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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-5 h-5" />
      case "linkedin":
        return <Linkedin className="w-5 h-5" />
      case "twitter":
        return <Twitter className="w-5 h-5" />
      case "send":
        return <Send className="w-5 h-5" />
      case "phone":
        return <Phone className="w-5 h-5" />
      default:
        return <Github className="w-5 h-5" />
    }
  }

  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-center">
      {/* Efectos de luz mejorados */}
      <div className="hero-glow absolute top-[10%] left-[15%] w-[300px] h-[300px] opacity-50"></div>
      <div className="hero-glow orange absolute bottom-[20%] right-[15%] w-[250px] h-[250px] opacity-40"></div>
      <div className="hero-glow blue absolute top-[40%] right-[25%] w-[200px] h-[200px] opacity-30"></div>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-[15%] left-[10%] text-primary/20 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Code size={80} />
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] right-[10%] text-primary/20 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <ExternalLink size={70} />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col items-center lg:items-start gap-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-6 mb-2">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-lg opacity-50 scale-110"></div>
                <Image
                  src={homeData.profileImage || "/placeholder.svg"}
                  alt={homeData.name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-primary/30 object-cover z-10 relative"
                />
              </motion.div>
              <div>
                <motion.h1
                  className="text-5xl md:text-7xl font-bold hero-title font-heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {homeData.name}
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl text-primary hero-subtitle font-heading mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {homeData.subtitle[language]}
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="text-xl text-muted-foreground text-center lg:text-left max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {homeData.description[language]}
            </motion.p>

            {/* Redes sociales - ahora encima de los botones */}
            <motion.div
              className="flex gap-4 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {homeData.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/20 backdrop-blur-sm p-3 rounded-full hover:bg-primary/20 transition-colors border border-primary/30"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + 0.1 * index, duration: 0.3 }}
                  aria-label={link.label}
                >
                  {getIconComponent(link.icon)}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white hero-button text-lg px-8 py-6"
                onClick={scrollToAbout}
              >
                {homeData.buttons.about[language]}
              </Button>

              <Button size="lg" variant="outline" className="hero-button text-lg px-8 py-6" onClick={scrollToProjects}>
                {homeData.buttons.projects[language]}
              </Button>
            </motion.div>
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
              <div className="terminal-content min-h-[300px]">
                <pre>
                  {text.split("\n").map((line, i) => (
                    <div key={i} className="mb-2">
                      {i === 0 && <span className="text-green-500">$ </span>}
                      {i > 0 && <span className="text-green-500">&gt; </span>}
                      {line}
                      {lineIndex === i && charIndex === line.length && showCursor && <span className="cursor"></span>}
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* Elementos decorativos alrededor de la terminal */}
            <motion.div
              className="flex justify-center mt-8 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2 text-primary/70">
                <Code size={20} />
                <span className="text-sm font-mono">const developer = new Developer('Josué');</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll mejorado */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary/70 text-sm">
            {language === "en" ? "Scroll Down" : "Desplázate hacia abajo"}
          </span>
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </div>
      </motion.div>

      {/* Líneas decorativas */}
      <div className="absolute left-0 top-1/4 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute right-0 bottom-1/4 w-1/3 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent"></div>
    </div>
  )
}
