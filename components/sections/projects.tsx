"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language/language-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ExternalLink, Github, Lock, ChevronRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { projects } from "@/data/projects"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Projects() {
  const { t, language } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)

  const getProjectImage = (project: any) => {
    if (project.id === "aqua-stark") {
      return project.image || "/placeholder.svg"
    }
    if (project.demo) {
      return `https://api.microlink.io/?url=${encodeURIComponent(project.demo)}&screenshot=true&meta=false&embed=screenshot.url`
    }
    return project.image || "/placeholder.svg"
  }

  return (
    <div className="container mx-auto relative px-4">
      <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t("projects.title") || "Selected Projects"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full mb-6" />
          <p className="text-white/60 max-w-2xl text-lg">
            {language === "en" 
              ? "A collection of my recent work, showcasing a diverse range of technologies and domains." 
              : "Una colección de mi trabajo reciente, mostrando una diversa gama de tecnologías y dominios."}
          </p>
        </motion.div>
      </div>

      <div className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${isExpanded ? "max-h-[5000px]" : "max-h-[1050px]"}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative p-[1px] rounded-2xl overflow-hidden h-full flex flex-col"
            >
              {/* Animated Magic Border */}
              <div 
                className="absolute inset-[-100%] animate-spin bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#3b82f6_85%,#a855f7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ animationDuration: '8s' }}
              />
              
              <div className="relative flex flex-col justify-between rounded-[15px] bg-[#0a0a0a] border border-white/10 group-hover:border-transparent overflow-hidden hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 backdrop-blur-sm h-full w-full z-10">
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden bg-white/5">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                  {/* Use native img for external URLs to avoid next/image domain config issues */}
                  <img
                    src={getProjectImage(project)}
                    alt={project.title[language]}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if screenshot fails
                      e.currentTarget.src = project.image || "/placeholder.svg"
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                </div>
  
                {/* Content Section */}
                <div className="relative z-20 flex flex-col flex-grow p-6 -mt-8 bg-gradient-to-b from-transparent to-[#0a0a0a] via-[#0a0a0a]">
                  <h3 className="text-xl font-bold text-white/90 group-hover:text-white mb-3 line-clamp-2 transition-colors">
                    {project.title[language]}
                  </h3>
                  
                  <p className="text-white/60 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-white/10 text-white/80 hover:bg-white/20 border-none text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="bg-white/5 text-white/50 border-none text-xs font-medium">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/10">
                  <TooltipProvider>
                    {project.githubLocked ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            disabled
                            className="opacity-50 cursor-not-allowed hover:bg-transparent text-white/50 px-2 h-9"
                          >
                            <Lock className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-black border-white/20 text-white/80">
                          <p>{language === "en" ? "Private repository" : "Repositorio privado"}</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Button variant="ghost" size="sm" asChild className="text-white/80 hover:text-white hover:bg-white/10 px-2 h-9 transition-colors">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </TooltipProvider>

                  {project.demo ? (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="ml-auto bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 h-9 px-4 rounded-full"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        {project.demoLabel ? project.demoLabel[language] : (language === "en" ? "Live Demo" : "Ver Demo")}
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      disabled
                      className="ml-auto opacity-50 cursor-not-allowed bg-white/5 text-white h-9 px-4 rounded-full"
                    >
                      {language === "en" ? "Live Demo" : "Ver Demo"}
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </motion.div>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent flex items-end justify-center pb-8 z-30 pointer-events-none">
            <Button 
              onClick={() => setIsExpanded(true)} 
              className="bg-white/10 text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-base font-medium backdrop-blur-md border border-white/20 pointer-events-auto transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              {language === "en" ? "Load More Projects" : "Cargar Más Proyectos"}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
