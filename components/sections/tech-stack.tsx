"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/components/language/language-provider"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { techStack } from "@/data/tech-stack"
import { Code, Server, PenToolIcon as Tool, Zap, Cpu, Database, Globe, Layout, Layers, GitBranch } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function TechStack() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // Iconos para cada categoría
  const categoryIcons = {
    frontend: <Layout className="w-6 h-6" />,
    backend: <Server className="w-6 h-6" />,
    tools: <Tool className="w-6 h-6" />,
  }

  // Iconos para tecnologías específicas (podríamos expandir esto)
  const techIcons: Record<string, JSX.Element> = {
    React: <Code className="w-5 h-5 text-blue-400" />,
    "Next.js": <Zap className="w-5 h-5 text-white" />,
    TypeScript: <Code className="w-5 h-5 text-blue-500" />,
    "Tailwind CSS": <Layout className="w-5 h-5 text-cyan-400" />,
    "Node.js": <Server className="w-5 h-5 text-green-500" />,
    Express: <Zap className="w-5 h-5 text-gray-400" />,
    MongoDB: <Database className="w-5 h-5 text-green-400" />,
    PostgreSQL: <Database className="w-5 h-5 text-blue-400" />,
    Git: <GitBranch className="w-5 h-5 text-orange-500" />,
    Docker: <Layers className="w-5 h-5 text-blue-500" />,
    AWS: <Globe className="w-5 h-5 text-yellow-500" />,
    "GitHub Actions": <GitBranch className="w-5 h-5 text-purple-400" />,
    Fastify: <Zap className="w-5 h-5 text-white" />,
    Supabase: <Database className="w-5 h-5 text-emerald-400" />,
    Rust: <Code className="w-5 h-5 text-orange-600" />,
    Solidity: <Code className="w-5 h-5 text-gray-400" />,
    Cairo: <Code className="w-5 h-5 text-red-400" />,
    "Starknet.js": <Code className="w-5 h-5 text-red-400" />,
    "Stellar SDK": <Globe className="w-5 h-5 text-purple-400" />,
  }

  // Colores para cada categoría
  const categoryColors = {
    frontend: "from-blue-500 to-cyan-400",
    backend: "from-green-500 to-emerald-400",
    tools: "from-orange-500 to-amber-400",
  }

  // Variantes para animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category)
  }

  // Función para renderizar las tecnologías de una categoría
  const renderTechItems = (category: keyof typeof techStack) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {techStack[category].map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="relative"
          >
            <div
              className={`
                relative overflow-hidden rounded-xl border border-primary/20 
                bg-background/50 backdrop-blur-lg p-5 h-full
                transition-all duration-300 group
                ${hoveredTech === tech.name ? "shadow-lg shadow-primary/20 border-primary/40" : ""}
              `}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>

              {/* Contenido */}
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3 rounded-lg">
                  {techIcons[tech.name] || <Cpu className="w-5 h-5 text-primary" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                    {tech.name}
                    {tech.level >= 90 && (
                      <Badge variant="outline" className="bg-primary/10 text-primary text-xs">
                        Expert
                      </Badge>
                    )}
                  </h3>

                  {/* Barra de progreso con animación */}
                  <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                      initial={{ width: 0 }}
                      animate={{ width: isInView ? `${tech.level}%` : 0 }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>

                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-muted-foreground">
                      {language === "en" ? "Proficiency" : "Competencia"}
                    </span>
                    <span className="text-xs font-medium">{tech.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto" ref={containerRef}>
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-4 text-center">{t("techStack.title")}</h2>

        {/* Descripción */}
        <motion.p
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {language === "en"
            ? "My technical toolkit spans across various domains, allowing me to build complete solutions from frontend to backend. Here's a breakdown of my expertise and proficiency levels."
            : "Mi conjunto de herramientas técnicas abarca varios dominios, permitiéndome construir soluciones completas desde el frontend hasta el backend. Aquí hay un desglose de mi experiencia y niveles de competencia."}
        </motion.p>

        {/* Hexágono de tecnologías (efecto visual) */}
        <div className="relative mb-16 hidden lg:block">
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            animate={isInView ? { opacity: 0.15, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -30 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,3 100,28 100,72 50,97 0,72 0,28"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
              <polygon
                points="50,15 85,32 85,68 50,85 15,68 15,32"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-primary"
              />
            </svg>
          </motion.div>
        </div>

        {/* Categorías de tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {(Object.keys(techStack) as Array<keyof typeof techStack>).map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => handleCategoryClick(category)}
              className="cursor-pointer"
            >
              <div
                className={`
                  relative overflow-hidden rounded-xl border border-primary/20 
                  bg-background/50 backdrop-blur-lg p-6 text-center
                  transition-all duration-300
                  ${activeCategory === category ? "border-primary shadow-lg shadow-primary/20" : ""}
                `}
              >
                {/* Fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-30"></div>

                <div className="relative z-10">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary/20 to-transparent rounded-full mb-4">
                    {categoryIcons[category]}
                  </div>

                  <h3 className="text-xl font-bold mb-2 capitalize">
                    {language === "en"
                      ? category
                      : category === "frontend"
                        ? "Frontend"
                        : category === "backend"
                          ? "Backend"
                          : "Herramientas"}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {language === "en"
                      ? `${techStack[category].length} technologies`
                      : `${techStack[category].length} tecnologías`}
                  </p>

                  <div className="flex justify-center gap-1">
                    {techStack[category].slice(0, 3).map((tech) => (
                      <Badge key={tech.name} variant="outline" className="text-xs">
                        {tech.name}
                      </Badge>
                    ))}
                    {techStack[category].length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{techStack[category].length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tecnologías detalladas */}
        <AnimatePresence mode="wait">
          {activeCategory ? (
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-center capitalize">
                {language === "en"
                  ? activeCategory
                  : activeCategory === "frontend"
                    ? "Frontend"
                    : activeCategory === "backend"
                      ? "Backend"
                      : "Herramientas"}
              </h3>

              {renderTechItems(activeCategory as keyof typeof techStack)}
            </motion.div>
          ) : (
            <motion.div
              key="all-tech"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {(Object.keys(techStack) as Array<keyof typeof techStack>).map((category) => (
                  <div key={category} className="space-y-6">
                    <h3 className="text-xl font-semibold text-center text-primary capitalize">
                      {language === "en"
                        ? category
                        : category === "frontend"
                          ? "Frontend"
                          : category === "backend"
                            ? "Backend"
                            : "Herramientas"}
                    </h3>

                    {techStack[category].map((tech, index) => (
                      <motion.div key={tech.name} variants={itemVariants} whileHover={{ scale: 1.03 }}>
                        <div className="border border-primary/20 bg-background/50 backdrop-blur-sm rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {techIcons[tech.name] || <Cpu className="w-5 h-5 text-primary" />}
                              <span className="font-medium">{tech.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{tech.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                              initial={{ width: 0 }}
                              animate={{ width: isInView ? `${tech.level}%` : 0 }}
                              transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Llamado a la acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            {language === "en"
              ? "Interested in working together? Let's build something amazing!"
              : "¿Interesado en trabajar juntos? ¡Construyamos algo increíble!"}
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            {language === "en" ? "Contact Me" : "Contáctame"}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
