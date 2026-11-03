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
    id: "writz",
    title: {
      en: "Writz Protocol - Bitcoin Lending on Stellar",
      es: "Writz Protocol - Préstamos de Bitcoin en Stellar",
    },
    description: {
      en: "Bitcoin lending protocol on Stellar where the collateral never leaves Bitcoin. Lock native BTC in a P2WSH script, borrow USDC on Soroban, and reclaim your BTC alone via a CLTV timelock. No bridge, no custodian, no wrapped tokens.",
      es: "Protocolo de préstamos de Bitcoin sobre Stellar donde el colateral nunca sale de Bitcoin. Bloquea BTC nativo en un script P2WSH, pide prestado USDC en Soroban y recupera tu BTC por tu cuenta mediante un timelock CLTV. Sin puentes, sin custodios, sin tokens envueltos.",
    },
    technologies: ["Stellar", "Soroban", "Rust", "Bitcoin", "Next.js", "TypeScript", "Circom", "Zero-Knowledge"],
    github: "https://github.com/WritzProtocol/writz",
    demo: "https://writz.xyz",
    image: "images/writz-banner.png",
  },
  {
    id: "aiva",
    title: {
      en: "AIVA - AI Networking Platform",
      es: "AIVA - Plataforma de Networking con IA",
    },
    description: {
      en: "AI-powered networking platform built with FastAPI, Python, Next.js, and TypeScript. Integrates Google Gemini for intelligent user matching, featuring JWT authentication, async PostgreSQL with SQLAlchemy, Celery, and Redis.",
      es: "Plataforma de networking con inteligencia artificial desarrollada con FastAPI, Python, Next.js y TypeScript. Integra Google Gemini para matching inteligente entre usuarios, con autenticación JWT, PostgreSQL async con SQLAlchemy, Celery y Redis.",
    },
    technologies: ["FastAPI", "Python", "Next.js", "TypeScript", "Google Gemini", "PostgreSQL", "Celery", "Redis"],
    github: "",
    githubLocked: true,
    demo: "https://aiva-platform.vercel.app",
    image: "images/aiva.png",
  },
  {
    id: "offer-hub-payments",
    title: {
      en: "OFFER-HUB — Payments Orchestrator",
      es: "OFFER-HUB — Orquestador de Pagos",
    },
    description: {
      en: "Production payment orchestrator on the Stellar blockchain. REST API with non-custodial escrow, multi-currency support, and secure microservices architecture.",
      es: "Orquestador de pagos en producción sobre Stellar blockchain. API REST con escrow no custodial, soporte multi-moneda y arquitectura de servicios seguros.",
    },
    technologies: ["Stellar", "REST API", "Microservices", "Next.js", "TypeScript"],
    github: "https://github.com/OFFER-HUB/offer-hub",
    demo: "https://offer-hub.tech",
    image: "images/offer-hub-payments.png",
  },
  {
    id: "offer-hub-freelance",
    title: {
      en: "OFFER-HUB — Freelance Platform",
      es: "OFFER-HUB — Plataforma Freelance",
    },
    description: {
      en: "Platform for freelancers built on top of OFFER-HUB, connecting clients and professionals with integrated payments on the Stellar network.",
      es: "Plataforma para freelancers construida sobre OFFER-HUB, conectando clientes y profesionales con pagos integrados sobre Stellar.",
    },
    technologies: ["Stellar", "Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/OFFER-HUB/offer-hub",
    demo: "https://offer-hub.org",
    image: "images/offer-hub-freelance.png", 
  },
  {
    id: "aura",
    title: {
      en: "Aura - Supply Chain Traceability",
      es: "Aura - Trazabilidad de Productos Farmacéuticos",
    },
    description: {
      en: "Enterprise traceability platform for pharmaceutical products on Avalanche. Authenticity verification in under 1 second with immutable cryptographic security and real-time analytics.",
      es: "Plataforma empresarial de trazabilidad de productos farmacéuticos sobre Avalanche. Verificación de autenticidad en menos de 1 segundo con seguridad criptográfica inmutable y análisis en tiempo real.",
    },
    technologies: ["Avalanche", "Enterprise Web3", "Next.js", "TypeScript", "Cryptography"],
    github: "",
    githubLocked: true,
    demo: "https://aura-coral-seven.vercel.app",
    image: "images/aura.png",
  },
  {
    id: "metered-x402",
    title: {
      en: "Metered (x402) - Economy Layer for AI Agents",
      es: "Metered (x402) - Capa de Economía para Agentes de IA",
    },
    description: {
      en: "Economy layer for autonomous AI agents. Pay-per-use APIs over Stellar MPP and x402 protocol. Agents consume services like web search, financial quotes, and AI inference paying in USDC micropayments without subscriptions or API keys.",
      es: "Capa de economía para agentes autónomos de IA. APIs de pago por uso sobre Stellar MPP y el protocolo x402. Los agentes consumen servicios como búsqueda web, cotizaciones financieras e inferencia de IA pagando en micropagos de USDC sin suscripciones ni API keys.",
    },
    technologies: ["Stellar", "x402 Protocol", "USDC", "Next.js", "TypeScript", "AI Agents"],
    github: "",
    githubLocked: true,
    demo: "https://x402-virid.vercel.app",
    image: "images/metered-x402.png",
  },
  {
    id: "flowe",
    title: {
      en: "Flowē - Productivity for Neurodivergents",
      es: "Flowē - Productividad para Neurodivergentes",
    },
    description: {
      en: "Landing page for a productivity mobile app designed for neurodivergent users, featuring an AI-driven emotional adaptation system.",
      es: "Landing page de aplicación móvil de productividad para usuarios neurodivergentes con sistema de adaptación emocional mediante IA.",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "",
    githubLocked: true,
    demo: "https://useflowe.com",
    image: "images/flowe.png",
  },
  {
    id: "neumorfismo-dark-mode",
    title: {
      en: "Neumorphism Dark Mode Components",
      es: "Neumorfismo Dark Mode",
    },
    description: {
      en: "Visual reference page with dark mode neumorphism style components, providing ready-to-use copy-paste code for projects.",
      es: "Página de referencia visual con componentes en estilo neumorfismo dark mode con código listo para copiar y usar en proyectos.",
    },
    technologies: ["Next.js", "React", "TailwindCSS", "UI Components"],
    github: "",
    githubLocked: true,
    demo: "https://v0-neumorphism-dark-mode.vercel.app",
    image: "images/neumorfismo-dark-mode.png",
  },
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
    demo: "https://zylith-three.vercel.app",
    image: "images/zylith-banner.png",
  },
  {
    id: "catalogo-papeleria",
    title: {
      en: "Stationery Catalog",
      es: "Catálogo Papelería",
    },
    description: {
      en: "A complete online catalog for stationery products with an elegant UI and responsive design.",
      es: "Un catálogo en línea completo para productos de papelería con una interfaz de usuario elegante y diseño responsivo.",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "",
    githubLocked: true,
    demo: "https://www.diecinueveart.shop",
    image: "images/catalogo-papeleria.png",
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
