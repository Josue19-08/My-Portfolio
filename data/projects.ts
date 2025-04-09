export type Project = {
  id: string
  title: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  technologies: string[] // No se traducen los nombres de tecnologías
  github: string
  demo: string
  image: string
}

export const projects: Project[] = [
  {
    id: "project1",
    title: {
      en: "E-commerce Platform",
      es: "Plataforma de Comercio Electrónico",
    },
    description: {
      en: "A full-featured e-commerce platform with product management, cart functionality, and payment processing. Includes responsive design and user authentication.",
      es: "Una plataforma de comercio electrónico completa con gestión de productos, funcionalidad de carrito y procesamiento de pagos. Incluye diseño responsivo y autenticación de usuarios.",
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/username/project1",
    demo: "https://project1-demo.com",
    image: "/dark-blue-ecommerce.png",
  },
  {
    id: "project2",
    title: {
      en: "Task Management App",
      es: "Aplicación de Gestión de Tareas",
    },
    description: {
      en: "A collaborative task management application with real-time updates and team collaboration features. Includes drag-and-drop interface and progress tracking.",
      es: "Una aplicación colaborativa de gestión de tareas con actualizaciones en tiempo real y funciones de colaboración en equipo. Incluye interfaz de arrastrar y soltar y seguimiento de progreso.",
    },
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Redux", "Framer Motion"],
    github: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
    image: "/dark-dashboard-tasks.png",
  },
  {
    id: "project3",
    title: {
      en: "Real Estate Marketplace",
      es: "Mercado Inmobiliario",
    },
    description: {
      en: "A platform for listing and searching real estate properties with advanced filtering and map integration. Features virtual tours and mortgage calculator.",
      es: "Una plataforma para listar y buscar propiedades inmobiliarias con filtrado avanzado e integración de mapas. Incluye tours virtuales y calculadora de hipotecas.",
    },
    technologies: ["Vue.js", "Express", "PostgreSQL", "Google Maps API", "AWS", "Three.js"],
    github: "https://github.com/username/project3",
    demo: "https://project3-demo.com",
    image: "/luxury-real-estate-dark.png",
  },
  {
    id: "project4",
    title: {
      en: "AI Content Generator",
      es: "Generador de Contenido con IA",
    },
    description: {
      en: "An AI-powered application that generates various types of content including articles, social media posts, and marketing copy based on user prompts.",
      es: "Una aplicación impulsada por IA que genera varios tipos de contenido, incluyendo artículos, publicaciones en redes sociales y textos de marketing basados en indicaciones del usuario.",
    },
    technologies: ["React", "Python", "FastAPI", "OpenAI", "TensorFlow", "AWS Lambda"],
    github: "https://github.com/username/project4",
    demo: "https://project4-demo.com",
    image: "/futuristic-content-hub.png",
  },
]
