"use client"
import { AnimatePresence } from "framer-motion"
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, GraduationCap, Award, Heart, Briefcase } from "lucide-react"
import { useLanguage } from "@/components/language/language-provider"
import { BioTab } from "./bio-tab"
import { EducationTab } from "./education-tab"
import { ExperienceTab } from "./experience-tab"
import { CertificationsTab } from "./certifications-tab"
import { InterestsTab } from "./interests-tab"

export function AboutTabs({ activeTab }: { activeTab: string }) {
  const { language } = useLanguage()
  return (
    <>
      <TabsList className="grid grid-cols-5 mb-8">
        <TabsTrigger value="bio" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{language === "en" ? "Biography" : "Biografía"}</span>
        </TabsTrigger>
        <TabsTrigger value="experience" className="flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          <span className="hidden sm:inline">{language === "en" ? "Experience" : "Experiencia"}</span>
        </TabsTrigger>
        <TabsTrigger value="education" className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          <span className="hidden sm:inline">{language === "en" ? "Education" : "Educación"}</span>
        </TabsTrigger>
        <TabsTrigger value="certifications" className="flex items-center gap-2">
          <Award className="h-4 w-4" />
          <span className="hidden sm:inline">{language === "en" ? "Certifications" : "Certificaciones"}</span>
        </TabsTrigger>
        <TabsTrigger value="interests" className="flex items-center gap-2">
          <Heart className="h-4 w-4" />
          <span className="hidden sm:inline">{language === "en" ? "Interests" : "Intereses"}</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="bio" className="mt-0"><BioTab /></TabsContent>
      <TabsContent value="experience" className="mt-0"><ExperienceTab /></TabsContent>
      <TabsContent value="education" className="mt-0"><EducationTab /></TabsContent>
      <TabsContent value="certifications" className="mt-0"><CertificationsTab /></TabsContent>
      <TabsContent value="interests" className="mt-0"><InterestsTab /></TabsContent>

    </>
  )
}