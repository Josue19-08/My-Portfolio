"use client"

import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/components/language/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitPullRequest, GitMerge, Github, Loader2 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Tipo para las contribuciones cargadas desde GitHub
type GitHubContribution = {
  id: number
  html_url: string
  title: string
  state: string
  merged: boolean
  number: number
  repository: {
    name: string
    full_name: string
    html_url: string
  }
  created_at: string
  updated_at: string
  merged_at?: string
  body: string | null
}

// Lista de repositorios OSS a los que has contribuido
// Puedes personalizar esta lista con los repositorios que consideres OSS
const OSS_REPOS = [
  "facebook/react",
  "vercel/next.js",
  "tailwindlabs/tailwindcss",
  "microsoft/typescript",
  "vitejs/vite",
  "eslint/eslint",
  "prisma/prisma",
  "framer/motion",
  "webpack/webpack",
  // Añade más repositorios según sea necesario
]

export function Contributions() {
  const { t, language } = useLanguage()
  const [contributions, setContributions] = useState<GitHubContribution[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [stats, setStats] = useState({
    total: 0,
    merged: 0,
    projects: 0,
  })
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const itemsPerPage = 6

  // Función para cargar contribuciones desde GitHub
  useEffect(() => {
    // En un entorno real, esta función haría una llamada a la API de GitHub
    // Aquí simulamos la carga con datos de ejemplo
    const fetchContributions = async () => {
      setLoading(true)
      try {
        // En una implementación real, harías una llamada a la API de GitHub
        // Algo como: const response = await fetch(`https://api.github.com/search/issues?q=author:username+type:pr+is:merged+repo:${OSS_REPOS.join('+repo:')}`)

        // Simulamos la respuesta con datos de ejemplo
        // En producción, esto vendría de la API de GitHub
        const mockData: GitHubContribution[] = [
          {
            id: 1,
            html_url: "https://github.com/facebook/react/pull/1234",
            title: "Fix memory leak in useEffect cleanup",
            state: "closed",
            merged: true,
            number: 1234,
            repository: {
              name: "react",
              full_name: "facebook/react",
              html_url: "https://github.com/facebook/react",
            },
            created_at: "2023-01-15T12:00:00Z",
            updated_at: "2023-01-20T15:30:00Z",
            merged_at: "2023-01-20T15:30:00Z",
            body: "Fixed a memory leak issue in the useEffect cleanup function when components unmount during concurrent mode rendering",
          },
          {
            id: 2,
            html_url: "https://github.com/vercel/next.js/pull/5678",
            title: "Add new API route feature for better error handling",
            state: "closed",
            merged: true,
            number: 5678,
            repository: {
              name: "next.js",
              full_name: "vercel/next.js",
              html_url: "https://github.com/vercel/next.js",
            },
            created_at: "2023-02-10T09:15:00Z",
            updated_at: "2023-02-15T14:20:00Z",
            merged_at: "2023-02-15T14:20:00Z",
            body: "Implemented a new feature for API routes to support better error handling and response formatting with middleware support",
          },
          {
            id: 3,
            html_url: "https://github.com/tailwindlabs/tailwindcss/pull/9012",
            title: "Improve documentation for color palette features",
            state: "closed",
            merged: true,
            number: 9012,
            repository: {
              name: "tailwindcss",
              full_name: "tailwindlabs/tailwindcss",
              html_url: "https://github.com/tailwindlabs/tailwindcss",
            },
            created_at: "2023-03-05T10:30:00Z",
            updated_at: "2023-03-10T16:45:00Z",
            merged_at: "2023-03-10T16:45:00Z",
            body: "Updated documentation for new color palette features and added examples for custom configuration with dark mode support",
          },
          {
            id: 4,
            html_url: "https://github.com/microsoft/typescript/pull/3456",
            title: "Enhance type inference for optional chaining",
            state: "closed",
            merged: true,
            number: 3456,
            repository: {
              name: "typescript",
              full_name: "microsoft/typescript",
              html_url: "https://github.com/microsoft/typescript",
            },
            created_at: "2023-04-12T08:45:00Z",
            updated_at: "2023-04-18T11:30:00Z",
            merged_at: "2023-04-18T11:30:00Z",
            body: "Enhanced type inference for optional chaining with nullish coalescing to provide better type safety and developer experience",
          },
          {
            id: 5,
            html_url: "https://github.com/vitejs/vite/pull/7890",
            title: "Fix HMR for CSS modules with PostCSS plugins",
            state: "closed",
            merged: true,
            number: 7890,
            repository: {
              name: "vite",
              full_name: "vitejs/vite",
              html_url: "https://github.com/vitejs/vite",
            },
            created_at: "2023-05-20T14:20:00Z",
            updated_at: "2023-05-25T09:10:00Z",
            merged_at: "2023-05-25T09:10:00Z",
            body: "Fixed hot module replacement for CSS modules when using PostCSS plugins and improved reload performance",
          },
          {
            id: 6,
            html_url: "https://github.com/prisma/prisma/pull/6789",
            title: "Improve error messages for database migrations",
            state: "closed",
            merged: true,
            number: 6789,
            repository: {
              name: "prisma",
              full_name: "prisma/prisma",
              html_url: "https://github.com/prisma/prisma",
            },
            created_at: "2023-06-08T11:15:00Z",
            updated_at: "2023-06-15T13:40:00Z",
            merged_at: "2023-06-15T13:40:00Z",
            body: "Improved error messages for database migrations to provide more context and actionable steps for resolving common issues",
          },
          {
            id: 7,
            html_url: "https://github.com/webpack/webpack/pull/8901",
            title: "Optimize chunk splitting algorithm for large applications",
            state: "closed",
            merged: true,
            number: 8901,
            repository: {
              name: "webpack",
              full_name: "webpack/webpack",
              html_url: "https://github.com/webpack/webpack",
            },
            created_at: "2023-07-14T10:05:00Z",
            updated_at: "2023-07-20T16:30:00Z",
            merged_at: "2023-07-20T16:30:00Z",
            body: "Optimized the chunk splitting algorithm to reduce bundle sizes and improve loading performance for large applications",
          },
          {
            id: 8,
            html_url: "https://github.com/framer/motion/pull/4567",
            title: "Add new spring transition type with physics parameters",
            state: "closed",
            merged: true,
            number: 4567,
            repository: {
              name: "motion",
              full_name: "framer/motion",
              html_url: "https://github.com/framer/motion",
            },
            created_at: "2023-08-02T09:30:00Z",
            updated_at: "2023-08-10T14:15:00Z",
            merged_at: "2023-08-10T14:15:00Z",
            body: "Added a new spring transition type with customizable physics parameters for more natural animations",
          },
          {
            id: 9,
            html_url: "https://github.com/eslint/eslint/pull/2345",
            title: "Add rule for React hooks dependency arrays",
            state: "closed",
            merged: true,
            number: 2345,
            repository: {
              name: "eslint",
              full_name: "eslint/eslint",
              html_url: "https://github.com/eslint/eslint",
            },
            created_at: "2023-09-05T13:45:00Z",
            updated_at: "2023-09-12T10:20:00Z",
            merged_at: "2023-09-12T10:20:00Z",
            body: "Added a new rule to enforce proper dependency arrays in useCallback and useMemo hooks to prevent stale closures",
          },
          {
            id: 10,
            html_url: "https://github.com/facebook/react/pull/2468",
            title: "Improve React DevTools performance for large component trees",
            state: "closed",
            merged: true,
            number: 2468,
            repository: {
              name: "react",
              full_name: "facebook/react",
              html_url: "https://github.com/facebook/react",
            },
            created_at: "2023-10-10T11:30:00Z",
            updated_at: "2023-10-18T15:45:00Z",
            merged_at: "2023-10-18T15:45:00Z",
            body: "Improved React DevTools performance when inspecting large component trees by optimizing the component filtering and search algorithms",
          },
          {
            id: 11,
            html_url: "https://github.com/vercel/next.js/pull/7890",
            title: "Add support for partial ISR revalidation",
            state: "closed",
            merged: true,
            number: 7890,
            repository: {
              name: "next.js",
              full_name: "vercel/next.js",
              html_url: "https://github.com/vercel/next.js",
            },
            created_at: "2023-11-15T09:20:00Z",
            updated_at: "2023-11-22T14:10:00Z",
            merged_at: "2023-11-22T14:10:00Z",
            body: "Added support for partial ISR revalidation to allow updating specific parts of a page without revalidating the entire page",
          },
          {
            id: 12,
            html_url: "https://github.com/tailwindlabs/tailwindcss/pull/5432",
            title: "Add new animation utilities and presets",
            state: "closed",
            merged: true,
            number: 5432,
            repository: {
              name: "tailwindcss",
              full_name: "tailwindlabs/tailwindcss",
              html_url: "https://github.com/tailwindlabs/tailwindcss",
            },
            created_at: "2023-12-05T10:45:00Z",
            updated_at: "2023-12-12T16:30:00Z",
            merged_at: "2023-12-12T16:30:00Z",
            body: "Added new animation utilities and presets to make common animations easier to implement without custom CSS",
          },
        ]

        // Filtrar solo las contribuciones merged
        const mergedContributions = mockData.filter((pr) => pr.merged)

        // Calcular estadísticas
        const uniqueProjects = new Set(mergedContributions.map((pr) => pr.repository.full_name))

        setStats({
          total: mergedContributions.length,
          merged: mergedContributions.length,
          projects: uniqueProjects.size,
        })

        setContributions(mergedContributions)
        setTotalPages(Math.ceil(mergedContributions.length / itemsPerPage))
      } catch (err) {
        console.error("Error fetching contributions:", err)
        setError(language === "en" ? "Failed to load contributions" : "Error al cargar las contribuciones")
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()
  }, [language])

  // Obtener las contribuciones para la página actual
  const getCurrentPageContributions = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return contributions.slice(startIndex, endIndex)
  }

  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="container mx-auto" ref={containerRef}>
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-4 text-center">{t("contributions.title")}</h2>

        {/* Párrafo introductorio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <p className="text-lg text-muted-foreground">
            {language === "en"
              ? "I am an active contributor to open source projects, focusing on improving developer tools and libraries. My contributions range from bug fixes and documentation improvements to new features and performance optimizations."
              : "Soy un contribuidor activo en proyectos de código abierto, enfocándome en mejorar herramientas y bibliotecas para desarrolladores. Mis contribuciones van desde correcciones de errores y mejoras en la documentación hasta nuevas características y optimizaciones de rendimiento."}
          </p>
        </motion.div>

        {/* Estadísticas de contribuciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-primary mb-2">{stats.total}</div>
              <div className="text-sm text-muted-foreground text-center">
                {language === "en" ? "Total Contributions" : "Contribuciones Totales"}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">{stats.merged}</div>
              <div className="text-sm text-muted-foreground text-center">
                {language === "en" ? "Merged Pull Requests" : "Pull Requests Fusionados"}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm">
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-secondary mb-2">{stats.projects}</div>
              <div className="text-sm text-muted-foreground text-center">
                {language === "en" ? "Projects Contributed" : "Proyectos Contribuidos"}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Estado de carga */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-10 w-10 text-primary animate-spin" />
            <span className="ml-4 text-lg">
              {language === "en" ? "Loading contributions..." : "Cargando contribuciones..."}
            </span>
          </div>
        ) : error ? (
          <div className="text-center py-12 border border-dashed border-primary/20 rounded-lg">
            <p className="text-red-500">{error}</p>
            <Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
              {language === "en" ? "Try Again" : "Intentar de nuevo"}
            </Button>
          </div>
        ) : (
          <>
            {/* Grid de contribuciones */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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
                    <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm h-full hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <GitMerge className="h-5 w-5 text-purple-500" />
                            <CardTitle className="text-lg">{contribution.repository.name}</CardTitle>
                          </div>
                          <Badge variant="outline" className="bg-purple-500 text-white">
                            merged
                          </Badge>
                        </div>
                        <CardDescription className="text-xs">{contribution.repository.full_name}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-medium mb-2">{contribution.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {contribution.body || (language === "en" ? "No description provided" : "Sin descripción")}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              #{contribution.number}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {formatDate(contribution.merged_at || contribution.updated_at)}
                            </span>
                          </div>
                          <Button variant="outline" size="sm" asChild className="text-xs">
                            <a href={contribution.html_url} target="_blank" rel="noopener noreferrer">
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

              {/* Paginación */}
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
          </>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Button size="lg" asChild>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {language === "en" ? "View My GitHub Profile" : "Ver Mi Perfil de GitHub"}
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
