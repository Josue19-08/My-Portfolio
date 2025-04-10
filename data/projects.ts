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
  technologies: string[] 
  github: string
  demo: string
  image: string
}

export const projects: Project[] = [
  {
    id: "galaxy-smart-wallet",
    title: {
      en: "Galaxy Smart Wallet",
      es: "Galaxy Smart Wallet",
    },
    description: {
      en: "Galaxy Smart Wallet is a decentralized wallet built on Stellar, designed for secure and on-chain asset management. It offers a seamless and user-friendly interface to interact with the Stellar blockchain.",
      es: "Galaxy Smart Wallet es una billetera descentralizada construida sobre Stellar, diseñada para una gestión segura de activos en cadena. Ofrece una interfaz fluida y fácil de usar para interactuar con la blockchain de Stellar.",
    },
    technologies: ["Next.js", "TailwindCSS", "Zustand", "Framer Motion", "Stellar SDK", "TypeScript"],
    github: "https://github.com/Galaxy-KJ/galaxy-smart-wallet",
    demo: "",
    image: "images/galaxy-banner.png",
  },
  {
    id: "aurora-language-platform",
    title: {
      en: "AURORA.LA - Language Learning Platform",
      es: "AURORA.LA - Plataforma de Aprendizaje de Idiomas",
    },
    description: {
      en: "AURORA.LA is an innovative on-chain, AI-powered language learning platform that offers personalized and interactive learning experiences. The project integrates smart contracts and blockchain logic with a dynamic and modern frontend for users to practice, learn, and evolve their language skills in a gamified way.",
      es: "AURORA.LA es una innovadora plataforma de aprendizaje de idiomas impulsada por IA y tecnología on-chain. Ofrece experiencias de aprendizaje personalizadas e interactivas, integrando contratos inteligentes y lógica blockchain con un frontend moderno y dinámico que permite a los usuarios practicar, aprender y avanzar en sus habilidades lingüísticas de forma gamificada.",
    },
    technologies: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Docker", "Rust", "Stellar", "TypeScript"],
    github: "https://github.com/AURORALAOrg",
    demo: "",
    image: "images/aurora-banner.png",
  },
  {
    id: "offer-hub",
    title: {
      en: "OFFER-HUB - Decentralized Freelance Platform",
      es: "OFFER-HUB - Plataforma Freelance Descentralizada",
    },
    description: {
      en: "OFFER-HUB is a decentralized freelance platform leveraging blockchain, cryptocurrency payments, and smart contracts to connect freelancers and clients globally. Designed to remove intermediaries, lower fees, and empower seamless collaboration in areas such as design, programming, writing, and consulting.",
      es: "OFFER-HUB es una plataforma freelance descentralizada que utiliza blockchain, pagos con criptomonedas y contratos inteligentes para conectar freelancers y clientes a nivel global. Está diseñada para eliminar intermediarios, reducir comisiones y facilitar la colaboración en áreas como diseño, programación, redacción y consultoría.",
    },
    technologies: ["Node.js", "pnpm", "Docker", "Docker Compose", "Hasura", "Rust", "TypeScript"],
    github: "https://github.com/OFFER-HUB/offer-hub",
    demo: "",
    image: "images/offer-hub-banner.png",
  },
  {
    id: "aqua-stark",
    title: {
      en: "Aqua Stark - Web3 Aquarium Game",
      es: "Aqua Stark - Juego Acuario Web3",
    },
    description: {
      en: "Aqua Stark is a Web3 game on StarkNet where players can collect, raise, and evolve fish in a decentralized ecosystem. It features fish breeding, a marketplace, aquarium customization, and special events.",
      es: "Aqua Stark es un juego Web3 en StarkNet donde los jugadores pueden coleccionar, criar y evolucionar peces dentro de un ecosistema descentralizado. Incluye crianza de peces, mercado, personalización del acuario y eventos especiales.",
    },
    technologies: ["React", "Vite", "TailwindCSS", "Dojo Engine", "Cairo", "StarkNet", "TypeScript"],
    github: "https://github.com/AquaStark/Aqua-Stark",
    demo: "",
    image: "images/aqua-stark-banner.png",
  },
]

