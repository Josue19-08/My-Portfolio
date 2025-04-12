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
  skills: string[] 
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "2019",
    title: {
      en: "CCNA 1: Introduction to Networks",
      es: "CCNA 1: Introducción a Redes",
    },
    company: {
      en: "Cisco Academy - University of Costa Rica",
      es: "Academia Cisco - Universidad de Costa Rica",
    },
    description: {
      en: "Fundamentals of networking, protocols, and network models.",
      es: "Fundamentos de redes, protocolos y modelos de red.",
    },
    skills: ["TCP/IP", "OSI Model", "Network Topologies"],
  },
  {
    year: "2019",
    title: {
      en: "CCNA 2: Routing and Switching Essentials",
      es: "CCNA 2: Fundamentos de Routing y Switching",
    },
    company: {
      en: "Cisco Academy - University of Costa Rica",
      es: "Academia Cisco - Universidad de Costa Rica",
    },
    description: {
      en: "Learned basic configuration of routers and switches, and troubleshooting techniques.",
      es: "Aprendí configuración básica de routers y switches, y técnicas de resolución de problemas.",
    },
    skills: ["Routing", "Switching", "Packet Tracer"],
  },
  {
    year: "2020",
    title: {
      en: "CCNA 3: Scaling Networks",
      es: "CCNA 3: Redes Escalables",
    },
    company: {
      en: "Cisco Academy - University of Costa Rica",
      es: "Academia Cisco - Universidad de Costa Rica",
    },
    description: {
      en: "Focused on scalability, OSPF, and WAN technologies.",
      es: "Enfoque en escalabilidad, OSPF y tecnologías WAN.",
    },
    skills: ["OSPF", "VLANs", "WAN"],
  },
  {
    year: "2020",
    title: {
      en: "CCNA 4: Connecting Networks",
      es: "CCNA 4: Conectando Redes",
    },
    company: {
      en: "Cisco Academy - University of Costa Rica",
      es: "Academia Cisco - Universidad de Costa Rica",
    },
    description: {
      en: "Learned WAN technologies, VPNs, and network management concepts.",
      es: "Aprendí tecnologías WAN, VPNs y conceptos de gestión de redes.",
    },
    skills: ["VPN", "WAN", "Network Security"],
  },
  {
    year: "2020",
    title: {
      en: "Bachelor's in Business Informatics",
      es: "Bachillerato en Informática Empresarial",
    },
    company: {
      en: "University of Costa Rica",
      es: "Universidad de Costa Rica",
    },
    description: {
      en: "Started undergraduate studies in Business Informatics. Currently in final semester.",
      es: "Inicié estudios en Informática Empresarial. Actualmente en el último semestre.",
    },
    skills: ["Software Development", "Databases", "Project Management"],
  },
  {
    year: "2024",
    title: {
      en: "Open Source Contributor",
      es: "Colaborador de Código Abierto",
    },
    company: {
      en: "Various OSS Projects",
      es: "Varios Proyectos de Código Abierto",
    },
    description: {
      en: "Started contributing to open source projects using React, Cairo and Web3. Still an active contributor.",
      es: "Comencé a contribuir en proyectos de código abierto con React, Cairo y Web3. Sigo siendo colaborador activo.",
    },
    skills: ["React", "Cairo", "Web3", "Open Source"],
  },
  {
    year: "2024",
    title: {
      en: "Starknet Hacker House Participant",
      es: "Participante en Hacker House de Starknet",
    },
    company: {
      en: "Starknet",
      es: "Starknet",
    },
    description: {
      en: "Participated in a Starknet hacker house in Thailand, working on a personal Web3 project.",
      es: "Participé en una hacker house de Starknet en Tailandia, desarrollando un proyecto propio en Web3.",
    },
    skills: ["Starknet", "Cairo", "Web3", "Team Collaboration"],
  },
]

