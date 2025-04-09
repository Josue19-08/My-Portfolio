"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const { t, language } = useLanguage()

  // Example projects - replace with your actual projects
  const projects = [
    {
      title: "Project 1",
      description: "A description of your first project",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/username/project1",
      demo: "https://project1-demo.com",
      image: "/team-brainstorm.png",
    },
    {
      title: "Project 2",
      description: "A description of your second project",
      technologies: ["Next.js", "Node.js", "MongoDB"],
      github: "https://github.com/username/project2",
      demo: "https://project2-demo.com",
      image: "/abstract-code-flow.png",
    },
    {
      title: "Project 3",
      description: "A description of your third project",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      github: "https://github.com/username/project3",
      demo: "https://project3-demo.com",
      image: "/urban-development-skyline.png",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <h2 className="text-3xl font-bold mb-8 text-center">{t("projects.title")}</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col border border-primary/20 bg-background/50 backdrop-blur-sm">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
