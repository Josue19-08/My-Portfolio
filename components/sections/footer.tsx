"use client"

import { useLanguage } from "@/components/language/language-provider"
import { motion } from "framer-motion"
import Image from "next/image"

export function Footer() {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full relative border-t border-white/10 bg-[#050505] pt-16 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Josué Araya" width={40} height={40} className="rounded-full" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Josué Araya
            </span>
          </div>

          {/* Socials / Links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/Josue19-08" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/josue-araya-marin-336975245/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
              LinkedIn
            </a>
            <a href="https://x.com/josuearayamarin" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
              Twitter
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/40">
          <p>
            © {currentYear} Josué Araya. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
          <p className="flex items-center gap-1 font-mono tracking-wider">
            {language === "en" ? "SYSTEM.STATUS: ONLINE" : "SISTEMA.ESTADO: EN LÍNEA"}
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2"></span>
          </p>
        </div>
      </div>
    </footer>
  )
}
