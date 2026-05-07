"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { ProfileCard } from "./profile-card"
import { User, Briefcase, GraduationCap, Award } from "lucide-react"

import { BioTab } from "./bio-tab"
import { ExperienceTab } from "./experience-tab"
import { EducationTab } from "./education-tab"
import { CertificationsTab } from "./certifications-tab"

const tabs = [
  { id: "bio", labelEn: "Biography", labelEs: "Biografía", icon: User },
  { id: "experience", labelEn: "Experience", labelEs: "Experiencia", icon: Briefcase },
  { id: "education", labelEn: "Education", labelEs: "Educación", icon: GraduationCap },
  { id: "certifications", labelEn: "Certifications", labelEs: "Certificados", icon: Award },
]

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("bio")

  const renderContent = () => {
    switch (activeTab) {
      case "bio": return <BioTab />
      case "experience": return <ExperienceTab />
      case "education": return <EducationTab />
      case "certifications": return <CertificationsTab />
      default: return <BioTab />
    }
  }

  return (
    <div className="container mx-auto px-4" ref={containerRef}>
      <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {language === "en" ? "About Me" : "Sobre Mí"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500/50 to-cyan-500 mx-auto rounded-full mb-6" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <motion.div 
           className="lg:col-span-4 lg:sticky lg:top-24"
           initial={{ opacity: 0, x: -20 }}
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileCard />
        </motion.div>

        <motion.div 
           className="lg:col-span-8 flex flex-col w-full relative"
           initial={{ opacity: 0, x: 20 }}
           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Futuristic Floating Dock Tabs */}
          <div className="relative z-20 flex justify-center mb-8">
            <div className="flex p-1.5 bg-[#050505]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-x-auto no-scrollbar w-full md:w-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center justify-center gap-2 px-6 py-3 md:py-4 md:px-8 rounded-full text-sm md:text-base font-semibold transition-all duration-500 group outline-none min-w-[120px] md:min-w-[140px] flex-shrink-0 ${
                      isActive ? "text-white" : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect light */}
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <Icon className={`w-5 h-5 relative z-10 transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]' : 'scale-100'}`} />
                    <span className="relative z-10 whitespace-nowrap hidden sm:block">
                      {language === "en" ? tab.labelEn : tab.labelEs}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content Area with Glass Panel */}
          <div className="relative w-full min-h-[500px]">
            {/* Ambient Background Glow matching the active tab */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-full bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden"
              >
                {/* Top subtle highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}