"use client"
import { useLanguage } from "@/components/language/language-provider"
import { myInformation } from "@/data/my-information"
import { Award, CheckCircle2 } from "lucide-react"

export function CertificationsTab() {
  const { language } = useLanguage()

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
          <Award className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-white/90">
          {language === "en" ? "Certifications & Achievements" : "Certificaciones y Logros"}
        </h3>
      </div>

      <div className="space-y-4">
        {myInformation.certifications.map((cert: any, index: number) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-white/90 leading-tight mb-1">{cert.name[language]}</h4>
              <div className="text-white/60 text-sm">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}