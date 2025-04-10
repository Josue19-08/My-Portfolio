export type Contribution = {
  id: string
  project: string 
  repo: string 
  title: {
    en: string
    es: string
  }
  description: {
    en: string
    es: string
  }
  prNumber: string
  status: "merged" | "open" | "closed"
  url: string
}

export const contributions: Contribution[] = [
  {
    id: "contrib1",
    project: "Revo Marketplace",
    repo: "Crypto-Jaguars/Revo-Marketplace",
    title: {
      en: "Create comprehensive About Us and How It Works sections",
      es: "Crear secciones completas de Sobre Nosotros y Cómo Funciona",
    },
    description: {
      en: "Implemented internationalization (i18n) and enhanced UI/UX for the About Us and How It Works sections, including better spacing, responsive adjustments, and styles.",
      es: "Se implementó internacionalización (i18n) y mejoras de UI/UX para las secciones de Sobre Nosotros y Cómo Funciona, incluyendo mejor espaciado, ajustes responsivos y estilos mejorados.",
    },
    prNumber: "#68",
    status: "merged",
    url: "https://github.com/Crypto-Jaguars/Revo-Marketplace/pull/68",
  },   {
    id: "contrib2",
    project: "KindFi",
    repo: "kindfi-org/kindfi",
    title: {
      en: "Create About Us section",
      es: "Crear sección Sobre Nosotros",
    },
    description: {
      en: "Implemented a responsive and structured About Us section for the KindFi website, aligning with the project's branding and including animations, timeline components, blockchain visual integration, and strong CTAs.",
      es: "Se implementó una sección Sobre Nosotros estructurada y responsiva para el sitio de KindFi, alineada con la identidad del proyecto e incluyendo animaciones, componentes de línea de tiempo, visuales de blockchain e importantes llamadas a la acción.",
    },
    prNumber: "#228",
    status: "merged",
    url: "https://github.com/kindfi-org/kindfi/pull/228",
  },  
  {
    id: "contrib3",
    project: "ScaffoldRust",
    repo: "ScaffoldRust/ScaffoldRust",
    title: {
      en: "Create Hero Section component",
      es: "Crear componente de sección Hero",
    },
    description: {
      en: "Enhanced the Hero Section by improving layout structure, ensuring responsiveness, visual consistency, and applying optimizations for better maintainability.",
      es: "Se mejoró la sección Hero optimizando la estructura del layout, asegurando la responsividad, la consistencia visual y aplicando mejoras para un mejor mantenimiento.",
    },
    prNumber: "#14",
    status: "merged",
    url: "https://github.com/ScaffoldRust/ScaffoldRust/pull/14",
  },
  {
    id: "contrib4",
    project: "VolunChain",
    repo: "VolunChain/VolunChain-Backend",
    title: {
      en: "Replace TypeORM with Prisma Client",
      es: "Reemplazar TypeORM con Prisma Client",
    },
    description: {
      en: "Replaced TypeORM with Prisma Client for all database operations, updated configuration files, refactored routes and services, and ensured full compatibility with PostgreSQL.",
      es: "Se reemplazó TypeORM por Prisma Client para todas las operaciones de base de datos, se actualizaron archivos de configuración, se refactorizaron rutas y servicios, y se garantizó la compatibilidad completa con PostgreSQL.",
    },
    prNumber: "#45",
    status: "merged",
    url: "https://github.com/VolunChain/VolunChain-Backend/pull/45",
  },
  {
    id: "contrib5",
    project: "StarShop",
    repo: "StarShopCr/StarShop-Frontend",
    title: {
      en: "Create transaction screen",
      es: "Crear pantalla de transacciones",
    },
    description: {
      en: "Implemented a responsive transaction screen with structured layout, summary and item components, integrated icons, and styled to match the Figma design.",
      es: "Se implementó una pantalla de transacciones responsiva con un diseño estructurado, componentes de resumen y detalle, íconos integrados, y estilos alineados con el diseño en Figma.",
    },
    prNumber: "#74",
    status: "merged",
    url: "https://github.com/StarShopCr/StarShop-Frontend/pull/74",
  },
  {
    id: "contrib6",
    project: "VolunChain",
    repo: "VolunChain/VolunChain-Frontend",
    title: {
      en: "Create 'Our Mission' section",
      es: "Crear sección 'Nuestra Misión'",
    },
    description: {
      en: "Implemented the 'Our Mission' section of the landing page, with styled containers, icon highlights, and responsive layout to clearly communicate VolunChain’s vision.",
      es: "Se implementó la sección 'Nuestra Misión' de la landing page, con contenedores estilizados, íconos destacados y un diseño responsivo que comunica claramente la visión de VolunChain.",
    },
    prNumber: "#20",
    status: "merged",
    url: "https://github.com/VolunChain/VolunChain-Frontend/pull/20",
  },
  {
    id: "contrib7",
    project: "PayStell",
    repo: "PayStell/paystell-website",
    title: {
      en: "Design register screen",
      es: "Diseñar pantalla de registro",
    },
    description: {
      en: "Implemented a two-step registration form including email verification and complete registration with field validation, profile/logo upload, and accessibility-focused UI using Radix UI.",
      es: "Se implementó un formulario de registro en dos etapas que incluye verificación de correo, registro completo con validaciones de campos, subida de logo/perfil, y una interfaz accesible utilizando Radix UI.",
    },
    prNumber: "#49",
    status: "merged",
    url: "https://github.com/PayStell/paystell-website/pull/49",
  },
  {
    id: "contrib8",
    project: "VolunChain",
    repo: "VolunChain/VolunChain-Frontend",
    title: {
      en: "Make account information section",
      es: "Crear sección de información de cuenta",
    },
    description: {
      en: "Created the account information section with editable fields (name, email, phone, etc.), profile upload, phone/date pickers, responsive layout, and optimized reusability.",
      es: "Se creó la sección de información de cuenta con campos editables (nombre, email, teléfono, etc.), subida de foto, selectores de fecha y teléfono, diseño responsivo y reutilización optimizada.",
    },
    prNumber: "#66",
    status: "merged",
    url: "https://github.com/VolunChain/VolunChain-Frontend/pull/66",
  },
  {
    id: "contrib9",
    project: "KindFi",
    repo: "kindfi-org/kindfi",
    title: {
      en: "Create project details components for project page",
      es: "Crear componentes de detalles del proyecto para la página del proyecto",
    },
    description: {
      en: "Built modular components for the project details page, enabling smooth navigation across sections like Project Overview, Your Impact, and Updates. Focused on maintainability, reusability, and clear structure.",
      es: "Se desarrollaron componentes modulares para la página de detalles del proyecto, permitiendo una navegación fluida entre secciones como Descripción, Tu Impacto y Actualizaciones. Enfocado en mantenibilidad, reutilización y estructura clara.",
    },
    prNumber: "#97",
    status: "merged",
    url: "https://github.com/kindfi-org/kindfi/pull/97",
  },
  {
    id: "contrib10",
    project: "AkkuEA",
    repo: "akkuEA/akkuEA",
    title: {
      en: "Feature QuickPost component",
      es: "Funcionalidad del componente QuickPost",
    },
    description: {
      en: "Implemented the QuickPost feature to create posts with image upload and automatic link preview. Built reusable components, used Next.js API with cheerio for metadata extraction, and improved UX with real-time previews.",
      es: "Se implementó la funcionalidad QuickPost para crear publicaciones con subida de imágenes y previsualización automática de enlaces. Se crearon componentes reutilizables, se utilizó una API de Next.js con cheerio para extraer metadatos y se mejoró la experiencia de usuario con vistas previas en tiempo real.",
    },
    prNumber: "#15",
    status: "merged",
    url: "https://github.com/akkuEA/akkuEA/pull/15",
  },
  {
    id: "contrib11",
    project: "Revo Marketplace",
    repo: "Crypto-Jaguars/Revo-Marketplace",
    title: {
      en: "Create 404 page",
      es: "Crear página 404",
    },
    description: {
      en: "Implemented a custom 404 error page with a responsive layout, light/dark mode compatibility, reusable breadcrumb component, and multilingual support for English and Spanish.",
      es: "Se implementó una página de error 404 personalizada con diseño responsivo, compatibilidad con modo claro/oscuro, un componente reutilizable de breadcrumb y soporte multilenguaje en inglés y español.",
    },
    prNumber: "#41",
    status: "merged",
    url: "https://github.com/Crypto-Jaguars/Revo-Marketplace/pull/41",
  },
  {
    id: "contrib12",
    project: "VolunChain",
    repo: "VolunChain/VolunChain-Backend",
    title: {
      en: "Project entity creation",
      es: "Creación de la entidad Proyecto",
    },
    description: {
      en: "Created the Project entity with fields like name, location, and dates. Implemented full service, controller, and routes to support creation and retrieval of projects by ID and organization.",
      es: "Se creó la entidad Proyecto con campos como nombre, ubicación y fechas. Se implementaron el servicio completo, el controlador y las rutas para permitir la creación y consulta de proyectos por ID y organización.",
    },
    prNumber: "#23",
    status: "merged",
    url: "https://github.com/VolunChain/VolunChain-Backend/pull/23",
  },
  {
    id: "contrib13",
    project: "SafeTrust",
    repo: "safetrustcr/backend-SafeTrust",
    title: {
      en: "Implement email verification and validation",
      es: "Implementar verificación y validación de correo electrónico",
    },
    description: {
      en: "Implemented a full email verification system with code generation, validation, expiration, and auditing. Included rate limiting, structured error handling, and database logging for improved security and traceability.",
      es: "Se implementó un sistema completo de verificación de correo electrónico con generación y validación de códigos, expiración, y registro de auditoría. Se incluyó limitación de tasa, manejo estructurado de errores y registro en base de datos para mejorar seguridad y trazabilidad.",
    },
    prNumber: "#36",
    status: "merged",
    url: "https://github.com/safetrustcr/backend-SafeTrust/pull/36",
  },
  {
    id: "contrib14",
    project: "SafeTrust",
    repo: "safetrustcr/frontend-SafeTrust",
    title: {
      en: "Verification email code mutation",
      es: "Mutación del código de verificación por correo",
    },
    description: {
      en: "Added verification logic to the email verification page, with proper success/error handling and improved UI feedback for expired or invalid codes.",
      es: "Se agregó la lógica de verificación a la página de verificación de correo, con manejo adecuado de éxito/errores y mejoras en la interfaz para mostrar mensajes claros ante códigos expirados o inválidos.",
    },
    prNumber: "#103",
    status: "merged",
    url: "https://github.com/safetrustcr/frontend-SafeTrust/pull/103",
  },
  {
    id: "contrib15",
    project: "Semaphore-Stellar Contracts",
    repo: "ZencypherSolutions/semaphore-stellar-contracts",
    title: {
      en: "Contribute to Semaphore-Stellar integration",
      es: "Contribución a la integración de Semaphore-Stellar",
    },
    description: {
      en: "Contributed to the integration of Semaphore’s privacy-focused protocol with Stellar, enabling anonymous signaling and voting through smart contracts in a non-EVM-compatible environment.",
      es: "Se contribuyó a la integración del protocolo enfocado en privacidad de Semaphore con Stellar, permitiendo señalización y votación anónima mediante contratos inteligentes en un entorno no compatible con EVM.",
    },
    prNumber: "#27",
    status: "merged",
    url: "https://github.com/ZencypherSolutions/semaphore-stellar-contracts/pull/27",
  },
  {
    id: "contrib16",
    project: "SafeSwap",
    repo: "KaizeNodeLabs/SafeSwap",
    title: {
      en: "Add Breadcrumb Navigation to Marketplace",
      es: "Agregar navegación breadcrumb al Marketplace",
    },
    description: {
      en: "Implemented a breadcrumb navigation component for the Marketplace to improve page structure and user navigation. Styled the component to align with the product design system.",
      es: "Se implementó un componente de navegación breadcrumb para el Marketplace para mejorar la estructura de la página y la navegación del usuario. El componente fue estilizado según el sistema de diseño del producto.",
    },
    prNumber: "#74",
    status: "merged",
    url: "https://github.com/KaizeNodeLabs/SafeSwap/pull/74",
  },
  {
    id: "contrib17",
    project: "SafeTrust",
    repo: "safetrustcr/backend-SafeTrust",
    title: {
      en: "Add seed for apartment_images table",
      es: "Agregar seed para la tabla apartment_images",
    },
    description: {
      en: "Created a complete seed script for the apartment_images table, generating realistic test data linked to apartment IDs, with UUIDs and unique image URLs for development and testing purposes.",
      es: "Se creó un script de seed completo para la tabla apartment_images, generando datos de prueba realistas vinculados a IDs de apartamentos, con UUIDs e imágenes únicas para facilitar el desarrollo y testing.",
    },
    prNumber: "#62",
    status: "merged",
    url: "https://github.com/safetrustcr/backend-SafeTrust/pull/62",
  },
  {
    id: "contrib18",
    project: "ByteBeasts",
    repo: "ByteBuildersLabs/ByteBeastsFrontend",
    title: {
      en: "Animate beasts in the town scene",
      es: "Animar bestias en la escena del pueblo",
    },
    description: {
      en: "Animated beasts in the town scene by splitting sprite assets into parts, organizing them by type, and applying Y and Z-axis transformations to simulate breathing and wing flapping. Integrated animations while preserving pixel art style.",
      es: "Se animaron las bestias en la escena del pueblo separando los sprites en partes, organizándolos por tipo y aplicando transformaciones en los ejes Y y Z para simular respiración y aleteo. Las animaciones se integraron respetando el estilo pixel art.",
    },
    prNumber: "#108",
    status: "merged",
    url: "https://github.com/ByteBuildersLabs/ByteBeastsFrontend/pull/108",
  },
  {
    id: "contrib19",
    project: "ByteBeasts",
    repo: "ByteBuildersLabs/ByteBeastsFrontend",
    title: {
      en: "Animate house chimneys",
      es: "Animar chimeneas de las casas",
    },
    description: {
      en: "Created animated smoke assets and applied them to chimneys in the town scene using Unity. Used Sprite Editor to slice the animation and fine-tuned parameters for smooth smoke effects in pixel art style.",
      es: "Se crearon assets de humo animado y se aplicaron a las chimeneas en la escena del pueblo usando Unity. Se utilizó el Sprite Editor para dividir la animación y se ajustaron parámetros para un efecto de humo fluido en estilo pixel art.",
    },
    prNumber: "#101",
    status: "merged",
    url: "https://github.com/ByteBuildersLabs/ByteBeastsFrontend/pull/101",
  },
  {
    id: "contrib20",
    project: "StarShop",
    repo: "StarShopCr/StarShop-Contracts",
    title: {
      en: "Add README for NFT contract implementation",
      es: "Agregar README para implementación de contrato NFT",
    },
    description: {
      en: "Documented the full implementation of an NFT contract on Stellar (Soroban SDK), including deployment steps, test coverage for core functions, access control validation, and gas optimization.",
      es: "Se documentó la implementación completa de un contrato NFT en Stellar (Soroban SDK), incluyendo pasos de despliegue, pruebas unitarias de funciones clave, validación de control de acceso y optimización de gas.",
    },
    prNumber: "#49",
    status: "merged",
    url: "https://github.com/StarShopCr/StarShop-Contracts/pull/49",
  },
  {
    id: "contrib21",
    project: "StarkFantasy-League",
    repo: "StarkFantasy-League/frontend",
    title: {
      en: "Add side menu",
      es: "Agregar menú lateral",
    },
    description: {
      en: "Enhanced the Sidebar component by improving alignment, adding separator lines, updating icon sizes, refining hover effects, and unifying borders for a more consistent and maintainable UI.",
      es: "Se mejoró el componente Sidebar ajustando alineaciones, añadiendo separadores, actualizando tamaños de íconos, refinando efectos hover y unificando bordes para una UI más consistente y mantenible.",
    },
    prNumber: "#53",
    status: "merged",
    url: "https://github.com/StarkFantasy-League/frontend/pull/53",
  },
  {
    id: "contrib22",
    project: "SkillCert",
    repo: "SkillCert/frontend",
    title: {
      en: "Add Courses Section",
      es: "Agregar sección de cursos",
    },
    description: {
      en: "Implemented a modular Courses section with responsive layout, reusable components, and mock data support. Included fallback image and unified design for better maintainability.",
      es: "Se implementó una sección modular de Cursos con diseño responsivo, componentes reutilizables y soporte de datos simulados. Se incluyó una imagen por defecto y diseño unificado para mejor mantenibilidad.",
    },
    prNumber: "#19",
    status: "merged",
    url: "https://github.com/SkillCert/frontend/pull/19",
  },
  
]
