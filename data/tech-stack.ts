export type TechItem = {
  name: string // No se traduce el nombre de la tecnología
  icon: string
  level: number
}

export type TechStack = {
  frontend: TechItem[]
  backend: TechItem[]
  tools: TechItem[]
}

export const techStack: TechStack = {
  frontend: [
    { name: "React", icon: "⚛️", level: 95 },
    { name: "Next.js", icon: "▲", level: 90 },
    { name: "TypeScript", icon: "🔷", level: 85 },
    { name: "Tailwind CSS", icon: "🎨", level: 95 },
    { name: "JavaScript", icon: "🟨", level: 98 },
    { name: "HTML/CSS", icon: "🌐", level: 98 },
    { name: "Redux", icon: "🔄", level: 85 },
    { name: "Framer Motion", icon: "🎭", level: 80 },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", level: 90 },
    { name: "Express", icon: "🚂", level: 85 },
    { name: "MongoDB", icon: "🍃", level: 80 },
    { name: "PostgreSQL", icon: "🐘", level: 75 },
    { name: "GraphQL", icon: "⚡", level: 70 },
    { name: "REST API", icon: "🔌", level: 95 },
    { name: "Firebase", icon: "🔥", level: 80 },
    { name: "Prisma", icon: "📊", level: 75 },
  ],
  tools: [
    { name: "Git", icon: "🔄", level: 95 },
    { name: "Docker", icon: "🐳", level: 80 },
    { name: "AWS", icon: "☁️", level: 70 },
    { name: "GitHub Actions", icon: "🔄", level: 85 },
    { name: "Jest", icon: "🧪", level: 80 },
    { name: "Webpack", icon: "📦", level: 75 },
    { name: "Figma", icon: "🎨", level: 70 },
    { name: "VS Code", icon: "💻", level: 95 },
  ],
}
