export type BlogPost = {
  id: string
  title: {
    en: string
    es: string
  }
  excerpt: {
    en: string
    es: string
  }
  date: string // Formato ISO para facilitar la localización
  readTime: {
    en: string
    es: string
  }
  tags: string[] // No se traducen los nombres de tecnologías/tags
  url: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "post1",
    title: {
      en: "Getting Started with Next.js",
      es: "Comenzando con Next.js",
    },
    excerpt: {
      en: "Learn how to build modern web applications with Next.js and React",
      es: "Aprende a construir aplicaciones web modernas con Next.js y React",
    },
    date: "2023-10-15",
    readTime: {
      en: "5 min",
      es: "5 min",
    },
    tags: ["Next.js", "React", "Web Development"],
    url: "/blog/getting-started-with-nextjs",
    image: "/nextjs-code-display.png",
  },
  {
    id: "post2",
    title: {
      en: "The Power of TypeScript",
      es: "El Poder de TypeScript",
    },
    excerpt: {
      en: "Why TypeScript is becoming the standard for JavaScript development",
      es: "Por qué TypeScript se está convirtiendo en el estándar para el desarrollo JavaScript",
    },
    date: "2023-09-22",
    readTime: {
      en: "7 min",
      es: "7 min",
    },
    tags: ["TypeScript", "JavaScript", "Development"],
    url: "/blog/power-of-typescript",
    image: "/typescript-code-abstract.png",
  },
  {
    id: "post3",
    title: {
      en: "CSS Grid vs Flexbox",
      es: "CSS Grid vs Flexbox",
    },
    excerpt: {
      en: "Understanding when to use CSS Grid and when to use Flexbox",
      es: "Entendiendo cuándo usar CSS Grid y cuándo usar Flexbox",
    },
    date: "2023-08-10",
    readTime: {
      en: "6 min",
      es: "6 min",
    },
    tags: ["CSS", "Web Design", "Frontend"],
    url: "/blog/css-grid-vs-flexbox",
    image: "/cascading-style-sheet-code.png",
  },
]
