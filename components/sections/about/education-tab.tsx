"use client"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"
import { GraduationCap } from "lucide-react"

export function EducationTab() {
  const { language } = useLanguage()

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-white/90">
          {language === "en" ? "Education & Training" : "Educación y Formación"}
        </h3>
      </div>

      <div className="space-y-6">
        {myInformation.education.map((item: any, index: number) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-500/50 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-white/90">{item.degree[language]}</h4>
              <div className="text-cyan-400/80 mb-2 font-medium">{item.institution[language]}</div>
              <p className="text-white/60 text-sm leading-relaxed">{item.description[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}