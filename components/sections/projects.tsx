"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/components/language/language-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { projects } from "@/data/projects"
import Image from "next/image"

export function Projects() {
  const { t, language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const getProject = (index: number) => {
    return projects[index]
  }

  const currentProject = getProject(activeIndex)
  const nextProject = getProject((activeIndex + 1) % projects.length)
  const prevProject = getProject(activeIndex === 0 ? projects.length - 1 : activeIndex - 1)

  return (
    <div className="container mx-auto relative" ref={containerRef}>
      <div className="language-badge">{language.toUpperCase()}</div>
      <h2 className="text-3xl font-bold mb-12 text-center">{t("projects.title")}</h2>

      {/* Carrusel de proyectos */}
      <div className="relative h-[600px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-background rounded-xl overflow-hidden">
              {/* Fondo con efecto parallax */}
              <motion.div
                className="absolute inset-0 w-full h-full opacity-30"
                style={{
                  backgroundImage: `url(${currentProject.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

              <div className="relative z-10 h-full flex flex-col md:flex-row items-center p-8">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                  >
                    <h3 className="text-4xl font-bold text-primary">{currentProject.title[language]}</h3>
                    <p className="text-lg text-muted-foreground">{currentProject.description[language]}</p>

                    <div className="flex flex-wrap gap-2 my-4">
                      {currentProject.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-6">
                      <Button variant="outline" size="lg" asChild>
                        <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-5 w-5" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="default" size="lg" asChild className="bg-primary text-white hover:bg-primary/80">
                        <a href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 100, rotateY: 45 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl transform perspective-1000"
                  >
                    <Image
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title[language]}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles de navegación */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Indicadores de proyectos */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-primary w-6" : "bg-primary/30"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Miniaturas de proyectos */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveIndex(index)}
            className={`relative cursor-pointer rounded-lg overflow-hidden aspect-video ${
              index === activeIndex ? "ring-2 ring-primary" : ""
            }`}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title[language]}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <p className="text-white text-sm p-3 font-medium">{project.title[language]}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
