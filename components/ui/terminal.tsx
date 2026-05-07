"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language/language-provider"

interface TerminalProps {
  onComplete?: () => void
}

export function Terminal({ onComplete }: TerminalProps) {
  const { t, language } = useLanguage()

  const fullText = `> ${t("home.terminal.init")}
> ${t("home.terminal.loading")}
> ${t("home.terminal.role")}
> ${t("home.terminal.status")}

${t("home.terminal.body")}

${t("home.terminal.cta")}`

  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    setDisplayedText("")
    setIsTyping(true)
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(interval)
        setIsTyping(false)
        onComplete?.()
      }
    }, 25)
    return () => clearInterval(interval)
  }, [language])

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs font-mono text-gray-400">josue@portfolio:~</div>
      </div>

      {/* Body */}
      <div className="p-6 font-mono text-sm md:text-base text-gray-300 min-h-[250px]">
        <div className="whitespace-pre-wrap text-left leading-relaxed">
          {displayedText}
          {isTyping && (
            <span className="animate-pulse inline-block w-2 h-4 bg-white/70 ml-1 translate-y-1" />
          )}
        </div>
      </div>
    </div>
  )
}
