export type SocialLink = {
  icon: string
  url: string
  label: string
}

export type HomeData = {
  name: string 
  subtitle: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  buttons: {
    about: {
      en: string
      es: string
    }
    projects: {
      en: string
      es: string
    }
  }
  socialLinks: SocialLink[]
  profileImage: string
}

export const homeData: HomeData = {
  name: "Josué Araya",
  subtitle: {
    en: "Software Developer",
    es: "Desarrollador de Software",
  },
  description: {
    en: "Creating innovative digital solutions with a passion for clean code and user experience.",
    es: "Creando soluciones digitales innovadoras con pasión por el código limpio y la experiencia de usuario.",
  },
  buttons: {
    about: {
      en: "About Me",
      es: "Sobre Mí",
    },
    projects: {
      en: "View Projects",
      es: "Ver Proyectos",
    },
  },
  socialLinks: [
    { icon: "github", url: "https://github.com/Josue19-08", label: "GitHub" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/josue-araya-marin-336975245/", label: "LinkedIn" },
    { icon: "twitter", url: "https://x.com/josuearayamarin", label: "Twitter" },
    { icon: "send", url: "https://t.me/Josue1908Cr", label: "Telegram" },
    { icon: "phone", url: "https://wa.link/5o4qrw", label: "WhatsApp" },
  ],
  profileImage: "/images/josue.jpeg",
}
