"use client"

import { useState } from "react"
import { useLanguage } from "./language-provider"
import { HomeIcon, Code, Github, Layers, User, Clock, BookOpen, Mail, Menu } from "lucide-react"

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
    { id: "home", icon: <HomeIcon size={20} />, label: t("nav.home"), angle: 0 },
    { id: "projects", icon: <Code size={20} />, label: t("nav.projects"), angle: 45 },
    { id: "contributions", icon: <Github size={20} />, label: t("nav.contributions"), angle: 90 },
    { id: "tech-stack", icon: <Layers size={20} />, label: t("nav.techStack"), angle: 135 },
    { id: "about", icon: <User size={20} />, label: t("nav.about"), angle: 180 },
    { id: "timeline", icon: <Clock size={20} />, label: t("nav.timeline"), angle: 225 },
    { id: "blog", icon: <BookOpen size={20} />, label: t("nav.blog"), angle: 270 },
    { id: "contact", icon: <Mail size={20} />, label: t("nav.contact"), angle: 315 },
  ]

  return (
    <div className={`orbit-menu ${isOpen ? "menu-open" : ""}`}>
      <div className="menu-center" onClick={toggleMenu}>
        <Menu size={24} color="white" />
      </div>

      {menuItems.map((item, index) => {
        const radius = 100 // Distance from center
        const angle = isOpen ? item.angle * (Math.PI / 180) : Math.PI / 2 // Convert to radians
        const x = radius * Math.cos(angle)
        const y = radius * Math.sin(angle)

        const delay = isOpen ? index * 0.05 : 0

        return (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => scrollToSection(item.id)}
            style={{
              transform: isOpen ? `translate(${x}px, ${y}px)` : "translate(0, 80px) scale(0.5)",
              transitionDelay: `${delay}s`,
            }}
          >
            {item.icon}
            <div className="menu-item-tooltip" style={{ bottom: "100%", marginBottom: "10px" }}>
              {item.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
