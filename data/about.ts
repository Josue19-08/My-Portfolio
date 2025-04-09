export type AboutData = {
  name: string // No se traduce el nombre propio
  role: {
    en: string
    es: string
  }
  englishLevel: {
    en: string
    es: string
  }
  bio: {
    en: string[]
    es: string[]
  }
  interests: {
    en: string[]
    es: string[]
  }
  image: string
  socialLinks: {
    github: string
    linkedin: string
    twitter: string
  }
}

export const aboutData: AboutData = {
  name: "Josué Araya",
  role: {
    en: "Software Developer",
    es: "Desarrollador de Software",
  },
  englishLevel: {
    en: "English Level: Fluent",
    es: "Nivel de Inglés: Fluido",
  },
  bio: {
    en: [
      "Hello! I'm Josué Araya, a passionate software developer with over 5 years of experience specializing in web development. I enjoy creating elegant solutions to complex problems and am constantly learning new technologies to stay at the forefront of the industry.",
      "With a strong foundation in both frontend and backend development, I strive to build applications that are not only functional but also provide an excellent user experience. My approach combines technical expertise with creative problem-solving to deliver high-quality software that meets and exceeds client expectations.",
      "Throughout my career, I've worked on a diverse range of projects, from e-commerce platforms to real-time applications, collaborating with cross-functional teams to bring ideas to life. I'm particularly interested in performance optimization, accessibility, and creating scalable architectures that stand the test of time.",
      "When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new technologies that push the boundaries of what's possible on the web.",
    ],
    es: [
      "¡Hola! Soy Josué Araya, un desarrollador de software apasionado con más de 5 años de experiencia especializado en desarrollo web. Disfruto creando soluciones elegantes para problemas complejos y estoy constantemente aprendiendo nuevas tecnologías para mantenerme a la vanguardia de la industria.",
      "Con una sólida base tanto en desarrollo frontend como backend, me esfuerzo por construir aplicaciones que no solo sean funcionales sino que también proporcionen una excelente experiencia de usuario. Mi enfoque combina experiencia técnica con resolución creativa de problemas para entregar software de alta calidad que cumple y supera las expectativas del cliente.",
      "A lo largo de mi carrera, he trabajado en una amplia gama de proyectos, desde plataformas de comercio electrónico hasta aplicaciones en tiempo real, colaborando con equipos multifuncionales para dar vida a las ideas. Estoy particularmente interesado en la optimización del rendimiento, la accesibilidad y la creación de arquitecturas escalables que resistan la prueba del tiempo.",
      "Cuando no estoy programando, puedes encontrarme contribuyendo a proyectos de código abierto, escribiendo artículos técnicos o explorando nuevas tecnologías que amplían los límites de lo que es posible en la web.",
    ],
  },
  interests: {
    en: [
      "Web Development",
      "Open Source",
      "UI/UX Design",
      "Cloud Computing",
      "DevOps",
      "Machine Learning",
      "Blockchain",
      "Mobile Development",
    ],
    es: [
      "Desarrollo Web",
      "Código Abierto",
      "Diseño UI/UX",
      "Computación en la Nube",
      "DevOps",
      "Aprendizaje Automático",
      "Blockchain",
      "Desarrollo Móvil",
    ],
  },
  image: "/images/josue.jpeg",
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
  },
}
