"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "../language/language-provider"
import { ThemeToggle } from "../theme/theme-toggle"
import { LanguageToggle } from "../language/language-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const { t } = useLanguage()
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Solo mostrar el navbar cuando estamos en la sección home (parte superior)
      if (window.scrollY < window.innerHeight * 0.5) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "projects", label: t("nav.projects") },
    { id: "contributions", label: t("nav.contributions") },
    { id: "tech-stack", label: t("nav.techStack") },
    { id: "about", label: t("nav.about") },
    { id: "timeline", label: t("nav.timeline") },
    { id: "contact", label: t("nav.contact") },
  ]

  if (!isAtTop) return null

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Josué Araya Logo" width={40} height={40} className="mr-2" />
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md z-40 border-b border-border md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
