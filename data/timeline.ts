export type TimelineEvent = {
  year: string
  title: {
    en: string
    es: string
  }
  company: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  skills: string[] // No se traducen los nombres de tecnologías/habilidades
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2023",
    title: {
      en: "Senior Software Developer",
      es: "Desarrollador de Software Senior",
    },
    company: {
      en: "Tech Company",
      es: "Empresa Tecnológica",
    },
    description: {
      en: "Leading development of web applications using React and Node.js",
      es: "Liderando el desarrollo de aplicaciones web utilizando React y Node.js",
    },
    skills: ["React", "Node.js", "AWS"],
  },
  {
    year: "2021",
    title: {
      en: "Software Developer",
      es: "Desarrollador de Software",
    },
    company: {
      en: "Digital Agency",
      es: "Agencia Digital",
    },
    description: {
      en: "Developed responsive web applications and e-commerce solutions",
      es: "Desarrollé aplicaciones web responsivas y soluciones de comercio electrónico",
    },
    skills: ["JavaScript", "TypeScript", "Next.js"],
  },
  {
    year: "2019",
    title: {
      en: "Junior Developer",
      es: "Desarrollador Junior",
    },
    company: {
      en: "Startup",
      es: "Startup",
    },
    description: {
      en: "Worked on frontend development and UI implementation",
      es: "Trabajé en desarrollo frontend e implementación de UI",
    },
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2018",
    title: {
      en: "Computer Science Degree",
      es: "Licenciatura en Ciencias de la Computación",
    },
    company: {
      en: "University",
      es: "Universidad",
    },
    description: {
      en: "Graduated with honors in Computer Science",
      es: "Graduado con honores en Ciencias de la Computación",
    },
    skills: ["Algorithms", "Data Structures", "Software Engineering"],
  },
]
