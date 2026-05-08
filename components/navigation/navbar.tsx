"use client"

import { useState, useEffect } from "react"
import { LanguageToggle } from "@/components/language/language-toggle"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language/language-provider"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { id: "home",         key: "nav.home" },
  { id: "projects",     key: "nav.projects" },
  { id: "contributions",key: "nav.contributions" },
  { id: "tech-stack",   key: "nav.techStack" },
  { id: "about",        key: "nav.about" },
  { id: "contact",      key: "nav.contact" },
]

export function Navbar() {
  const { t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = currentScrollPos + 300

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] w-[95%] md:w-auto md:min-w-[800px]"
      >
        <div
          className="flex items-center justify-between md:justify-center gap-4 md:gap-8 px-6 py-4 rounded-[2rem] transition-all duration-300 bg-black/20 backdrop-blur-xl"
        >
          <Link href="/" className="flex shrink-0 items-center transform transition-transform duration-300 hover:scale-110">
            <Image src="/images/logo.png" alt="Josué Araya Logo" width={36} height={36} className="mr-2" />
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 whitespace-nowrap ${
                  activeSection === item.id ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{t(item.key)}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <LanguageToggle />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10 transition-colors rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 bg-background/95 backdrop-blur-2xl z-40 border border-white/10 rounded-3xl shadow-2xl md:hidden overflow-hidden"
          >
            <div className="px-6 py-8">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 text-base font-medium rounded-xl transition-colors text-left ${
                      activeSection === item.id ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {t(item.key)}
                  </button>
                ))}
                <div className="flex items-center justify-center gap-4 pt-6 mt-4 border-t border-white/10">
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
