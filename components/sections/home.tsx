"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, GithubIcon, LinkedinIcon, TwitterIcon, type LucideIcon } from "lucide-react"
import { homeData } from "@/data/home"
import { ParticleTextEffect } from "@/components/ui/particle-text-effect"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { Terminal } from "@/components/ui/terminal"
import { GafeteCard } from "@/components/ui/gafete-card"

const iconMap: Record<string, LucideIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  send: Send,
  phone: Phone,
}

export function Home() {
  const [typingDone, setTypingDone] = useState(false)

  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <ParticleTextEffect words={[
          homeData.name.toUpperCase(),
          "FULLSTACK DEV",
          "BACKEND DEV",
          "FRONTEND DEV",
        ]} />
      </div>

      {/* Terminal + social buttons column */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-20 px-4">

        {/* Social buttons — vertical column to the left of the terminal */}
        {typingDone && (
          <div className="absolute flex flex-col gap-3" style={{ right: "calc(50% + 310px)" }}>
            {homeData.socialLinks.map((link, i) => {
              const Icon = iconMap[link.icon]
              if (!Icon) return null
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-black/40 hover:bg-white/10 backdrop-blur-sm transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/80" />
                </motion.a>
              )
            })}
          </div>
        )}

        {/* Terminal — not moved */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl"
        >
          <Terminal onComplete={() => setTypingDone(true)} />
        </motion.div>
      </div>

      {/* Gafete */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="hidden lg:block absolute right-0 top-0 w-[55%] h-[calc(100%-80px)] z-50"
      >
        <GafeteCard name={homeData.name} />
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-30 w-full pb-5"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-white/20 md:pr-6 mb-4 md:mb-0">
              <p className="text-end text-sm text-gray-400 uppercase tracking-widest font-semibold">Tech Stack</p>
            </div>
            <div className="relative py-4 md:w-[calc(100%-11rem)] overflow-hidden">
              <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                <div className="flex items-center gap-2">
                  <img className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                  <span className="text-white font-medium text-lg tracking-wide hidden sm:block">React</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt=".NET" />
                  <span className="text-white font-medium text-lg tracking-wide hidden sm:block">.NET</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                  <span className="text-white font-medium text-lg tracking-wide hidden sm:block">Java</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" />
                  <span className="text-white font-medium text-lg tracking-wide hidden sm:block">Spring Boot</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  <span className="text-white font-medium text-lg tracking-wide hidden sm:block">TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <img className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <span className="text-white font-medium text-lg tracking-wide hidden sm:block">Node.js</span>
                </div>
              </InfiniteSlider>
              <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10" direction="left" blurIntensity={1} />
              <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10" direction="right" blurIntensity={1} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
