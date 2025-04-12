"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"

export function EducationTab() {
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

  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      variants={containerVariants}
      className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-primary">
        {language === "en" ? "Education & Training" : "Educación y Formación"}
      </h3>

      <div className="space-y-8">
        {myInformation.education.map((item, index) => (
          <motion.div
            key={index}
            className="relative pl-8 border-l border-primary/30"
            variants={itemVariants}
          >
            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div className="mb-1 text-sm text-muted-foreground">{item.year}</div>
            <h4 className="text-lg font-bold">{item.degree[language]}</h4>
            <div className="text-primary mb-2">{item.institution[language]}</div>
            <p className="text-muted-foreground">{item.description[language]}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}