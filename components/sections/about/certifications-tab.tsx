"use client"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"
import { Award } from "lucide-react"

export function CertificationsTab() {
  const { language } = useLanguage()

  return (
    <motion.div
      key="certifications"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm p-6"
    >
      <h3 className="text-2xl font-bold mb-6 text-primary">
        {language === "en" ? "Certifications & Achievements" : "Certificaciones y Logros"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myInformation.certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="border border-primary/20 rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors"
            whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="font-bold">{cert.name[language]}</h4>
              <div className="text-primary text-sm">{cert.issuer}</div>
              <div className="text-xs text-muted-foreground mt-1">{cert.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}