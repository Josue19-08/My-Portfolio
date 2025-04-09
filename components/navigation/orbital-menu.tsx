"use client"

import { useState } from "react"
import { useLanguage } from "../language/language-provider"
import { HomeIcon, Code, Github, Layers, User, Clock, Mail, Menu } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const menuItems = [
    { id: "home", icon: <HomeIcon size={20} />, label: t("nav.home") },
    { id: "projects", icon: <Code size={20} />, label: t("nav.projects") },
    { id: "contributions", icon: <Github size={20} />, label: t("nav.contributions") },
    { id: "tech-stack", icon: <Layers size={20} />, label: t("nav.techStack") },
    { id: "about", icon: <User size={20} />, label: t("nav.about") },
    { id: "timeline", icon: <Clock size={20} />, label: t("nav.timeline") },
    { id: "contact", icon: <Mail size={20} />, label: t("nav.contact") },
  ]

  return (
    <div className={`orbit-menu ${isOpen ? "menu-open" : ""}`}>
      <div className="menu-center" onClick={toggleMenu}>
        <Menu size={24} color="white" />
      </div>

      {menuItems.map((item, index) => {
        // Calcular la posición en un círculo perfecto
        const totalItems = menuItems.length
        const angle = index * ((2 * Math.PI) / totalItems) - Math.PI / 2 // Comenzar desde arriba
        const radius = 100 // Radio del círculo

        // Calcular coordenadas X e Y basadas en el ángulo
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        const delay = isOpen ? index * 0.05 : 0

        return (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => scrollToSection(item.id)}
            style={{
              transform: isOpen ? `translate(${x}px, ${y}px)` : "translate(0, 0) scale(0)",
              transitionDelay: `${delay}s`,
            }}
          >
            <div className="text-white">{item.icon}</div>
            <div className="menu-item-tooltip">{item.label}</div>
          </div>
        )
      })}
    </div>
  )
}
