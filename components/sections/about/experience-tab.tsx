"use client"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"
import { Badge } from "@/components/ui/badge"

export function ExperienceTab() {
  const { language } = useLanguage()

  // Fallback seguro si experience no está definido en el tipo inferido aún
  const experience = (myInformation as any).experience || []

  return (
    <div>
      <h3 className="text-2xl font-bold mb-8 text-white/90">
        {language === "en" ? "Work Experience" : "Experiencia Laboral"}
      </h3>

      <div className="space-y-10">
        {experience.map((item: any, index: number) => (
          <div key={index} className="flex flex-col border-b border-white/5 pb-8 last:border-0 last:pb-0">
            <div className="mb-2">
              <h4 className="text-xl font-bold text-white/90">{item.position[language]}</h4>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1">
                <span className="text-white/80 font-medium">{item.company[language]}</span>
                <span className="text-sm text-blue-400/80 mt-1 sm:mt-0 font-medium bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                  {item.period[language]}
                </span>
              </div>
            </div>
            
            <p className="text-white/60 mb-5 leading-relaxed mt-3">
              {item.description[language]}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.technologies.map((tech: string) => (
                <Badge key={tech} variant="outline" className="text-xs bg-white/5 text-white/80 border-white/10 hover:bg-white/10">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
