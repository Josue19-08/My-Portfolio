import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { LanguageProvider } from "@/components/language/language-provider"

// Fuente para títulos y encabezados
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
})

// Fuente para texto regular
const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Josué Araya | Software Developer",
  description: "Portfolio personal de Josué Araya, Software Developer",
  generator: "v0.dev",
  icons: {
    icon: "/images/logo.png",            
    shortcut: "/images/logo.png",       
    apple: "/images/logo.png",           
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${roboto.variable}`}
    >
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'