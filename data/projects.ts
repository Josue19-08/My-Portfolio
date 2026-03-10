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
  demoLabel?: {
    en: string
    es: string
  }
  secondaryDemo?: string
  secondaryDemoLabel?: {
    en: string
    es: string
  }
  image: string
}


export const projects: Project[] = [
  {
    id: "zylith",
    title: {
      en: "Zylith - Shielded Liquidity for Starknet",
      es: "Zylith - Liquidez Blindada para Starknet",
    },
    description: {
      en: "A shielded concentrated liquidity market maker (CLMM) on Starknet. It enables privacy-preserving swaps and liquidity provision using zero-knowledge proofs (Groth16) for Bitcoin derivatives like tBTC and WBTC.",
      es: "Un market maker de liquidez concentrada blindada (CLMM) en Starknet. Permite intercambios y provisión de liquidez con preservación de la privacidad utilizando pruebas de conocimiento cero (Groth16) para derivados de Bitcoin como tBTC y WBTC.",
    },
    technologies: ["Starknet", "Cairo", "Next.js", "Garaga", "Groth16", "TypeScript", "Bitcoin"],
    github: "https://github.com/salazarsebas/Zylith",
    demo: "https://zylith-three.vercel.app/",
    image: "images/zylith-banner.png",
  },
  {
    id: "offer-hub",
    title: {
      en: "OfferHub - Marketplace Infrastructure Orchestrator",
      es: "OfferHub - Orquestador de Infraestructura de Marketplaces",
    },
    description: {
      en: "A non-custodial infrastructure orchestrator for building decentralized marketplaces on Stellar. It provides secure escrow protection and global payment flows, featuring a freelance marketplace template as a real-world implementation case.",
      es: "Un orquestador de infraestructura no custodial para construir marketplaces descentralizados en Stellar. Permite protección de custodia segura (escrow) y flujos de pago globales, incluyendo una plantilla de marketplace freelance como caso de implementación real.",
    },

    technologies: ["Stellar", "Next.js", "Rust", "Node.js", "Docker", "Hasura", "TypeScript"],
    github: "https://github.com/OFFER-HUB/offer-hub",
    demo: "https://offer-hub.tech/",
    demoLabel: {
      en: "Marketplace Demo",
      es: "Demo Marketplace",
    },
    secondaryDemo: "https://offer-hub.org/",
    secondaryDemoLabel: {
      en: "Docs & Community",
      es: "Docs y Comunidad",
    },
    image: "images/offer-hub-banner.png",
  },
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
    id: "flare-trust-score",
    title: {
      en: "Flare - Trust Score for Autonomous Agents",
      es: "Flare - Puntuación de Confianza para Agentes Autónomos",
    },
    description: {
      en: "Flare is a comprehensive platform for discovering, verifying, and monitoring autonomous smart contract agents on Avalanche. It provides real-time trust scoring powered by on-chain analysis, automated contract verification with Centinela engine, OpenZeppelin compliance checks, and community feedback to ensure transparency and security.",
      es: "Flare es una plataforma integral para descubrir, verificar y monitorear agentes autónomos de contratos inteligentes en Avalanche. Proporciona puntuación de confianza en tiempo real mediante análisis on-chain, verificación automática de contratos con el motor Centinela, verificaciones de cumplimiento de OpenZeppelin y retroalimentación de la comunidad para garantizar transparencia y seguridad.",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Avalanche", "Smart Contracts", "OpenZeppelin", "Framer Motion"],
    github: "",
    githubLocked: true,
    demo: "https://www.erc-8004scan.xyz/",
    image: "images/flare-banner.png",
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

