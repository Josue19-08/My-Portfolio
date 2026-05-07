"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/components/language/language-provider"
import { aboutData } from "@/data/about"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Twitter,
  Send,
  Phone,
  MapPin,
  Mail,
  Download,
} from "lucide-react"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  send: Send,
  phone: Phone,
}

const socialLinks = [
  { icon: "github", url: "https://github.com/Josue19-08", label: "GitHub" },
  { icon: "linkedin", url: "https://www.linkedin.com/in/josue-araya-marin-336975245/", label: "LinkedIn" },
  { icon: "twitter", url: "https://x.com/josuearayamarin", label: "Twitter" },
  { icon: "send", url: "https://t.me/Josue1908Cr", label: "Telegram" },
  { icon: "phone", url: "https://wa.link/5o4qrw", label: "WhatsApp" },
]

export function ProfileCard() {
  const { language } = useLanguage()

  return (
    <div className="group relative p-[1px] rounded-[24px] overflow-hidden flex flex-col w-full shadow-[0_0_40px_rgba(0,0,0,0.5)]">
      {/* Animated Magic Border - Now Fixed and Always Visible */}
      <div 
        className="absolute inset-[-100%] animate-spin opacity-100" 
        style={{ 
          animationDuration: '8s',
          backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, #ffffff80 85%, #ffffff 100%)` 
        }}
      />

      <div className="relative bg-[#0a0a0a] rounded-[23px] overflow-hidden border border-transparent h-full w-full">
        {/* Background gradient banner */}
        <div className="h-32 bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        </div>

        {/* Profile Picture */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-50 scale-110 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="relative w-32 h-32 rounded-full border-4 border-[#0a0a0a] overflow-hidden">
              <Image
                src={aboutData.image || "/placeholder.svg"}
                alt={aboutData.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="pt-24 p-6 text-center">
          <h3 className="text-2xl font-bold mb-1 text-white/90">{aboutData.name}</h3>
          <p className="text-white/60 mb-4">{aboutData.role[language]}</p>

          <div className="flex justify-center gap-2 mb-6">
            <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/10">{aboutData.englishLevel[language]}</Badge>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/60 mb-6">
            <MapPin className="w-4 h-4" />
            <span>Turrialba, Cartago, Costa Rica</span>
          </div>

          <div className="flex justify-center gap-3 mb-6">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 p-3 rounded-full hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>

          <div className="flex flex-col gap-3">
            <a href="https://wa.link/5o4qrw" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-white text-black hover:bg-white/90">
                <Mail className="mr-2 h-4 w-4" />
                {language === "en" ? "Contact Me" : "Contáctame"}
              </Button>
            </a>
            <a href="/CV-Josue-Araya-Marin.pdf" download>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                {language === "en" ? "Download CV" : "Descargar CV"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
