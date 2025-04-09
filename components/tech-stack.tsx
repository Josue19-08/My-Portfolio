"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function TechStack() {
  const { t, language } = useLanguage()

  // Example tech stack - replace with your actual tech stack
  const techStack = {
    frontend: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "Next.js", icon: "▲", level: 85 },
      { name: "TypeScript", icon: "🔷", level: 80 },
      { name: "Tailwind CSS", icon: "🎨", level: 95 },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", level: 85 },
      { name: "Express", icon: "🚂", level: 80 },
      { name: "MongoDB", icon: "🍃", level: 75 },
      { name: "PostgreSQL", icon: "🐘", level: 70 },
    ],
    tools: [
      { name: "Git", icon: "🔄", level: 90 },
      { name: "Docker", icon: "🐳", level: 75 },
      { name: "AWS", icon: "☁️", level: 65 },
      { name: "GitHub Actions", icon: "🔄", level: 80 },
    ],
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("techStack.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-center text-primary">Frontend</h3>
            {techStack.frontend.map((tech, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${tech.level}%` }}></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-center text-primary">Backend</h3>
            {techStack.backend.map((tech, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: `${tech.level}%` }}></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-center text-primary">Tools</h3>
            {techStack.tools.map((tech, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
