export type Contribution = {
  id: string
  project: string // No se traduce el nombre del proyecto
  repo: string // No se traduce el nombre del repositorio
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
    project: "React",
    repo: "facebook/react",
    title: {
      en: "Fix bug in useEffect hook",
      es: "Corrección de error en el hook useEffect",
    },
    description: {
      en: "Fixed a memory leak issue in the useEffect cleanup function when components unmount during concurrent mode rendering",
      es: "Solucionado un problema de fuga de memoria en la función de limpieza de useEffect cuando los componentes se desmontan durante el renderizado en modo concurrente",
    },
    prNumber: "#1234",
    status: "merged",
    url: "https://github.com/facebook/react/pull/1234",
  },
  {
    id: "contrib2",
    project: "Next.js",
    repo: "vercel/next.js",
    title: {
      en: "Add new API route feature",
      es: "Añadir nueva funcionalidad de ruta API",
    },
    description: {
      en: "Implemented a new feature for API routes to support better error handling and response formatting with middleware support",
      es: "Implementada una nueva característica para rutas API para mejorar el manejo de errores y el formato de respuesta con soporte para middleware",
    },
    prNumber: "#5678",
    status: "open",
    url: "https://github.com/vercel/next.js/pull/5678",
  },
  {
    id: "contrib3",
    project: "Tailwind CSS",
    repo: "tailwindlabs/tailwindcss",
    title: {
      en: "Improve documentation",
      es: "Mejorar documentación",
    },
    description: {
      en: "Updated documentation for new color palette features and added examples for custom configuration with dark mode support",
      es: "Actualizada la documentación para las nuevas características de paleta de colores y añadidos ejemplos para configuración personalizada con soporte para modo oscuro",
    },
    prNumber: "#9012",
    status: "merged",
    url: "https://github.com/tailwindlabs/tailwindcss/pull/9012",
  },
  {
    id: "contrib4",
    project: "TypeScript",
    repo: "microsoft/typescript",
    title: {
      en: "Enhance type inference for optional chaining",
      es: "Mejorar inferencia de tipos para encadenamiento opcional",
    },
    description: {
      en: "Enhanced type inference for optional chaining with nullish coalescing to provide better type safety and developer experience",
      es: "Mejorada la inferencia de tipos para el encadenamiento opcional con coalescencia nula para proporcionar mejor seguridad de tipos y experiencia de desarrollador",
    },
    prNumber: "#3456",
    status: "merged",
    url: "https://github.com/microsoft/typescript/pull/3456",
  },
  {
    id: "contrib5",
    project: "Vite",
    repo: "vitejs/vite",
    title: {
      en: "Fix HMR for CSS modules",
      es: "Corregir HMR para módulos CSS",
    },
    description: {
      en: "Fixed hot module replacement for CSS modules when using PostCSS plugins and improved reload performance",
      es: "Corregido el reemplazo de módulos en caliente para módulos CSS cuando se utilizan plugins de PostCSS y mejorado el rendimiento de recarga",
    },
    prNumber: "#7890",
    status: "merged",
    url: "https://github.com/vitejs/vite/pull/7890",
  },
  {
    id: "contrib6",
    project: "ESLint",
    repo: "eslint/eslint",
    title: {
      en: "Add new rule for React hooks",
      es: "Añadir nueva regla para hooks de React",
    },
    description: {
      en: "Added a new rule to enforce proper dependency arrays in useCallback and useMemo hooks to prevent stale closures",
      es: "Añadida una nueva regla para forzar arrays de dependencias adecuados en los hooks useCallback y useMemo para prevenir closures obsoletos",
    },
    prNumber: "#2345",
    status: "open",
    url: "https://github.com/eslint/eslint/pull/2345",
  },
  {
    id: "contrib7",
    project: "Prisma",
    repo: "prisma/prisma",
    title: {
      en: "Improve error messages for migrations",
      es: "Mejorar mensajes de error para migraciones",
    },
    description: {
      en: "Improved error messages for database migrations to provide more context and actionable steps for resolving common issues",
      es: "Mejorados los mensajes de error para migraciones de bases de datos para proporcionar más contexto y pasos accionables para resolver problemas comunes",
    },
    prNumber: "#6789",
    status: "merged",
    url: "https://github.com/prisma/prisma/pull/6789",
  },
  {
    id: "contrib8",
    project: "Framer Motion",
    repo: "framer/motion",
    title: {
      en: "Add new transition type",
      es: "Añadir nuevo tipo de transición",
    },
    description: {
      en: "Added a new spring transition type with customizable physics parameters for more natural animations",
      es: "Añadido un nuevo tipo de transición de resorte con parámetros físicos personalizables para animaciones más naturales",
    },
    prNumber: "#4567",
    status: "closed",
    url: "https://github.com/framer/motion/pull/4567",
  },
  {
    id: "contrib9",
    project: "Webpack",
    repo: "webpack/webpack",
    title: {
      en: "Optimize chunk splitting algorithm",
      es: "Optimizar algoritmo de división de chunks",
    },
    description: {
      en: "Optimized the chunk splitting algorithm to reduce bundle sizes and improve loading performance for large applications",
      es: "Optimizado el algoritmo de división de chunks para reducir tamaños de paquetes y mejorar el rendimiento de carga para aplicaciones grandes",
    },
    prNumber: "#8901",
    status: "open",
    url: "https://github.com/webpack/webpack/pull/8901",
  },
]
