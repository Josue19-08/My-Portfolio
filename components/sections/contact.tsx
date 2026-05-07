"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { contactInfo } from "@/data/contact"
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Clock,
} from "lucide-react"

export function Contact() {
  const { language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: contactInfo.socialLinks.github, label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, url: contactInfo.socialLinks.linkedin, label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, url: contactInfo.socialLinks.twitter, label: "Twitter" },
    { icon: <Send className="w-5 h-5" />, url: contactInfo.socialLinks.send, label: "Telegram" },
  ]

  return (
    <div className="container mx-auto px-4" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#050505] border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden shadow-2xl"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Call to Action */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                {language === "en" ? (
                  <>Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">amazing</span> together.</>
                ) : (
                  <>Construyamos algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">increíble</span> juntos.</>
                )}
              </h2>
              <p className="text-lg text-white/60 max-w-md leading-relaxed">
                {language === "en"
                  ? "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions."
                  : "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${contactInfo.email.address}`}
                className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
              >
                <Mail className="w-5 h-5" />
                <span>{language === "en" ? "Send an Email" : "Enviar Correo"}</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
              
              <a
                href={contactInfo.socialLinks.phone}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#0a0a0a] border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Side: Info Card */}
          <div className="relative group p-[1px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)]">
            {/* Animated Magic Border */}
            <div 
              className="absolute inset-[-100%] animate-spin opacity-100" 
              style={{ 
                animationDuration: '10s',
                backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, #3b82f680 85%, #06b6d4 100%)` 
              }}
            />

            <div className="relative bg-[#0a0a0a] rounded-[23px] p-8 border border-transparent h-full flex flex-col gap-8 z-10">
              
              {/* Availability */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white/90 font-bold text-lg mb-1">{language === "en" ? "Current Status" : "Estado Actual"}</h4>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-white/60">
                      {language === "en" ? "Available for new opportunities" : "Disponible para nuevas oportunidades"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white/90 font-bold text-lg mb-1">{language === "en" ? "Location" : "Ubicación"}</h4>
                  <p className="text-white/60">Turrialba, Cartago, Costa Rica<br/>(Remote Worldwide)</p>
                </div>
              </div>

              {/* Socials Grid */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-white/90 font-bold text-lg mb-4">{language === "en" ? "Connect with me" : "Conecta conmigo"}</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 border border-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
