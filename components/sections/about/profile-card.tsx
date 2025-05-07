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
    <div className="rounded-xl overflow-hidden border border-primary/20 bg-background/50 backdrop-blur-sm">
      <div className="h-32 bg-gradient-to-r from-primary/30 to-secondary/30 relative">
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-lg opacity-70 scale-110"></div>
            <div className="relative w-32 h-32 rounded-full border-4 border-background overflow-hidden">
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
      </div>

      <div className="pt-20 p-6 text-center">
        <h3 className="text-2xl font-bold mb-1">{aboutData.name}</h3>
        <p className="text-primary mb-4">{aboutData.role[language]}</p>

        <div className="flex justify-center gap-2 mb-6">
          <Badge className="bg-primary">{aboutData.englishLevel[language]}</Badge>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
          <MapPin className="w-4 h-4" />
          <span>San José, Costa Rica</span>
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
                className="bg-background/80 border border-primary/20 p-3 rounded-full hover:bg-primary/10 transition-colors"
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
            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" />
              {language === "en" ? "Contact Me" : "Contáctame"}
            </Button>
          </a><a href="/CV-Josue-Araya-Marin.pdf" download>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              {language === "en" ? "Download CV" : "Descargar CV"}
            </Button>
          </a>

        </div>

      </div>
    </div>
  )
}
