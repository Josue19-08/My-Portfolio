"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Timeline() {
  const { t, language } = useLanguage()

  // Example timeline events - replace with your actual timeline
  const timelineEvents = [
    {
      year: "2023",
      title: "Senior Software Developer",
      company: "Tech Company",
      description: "Leading development of web applications using React and Node.js",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      year: "2021",
      title: "Software Developer",
      company: "Digital Agency",
      description: "Developed responsive web applications and e-commerce solutions",
      skills: ["JavaScript", "TypeScript", "Next.js"],
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "Startup",
      description: "Worked on frontend development and UI implementation",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      year: "2018",
      title: "Computer Science Degree",
      company: "University",
      description: "Graduated with honors in Computer Science",
      skills: ["Algorithms", "Data Structures", "Software Engineering"],
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("timeline.title")}</h2>

        <div className="relative border-l-2 border-primary/50 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-6 md:pl-0">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`mb-12 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute -left-[9px] md:static md:w-1/2 flex md:justify-center">
                <div className="bg-primary text-primary-foreground rounded-full w-4 h-4 mt-2 md:hidden"></div>
                <div className="md:w-full md:px-4 md:flex md:flex-col md:items-center">
                  <div className="hidden md:block md:bg-primary md:text-primary-foreground md:rounded-full md:w-4 md:h-4 md:mb-2"></div>
                  <Card className="md:w-full border border-primary/20 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-primary">{event.year}</div>
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.company}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="md:w-1/2 md:px-4 mt-2 md:mt-8">
                <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.skills.map((skill, i) => (
                        <Badge key={i} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
