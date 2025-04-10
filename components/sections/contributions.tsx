"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language/language-provider"
import { contributions as staticContributions } from "@/data/contributions"
import { Contribution } from "@/data/contributions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitPullRequest, GitMerge, Github } from "lucide-react"
import { motion, useInView } from "framer-motion"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function Contributions() {
  const { t, language } = useLanguage()
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [stats, setStats] = useState({ total: 0, merged: 0, projects: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const itemsPerPage = 6

  useEffect(() => {
    const merged = staticContributions.filter((c) => c.status === "merged")
    const projects = new Set(merged.map((c) => c.repo))

    setStats({
      total: merged.length,
      merged: merged.length,
      projects: projects.size,
    })

    setContributions(merged)
    setTotalPages(Math.ceil(merged.length / itemsPerPage))
  }, [language])

  const getCurrentPageContributions = () => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return contributions.slice(start, end)
  }

  return (
    <div className="container mx-auto" ref={containerRef}>
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-4 text-center">{t("contributions.title")}</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-lg text-muted-foreground">
            {language === "en"
              ? "I am an active contributor to open source projects..."
              : "Soy un contribuidor activo en proyectos de código abierto..."}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stats.total}</div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Total Contributions" : "Contribuciones Totales"}
              </div>
            </CardContent>
          </Card>
          <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">{stats.merged}</div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Merged Pull Requests" : "Pull Requests Fusionados"}
              </div>
            </CardContent>
          </Card>
          <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">{stats.projects}</div>
              <div className="text-sm text-muted-foreground">
                {language === "en" ? "Projects Contributed" : "Proyectos Contribuidos"}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {getCurrentPageContributions().map((contribution, index) => (
              <motion.div
                key={contribution.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm h-full hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <GitMerge className="h-5 w-5 text-purple-500" />
                        <CardTitle className="text-lg">
                          {contribution.repo.split("/")[1]}
                        </CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-purple-500 text-white">
                        {contribution.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs">{contribution.repo}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium mb-2">{contribution.title[language]}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {contribution.description[language]}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {contribution.prNumber}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" asChild className="text-xs">
                        <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                          <GitPullRequest className="mr-1 h-3 w-3" />
                          {language === "en" ? "View PR" : "Ver PR"}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="my-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage > 1) setCurrentPage(currentPage - 1)
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(i + 1)
                      }}
                      isActive={currentPage === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1)
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Button size="lg" asChild>
            <a href="https://github.com/Josue19-08" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {language === "en" ? "View My GitHub Profile" : "Ver Mi Perfil de GitHub"}
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
