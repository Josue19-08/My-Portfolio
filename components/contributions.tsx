"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitPullRequest, Star, GitMerge } from "lucide-react"
import { motion } from "framer-motion"

export function Contributions() {
  const { t, language } = useLanguage()

  // Example contributions - replace with your actual contributions
  const contributions = [
    {
      project: "react",
      repo: "facebook/react",
      title: "Fix bug in useEffect hook",
      description: "Fixed a memory leak issue in the useEffect cleanup function",
      prNumber: "#1234",
      status: "merged",
      url: "https://github.com/facebook/react/pull/1234",
    },
    {
      project: "next.js",
      repo: "vercel/next.js",
      title: "Add new API route feature",
      description: "Implemented a new feature for API routes to support better error handling",
      prNumber: "#5678",
      status: "open",
      url: "https://github.com/vercel/next.js/pull/5678",
    },
    {
      project: "tailwindcss",
      repo: "tailwindlabs/tailwindcss",
      title: "Improve documentation",
      description: "Updated documentation for new color palette features",
      prNumber: "#9012",
      status: "merged",
      url: "https://github.com/tailwindlabs/tailwindcss/pull/9012",
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "merged":
        return <GitMerge className="h-5 w-5 text-purple-500" />
      case "open":
        return <GitPullRequest className="h-5 w-5 text-green-500" />
      default:
        return <Star className="h-5 w-5 text-yellow-500" />
    }
  }

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("contributions.title")}</h2>

        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {contributions.map((contribution, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border border-primary/20 bg-background/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {getStatusIcon(contribution.status)}
                        {contribution.project}
                        <Badge variant="outline" className="ml-2">
                          {contribution.prNumber}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-sm">{contribution.repo}</CardDescription>
                    </div>
                    <Badge
                      variant={contribution.status === "merged" ? "default" : "secondary"}
                      className={contribution.status === "merged" ? "bg-purple-500" : ""}
                    >
                      {contribution.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-medium mb-1">{contribution.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{contribution.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                      <GitPullRequest className="mr-2 h-4 w-4" />
                      View Pull Request
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
