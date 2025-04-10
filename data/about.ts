export type AboutData = {
  name: string; // No se traduce el nombre propio
  role: {
    en: string;
    es: string;
  };
  englishLevel: {
    en: string;
    es: string;
  };
  bio: {
    en: string[];
    es: string[];
  };
  interests: {
    en: string[];
    es: string[];
  };
  image: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
};

export const aboutData: AboutData = {
  name: "Josué Araya",
  role: {
    en: "Software Developer",
    es: "Desarrollador de Software",
  },
  englishLevel: {
    en: "English Level: Low intermediate",
    es: "Nivel de Inglés: Intermedio bajo",
  },
  bio: {
    en: [
      "Hi! I'm Josué Araya, a software developer with a curious mind, a sharp eye for detail, and a strong technical focus. I enjoy turning ideas into well-thought-out, functional products where every line of code has a purpose. I love being part of the creative process, but I’m also a perfectionist when it comes to logic, architecture, and software quality.",
      "I'm comfortable working across both frontend and backend, and I'm currently excited about everything related to Web3, artificial intelligence, and technologies that push the boundaries of what's possible. I'm adaptable—I align with the project, the team, and the goals, always looking to contribute with experience and a passion for building solid solutions.",
      "Throughout my journey, I've worked on a range of open source products and projects, from e-commerce platforms to custom tools across various sectors. I enjoy building in environments where knowledge is shared, code is transparent, and collaboration is essential. What drives me the most is contributing to projects with vision and purpose—solutions that scale, are efficient, and have a real impact.",
      "Away from the keyboard, you'll find me taking care of my aquariums, watching football, or working on ideas for my own side projects. I'm also passionate about video games and anything that involves learning or creating something new.",
    ],
    es: [
      "¡Hola! Soy Josué Araya, un desarrollador de software con mente curiosa, ojo detallista y un enfoque técnico afilado. Disfruto convertir ideas en productos funcionales y bien pensados, donde cada línea de código tiene su propósito. Me encanta ser parte del proceso creativo, pero también soy perfeccionista con la lógica, la arquitectura y la calidad del software que entrego.",
      "Me muevo con fluidez tanto en el frontend como en el backend, y últimamente me emociona todo lo relacionado con Web3, inteligencia artificial y tecnologías que están empujando los límites de lo posible. No me encasillo: me adapto al proyecto, al equipo y a los objetivos, buscando siempre aportar desde mi experiencia y entusiasmo por construir soluciones sólidas.",
      "A lo largo de mi camino he trabajado en una variedad de productos y proyectos de código abierto, desde plataformas de comercio hasta herramientas personalizadas para distintos sectores. Me gusta construir en espacios donde el conocimiento se comparte, el código es transparente y la colaboración es clave. Lo que más me motiva es aportar a iniciativas con visión y propósito, creando soluciones escalables, eficientes y con impacto real.",
      "Fuera del teclado, me relajo cuidando mis acuarios, viendo fútbol o explorando ideas para mis propios proyectos. También me encantan los videojuegos y todo lo que implique aprender o crear algo nuevo.",
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
      "Game Development",
      "System Design",
      "Internal Tools Development",
      "Web Accessibility",
      "API/SDK Integrations",
      "Animations & Microinteractions",
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
      "Desarrollo de Videojuegos",
      "Diseño de Sistemas",
      "Desarrollo de Herramientas Internas",
      "Accesibilidad Web",
      "Integraciones con APIs / SDKs",
      "Animaciones y Microinteracciones",
    ],
  },  
  image: "/images/josue.jpeg",
  socialLinks: {
    github: "https://github.com/Josue19-08",
    linkedin: "https://www.linkedin.com/in/josue-araya-marin-336975245/",
    twitter: "https://x.com/josuearayamarin",
  },
};
