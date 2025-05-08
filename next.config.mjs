let userConfig = undefined
try {
  // Intenta importar como ESM
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // Fallback CJS
    userConfig = await import('./v0-user-next.config')
  } catch (_) {
    // Ignora error si no existe ningún archivo
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/My-Portfolio',
  assetPrefix: '/My-Portfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

// 🔒 Claves que no deben ser sobreescritas
const protectedKeys = ['output', 'basePath', 'assetPrefix', 'trailingSlash']

// Merge dinámico con protección
if (userConfig) {
  const config = userConfig.default || userConfig
  for (const key in config) {
    if (protectedKeys.includes(key)) continue

    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
