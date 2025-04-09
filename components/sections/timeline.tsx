"use client"

import { useLanguage } from "@/components/language/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { timelineEvents } from "@/data/timeline"
import { Calendar, Briefcase, GraduationCap } from "lucide-react"

export function Timeline() {
  const { t, language } = useLanguage()

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Función para obtener el icono según el tipo de evento
  const getEventIcon = (title: string) => {
    if (title.toLowerCase().includes("degree") || title.toLowerCase().includes("licenciatura")) {
      return <GraduationCap className="h-5 w-5 text-primary" />
    } else if (title.toLowerCase().includes("developer") || title.toLowerCase().includes("desarrollador")) {
      return <Briefcase className="h-5 w-5 text-primary" />
    } else {
      return <Calendar className="h-5 w-5 text-primary" />
    }
  }

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-12 text-center">{t("timeline.title")}</h2>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Línea central para pantallas medianas y grandes */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-16 md:mb-24 relative ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto" : "md:pl-8 md:text-left md:ml-auto md:mr-0"
              } md:w-[calc(50%-1rem)]`}
              style={{
                marginLeft: index % 2 === 0 ? "0" : "auto",
                marginRight: index % 2 === 0 ? "auto" : "0",
              }}
            >
              {/* Punto en la línea de tiempo para pantallas medianas y grandes */}
              <div
                className="hidden md:flex absolute top-5 w-10 h-10 rounded-full bg-background border-4 border-primary items-center justify-center z-10"
                style={{
                  right: index % 2 === 0 ? "-1.25rem" : "auto",
                  left: index % 2 === 1 ? "-1.25rem" : "auto",
                  transform: "translateX(50%)",
                }}
              >
                {getEventIcon(event.title[language])}
              </div>

              {/* Tarjeta del evento */}
              <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Barra superior de color */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>

                <CardContent className="p-6">
                  {/* Encabezado con año e icono (visible solo en móvil) */}
                  <div className="flex items-center justify-between mb-4 md:mb-2">
                    <div className="flex items-center gap-2 md:hidden">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {getEventIcon(event.title[language])}
                      </div>
                    </div>
                    <div
                      className={`text-xl font-bold text-primary ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                    >
                      {event.year}
                    </div>
                  </div>

                  {/* Contenido principal */}
                  <h3 className={`text-xl font-bold mb-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    {event.title[language]}
                  </h3>
                  <p className={`text-primary mb-3 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    {event.company[language]}
                  </p>
                  <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    {event.description[language]}
                  </p>

                  {/* Habilidades */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {event.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Flecha conectora para pantallas medianas y grandes */}
              <div
                className={`hidden md:block absolute top-8 w-8 h-0.5 bg-primary/30 ${
                  index % 2 === 0 ? "right-0" : "left-0"
                }`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
