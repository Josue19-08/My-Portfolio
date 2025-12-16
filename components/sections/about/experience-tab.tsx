"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"
import { Badge } from "@/components/ui/badge"

export function ExperienceTab() {
  const { language } = useLanguage()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  // Fallback seguro si experience no está definido en el tipo inferido aún
  const experience = (myInformation as any).experience || []

  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      variants={containerVariants}
      className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-primary">
        {language === "en" ? "Work Experience" : "Experiencia Laboral"}
      </h3>

      <div className="space-y-8">
        {experience.map((item: any, index: number) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l border-primary/30"
            variants={itemVariants}
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div className="mb-1 text-sm text-muted-foreground">{item.period[language]}</div>
            <h4 className="text-lg font-bold">{item.position[language]}</h4>
            <div className="text-primary mb-2 font-medium">{item.company[language]}</div>
            <p className="text-muted-foreground mb-3">{item.description[language]}</p>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {item.technologies.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


