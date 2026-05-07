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
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const itemsPerPage = 6

  useEffect(() => {
    const merged = staticContributions.filter((c) => c.status === "merged")
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
          <Card className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-white mb-2">+20</div>
              <div className="text-sm text-white/60">
                {language === "en" ? "Total Contributions" : "Contribuciones Totales"}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">+20</div>
              <div className="text-sm text-white/60">
                {language === "en" ? "Merged Pull Requests" : "Pull Requests Fusionados"}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm">
            <CardContent className="p-4 text-center">
              <div className="text-4xl font-bold text-white mb-2">+20</div>
              <div className="text-sm text-white/60">
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
                className="group relative p-[1px] rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* Animated Magic Border */}
                <div 
                  className="absolute inset-[-100%] animate-spin bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,#3b82f6_85%,#a855f7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ animationDuration: '8s' }}
                />
                
                <Card className="relative bg-[#0a0a0a] flex flex-col justify-between border border-white/10 group-hover:border-transparent overflow-hidden transition-all duration-300 backdrop-blur-sm h-full hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] rounded-[15px] w-full z-10">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <GitMerge className="h-5 w-5 text-purple-400" />
                        <CardTitle className="text-lg text-white/90">
                          {contribution.repo.split("/")[1]}
                        </CardTitle>
                      </div>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-none">
                        {contribution.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-xs text-white/40">{contribution.repo}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <h3 className="font-medium text-white/90 mb-2">{contribution.title[language]}</h3>
                    <p className="text-sm text-white/60 mb-6 line-clamp-2 flex-grow">
                      {contribution.description[language]}
                    </p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs border-white/10 text-white/60 bg-white/5">
                          {contribution.prNumber}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm" asChild className="text-xs bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors h-8">
                        <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                          <GitPullRequest className="mr-1.5 h-3.5 w-3.5" />
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
          <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 border-0">
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
