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
  githubLocked?: boolean
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
    id: "enigma-trust-score",
    title: {
      en: "Enigma - Trust Score for Autonomous Agents",
      es: "Enigma - Puntuación de Confianza para Agentes Autónomos",
    },
    description: {
      en: "Enigma is a comprehensive platform for discovering, verifying, and monitoring autonomous smart contract agents on Avalanche. It provides real-time trust scoring powered by on-chain analysis, automated contract verification with Centinela engine, OpenZeppelin compliance checks, and community feedback to ensure transparency and security.",
      es: "Enigma es una plataforma integral para descubrir, verificar y monitorear agentes autónomos de contratos inteligentes en Avalanche. Proporciona puntuación de confianza en tiempo real mediante análisis on-chain, verificación automática de contratos con el motor Centinela, verificaciones de cumplimiento de OpenZeppelin y retroalimentación de la comunidad para garantizar transparencia y seguridad.",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Avalanche", "Smart Contracts", "OpenZeppelin", "Framer Motion"],
    github: "",
    githubLocked: true,
    demo: "https://www.erc-8004scan.xyz/",
    image: "images/enigma-banner.png",
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
    demo: "https://www.offer-hub.org/",
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
    demo: "https://www.aqua-stark.com/",
    image: "images/aqua-stark-banner.png",
  },
]

