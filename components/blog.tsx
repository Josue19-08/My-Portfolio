"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Blog() {
  const { t, language } = useLanguage()

  // Example blog posts - replace with your actual blog posts
  const blogPosts = [
    {
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js and React",
      date: "2023-10-15",
      readTime: "5 min",
      tags: ["Next.js", "React", "Web Development"],
      url: "/blog/getting-started-with-nextjs",
      image: "/nextjs-code-display.png",
    },
    {
      title: "The Power of TypeScript",
      excerpt: "Why TypeScript is becoming the standard for JavaScript development",
      date: "2023-09-22",
      readTime: "7 min",
      tags: ["TypeScript", "JavaScript", "Development"],
      url: "/blog/power-of-typescript",
      image: "/placeholder.svg?height=200&width=400&query=typescript",
    },
    {
      title: "CSS Grid vs Flexbox",
      excerpt: "Understanding when to use CSS Grid and when to use Flexbox",
      date: "2023-08-10",
      readTime: "6 min",
      tags: ["CSS", "Web Design", "Frontend"],
      url: "/blog/css-grid-vs-flexbox",
      image: "/placeholder.svg?height=200&width=400&query=css",
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="language-badge">{language.toUpperCase()}</div>
        <h2 className="text-3xl font-bold mb-8 text-center">{t("blog.title")}</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col border border-primary/20 bg-background/50 backdrop-blur-sm">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-1">•</span>
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full" asChild>
                    <a href={post.url}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
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
