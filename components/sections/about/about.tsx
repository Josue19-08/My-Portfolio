"use client"
import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { Tabs } from "@/components/ui/tabs"
import { ProfileCard } from "./profile-card"
import { AboutTabs } from "./about-tabs"

export function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("bio")

  return (
    <div className="container mx-auto" ref={containerRef}>
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-8 text-center">
          {language === "en" ? "About Me" : "Sobre Mí"}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <ProfileCard />
            </div>
          </div>
          <div className="lg:col-span-8">
            <Tabs defaultValue="bio" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <AboutTabs activeTab={activeTab} />
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}