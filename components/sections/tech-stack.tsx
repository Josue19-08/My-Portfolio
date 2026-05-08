"use client"

import { useRef } from "react"
import { useLanguage } from "@/components/language/language-provider"
import { motion, useInView } from "framer-motion"
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5, SiRedux, SiFramer, SiIonic, SiAngular, SiBootstrap,
  SiNodedotjs, SiFastify, SiExpress, SiSupabase, SiRust, SiSolidity, SiMongodb, SiPostgresql, SiGraphql, SiPrisma, SiDotnet, SiSpringboot, SiElasticsearch,
  SiGit, SiDocker, SiGithubactions, SiJest, SiWebpack, SiFigma,
  SiOpenai, SiClaude, SiGooglegemini, SiGithubcopilot
} from "react-icons/si"
import { FaJava, FaNetworkWired, FaAws, FaCss3Alt, FaRocket } from "react-icons/fa"
import { BsBoxSeam, BsCursorFill } from "react-icons/bs"
import { TbBrandVscode } from "react-icons/tb"

const row1 = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Ionic", icon: SiIonic, color: "#3880FF" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
]

const row2 = [
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Fastify", icon: SiFastify, color: "#ffffff" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
]

const row3 = [
  { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" },
  { name: "Claude Code", icon: SiClaude, color: "#D97757" },
  { name: "Gemini", icon: SiGooglegemini, color: "#8E75B2" },
  { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#ffffff" },
  { name: "OpenAI Codex", icon: SiOpenai, color: "#10A37F" },
  { name: "Cursor", icon: BsCursorFill, color: "#ffffff" },
  { name: "Antigravity", icon: FaRocket, color: "#FF4500" },
  { name: "Rust", icon: SiRust, color: "#DEA584" },
  { name: "Solidity", icon: SiSolidity, color: "#363636" },
  { name: "Starknet / Cairo", icon: BsBoxSeam, color: "#FF4500" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
]

export function TechStack() {
  const { t, language } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <div className="w-full relative overflow-hidden py-10" ref={containerRef}>
      <div className="container mx-auto px-4 mb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t("techStack.title") || "Tech Stack"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full mb-6" />
          <p className="text-white/60 max-w-2xl text-lg mx-auto">
            {language === "en"
              ? "A robust ecosystem of technologies I use to architect, build, and deploy high-performance applications."
              : "Un robusto ecosistema de tecnologías que utilizo para diseñar, construir y desplegar aplicaciones de alto rendimiento."}
          </p>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full flex flex-col gap-6 lg:gap-8 marquee-container"
      >
        {/* Gradient Overlays for Smooth Fade In/Out */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#050505] to-transparent z-10 hidden sm:block"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#050505] to-transparent z-10 hidden sm:block"></div>

        {/* First Row: Scrolling Left */}
        <div className="flex w-fit animate-scroll-left gap-4 md:gap-6 pr-4 md:pr-6">
          {/* We repeat the array 3 times to ensure infinite seamless scrolling */}
          {[...row1, ...row1, ...row1].map((tech, i) => (
            <div 
              key={`r1-${i}`} 
              className="group relative p-[1px] rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
              {/* Animated Magic Border */}
              <div 
                className="absolute inset-[-100%] animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ 
                  animationDuration: '6s',
                  backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, ${tech.color}80 85%, ${tech.color} 100%)` 
                }}
              />
              
              <div className="relative flex items-center gap-3 px-6 py-4 bg-[#0a0a0a] border border-white/10 group-hover:border-transparent transition-all rounded-2xl h-full w-full backdrop-blur-sm">
                <tech.icon 
                  className="w-8 h-8 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 drop-shadow-md" 
                  style={{ color: tech.color }} 
                />
                <span className="text-lg font-bold text-white/60 group-hover:text-white transition-all duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row: Scrolling Right */}
        <div className="flex w-fit animate-scroll-right gap-4 md:gap-6 pr-4 md:pr-6">
          {[...row2, ...row2, ...row2].map((tech, i) => (
            <div 
              key={`r2-${i}`} 
              className="group relative p-[1px] rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
              {/* Animated Magic Border */}
              <div 
                className="absolute inset-[-100%] animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ 
                  animationDuration: '6s',
                  backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, ${tech.color}80 85%, ${tech.color} 100%)` 
                }}
              />
              
              <div className="relative flex items-center gap-3 px-6 py-4 bg-[#0a0a0a] border border-white/10 group-hover:border-transparent transition-all rounded-2xl h-full w-full backdrop-blur-sm">
                <tech.icon 
                  className="w-8 h-8 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 drop-shadow-md" 
                  style={{ color: tech.color }} 
                />
                <span className="text-lg font-bold text-white/60 group-hover:text-white transition-all duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row: Scrolling Left */}
        <div className="flex w-fit animate-scroll-left gap-4 md:gap-6 pr-4 md:pr-6">
          {[...row3, ...row3, ...row3].map((tech, i) => (
            <div 
              key={`r3-${i}`} 
              className="group relative p-[1px] rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-1"
            >
              {/* Animated Magic Border */}
              <div 
                className="absolute inset-[-100%] animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ 
                  animationDuration: '6s',
                  backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, ${tech.color}80 85%, ${tech.color} 100%)` 
                }}
              />
              
              <div className="relative flex items-center gap-3 px-6 py-4 bg-[#0a0a0a] border border-white/10 group-hover:border-transparent transition-all rounded-2xl h-full w-full backdrop-blur-sm">
                <tech.icon 
                  className="w-8 h-8 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 drop-shadow-md" 
                  style={{ color: tech.color }} 
                />
                <span className="text-lg font-bold text-white/60 group-hover:text-white transition-all duration-300 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-20 text-center container mx-auto px-4"
      >
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact")
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          {language === "en" ? "Let's build something together" : "Construyamos algo juntos"}
        </button>
      </motion.div>
    </div>
  )
}
